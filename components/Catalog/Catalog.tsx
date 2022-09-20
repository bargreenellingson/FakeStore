import ProductTile from 'components/ProductTile'
import { useEffect, useState } from 'react'
import classes from './Catalog.module.css'

interface CatalogProps {
    name: string
    products: any[]
}

interface FilterRanges {
    min: number
    max: number
}

function Catalog(props: CatalogProps) {
    const { name, products } = props

    const [productSearch, setProductSearch] = useState([...products])
    const [filterRanges, setFilterRanges] = useState({
        min: 0,
        max: 1000,
    })

    useEffect(() => {
        setProductSearch([...products])
    }, [products])

    const handleSort = (sort, property) => {
        const sortedProducts = [...products].sort((a, b) => {
            if (property === 'rating') {
                if (sort === 'asc') {
                    return a['rating']['rate'] - b['rating']['rate']
                } else if (sort === 'desc') {
                    return b['rating']['rate'] - a['rating']['rate']
                }
            } else {
                if (sort === 'asc') {
                    return a['price'] - b['price']
                } else if (sort === 'desc') {
                    return b['price'] - a['price']
                }
            }
        })

        setProductSearch(sortedProducts)
    }

    const handleSortLowToHigh = () => {
        const lowToHigh = [...products].sort((a, b) => a.price - b.price)
        setProductSearch(lowToHigh)
    }

    const handleRatingFilter = (min) => {
        const lowestRatingProducts = [...products].filter((product) => {
            return product.rating.rate >= min
        })
        setProductSearch(lowestRatingProducts)
    }

    const onChange = (e) => {
        setFilterRanges({
            ...filterRanges,
            [e.target.name]: e.target.value,
        } as { [K in keyof FilterRanges]: FilterRanges[K] })
    }

    const onFilterSubmit = (e) => {
        e.preventDefault()
        const filteredProducts = [...productSearch].filter((product) => {
            return (
                product.price >= filterRanges.min &&
                product.price <= filterRanges.max
            )
        })
        setProductSearch(filteredProducts)
    }

    return (
        <div className={classes.catalog}>
            <div className={classes.catalogHeader}>
                <h2>{name}</h2>
            </div>
            <div className={classes.catalogBody}>
                <div className={classes.catalogSidebar}>
                    <div>
                        Sort by price:
                        <ul>
                            <li>
                                <button
                                    onClick={() => handleSort('asc', 'price')}
                                >
                                    low to high
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleSort('desc', 'price')}
                                >
                                    high to low
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        Sort by rating:
                        <ul>
                            <li>
                                <button
                                    onClick={() => handleSort('asc', 'rating')}
                                >
                                    low to high
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleSort('desc', 'rating')}
                                >
                                    high to low
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form onSubmit={onFilterSubmit}>
                            Price Filter:
                            <div>
                                lowest:{' '}
                                <input
                                    type="number"
                                    name="min"
                                    value={filterRanges.min}
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                highest:{' '}
                                <input
                                    type="number"
                                    name="max"
                                    value={filterRanges.max}
                                    onChange={onChange}
                                />
                            </div>
                            <button type="submit">filter</button>
                        </form>
                    </div>
                    <div>
                        Rating Filter:
                        <div>
                            <button onClick={() => handleRatingFilter(1)}>
                                1+
                            </button>
                            <button onClick={() => handleRatingFilter(2)}>
                                2+
                            </button>
                            <button onClick={() => handleRatingFilter(3)}>
                                3+
                            </button>
                            <button onClick={() => handleRatingFilter(4)}>
                                4+
                            </button>
                            <button onClick={() => handleRatingFilter(5)}>
                                5
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.catalogProducts}>
                    {productSearch.map((product) => (
                        <ProductTile key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog
