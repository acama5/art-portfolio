import Navbar from "./components/Navbar"
import Drawings from "./sections/Drawings"
import Photos from "./sections/Photos"
import Section from "./components/Section"

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Section id="intro" title="Welcome">
          <p>My Art Portfolio</p>
        </Section>

        <Photos />
        <Drawings />

        <Section id="footer" title="Footer">
          <p>Have a great day!</p>
        </Section>
      </main>
    </>
  )
}