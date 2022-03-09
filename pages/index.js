import Hero from '../components/hero/hero'
import Layout from '../components/layout/Layout'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/card/Card'
import SectionBreak from '../components/sectionbreak/SectionBreak'
import ContactForm from '../components/contactform/ContactForm'

function Home(){
  return (
    <Layout>
      
      <title>Wonstin's Page</title>
      <Hero
      heading="sussy children be like you"
      subHeading="obamium"
      buttonText="d;scord"
      bgImage="/randomgif.gif"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
      <Card
        image="/randomgif.gif"
        alt="sussyboy"
        title="sussy children be like you"
        text="ooga booga return to monke"
        buttonText="reeeeeeee"
        buttonLink="sussy"
       />
      </div>
      <SectionBreak />
      <h2>Cool Form</h2>
      <ContactForm />
    </Layout>
  )
}

export default Home