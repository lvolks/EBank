import { CircleDollarSign } from "lucide-react";
import { SquareUserRound } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { HandCoins } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Wallet } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { Gift } from "lucide-react";
import { Clock} from "lucide-react";

import user2 from "../assets/profile-pictures/user1.jpg";
import user1 from "../assets/profile-pictures/user2.jpg";
import user6 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user3 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Benefits", href: "#" },
  { label: "Life Insurance", href: "#" },
  { label: "Customers", href: "#" },
];

export const customers = [
  {
    user: "Emily Dawson",
    company: "Stellar Solutions",
    image: user1,
    text: "I've been banking with EBank for years now, and I couldn't be happier with their services. From seamless online banking to friendly customer support, they've exceeded my expectations every step of the way.",
  },
  {
    user: "James Patel",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "EBank made managing my finances a breeze. Their mobile app is user-friendly, and I love the convenience of their virtual card feature. Highly recommend!",
  },
  {
    user: "Sophie Reynolds",
    company: "Quantum Innovations",
    image: user3,
    text: "I recently switched to EBank, and I'm impressed with their commitment to security. Their advanced security measures give me peace of mind while banking online. Definitely a bank you can trust.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Chang",
    company: "Visionary Creations",
    image: user5,
    text: "EBank's loan options helped me finance my dream home hassle-free. The application process was smooth, and their competitive rates saved me money in the long run. Thank you, EBank!",
  },
  {
    user: "Marco Ramirez",
    company: "Synergy Systems",
    image: user6,
    text: "As a small business owner, I rely on EBank for all my banking needs. Their business banking solutions are tailored to my needs, and their customer service team is always there to help. I couldn't ask for a better banking partner.",
  },
];

export const features = [
  {
    icon: <CircleDollarSign />,
    text: "PIX",
    description:
      "Experience instant, seamless transactions with PIX, revolutionizing the way you send and receive money.",
  },
  {
    icon: <Fingerprint />,
    text: "Digital Access",
    description:
      "Streamline your banking experience with secure and convenient fingerprint access, putting your finances at your fingertips.",
  },
  {
    icon: <HandCoins />,
    text: "Loans and Financing",
    description:
      "Explore our range of flexible loans and financing options tailored to meet your financial needs, empowering you to achieve your goals.",
  },
  {
    icon: <SquareUserRound />,
    text: "Customer Support",
    description:
      "Our dedicated customer support team is here to assist you every step of the way, ensuring a seamless banking experience whenever you need assistance.",
  },
  {
    icon: <LockKeyhole />,
    text: "Financial Security",
    description:
      "Rest easy knowing your financial assets are safeguarded with our robust security measures, providing you with peace of mind in every transaction.",
  },
  {
    icon: <CreditCard />,
    text: "Virtual Card",
    description:
      "Experience the convenience and security of our virtual card feature, offering a digital alternative for your banking transactions, anytime, anywhere.",
  },
];

export const checklistItems = [
  {
    title: "Points Program",
    description:
      "Earn rewards as you bank with us and redeem points for exciting perks and benefits!",
  },
  {
    title: "Fidelity Program",
    description:
      "Join our loyalty program and unlock exclusive rewards, privileges, and personalized perks as a valued member!",
  },
  {
    title: "Cashback",
    description:
      "Get cashback on your everyday purchases and enjoy money back rewards with every transaction!",
  },
  {
    title: "Discount Coupons in Stores",
    description:
      "Access exclusive discounts at your favorite stores with our coupon program – saving money while you shop!",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    icons: [
        <Wallet />,
        <HeartHandshake />,
        <Gift />,
        <Clock />
    ],
    features: [
      "Leave up to $100,000 to those you love",
      "Protection to help you with accidents",
      "Exclusive EBank benefits with $1,000 draws every day",
      "98% of cases are paid within 2 days",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    icons: [
      <Wallet />,
      <HeartHandshake />,
      <Gift />,
      <Clock />
  ],
    features: [
      "Leave up to $150,000 to those you love",
      "Protection to help you with accidents",
      "Exclusive EBank benefits with $3,000 draws every day",
      "98% of cases are paid within 2 days",
    ],
  },
  {
    title: "Platinum",
    price: "$100",
    icons: [
      <Wallet />,
      <HeartHandshake />,
      <Gift />,
      <Clock />
  ],
    features: [
      "Leave up to $200,000 to those you love",
      "Protection to help you with accidents",
      "Exclusive EBank benefits with $5,000 draws every day",
      "98% of cases are paid within 2 days",
    ],
  },
];

export const aboutLinks = [
  { href: "#", text: "Terms of Use Privacy Policy" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Integrity and Ethics" },
  { href: "#", text: "Privacy" },
  { href: "#", text: "Sustainability" },
];

export const productsLinks = [
  { href: "#", text: "Current Account" },
  { href: "#", text: "Credit Cards" },
  { href: "#", text: "Consortium" },
  { href: "#", text: "Investments" },
  { href: "#", text: "Renegotiation" },
];

export const helpLinks = [
  { href: "#", text: "Help Center" },
  { href: "#", text: "Security" },
  { href: "#", text: "Common Questions" }
];
