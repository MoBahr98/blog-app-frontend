import {
  LuLayoutDashboard,
  LuGalleryVerticalEnd,
  LuMessageSquareQuote,
  LuLayoutTemplate,
  LuTag,
  LuCpu,
  LuFlaskConical,
  LuGlobe,
  LuFactory,
  LuLeaf,
  LuChartLine,
  LuSquarePen,
  LuUsers,
  LuBookOpen,
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/admin/dashboard",
  },

  {
    id: "02",
    label: "Blog Posts",
    icon: LuGalleryVerticalEnd,
    path: "/admin/posts",
  },

  {
    id: "03",
    label: "Comments",
    icon: LuMessageSquareQuote,
    path: "/admin/comments",
  },
];

export const BLOG_NAVBAR_DATA = [
  {
    id: "01",
    label: "Home",
    icon: LuLayoutTemplate,
    path: "/",
  },
  {
    id: "02",
    label: "Technology",
    icon: LuCpu,
    path: "/tag/technology",
  },
  {
    id: "03",
    label: "Science",
    icon: LuFlaskConical,
    path: "/tag/science",
  },
  {
    id: "04",
    label: "Environment",
    icon: LuLeaf,
    path: "/tag/environment",
  },
  {
    id: "05",
    label: "Economy",
    icon: LuChartLine,
    path: "/tag/economy",
  },
  {
    id: "06",
    label: "Politics",
    icon: LuGlobe,
    path: "/tag/politics",
  },
  {
    id: "07",
    label: "Entertainment",
    icon: LuUsers,
    path: "/tag/entertainment",
  },
];