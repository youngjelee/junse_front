import React from 'react'
import FormComponent from "../components/FormComponent"
import ImageComponent from '../components/ImageComponent'
import styled from "styled-components";

const MainContens = styled.div `
    display: flex;
    width: 1080px;
    margin: 36px auto 0px;
    box-sizing: border-box; 
`

const SectionOne = styled.section ` 
    flex-basis: 536px;
    margin-right: 8px;
    outline: 1px solid #ced4da;
`

const SctionTwo = styled.section`
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 536px;
    outline: 1px solid #ced4da;
`


function Main() {
  return (
        <>
            <ImageComponent src="https://opgg-static.akamaized.net/logo/20230521155046.f443812c43b2435ea8c7892bbcd6b995.png?image=q_auto,f_webp,w_auto&v=1684731456767" width="300px" height="300px"/>
            <FormComponent/>

            <MainContens>  
                <SectionOne >섹션 원 </SectionOne>

                <SctionTwo>섹션 투</SctionTwo>

            </MainContens>

        </>

    )
}

export default Main