import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function slide() {
  return (
    <div className={styles.carrosel}>
      <Carousel>
        <Carousel.Item interval={500}>
          <Image
            src="/unhas2.jpg"
            layout="responsive"
            width={1000}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/unhas3.jpg"
            layout="responsive"
            width={1000}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/unhas1.jpg"
            layout="responsive"
            width={1000}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/unhas1.jpg"
            layout="responsive"
            width={1000}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/unhas5.jpeg"
            layout="responsive"
            width={1000}
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/unhas4.jpeg"
            layout="responsive"
            width={1000}
            height={600}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default slide;
