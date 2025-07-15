import React from 'react';

import Hero  from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';


function Home() {
  return (
  <>

  <Hero title={"Welcome to Aarogya Hospital"} imageUrl={"./hero.png"}/>
  <Biography/>
  <Departments/>
  <MessageForm/>

  </>
  )
}

export default Home
