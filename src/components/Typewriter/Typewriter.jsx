import './Typewriter.scss'
import Typewriter from 'typewriter-effect';

export const Typewriters = () => {
  return (
    <>
        <Typewriter options={{ autoStart: true, loop: true, }}
                onInit={(typewriter) => {
                    typewriter.start()
                    .typeString("Welcome My Portfolio.").pauseFor(3000).deleteAll()
                    .typeString("HTML/CSS.").pauseFor(3000).deleteAll()
                    .start()
                }}
            />
    </>
  )
}
