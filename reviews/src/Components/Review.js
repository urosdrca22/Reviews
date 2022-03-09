import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import './Review.css'

const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = reviews[index]

    const checkNumber = (number) => {
        if (number > reviews.length - 1){
            return 0
        };
        if (number < 0){
            return reviews.length - 1
        };
        return number
    };

    const nextReviewHandler = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const randomReviewHandler = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex((index) => {
            let newIndex = checkNumber(randomNumber);
            return newIndex;
        });
    };

    const prevReviewHandler = () =>{
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    return(
       <Card style={{ width: '30rem'}} className="card text-center shadow-lg p-3 mb-5 bg-body rounded">
           <div className="image-container">
            <Card.Img variant="top" className="person-img" src={image}></Card.Img>
           </div>
           <Card.Body >
                <h4>{name}</h4>
                <h5 className="person-job">{job}</h5>
                <Card.Text>{text}</Card.Text>
                <div className="button-container">
                    <button onClick={prevReviewHandler}className="prev-btn">
                        <FaChevronLeft />
                    </button>
                    <button onClick={nextReviewHandler} className="next-btn">
                        <FaChevronRight />
                    </button>
                </div>
                <button onClick={randomReviewHandler} className="random-btn">
                    Surprise me! 
                </button>
           </Card.Body>
       </Card>
    );
};

    

export default Review;