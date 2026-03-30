import { Subject } from "@/types";

export const universityCourses: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Object-Oriented Programming",
    department: "Computer Engineering",
    description: "An introduction to OOP concepts using C++ or Java, focusing on inheritance, polymorphism, and encapsulation.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "CS203",
    name: "Data Structures and Algorithms",
    department: "Computer Engineering",
    description: "In-depth study of linear and non-linear data structures, complexity analysis, and optimization techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "CS305",
    name: "Full-Stack Web Development",
    department: "Computer Engineering",
    description: "Comprehensive coverage of modern web technologies including React, Node.js, and database management systems.",
    createdAt: new Date().toISOString(),
  }
];
