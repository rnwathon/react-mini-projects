import clsx from 'clsx';
import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import ProjectCard from '../../Components/ProjectCard';
// === IMAGES
import project1Img from '../../Assets/Images/project-1.png';
import project2Img from '../../Assets/Images/project-2.png';
import project3Img from '../../Assets/Images/project-3.png';
import project4Img from '../../Assets/Images/project-4.png';
import project5Img from '../../Assets/Images/project-5.png';
import project6Img from '../../Assets/Images/project-6.png';
import project7Img from '../../Assets/Images/project-7.png';
import project8Img from '../../Assets/Images/project-8.png';
import project9Img from '../../Assets/Images/project-9.png';
import project1WebP from '../../Assets/Images/project-1.webp';
import project2WebP from '../../Assets/Images/project-2.webp';
import project3WebP from '../../Assets/Images/project-3.webp';
import project4WebP from '../../Assets/Images/project-4.webp';
import project5WebP from '../../Assets/Images/project-5.webp';
import project6WebP from '../../Assets/Images/project-6.webp';
import project7WebP from '../../Assets/Images/project-7.webp';
import project8WebP from '../../Assets/Images/project-8.webp';
import project9WebP from '../../Assets/Images/project-9.webp';

const projects = [
  {
    title: 'Person List',
    link: '/1-PersonList',
    image: { src: project1WebP, fallback: project1Img },
  },
  {
    title: 'Random Quote',
    link: '/2-RandomQuote',
    image: { src: project2WebP, fallback: project2Img },
  },
  {
    title: 'Carousel',
    link: '/3-Carousel',
    image: { src: project3WebP, fallback: project3Img },
  },
  {
    title: 'FAQ (Accordion)',
    link: '/4-FAQ',
    image: { src: project4WebP, fallback: project4Img },
  },
  {
    title: 'Infinite Scroll',
    link: '/5-InfiniteScroll',
    image: { src: project5WebP, fallback: project5Img },
  },
  {
    title: 'Color Generator',
    link: '/6-ColorGenerator',
    image: { src: project6WebP, fallback: project6Img },
  },
  {
    title: 'To-do List',
    link: '/7-TodoList',
    image: { src: project7WebP, fallback: project7Img },
  },
  {
    title: 'Pokedex',
    link: '/8-Pokedex',
    image: { src: project8WebP, fallback: project8Img },
  },
  {
    title: 'Trivia Quiz',
    link: '/9-TriviaQuiz',
    image: { src: project9WebP, fallback: project9Img },
  },
];

function Home() {
  const styles = {
    wrapper: clsx(['flex flex-col justify-between', 'min-h-screen', 'bg-slate-50']),
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="container p-4 mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={`project-${idx}`}
            title={project.title}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
