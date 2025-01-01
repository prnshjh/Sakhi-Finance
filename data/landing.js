import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "24/7",
    label: "Mentorship Support",
  },
  {
    value: "₹10",
    label: "Micro-Investment Starting",
  },
  {
    value: "5+",
    label: "Local Languages Supported",
  },
  {
    value: "50+",
    label: "NGO Schemes Integrated",
  },
];


// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// features Data
export const testimonialsData = [
  {
    name: "NGO & Schemes",
    // role: "Small Business Owner",
    image: "https://img.icons8.com/color/48/jordanian-mukhabarat.png",
    quote:
      "The NGO feature connects users to relevant schemes and initiatives, providing additional support and resources to enhance financial empowerment.",
  },
  {
    name: "Learn Finance",
    // role: "Freelancer",
    image: "https://img.icons8.com/parakeet/48/investment.png",
    quote:
      "The Financial Literacy feature offers personalized lessons in local languages, using simple examples, stories, and videos to make learning about money easy and practical.",
  },
  {
    name: "Investment Support",
    // role: "Financial Advisor",
    image: "https://img.icons8.com/color/48/money-box--v1.png",
    quote:
      "The Investment Support feature provides safe, micro-investment options starting at ₹10, helping users grow their savings with confidence and ease.",
  },
];
