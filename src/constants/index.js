import {
  discordBlack,
  twitter,
  yourlogo,
} from "../assets";
import {StacksMainnet,StacksTestnet} from "@stacks/network";

export const navigation = [
  {
    id: "0",
    title: "How to buy",
    url: "#how-to-buy",
  },
  {
    id: "1",
    title: "P2P Game",
    url: "https://game.pacstacks.xyz",
  },
  {
    id: "2",
    title: "About",
    url: "#about",
  },
];


export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/invite/v8CSGqHfvx",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/pacstacks",
  },
];



export const appName = "STX-PacMan";
export const appIcon = window.location.origin+"/flaticon.svg";
export const networkString = "mainnet";
export const testnet = new StacksTestnet();
export const mainnet = new StacksMainnet();
export const network = mainnet;
export const isTestnet = network === testnet;
export const isMainnet = network === mainnet;