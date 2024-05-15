

const SingleCard = ({card}) => {
    const {id,img,price,title,description}=card;
    return (
        <div className="card w-80 bg-base-50 shadow-xl border">
        <figure className="px-6 pt-6">
          <img src={img} alt="img" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="">Title:{title}</h2>
          <p className="">Description:{description}</p>
          <h1 className='text-green-500'>Price:${price}</h1>
          
        </div>
      </div>
    );
};

export default SingleCard;