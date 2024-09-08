import React from 'react'

const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="about" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repellendus, debitis harum suscipit iste nulla alias voluptatum modi voluptates quod earum dolore libero voluptatibus assumenda est, accusantium veniam consectetur et magnam quam, quas ratione ex. Corporis repellat reiciendis quisquam possimus illo obcaecati est distinctio, rerum ipsa, numquam accusamus nulla tempore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate corrupti aperiam voluptates pariatur, aliquid ipsam.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>

    </div>
  )
}

export default Biography;