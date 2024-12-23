import { useTranslation } from 'react-i18next';
import './Typewriter.scss'
import Typewriter from 'typewriter-effect';

export const Typewriters = () => {
  const {t}=useTranslation()
  return (
    <>
      <Typewriter options={{ autoStart: true, loop: true, }}
        onInit={(typewriter) => {
          typewriter
            .start()
            .typeString (t("Welcome")).pauseFor(3000).deleteAll()
            .start()
        }}
      />
    </>
  )
}
