import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import './Home.css'

import {
  FaInstagram,
  FaTelegram,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const Home = () => {
  const transition = { duration: 3, type: 'spring' };

  return (
    <section
      className='flex px-8 sm:px-4 pt-[160px] sm:pt-[200px] lg:pt-[165px] justify-center bg-gradient-180 from-bgColor to-bgColorAlt overflow-x-hidden pb-[180px] sm:pb-[0px] dark:from-bgColorDark dark:to-bgColorDark scrollbar-hide'
      id='home'
    >
      <div className='min-h-screen grid items-center grid-rows-flow-2 xs:gap-20 sm:gap-28 lg:grid-cols-2 3xl:gap-96'>
        {/* left side */}
        <div className='relative top-[15%] sm:top-[-8%] p-3 w-full text-white grid gird-rows-flow-6 gap-2 order-2 lg:order-1'>
          <p className='uppercase tracking-[0.05em] leading-[1.7] font-[700] text-titleColor dark:text-textColorDark flex items-center justify-center sm:justify-start'>
            Hello,
            <span className='text-large block text-primaryColor'>
              &nbsp;My Name Is
            </span>
          </p>

          <h1 className='uppercase tracking-[0.05em] text-h2Size sm:text-[70px] font-[700] flex sm:items-start justify-center items-center drop-shadow-textShadow leading-[1.2] mt-[15px] flex-col gap-2 sm:gap-0'>
            <span className='text-primaryColor'>Kubanych&nbsp;&nbsp;</span>
            <span>Abdunasirov</span>
          </h1>

          {/* <p className='font-[700] leading-[1.7] flex items-center justify-center sm:justify-start'>
            <span className='text-small tracking-[0.05em] uppercase text-titleColor dark:text-textColorDark'>
              I am
            </span>
            <b className='font-[Caveat] text-h2Size ml-[10px] text-titleColor dark:text-titleColorDark'>
              Frontend Developer
            </b>
          </p> */}

          <div className="animation-text">
            <div className="static-txt dark:text-titleColorDark">I'm</div>
              <ul className='dynamic-txts'>
                <li><span>IT'Specialist</span></li>
                <li><span>Developer</span></li>
                <li><span>Programmer</span></li>
              </ul>
          </div>

          <p className='text-large max-w-[520px] my-[40px] leading-[1.7] text-textColor dark:text-textColorDark font-[Comfortaa] font-[700] flex items-center text-center sm:text-left'>
            From Djalal-Abad, Kyrgyzstan. I have rich experience in web development,
            good at frontend stuff. I love to talk with you about our unique.
          </p>

          <div className='flex gap-[20px] mb-[30px] justify-center sm:justify-start'>
            <a
              href='https://www.facebook.com/profile.php?id=100042179494834&sk=about' target='_blank' 
              className='text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce'
            >
              <FaFacebookSquare />
            </a>
            <a
              href='https://github.com/kubahandro' target='_blank' 
              className='text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.instagram.com/tirkeshovich_?igsh=MXN3NzMzc216eTV1cg=='
              target='_blank' 
              className='text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce'
            >
              <FaInstagram />
            </a>
            <a
              href='https://web.telegram.org/k/' target='_blank' 
              className='text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce'
            >
              <FaTelegram />
            </a>
            <a
              href='https://www.linkedin.com/in/kubanychbek-abdunasirov-456321342/'
              target='_blank' 
              className='text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce'
            >
              <FaLinkedin />
            </a>
          </div>

          <div className='flex gap-[70px] font-[700] uppercase tracking-[0.05em] items-center justify-center mx-[-40px] sm:mx-0 sm:justify-start'>
            <a
              href='https://drive.google.com/uc?export=download&id=1Fz9PbSMnIC7HTAvWxw6rSwqIg6D_UNZ-'
              download='ResumeOfKubaAbd.pdf'
              target="_blank"
              className='text-titleColor dark:text-titleColorDark text-tiny grid place-items-center border-[2px] border-solid border-borderColor dark:border-borderColorDark p-[20px] rounded-[56px] shadow-[5px_5px_rgba(0,0,0,0.2)] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] relative before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[0] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
            >
              <span className='z-[1]'><Link
              to='skills'>My Skills</Link></span>
            </a>
          </div>
        </div>
        {/* right side */}
        <div className='relative top-0 right-0 sm:translate-y-[-9%] rounded-full bg-primaryColor w-full max-w-[680px] lg:order-2'>
          <div className='bg-gradient-0 from-[#4dc192] via-[#4dc192] to-[#1aeebb] z-[1] pb-[100%] rounded-full'>
            <motion.img
              initial={{ bottom: '50px' }}
              whileInView={{ bottom: '-1px' }}
              transition={transition}
              className='absolute sm:bottom-0 sm:h-[600px] rounded-[500px] object-cover'
              src={profileImage}
              alt='HeroImg'
            />
          </div>

          <div className='uppercase absolute bottom-[-23%] left-[-5%] sm:bottom-[20%] sm:left-[2%] border-[3px] border-solid border-borderColor bg-containerColor sm:shadow-[5px_5px_rgba(0,0,0,0.2)] dark:sm:shadow-[5px_5px_rgba(0,0,0,0.3)] shadow-[5px_5px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_rgba(255,255,255,0.3)] px-[5px] xs:px-[10px] sm:px-[20px] xs:w-[165px] w-[145px] sm:w-[250px] sm:h-[82px] rounded-[82px] flex items-center z-[1]'>
            <span className='w-[50%] text-titleColor font-[700] text-center text-[30px] sm:text-[40px] flex items-center gap-2'>
              <AnimatedNumbers
                animateToNumber='6'
                locale='en'
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              />
              <b className='text-primaryColor sm:text-[40px] relative top-[-1px] left-[-2px]'>
                +
              </b>
            </span>

            <span className='ml-[10px] sm:ml-0 text-[10px] sm:text-[15px] leading-[1.5em] font-[700] text-titleColor'>
              Month of <span className='text-primaryColor'>Experience</span>
            </span>
          </div>

          <div className=' uppercase absolute bottom-[-23%] right-[-4%] sm:bottom-[12%] sm:right-[6%] lg:bottom-[5%] border-[3px] border-solid border-borderColor bg-containerColor sm:shadow-[5px_5px_rgba(0,0,0,0.2)] dark:sm:shadow-[5px_5px_rgba(0,0,0,0.3)] shadow-[5px_5px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_rgba(255,255,255,0.3)] px-[5px] xs:px-[10px] sm:px-[20px] xs:w-[165px] w-[140px] sm:w-[250px] sm:h-[82px] rounded-[82px] flex items-center z-[1]'>
            <span className='w-[50%] text-titleColor font-[700] text-center text-[30px] sm:text-[40px]'>
              <AnimatedNumbers
                animateToNumber='5'
                locale='en'
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              />
            </span>

            <span className='ml-[10px] sm:ml-0 text-[10px] sm:text-[15px] leading-[1.5em] font-[700] text-titleColor'>
              Completed <span className='text-primaryColor'>Projects</span>
            </span>
          </div>

          <img
            className='absolute dark:invert-[1] dark:opacity-[0.6] w-[221px] h-[211px] top-[-6%] right-[6%] z-[-1] '
            src={shapeOne}
            alt='shape1 for design hero img'
          />
          
        </div>
      </div>
    </section>
  );
};

export default Home;
