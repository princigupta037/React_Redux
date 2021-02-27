import React from 'react';


function Home(props) {
    console.log('propsss', props)
    return (
        <div>
             <span className='add-to-counter'>{props.data.length}</span>
            <h1>
                Home Component
            </h1>
           
            <div>
                <div className='add-to-cart'>
                    
                    <img src='https://wooddesignes.com/wp-content/uploads/2015/03/shoppingcart.png' />
                </div>
            </div>
            <div class='row col-lg-12 col-md-12 col-sm-12'>
                <div class='col-md-3'>
                    <div className='card'>
                        <div className="cart-wrapper">
                            <img src='https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8806087037272_7.jpg' height='100px' width='130px' />
                        </div>

                        <div className="text-wrapper item">
                            <span> LG Q Stylus</span>
                            <div className='price'> Rs 18000.00</div>
                        </div>
                        <div className="btn-wrapper item">
                            <button onClick={() => props.addToCartHandler({ price: 1000, name: 'I Phone 11' })}> Add to Cart</button>
                            <button onClick={()=>props.removeToCartHandler({ })
                            }> Remove to Cart</button>

                        </div>
                    </div>
                </div>

                            
                {/* <div class='col-md-3'>
                    <div className='card'>
                        <div className="cart-wrapper">
                            <img src='https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8806087037272_7.jpg' height='100px' width='130px' />
                        </div>

                        <div className="text-wrapper item">
                            <span> LG Q Stylus</span>
                            <div className='price'> Rs 18000.00</div>
                        </div>
                        <div className="btn-wrapper item">
                            <button> Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div className='card'>
                        <div className="cart-wrapper">
                            <img src='https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8806087037272_7.jpg' height='100px' width='130px' />
                        </div>

                        <div className="text-wrapper item">
                            <span> LG Q Stylus</span>
                            <div className='price'> Rs 18000.00</div>
                        </div>
                        <div className="btn-wrapper item">
                            <button> Add to Cart</button>
                        </div>
                    </div>
                </div> */}
            </div>


            {/* <div class='row col-md-12'>
                <div class='col-md-3'>
                    <div className='card'>
                        <div className="cart-wrapper">
                            <img src='https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8806087037272_7.jpg' height='100px' width='130px' />
                        </div>

                        <div className="text-wrapper item">
                            <span> LG Q Stylus</span>
                            <span> Rs 18000.00</span>
                        </div>
                        <div className="btn-wrapper item">
                            <button> Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div className='card'>
                        <div className="cart-wrapper">
                            <img src='https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8806087037272_7.jpg' height='100px' width='130px' />
                        </div>

                        <div className="text-wrapper item">
                            <span> LG Q Stylus</span>
                            <div className='price'> Rs 18000.00</div>
                        </div>
                        <div className="btn-wrapper item">
                            <button> Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div className='card'>
                        <div className="cart-wrapper">
                            <img src='https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8806087037272_7.jpg' height='100px' width='130px' />
                        </div>

                        <div className="text-wrapper item">
                            <span> LG Q Stylus</span>
                            <div className='price'> Rs 18000.00</div>
                        </div>
                        <div className="btn-wrapper item">
                            <button> Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div className='card'>
                        <div className="cart-wrapper">
                            <img src='https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8806087037272_7.jpg' height='100px' width='130px' />
                        </div>

                        <div className="text-wrapper item">
                            <span> LG Q Stylus</span>
                            <div className='price'> Rs 18000.00</div>
                        </div>
                        <div className="btn-wrapper item">
                            <button> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home;