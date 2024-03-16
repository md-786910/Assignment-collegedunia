import { useState } from "react";

function FeatureStore() {

    const [status, setStatus] = useState(true)
    const [trans, setTrans] = useState("0")
    // Right move
    const handleMove = (type) => {

        if (type === "right") {
            setTrans('-80%')
            setStatus(!status)
        } else {
            setTrans('0')
            setStatus(!status)
        }


    }


    return (
        <div className="container">
            <div className="page">
                <div className="top_box">
                    <div className="top_box_right">
                        <div className="slider_right_head">
                            <h3>Featured Stores</h3>
                            <span>
                                <a href="/" title="All Stores">
                                    View All Stores
                                </a>
                            </span>{" "}
                        </div>
                        <svg style={{ display: 'none' }}>
                            <symbol id="icon-chevron-left" viewBox="0 0 20 20">
                                <path d="M10 1 L1 10 L10 19 L11 18 L3 10 L11 2 Z" />
                            </symbol>
                        </svg>
                        <svg style={{ display: 'none' }}>
                            <symbol id="icon-chevron-right" viewBox="0 0 20 20">
                                <path d="M19 10 L10 1 L11 0 L20 10 L11 20 L10 19 Z" />
                            </symbol>
                        </svg>
                        <section className="featured-stores">
                            <div className="store-slider slider">
                                <button
                                    type="button"
                                    className={`slider-control btn btn-fab btn-raised btn-round btn-info prev ${!status && 'in'}`}
                                    onClick={() => handleMove('left')}

                                >
                                    <svg fill="#fff" width="20" height="20">
                                        <use href="#icon-chevron-left"></use>
                                    </svg>
                                </button>
                                <div className="slider-overflow-container">
                                    <div
                                        className="slider-wrapper"
                                        style={{ transform: `translateX(${trans})` }}
                                    >
                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Booking_com_1601290906.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Booking_com_1601290906.jpg?tr=w-180,h-72,c-force"
                                                    alt="Booking com"
                                                />
                                                <div className="coupon-count">52 Coupons</div>
                                            </a>
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Hostinger_1690954111.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Hostinger_1690954111.png?tr=w-180,h-72,c-force"
                                                    alt="Hostinger"
                                                />
                                                <div className="coupon-count">73 Coupons</div>
                                            </a>
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Dell_1667026656.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Dell_1667026656.png?tr=w-180,h-72,c-force"
                                                    alt="Dell"
                                                />
                                                <div className="coupon-count">30 Coupons</div>
                                            </a>
                                        </div>
                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Udemy_1626526862.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Udemy_1626526862.jpg?tr=w-180,h-72,c-force"
                                                    alt="Udemy"
                                                />
                                                <div className="coupon-count">49 Coupons</div>
                                            </a>
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/agodastorelogo_1497266707.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/agodastorelogo_1497266707.jpg?tr=w-180,h-72,c-force"
                                                    alt="Agoda"
                                                />
                                                <div className="coupon-count">33 Coupons</div>
                                            </a>
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/nykaa_1498128228.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/nykaa_1498128228.jpg?tr=w-180,h-72,c-force"
                                                    alt="Nykaa"
                                                />
                                                <div className="coupon-count">43 Coupons</div>
                                            </a>
                                        </div>

                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Myntra_1612159301.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Myntra_1612159301.jpg?tr=w-180,h-72,c-force"
                                                    alt="Myntra"
                                                />

                                                <div className="coupon-count">79 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Ajio_1555310077.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Ajio_1555310077.jpg?tr=w-180,h-72,c-force"
                                                    alt="Ajio"
                                                />

                                                <div className="coupon-count">48 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/GoDaddy_1625808596.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/GoDaddy_1625808596.jpg?tr=w-180,h-72,c-force"
                                                    alt="GoDaddy"
                                                />

                                                <div className="coupon-count">19 Coupons</div>
                                            </a>
                                        </div>

                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/GeeksforGeeks_1655988750.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/GeeksforGeeks_1655988750.png?tr=w-180,h-72,c-force"
                                                    alt="GeeksforGeeks"
                                                />

                                                <div className="coupon-count">19 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Amazon-India1-1477037048.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Amazon-India1-1477037048.jpg?tr=w-180,h-72,c-force"
                                                    alt="Amazon"
                                                />

                                                <div className="coupon-count">81 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Boat_1603365704.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Boat_1603365704.jpg?tr=w-180,h-72,c-force"
                                                    alt="Boat"
                                                />

                                                <div className="coupon-count">40 Coupons</div>
                                            </a>
                                        </div>

                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/lenovo_1510663204.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/lenovo_1510663204.jpg?tr=w-180,h-72,c-force"
                                                    alt="Lenovo"
                                                />

                                                <div className="coupon-count">30 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Adidas_1616155471.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Adidas_1616155471.jpg?tr=w-180,h-72,c-force"
                                                    alt="Adidas"
                                                />

                                                <div className="coupon-count">16 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/The_Sleep_Company_1688357752.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/The_Sleep_Company_1688357752.png?tr=w-180,h-72,c-force"
                                                    alt="The Sleep Company"
                                                />

                                                <div className="coupon-count">27 Coupons</div>
                                            </a>
                                        </div>

                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/puma_1500890942.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/puma_1500890942.jpg?tr=w-180,h-72,c-force"
                                                    alt="Puma"
                                                />

                                                <div className="coupon-count">36 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Makemytrip_1555311448.jpg?tr=w-180,h-72,c-force"
                                                    alt="Makemytrip"
                                                />

                                                <div className="coupon-count">38 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Dominos_1555310511.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Dominos_1555310511.jpg?tr=w-180,h-72,c-force"
                                                    alt="Dominos"
                                                />

                                                <div className="coupon-count">34 Coupons</div>
                                            </a>
                                        </div>

                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/AirIndia_1500623394.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/AirIndia_1500623394.jpg?tr=w-180,h-72,c-force"
                                                    alt="Air India"
                                                />

                                                <div className="coupon-count">27 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Flipkart2-1477037048.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Flipkart2-1477037048.jpg?tr=w-180,h-72,c-force"
                                                    alt="Flipkart"
                                                />

                                                <div className="coupon-count">42 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/MYPROTEIN_1596544846.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/MYPROTEIN_1596544846.png?tr=w-180,h-72,c-force"
                                                    alt="MYPROTEIN"
                                                />

                                                <div className="coupon-count">21 Coupons</div>
                                            </a>
                                        </div>

                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/UNIQLO_1626184033.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/UNIQLO_1626184033.jpg?tr=w-180,h-72,c-force"
                                                    alt="UNIQLO"
                                                />

                                                <div className="coupon-count">13 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/MuscleTech_1686920841.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/MuscleTech_1686920841.png?tr=w-180,h-72,c-force"
                                                    alt="MuscleTech"
                                                />

                                                <div className="coupon-count">35 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/Nike_1594125641.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/Nike_1594125641.jpg?tr=w-180,h-72,c-force"
                                                    alt="Nike"
                                                />

                                                <div className="coupon-count">23 Coupons</div>
                                            </a>
                                        </div>

                                        <div
                                            className="store-slider-item slider-item"
                                            style={{ minWidth: 'calc(20%)' }}
                                        >
                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/A2_Hosting_1639824363.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/A2_Hosting_1639824363.png?tr=w-180,h-72,c-force"
                                                    alt="A2 Hosting"
                                                />

                                                <div className="coupon-count">20 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/RentoMojo_1609939902.jpg?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/RentoMojo_1609939902.jpg?tr=w-180,h-72,c-force"
                                                    alt="RentoMojo"
                                                />

                                                <div className="coupon-count">14 Coupons</div>
                                            </a>

                                            <a className="store-slider-card" href="/">
                                                <img
                                                    className="ls-is-cached lazyloaded"
                                                    src="https://cdn.zoutons.com/images/originals/stores/JioMart_1590397194.png?tr=w-180,h-72,c-force"
                                                    data-src="https://cdn.zoutons.com/images/originals/stores/JioMart_1590397194.png?tr=w-180,h-72,c-force"
                                                    alt="JioMart"
                                                />

                                                <div className="coupon-count">15 Coupons</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className={`slider-control btn btn-fab btn-raised btn-round btn-info next ${status && 'in'}`}
                                    onClick={() => handleMove('right')}
                                >
                                    <svg fill="#fff" width="20" height="20">
                                        <use xlinkHref="#icon-chevron-right"></use>
                                    </svg>
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureStore;
