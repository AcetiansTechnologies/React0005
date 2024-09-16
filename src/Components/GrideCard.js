import React from 'react';
import CourseCard from './CourseCard';
import cardImage from '../images/ai-course.jpeg';
import { useSelector } from 'react-redux';

const courses = [
  {
    title: "Getting Started with Accelerated Computing with CUDA C or C++",
    desc: "Learn the fundamentals of CUDA programming.",
    duration: 8,
    price: 90,
    technologies: ["CUDA C++", "nvcc", "Nsight Systems"],
    certificate: true,
    cardImage:cardImage,
  },
  {
    title: "Scaling GPU-Accelerated Applications with the C++ Standard Library",
    desc: "Explore how to scale applications using C++ and GPUs.",
    duration: 2,
    price: 30,
    technologies: ["C++", "NVIDIA HPC SDK", "MPI"],
    certificate: false,
    cardImage:cardImage,
  },
  {
    title: "GPU Acceleration with the C++ Standard Library",
    desc: "Understand GPU acceleration in the C++ Standard Library.",
    duration: 2,
    price: 30,
    technologies: ["C++", "NVIDIA HPC SDK"],
    certificate: false,
    cardImage:cardImage,
  },
  {
    title: "Getting Started with Accelerated Computing with CUDA C or C++",
    desc: "Learn the fundamentals of CUDA programming.",
    duration: 8,
    price: 90,
    technologies: ["CUDA C++", "nvcc", "Nsight Systems"],
    certificate: true,
    cardImage:cardImage,
  },
  {
    title: "Scaling GPU-Accelerated Applications with the C++ Standard Library",
    desc: "Explore how to scale applications using C++ and GPUs.",
    duration: 2,
    price: 30,
    technologies: ["C++", "NVIDIA HPC SDK", "MPI"],
    certificate: false,
    cardImage:cardImage,
  },
  {
    title: "GPU Acceleration with the C++ Standard Library",
    desc: "Understand GPU acceleration in the C++ Standard Library.",
    duration: 2,
    price: 30,
    technologies: ["C++", "NVIDIA HPC SDK"],
    certificate: false,
    cardImage:cardImage,
  },
  {
    title: "Getting Started with Accelerated Computing with CUDA C or C++",
    desc: "Learn the fundamentals of CUDA programming.",
    duration: 8,
    price: 90,
    technologies: ["CUDA C++", "nvcc", "Nsight Systems"],
    certificate: true,
    cardImage:cardImage,
  },
  {
    title: "Scaling GPU-Accelerated Applications with the C++ Standard Library",
    desc: "Explore how to scale applications using C++ and GPUs.",
    duration: 2,
    price: 30,
    technologies: ["C++", "NVIDIA HPC SDK", "MPI"],
    certificate: false,
    cardImage:cardImage,
  },
  {
    title: "GPU Acceleration with the C++ Standard Library",
    desc: "Understand GPU acceleration in the C++ Standard Library.",
    duration: 2,
    price: 30,
    technologies: ["C++", "NVIDIA HPC SDK"],
    certificate: false,
    cardImage:cardImage,
  }
];

const GrideCard = () => {
  const coursesNew= useSelector((state)=> state.auth.courses);
  return (
    <div className="grid-container">
      {coursesNew.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          desc={course.desc}
          duration={course.duration}
          price={course.price}
          technologies={course.technologies}
          certificate={course.certificate}
          cardImage={course.thumbnail_image}
        />
      ))}
    </div>
  );
}

export default GrideCard;
