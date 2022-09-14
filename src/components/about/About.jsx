import "../../app.css";

const About = () => {
  return (
    <div>
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">About Me</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                I attended Zion African Church Primary school Alagbaa,
                Iyana-Ipaja, Agege from 1991 to 1996 and State high school
                Oyewole, Agege from 1996 to 2002 for my primary and secondary
                education respectively. I graduated in Accounting from the
                university of Lagos in 2014. I attend Annahdah institute of
                Arabic and Islamic studies from 2007 till date. I attended Zad
                Academy, Makkah, Kingdom of Saudi Arabia where I bagged diploma
                in Islamic Law (with a distinction) from 2020 to 2022. I worked
                as a software developer and graphic designer intern in Techend
                Incubation Limited, Oshodi, Lagos from 2018 to 2020. I now work
                as a freelancer - Graphic designer and web developer.
              </p>
              <a
                className="btn btn-light btn-xl"
                href="../assets/Aliu_Olalekan_Ajibade.pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
