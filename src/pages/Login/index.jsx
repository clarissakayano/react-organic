
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BannerLogin,ButtonSubmit,MainLogin, Text, Title, TitleLogin } from "./styles";
import HeaderComp from "../../components/HeaderComp";
import { AiOutlineCheck } from "react-icons/ai";
import { BorderInput } from "../../components/Footer/styles";
import {useState} from 'react'
import groupcard from "../../assets/groupcard.png"


const Login = () => {

    return (

<>
    <HeaderComp/>
        <MainLogin>
            <BannerLogin className="flex-grow-1">
                <div className="container d-flex justify-content-center">
                    <div className="row mt-5">
                        <div className="col d-flex py-5">
                            <TitleLogin>My Account</TitleLogin>
                        </div>
                    </div>
                </div>
            </BannerLogin>
            <div className="container mt-5 mb-3">
                <Title>Log In</Title>
                    <form className="row">
                        <div className="col ">
                            <div id="form">
                                <div>
                                    <label for="inputName" className="form-label">Your Email *</label>
                                </div>
                                <div className="col-md-8 mb-3">
                                    <input type="name" className="form-control" id="inputName"/>
                                </div>
                                <div className="col-md-8">
                                    <label for="inputEmail4" className="form-label">Email Address *</label>
                                    <input type="email" className="form-control" id="inputEmail4"/>

                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check text-center">
                                <input className="" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label mx-2" for="gridCheck">
                                Remember me
                                </label>
                                <a className="mx-3" href="#">Lost your password?</a>

                                <div className="mb-3 mt-5">
                                    <ButtonSubmit className="btn">SUBMIT</ButtonSubmit>
                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        </MainLogin>
    <Footer />
</>
)
};

export default Login;