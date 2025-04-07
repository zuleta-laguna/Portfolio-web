import Front_page_img from "/Front_page_image.png";
import LinktreeImg from "/ProyectoLinktree.png";
import TorknerImg from "/ProyectoTokner.png";
import arrowDown from "/arrow-bar-down.svg";
import videoRef from "/VideoReferenciaDev.mp4";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function App() {
  const [IsScrollingY, setIsScrollingY] = useState(false);

  const HandleScrollChange = () => {
    if (window.scrollY > 50) {
      setIsScrollingY(true);
    } else {
      setIsScrollingY(false);
    }
  };

  useEffect(() => {
    HandleScrollChange();

    window.addEventListener("scroll", HandleScrollChange);

    return () => {
      removeEventListener("scroll", HandleScrollChange);
    };
  }, []);

  return (
    <main>
      <header
        className={`fixed top-0 w-full ${IsScrollingY ? "hidden" : "visible"} `}
      >
        <div className="flex justify-between p-10  pt-7 w-full max-[423px]:p-2.5 max-[423px]:h-20 max-[423px]:items-center">
          <h2 className="font-Raleway text-xl max-[420px]:text-xl max-[850px]:text-3xl">
            Wilberto Zuleta
          </h2>
          <h2 className="font-Raleway text-xl max-[420px]:text-xl max-[850px]:text-3xl">
            Software Developer
          </h2>
        </div>
      </header>
      <header
        className={`fixed top-0 flex w-full  ${
          IsScrollingY ? "visible " : "hidden"
        }`}
      >
        <div className="flex justify-between items-center p-10 backdrop-blur-2xl  h-20 bg-white/80 w-full">
          <h2 className="font-Raleway text-xl  text-black">Wilberto Zuleta</h2>
          <Link to="/contactame" className="font-Raleway text-xl text-black" >
            Contactame
          </Link>
        </div>
      </header>
      <section className="flex justify-center mt-20 flex-col items-center h-screen max-[850px]:h-screen max-[423px]:h-screen">
        <div className="w-[30%] max-[423px]:w-[70%] max-[850px]:w-[50%]">
          <img src={Front_page_img} alt="Front_page_img" />
        </div>
        <section className="p-3 flex w-full justify-between max-[850px]:mt-[300px] max-[420px]:mt-[180px]">
          <a className="font-Raleway text-xl" href="#">
            @wiltech.col
          </a>
          <img className="w-[2%] max-[423px]:w-[6%]" src={arrowDown} alt="" />
        </section>
      </section>

      <section className="About_me_section max-[423px]:mt-14">
        <div className="flex justify-around items-center h-screen max-[850px]:flex-col">
          <div className="w-[30%] h-[350px] max-[850px]:w-[70%] max-[412px]:w-full max-[850px]:p-2.5">
            <h2 className="font-Josefinsans font-light text-5xl max-[423px]:text-center max-[850px]:text-5xl max-[850px]:font-medium max-[420px]:font-light max-[420px]:text-4xl">
              WILBERTO ZULETA
            </h2>
            <br />
            <p className="font-Raleway text-xl max-[850px]:text-3xl max-[420px]:text-xl">
            Mi fascinación por las computadoras y la tecnología comenzó desde la infancia. Estudiar en una academia de desarrollo de software en mi ciudad natal, Valledupar, me hizo enamorarme aún más de esta profesión. Espero seguir creciendo.
            </p>
          </div>
          <div className="w-[30%]  self-end max-[840px]:self-auto  max-[420px]:w-full max-[850px]:w-[70%] max-[850px]:p-5">
            <video
              className="shadow-black/50 shadow-2xl rounded-xl"
              autoPlay
              loop
              muted
            >
              <source src={videoRef} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="bg-black mt-10 p-7">
        <div className="flex flex-col items-center justify-center gap-28 h-screen">
          <h2 className="text-white font-extralight font-Raleway text-6xl max-[423px]:text-center">
            Mis Proyectos
          </h2>
          <div className="flex justify-center items-center gap-20 max-[423px]:flex-col max-[423px]:gap-5">
            <div className="relative">
              <img src={LinktreeImg} alt="" />
              <div className="bg-black/50 absolute bottom-0 h-full w-full flex justify-center items-center opacity-0 hover:opacity-100 cursor-pointer transition delay-100 ease-in-out duration-300 ">
                <a
                  href="https://linktree-maizu.vercel.app/"
                  className="text-white font-medium font-Raleway text-2xl w-full h-full flex justify-center items-center"
                >
                  Linktree
                </a>
              </div>
            </div>
            <div className="relative">
              <img src={TorknerImg} alt="" />

              <div className="bg-black/50 absolute bottom-0 h-full w-full flex justify-center items-center opacity-0 hover:opacity-100 cursor-pointer transition delay-100 ease-in-out duration-300">
                <a
                  href="https://torkner.vercel.app/"
                  className="text-white font-medium font-Raleway text-2xl w-full h-full flex justify-center items-center"
                >
                  Tokner
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
