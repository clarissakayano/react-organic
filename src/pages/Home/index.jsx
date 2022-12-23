import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CardVeg from "../../components/CardVeg";
import folhas from '../../assets/folhas.jpg';
import oranges from '../../assets/oranges.jpg';
import Meat from '../../assets/carne.jpg';
import CardOurProducts from "../../components/CardOurProd";
import broccoli from "../../assets/broccoli.jpg";
import lemon from "../../assets/lemon.jpg";
import bean from "../../assets/bean.jpg";
import onion from "../../assets/onion.jpg";
import spinach from "../../assets/spinach.jpg";
import {BannerContainer,BannerContainer2, Text, Button, Main} from "./styles";
import CardsBlog from "../../components/CardsBlog";
import CardsBlogRev from "../../components/CardsBlogRev";
import tempero from "../../assets/blog-card-temp.jpg";
import tomato from "../../assets/blog-card-tomate.jpg";
import avocado from "../../assets/blog-card-avocado.jpg";




const Home =() => (
    <>
        <Header />
        <Main>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3">
                    <div className="col">
                        <CardVeg title="Card 1"
                        image={folhas}
                        description="Vegetables"
                        />
                    </div>

                    <div className="col">
                        <CardVeg title="Card 2"
                        image={oranges}
                        description="Fruit"
                        />
                    </div>

                    <div className="col">
                        <CardVeg title="Card 3"
                        image={Meat}
                        description="Meat"
                        />
                    </div>
                </div>
            </div>
            <Text className="d-flex justify-content-center mt-5">Our Products</Text>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 d-flex justify-content-center mt-5">
                    <div className="col my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={broccoli}
                        description="Salad"
                        description1="$ 2.00"
                        />
                    </div>
                    <div className="col my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={lemon}
                        description="Lemon"
                        description1="$ 2.00"
                        />
                    </div>
                    <div className="col my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={bean}
                        description="Bean"
                        description1="$ 2.00"
                        />
                    </div>
                    <div className="col  my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={onion}
                        description="Onion"
                        description1="$ 2.00"
                        />
                    </div>
                    <div className="col  my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={bean}
                        description="Bean"
                        description1="$ 2.00"
                        />
                    </div>
                    <div className="col  my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={onion}
                        description="Onion"
                        description1="$ 2.00"
                        />
                    </div>
                    <div className="col my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={broccoli}
                        description="Salad"
                        description1="$ 2.00"
                        />
                    </div>
                    <div className="col my-4 px-5">
                        <CardOurProducts title="Card 1"
                        image={spinach}
                        description="Spinach"
                        description1="$ 2.00"
                        />
                    </div>
                </div>
            </div>
            <BannerContainer className='flex-grow-1 mt-5'>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h3 className="fs-5 mt-5 d-flex justify-content-center">Organic Food</h3>
                        <h2 className="d-flex justify-content-center">Healthy - Fresh - Delicious.</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button className="btn mt-5 " href="#" role="button">View More</Button>
                    </div>
                </div>
            </div>
            </BannerContainer>
            <Text className="d-flex justify-content-center mt-5">The Blog</Text>
            <div className="container">
                <div className="row mt-5 row-cols-1 row-cols-md-3 g-3">
                    <div className="col d-flex">
                        <CardsBlog
                        image={tempero}
                        title="Beauty With Organic Products"
                        description1="Feberuary 05, 2017"
                        description2="Etiam at varius diam,
                        id blandit erat. Suspendisse eget volutpat risus,
                        id venenatis justo. Fusce elementum ligula elit.
                        Duis ultricies ultrices nibh, a tincidunt risus
                        pretium eleifend."
                        />
                    </div>

                    <div className="col sm-3 d-flex">
                        <CardsBlogRev
                        image={tomato}
                        title="Green Vegetables Are Good For Healthy"
                        description1="January 30, 2017"
                        description2="Vivamus consectetur nulla mattis lorem ultricies,
                         ac congue tellus consectetur. Vivamus sed purus volutpat,
                          varius mauris id, tempus augue. Nuefd ans congue liquam."
                        />
                    </div>


                    <div className="col d-flex">
                        <CardsBlog
                        image={avocado}
                        title="Beauty With Organic Products"
                        description1="Feberuary 05, 2017"
                        description2="Praesent efficitur felis eu luctus vestibulum.
                         In hac habitasse platea dictumst. Nam egestas eu nisl ac pellentesque.
                          Duis congue suscipit lorem vel congue."
                        />
                    </div>
                </div>
            </div>
            <BannerContainer2  className='flex-grow-1 mt-5'>
            <div className="container d-flex justify-content-center">
                <div className="row mt-5">
                    <div className="col d-flex py-5">
                        <Button className="btn" href="#" role="button">FOLLOW US</Button>
                    </div>
                </div>
            </div>
            </BannerContainer2>
        </Main>
        <Footer />
    </>
);

export default Home;