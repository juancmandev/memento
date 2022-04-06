const Card = ({ image, selected, onClick }) => {

    return (
        <div className="card">
            <div className={selected && 'selected'}>
                <img className='card-face' src={image} />

                <img className='card-back' src={'/assets/fireship.png'} />
            </div>
        </div>
    )
};

export default Card;