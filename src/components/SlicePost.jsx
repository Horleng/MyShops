import Carousel from 'react-bootstrap/Carousel';
import Pc from "../images/Pc.png"
import Coffee from "../images/Coffee.png"
import Energy from "../images/Energy.png"
import Closhes from "../images/Closhes.png"
import Iphone from "../images/Iphone.png"
import Dog1 from "../images/Dog1.png"
import Dog2 from "../images/Dog2.png"
import Dog3 from "../images/Dog3.png"
function DarkVariantExample() {
  const list = [
    { img: Dog1, title: "អាបៀន" },
    { img: Dog2, title: "យីកូន...!" },
    { img: Dog3, title: "អាខ្មៅ" },
    { img: Pc, title: "Personal Computer" },
    { img: Iphone, title: "Mobile Phone" },
    { img: Coffee, title: "Coffee" },
    { img: Energy, title: "Energy Drink" },
    { img: Closhes, title: "Fresh Food and Mike" },
  ]
  return (
    <Carousel variant="dark">
      {
        list.map((ls) => (
          <Carousel.Item key={ls.title}>
            <img
              className="d-block w-50 mx-auto" 
              src={ls.img}
              alt="First slide"
            />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default DarkVariantExample;