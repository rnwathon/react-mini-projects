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

const projects = [
  { title: 'Person List', image: project1Img, link: '/1-PersonList' },
  { title: 'Random Quote', image: project2Img, link: '/2-RandomQuote' },
  { title: 'Carousel', image: project3Img, link: '/3-Carousel' },
  { title: 'FAQ (Accordion)', image: project4Img, link: '/4-FAQ' },
  { title: 'Infinite Scroll', image: project5Img, link: '/5-InfiniteScroll' },
  { title: 'Color Generator', image: project6Img, link: '/6-ColorGenerator' },
  { title: 'To-do List', image: project7Img, link: '/7-TodoList' },
  { title: 'Pokedex', image: project8Img, link: '/8-Pokedex' },
  { title: 'Trivia Quiz', image: project9Img, link: '/9-TriviaQuiz' },
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
