const Dish = ({ title, info, price, img }) => {
    const fixWord = word => word[0].toUpperCase() + word.slice(1).toLowerCase()

    title = title.split(' ').reduce((prev, word) => prev + (prev === '' ? '' : ' ') + fixWord(word), '')

    return <div className='dish'>
        <div className='fitter'>
            <img src={img} alt={title} />
        </div>
        <div className='right'>
            <div className='top'>
                <p className='title'>{title}</p>
                <p className='price'>${price}</p>
            </div>
            <div className='info'>{info}</div>
        </div>
    </div>
}

export default Dish
