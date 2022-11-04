import {Link} from "react-router-dom";
import {BannerAbout, TitleAbout, AboutContainer, BannerAbout2, MainTitles} from './styles';
import Footer from "../../components/Footer";
import HeaderComp from "../../components/HeaderComp";
import hands from "../../assets/hands.jpg";
import maosfolhas2 from "../../assets/maosfolhas2.jpg";
import men from "../../assets/menabout.jpg";
import woman from "../../assets/womanabout.jpg";
import men2 from "../../assets/men2.jpg";
import CardAbout from "../../components/CardsAbout";


const About =() => (
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
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-0 px-md-4">
                    <div className="col d-flex justify-content-end">
                        <img className="img-fluid" src={hands} alt="hands" />
                    </div>
                    <div className="col p-3">
                        <MainTitles>Who We Are</MainTitles>
                        <p>"We are a manufacturing base of organic food
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
            </div>
            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-0">
                    <div className="col p-3">
                        <MainTitles className="d-flex mt-5">What We Do</MainTitles>
                        <p>"We provide all kinds of organic products. Produced on our farm,
                            the products are always fresh, multi-vitamins, rich variety for your family.
                            With our organic food will bring delicious meals to your family.<p></p>
                            Vestibulum eu nisl vitae tortor feugiat aliquet finibus in libero.
                            Vivamus et enim accumsan, tempus dui non, pretium libero. Vivamus vitae
                            justo non metus malesuada finibus. Pellentesque vehicula porttitor eleifend.
                            Proin eget velit in arcu consectetur tempor. Sed pulvinar, purus sed efficitur
                            elementum, risus risus tincidunt massa, a iaculis risus turpis id sapien diam
                            pellentesque ullamcorper."</p>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <img className="img-fluid"  src={maosfolhas2} alt="hands" />
                   </div>
                </div>
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
                </div>
            </div>
        </AboutContainer>


        <Footer />
    </>
);

export default About;