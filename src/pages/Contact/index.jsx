
import {BannerContact, TitleContact, ContactContainer, Button} from './styles';
import Footer from "../../components/Footer";
import HeaderComp from "../../components/HeaderComp";
import CardContact from '../../components/CardContact';
import {FaMapMarkerAlt} from  "react-icons/fa";
import {MdPhoneAndroid} from  "react-icons/md";
import {FiMail} from "react-icons/fi";



const Contacts =() => (
    <>
        <HeaderComp />
        <ContactContainer>
            <BannerContact  className=' flex-grow-1'>
                <div className="container d-flex justify-content-center">
                    <div className="row mt-5">
                        <div className="col d-flex py-5">
                            <TitleContact role="button">Blog Detail</TitleContact>
                        </div>
                    </div>
                </div>
            </BannerContact>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 d-flex col-sm justify-content-center mt-5 mb-5">
                    <div className="col d-flex" >
                        <CardContact
                        icon={<FaMapMarkerAlt size={50}/>} alt="map"
                        description="379 5th Ave New York, NYC 10018"
                        />
                    </div>
                    <div className="col d-flex" >
                        <CardContact
                        icon={<MdPhoneAndroid size={50}/>}alt="phone"
                        description="(+1) 11 321 4567"
                        />
                    </div>
                    <div className="col d-flex" >
                        <CardContact
                        icon={<FiMail size={50}/>} alt="email"
                        description="contact@site.com"
                        />
                    </div>
                </div>
                <div className='mb-5'></div>
                <div className="bg-primary ratio ratio-16x9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.580640163839!2d-73.98353449999999!3d40.749252299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9e69d16c3%3A0x7a0716652d7d9778!2s379%205th%20Ave%2C%20New%20York%2C%20NY%2010016%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1658194579790!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <section className="container mt-5">
                    <form className='row g-3 mb-3'>
                        <textarea className='col-12 form-control form-control-lg' type='text' placeholder='Your message'
                        aria-label=".form-control-lg example" rows='6'/>
                        <div class="row mt-3">
                            <div className="col">
                                <input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name"/>
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email"/>
                            </div>
                            <div className="mt-2">
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Phone Number"></input>
                            </div>
                            <div className="col-12 mb-5">
                                <Button className="btn mt-3 " href="#" role="button">SEND EMAIL</Button>
                            </div>
                        </div>
                    </form>
                </section>


            </div>
        </ContactContainer>
        <Footer />
    </>
);
export default Contacts;