import React from 'react';
interface HomePageProps {
  contentName: string;
}
const Home: React.FC<HomePageProps> = ({ contentName }) => {
  return <div>This is {contentName} !</div>;
};
export default Home;
