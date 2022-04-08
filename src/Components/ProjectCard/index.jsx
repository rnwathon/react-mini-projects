import * as React from 'react';
import { Link } from 'react-router-dom';
import ImgWithFallback from '../ImgWithFallback';

const ProjectCard = ({ title, image, link = '' }) => (
  <Link to={link}>
    <div className="p-4 bg-white rounded-lg shadow-md transition hover:shadow-xl">
      <ImgWithFallback
        src={image.src}
        fallback={image.fallback}
        alt={title}
        className="mb-2 border rounded-lg h-64 w-full object-cover object-top"
      />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  </Link>
);

export default ProjectCard;
