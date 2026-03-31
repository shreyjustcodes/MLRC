import { ResourceCategory } from "@/lib/types";

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Foundational Math",
    links: [
      {
        label: "3Blue1Brown - Essence of Linear Algebra",
        href: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
      },
      {
        label: "Khan Academy - Differential Calculus",
        href: "https://www.khanacademy.org/math/differential-calculus",
      },
    ],
  },
  {
    title: "Free Alternatives to Premium Courses",
    links: [
      {
        label: "Stanford CS229 (Machine Learning)",
        href: "https://www.youtube.com/playlist?list=PLA89DCFA6ADACE599",
      },
      {
        label: "fast.ai Practical Deep Learning",
        href: "https://course.fast.ai/",
      },
    ],
  },
  {
    title: "Open Source Docs and Repositories",
    links: [
      {
        label: "scikit-learn Documentation",
        href: "https://scikit-learn.org/stable/",
      },
      {
        label: "PyTorch Tutorials",
        href: "https://pytorch.org/tutorials/",
      },
      {
        label: "Hugging Face Transformers",
        href: "https://github.com/huggingface/transformers",
      },
    ],
  },
  {
    title: "Financial Aid and Accessibility",
    links: [
      {
        label: "Coursera Financial Aid",
        href: "https://www.coursera.support/s/article/209819033-Financial-Aid-requests",
      },
      {
        label: "edX Financial Assistance",
        href: "https://www.edx.org/resources/how-to-pay-for-edx-courses",
      },
    ],
  },
];
