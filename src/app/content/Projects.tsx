import React from 'react';
interface ProjectsPageProps {
  contentName: string;
}
const Projetcts: React.FC<ProjectsPageProps> = ({ contentName }) => {
  return <div>This is {contentName} !</div>;
};
export default Projetcts;
