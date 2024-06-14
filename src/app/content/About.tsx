import React from 'react';
interface AboutPageProps {
  contentName: string;
}
const About: React.FC<AboutPageProps> = ({ contentName }) => {
  return <div>This is {contentName} !</div>;
};
export default About;
