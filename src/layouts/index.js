import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"



export function MainLayout() {
  return (
        <>
            <Header/>
            <Body />   
            <Footer/>
        </>
    )
}



export function TestLayout(){
    return (
        <>
            <div>하이</div>
        </>
    )
}
