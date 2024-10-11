import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { userSession, connect, getAddress } from "../constants/userSession"
import Avatar from "boring-avatars"
import { useState } from "react";
import axiosRetry from "axios-retry"
import axios from "axios";
import { useEffect } from "react";

axiosRetry(axios,{retries:5,retryDelay:2000})
const Hero = () => {
  const parallaxRef = useRef(null);
  const [userCount, setUserCount] = useState(0);
  const [CommunityScore, setCommunityScores] = useState(0);
  const [GamingScore, setGamingScore] = useState(0);
  const [scoreBoard, setScoreBoard] = useState([]);

  const loadBoard = async()=>{
    await axios({
      method:'GET',
      url:import.meta.env.VITE_API+"/users"
    }).then((res)=>{
      if(res.data.success){
        setUserCount(res.data.user_count)
        setScoreBoard(res.data.users_data)
      }
    })
  }
  const loadUserData = async()=>{
    await axios({
      method:'GET',
      url:import.meta.env.VITE_API+"/users/"+getAddress(),
    }).then((res)=>{
      if(res.data.success){
        setCommunityScores(res.data.community_score)
        setGamingScore(res.data.gaming_score)
      }
    })
  } 

  useEffect(()=>{
    loadBoard()
    if(userSession.isUserSignedIn()){
      loadUserData()
    }
    
  },[])


  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Tap into Community Power with  {` `}
            <span className="inline-block relative">
              Pacstacks{" "}
              {/* <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              /> */}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 ">
            Participate in the Pacstacks Activities and earn points to get a share of the $PCSTX airdrop.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-transparent">
            <div className=" rounded-2xl bg-white/10  backdrop-blur p-4 ">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 p-4 flex-row lg:col-span-2">
                  <div className="inline-flex p-4 rounded-xl bg-white/20 mb-10 justify-between w-auto backdrop-blur">
                    <UserGroupIcon className="text-white h-6 w-6" />
                    <span className="px-4">{userCount} Users</span>
                  </div>
                  <div>
                    <span className="text-4xl font-bold">LeaderBoard</span>
                    <p className="py-6 text-md w-full sm:text-md xs:text-md sm:w-full xs:w-full">Step Into Pacstacks Ecosystem: The Transparent, Decentralized Economy Rewarding Active Users!</p>
                    {userSession.isUserSignedIn() ? null :
                      <div className="mt-10 md:flex">
                        <h1 className="pr-10 text-xl font-bold ">Your Stats</h1>

                        <Button white className="my-6 md:my-0" onClick={() => connect()}>
                          Connect Wallet To Get Started
                        </Button>
                      </div>
                    }

                  </div>
                </div>
                <div className="lg:col-span-1 p-4 col-span-3">
                  <div className="w-full">
                    <p className="text-xs py-4 w-full">NB: make sure to connect the same wallet you connected in the Pacstacks game so your points get calculated</p>
                  </div>
                </div>
              </div>
              <div className="my-6 mx-4 justify-center sm:mx-0">
                <a  className="mx-0 my-6 lg:mx-6">
                  <div className="rounded-xl px-8 py-4 bg-white/10 inline-flex md:max-w-[18rem] relative max-w-full mx-2 my-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 inline-flex">
                        <span className="text-xs ">Your Community Points</span>
                        <ChevronRightIcon className="h-8 w-8 right-4 absolute" />
                      </div>

                      <div className="col-span-3 inline-flex py-2">
                        <h1 className="text-3xl font-bold px-4">
                        {userSession.isUserSignedIn()?
                          (CommunityScore).toLocaleString(undefined, { maximumFractionDigits: 2 }):
                          "_"}
                        </h1>
                        <span className="text-sm mt-4">points</span>
                      </div>
                      <span className="text-xs col-span-3">Earn community points by completing various quests in the Pacstacks Maze</span>
                    </div>


                  </div>
                </a>
                <a  className="mx-0 my-6 lg:mx-6">
                  <div className="rounded-xl px-8 py-4 bg-white/10 inline-flex md:max-w-[18rem] relative max-w-full mx-2 my-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 inline-flex">
                        <span className="text-xs ">Your Gaming Activity Points</span>
                        <ChevronRightIcon className="h-8 w-8 right-4 absolute" />
                      </div>

                      <div className="col-span-3 inline-flex py-2">
                        <h1 className="text-3xl font-bold px-4">
                          {userSession.isUserSignedIn()?
                          (GamingScore).toLocaleString(undefined, { maximumFractionDigits: 2 }):
                          "_"}
                        </h1>
                        <span className="text-sm mt-4">points</span>
                      </div>
                      <span className="text-xs col-span-3">Play the pacstacks game and earn points. Each coint will be equivalent to the ratio of that week.</span>
                    </div>


                  </div>
                </a>

              </div>
              <div className="my-6 mx-1">
                <span className="text-3xl font-bold">Scores</span>
                <div className="grid grid-cols-6 lg:gap-4 gap-2">
                  <span className="w-10  p-4 text-md font-bold">#</span>
                  <span className="w-[24rem] p-4 text-md font-bold col-span-1 lg:col-span-2">User</span>
                  <span className="w-[10rem]  p-4 text-md font-bold invisible lg:visible">Community Points</span>
                  <span className="w-[8rem]  p-4 text-md font-bold invisible lg:visible">Gaming Points</span>
                  <span className="w-[10rem]  p-4 text-md font-bold">Total Points</span>

                  {scoreBoard.slice(0,50).map((item,index)=>(
                    <div className="col-span-6 grid grid-cols-6 gap-4 lg:gap-14 text-sm bg-white/10 py-6 px-2 rounded-2xl">
                    <span className="font-bold col-span-1">{(index+1)}</span>
                    <div className="col-span-1 lg:col-span-2 inline-flex">
                      <div>
                        <Avatar
                          size={30}
                          name={"index: "+index}
                          variant="beam"
                          colors={['#CDECCC', '#EDD269', '#E88460', '#F23460', '#321D2E']}
                        />
                      </div>
                      <div className="self-center px-2 lg:px-4">
                        <span className="font-bold">{item.wallet_id.substring(0,10)+"..."}</span>
                      </div>
                    </div>

                    <span className="invisible lg:visible">
                      {(item.community_score).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                    <span className="invisible lg:visible">
                      {(item.gaming_score).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                    <span className="cols-span-2 lg:cols-span-1">
                      {(item.community_score+item.gaming_score).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  ))}
                </div>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">

          </div>

          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
