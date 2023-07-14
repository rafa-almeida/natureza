import  Header  from '../Components/Header'
import Footer from '../Components/Footer'




const Default = ({ children }) => {
    
    return (
       <>
       
            <Header />     
            {children}
            <Footer />
        
        </>
    )
}

export default Default