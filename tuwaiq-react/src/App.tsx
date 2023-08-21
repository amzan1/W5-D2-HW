import './App.css'
import Navbar from './component/Navbar'
import Cards from './component/cards'
import Footer from './component/Footer'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="cards d-flex flex-wrap justify-content-center flex-row-reverse m-5">
      <Cards type='لقاء' supject='لقاءات سيبرانية' location='الرياض' week='٣أسابيع' date='07-08-2023' isAvailable={true}></Cards>
      <Cards type='لقاء' supject='مستقبل الأمن السيبراني في الخدمات السحابية' location='الرياض' week='يوم' date='21-08-2023' isAvailable={true}></Cards>
      <Cards type='لقاء' supject='مقدمة في تحليل البرمجيات باستخدام تقنية ال Symbolic Analysis' location='الرياض' week='٣أسابيع' date='07-08-2023' isAvailable={true}></Cards>
      <Cards type='لقاء' supject='لقاءات سيبرانية' location='الرياض' week='٣أسابيع' date='07-08-2023' isAvailable={false}></Cards>
      <Cards type='لقاء' supject='لقاءات سيبرانية' location='الرياض' week='٣أسابيع' date='07-08-2023' isAvailable={true}></Cards>
      <Cards type='لقاء' supject='لقاءات سيبرانية' location='الرياض' week='٣أسابيع' date='07-08-2023' isAvailable={false}></Cards>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
