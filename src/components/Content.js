
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import ph3 from '../img/ph3.png'
// import ph2 from '../img/ph2.png'


const Content = () => {
  const {dataarr ,success,error,cahngeCountry} = useSelector((state)=> state.dataUniver)
  const {countryArr} = useSelector((state)=> state.dataCoutry)


  let countryImg = countryArr.find((i)=>{
    return i.name.common == cahngeCountry
  })

  return (
    <div className='mt-3 p-2'>
    <div className='text-success row justify-content-between  p-2 mb-2'>
    <p className='p-1 col-11 col-md-4 text-center'>
    <img src={countryImg&&countryImg.flags.png} width={25} height={25}/>

    <span className='mx-2'>الدولة : {countryImg&&countryImg.translations.ara.official}</span>
    </p>
   
    <p className='p-1 col-11 col-md-5 text-center '>عدد الجامعات  :  {dataarr.length}</p>
    </div>
  <div className='row'>
  {dataarr.length > 1 ?dataarr.map((i,idx)=>{
    return(
        <div className='col-10  col-md-6 col-lg-4 mx-auto mx-lg-0 mb-3 ' key={idx}>
        <div className='col-10 border p-2 rounded ' style={{backgroundColor: 'teal'}}>
            <h6 className='p-1 mb-2 text-info'>{i.name}</h6>
            <div className='mb-1 d-flex'>
            <img src={countryImg&&countryImg.coatOfArms.png} width='70%' height={100} className="d-block m-auto "/>
           </div>
           <a  href={i.web_pages[0]} target="_blank"  className='d-block btn btn-outline-info'>more</a>

              
       </div>
   </div>

    )
}):  <p className='text-center p-2 my-5 text-danger' style={{fontSize:"25px"}}>No data is currently available try again</p>}
  </div>
   

    </div>
 
  
  




  )
}
// <iframe name={`${idx}w`} src={i.web_pages[0]} width='100%' height={200} scrolling="no"></iframe>
// translations.ara.common .. official
export default Content