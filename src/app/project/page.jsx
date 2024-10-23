import Image from 'next/image';
import styles from './project.module.css';

const Project = () => {

  const data = [
    {
      title: "Old School",
      date: "22-7-2024",
      des: "This is a description for the project and full details about it. The Old School project was inspired by classical design elements with a focus on preserving traditional architectural features while incorporating modern techniques for structural integrity. It showcases the beauty of time-honored designs that have stood the test of time.",
      whyThis: "This is a description to explain why it was made and used like this. The purpose of the Old School project was to demonstrate how historical architecture can be preserved while still meeting contemporary standards of construction and sustainability. It was also designed to educate younger generations on the importance of cultural heritage.",
      img: "/images/img1.jpg"
    },
    {
      title: "Modern Architecture",
      date: "10-8-2023",
      des: "This project focuses on modern architectural design with clean lines and sustainable materials. It was crafted to represent the minimalist movement that is prevalent in today's architectural trends, showcasing sleek facades, open floor plans, and the use of light to create spacious, airy environments. It combines aesthetics with functionality, providing both beauty and comfort.",
      whyThis: "This was created to explore the fusion of aesthetics and environmental responsibility. The Modern Architecture project demonstrates how design can be both visually appealing and environmentally conscious by using recycled materials, energy-efficient systems, and innovative building techniques to reduce environmental impact.",
      img: "/images/img2.jpg"
    },
    {
      title: "Futuristic Vision",
      date: "5-5-2022",
      des: "A conceptual project designed to imagine the future of urban spaces and smart cities. It integrates advanced technology into the design, with features like adaptive architecture that can modify spaces based on user needs and smart energy systems. The project presents a forward-thinking vision of what future urban environments might look like, focusing on sustainability, technology, and innovation.",
      whyThis: "The goal was to push the boundaries of what architecture could look like in 50 years. The Futuristic Vision project aims to inspire new ideas about how cities could be designed to cope with future challenges such as overpopulation, climate change, and the increasing need for sustainable living solutions. It explores how architecture can evolve with changing societal needs.",
      img: "/images/img3.jpeg"
    },
    {
      title: "Sustainable Living",
      date: "12-4-2021",
      des: "A residential project emphasizing energy-efficient homes with eco-friendly materials. It demonstrates how sustainable design practices can be incorporated into everyday living spaces. The project includes passive solar design, rainwater harvesting systems, and the use of locally sourced materials, making it a model for environmentally responsible housing.",
      whyThis: "It was developed to highlight the importance of sustainability in everyday living spaces. The Sustainable Living project serves as a reminder that the architecture of the future must focus on reducing the environmental footprint while maintaining a high quality of life. It promotes energy efficiency and resource conservation through smart design choices.",
      img: "/images/img4.jpeg"
    }
  ];
  
  return (
    <div className={styles.project}>
        <div className={styles.container}>
          {data.map((item, index) => (
          <div className={styles.card} key={index}>
             <div className={styles.left}>
              <div className={styles.text}>
                <h1><span>{item.date}</span>{item.title}</h1>
                <p>{item.des}</p>
              </div>
              <div className={styles.number}>
                <h2>0{index + 1}</h2>
              </div>
             </div>
             <div className={styles.right}>
              <div className={styles.img}>
                <Image src={item.img} alt='img' width={500} height={500} />
              </div>
              <div className={styles.ImgDes}>
                <p>{item.whyThis}</p>
              </div>
             </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Project;
