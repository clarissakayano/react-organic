import {Link} from "react-router-dom";
import {BannerAbout, TitleAbout, AboutContainer, BannerAbout2, MainTitles, MainTitle, What, Who} from './styles';
import Footer from "../../components/Footer";
import HeaderComp from "../../components/HeaderComp";
import hands from "../../assets/hands.jpg";
import maosfolhas from "../../assets/maosfolhas2.jpg";
import men from "../../assets/menabout.jpg";
import woman from "../../assets/womanabout.jpg";
import men2 from "../../assets/men2.jpg";
import men3 from "../../assets/team.jpg";
import CardAbout from "../../components/CardsAbout";
import useTitle from "../../hooks/useTitle";
import { useEffect } from "react";


const About =() => {

    const setTitle = useTitle();

      useEffect(() => {
        setTitle('About');
        // eslint-disable-next-line react-hooks/exhaustive-deps
      });
        return(
    <>
        <HeaderComp />
        <AboutContainer>
            <BannerAbout className=' flex-grow-1'>
            <div className="container d-flex justify-content-center">
                <div className="row mt-5">
                    <div className="col d-flex py-5">
                        <TitleAbout>About Us</TitleAbout>
                    </div>
                </div>
            </div>
            </BannerAbout>
            <Who className="container mt-5">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-0 px-md-4">
                    <div className="col d-flex justify-content-md-end justify-content-sm-center ">
                        <img className="img-fluid" src={hands} alt="hands" />
                    </div>
                    <div className="col p-3">
                        <MainTitles className="top-and-bottom">Who We Are</MainTitles>
                        <p className="text-align-right">"We are a manufacturing base of organic food
                        produced on our farm. We are a family health care production team,
                        created by today's need for clean and safe food, driven by the desire
                        to build meaningful and meaningful experiences. Vivamus et enim accumsan,
                        tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada finibus.
                        Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor.
                        Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a
                        iaculis risus turpis id sapien. Pellentesque a metus urna. Integer placerat et
                        ante quis pharetra. Nulla facilisi. Donec egestas tortor non ante pulvinar, sit
                        amet sollicitudin nisl auctor. Vestibulum aliquet finibus consectetur. Nullam
                        faucibus vehicula est nec pulvinar."</p>
                   </div>
                </div>
            </Who>
            <div>
                <What className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 g-0 px-4 mb-5">
                    <div className="col component p-3">
                        <MainTitle className="title">What We Do</MainTitle>
                        <p>We provide all kinds of organic products. Produced on our farm,
                            the products are always fresh,
                            multi-vitamins, rich variety for your family. With our organic food will bring delicious meals
                            to your family.</p>

                            <p>Vestibulum eu nisl vitae tortor feugiat aliquet finibus in libero.
                            Vivamus et enim accumsan, tempus dui non, pretium libero.
                            Vivamus vitae justo non metus malesuada finibus. Pellentesque
                            vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor.
                            Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa,
                            a iaculis risus turpis id sapien diam pellentesque ullamcorper.</p>
                    </div>
                    <div className="col d-flex justify-content-md-start justify-content-sm-center ">
                        <img className="img-fluid" src={maosfolhas} alt="hands" />
                    </div>
                </What>
            </div>
            <BannerAbout2 className="flex-grow-1" >
                <div className="container">
                    <div className="row md-2">
                        <div className="col ">
                        <p> 154 </p>
                        <span>HAPPY CLIENT</span>
                        </div>

                        <div className="col">
                        <p>234</p>
                        <span>PRODUCTS IN STORE</span>
                        </div>

                        <div className="col ">
                        <p>32</p>
                        <span>YEAR OF EXPERIENCE</span>
                        </div>

                        <div className="col">
                        <p>126</p>
                        <span>RUNING PROJECTS</span>
                        </div>
                    </div>
                </div>
            </BannerAbout2>
            <MainTitles className="text-center mt-5">Our Team</MainTitles>
            <div className="container d-flex mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                        <CardAbout title="Card 1"
                        image={men} alt="men lider"
                        description="Billy Ray"
                        description1="Leader"
                        />
                    </div>

                    <div className="col">
                        <CardAbout title="Card 2"
                        image={woman} alt="woman famer"
                        description="Danielle Reed"
                        description1="Farmer"
                        />
                    </div>

                    <div className="col">
                        <CardAbout title="Card 3"
                        image={men2} alt="men farmer"
                        description="Peter Castro"
                        description1="Farmer"
                        />
                    </div>
                    <div className="col">
                        <CardAbout title="Card 3"
                        image={men3} alt="men farmer"
                        description="Peter Castro"
                        description1="Leader"
                        />
                    </div>
                </div>
            </div>
        </AboutContainer>


        <Footer />
    </>
);
    };

export default About;