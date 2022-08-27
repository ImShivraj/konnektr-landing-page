import { BsTwitter, BsFileCodeFill } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSocialDistance } from "react-icons/md";
import { Tooltip } from "@mantine/core";

export const headerLinks = [
  {
    link: "/",
    label: "Home",
    id: "home",
    type: "route",
  },
  {
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    label: "About",
    id: "about",
    type: "link",
  },
  {
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    label: "Team",
    id: "team",
    type: "link",
  },
  {
    link: "https://twitter.com/konnektrhq",
    label: (
      <Tooltip label="Twitter" withArrow offset={15}>
        <div
          className="nav_link_box_shadow_blue transition-all rounded-full"
          style={{ padding: "10px" }}
        >
          <BsTwitter size={22.5} />
        </div>
      </Tooltip>
    ),
    id: "twitter",
    type: "link",
  },
  {
    link: "https://discord.com/invite/vChz9grSJe",
    label: (
      <Tooltip label="Discord" withArrow offset={15}>
        <div
          className="nav_link_box_shadow_purple transition-all rounded-full"
          style={{ padding: "10px" }}
        >
          <FaDiscord size={22.5} />
        </div>
      </Tooltip>
    ),
    id: "discord",
    type: "link",
  },
];

export const categories = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
  { value: "typescript", label: "Typescript" },
  { value: "mongodb", label: "Mongo DB" },
  { value: "node", label: "Node.js" },
  { value: "web design", label: "Web Design" },
  { value: "flutter", label: "flutter" },
  { value: "react native", label: "React native" },
  { value: "rust", label: "Rust" },
  { value: "python", label: "Python" },
  { value: "julia", label: "Julia" },
  { value: "ruby", label: "Ruby" },
  { value: "carbon", label: "Carbon" },
  { value: "c++", label: "C++" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "docker", label: "Docker" },
  { value: "three.js", label: "Three.js" },
  { value: "spline", label: "spline" },
  { value: "blockchain", label: "Blockchain" },
  { value: "cryptocurrency", label: "Cryptocurrency" },
  { value: "ethereum", label: "Ethereum" },
  { value: "bitcoin", label: "Bitcoin" },
  { value: "polkadot", label: "Polkadot" },
  { value: "web3", label: "web3" },
  { value: "dao", label: "DAO" },
  { value: "dapps", label: "DAPPS" },
  { value: "cloudinary", label: "Cloudinary" },
  { value: "graphql", label: "GraphQL" },
  { value: "git", label: "Git" },
  { value: "electron.js", label: "Electron.js" },
  { value: "electron.js", label: "Electron.js" },
  { value: "ui/ux", label: "UI/UX" },
  { value: "testing", label: "testing" },
  { value: "framer-motion", label: "framer-motion" },
  { value: "kotlin", label: "kotlin" },
  { value: "jetpack compose", label: "Jetpack Compose" },
  { value: "aws", label: "AWS" },
  { value: "google cloud", label: "Google Cloud" },
  { value: "microsoft azure", label: "Microsoft Azure" },
  { value: "machine learning", label: "Machine Learning" },
  { value: "artificial intelligence", label: "Artificial Intelligence" },
  { value: "ar/vr", label: "AR/VR" },
  { value: "ar/vr", label: "AR/VR" },
];

export const drawerLinks = [
  { label: "Home", link: "/", Icon: AiFillHome, type: "route" },
  {
    label: "About",
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    Icon: MdOutlineSocialDistance,
    type: "link",
  },
  {
    label: "Team",
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    Icon: BsFileCodeFill,
    type: "link",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/konnektrhq",
    Icon: BsTwitter,
    type: "link",
  },
  {
    label: "Discord",
    link: "https://discord.com/invite/vChz9grSJe",
    Icon: FaDiscord,
    type: "link"
  },
];

export const earnLinks = [
  {
    link: "",
    label: "Join A Platform",
    iconClass: "fa-user-plus",
  },
  {
    link: "",
    label: "Engage On Socials",
    iconClass: "fa-twitter",
  },
  {
    link: "",
    label: "Join NFT Projects",
    iconClass: "fa-cubes",
  },
  {
    link: "",
    label: "Play A Game",
    iconClass: "fa-gamepad",
  },
  {
    link: "",
    label: "Take A Quiz",
    iconClass: "fa-puzzle-piece",
  },
  {
    link: "",
    label: "Attend An Event",
    iconClass: "fa-ticket",
  },
];
