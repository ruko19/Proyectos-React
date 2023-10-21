import React from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import ProductDetail from '../../components/ProductDetail/ProductDetail';


const Home = () => {
    const [items, setItems] = useState(null);

    const getData = async () => {
        try {
            const getItems = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await getItems.json();
            setItems(data);


        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <Layout className=''>

            <div className='grid grid-cols-4 gap-9 w-full max-w-screen-md '>
                {
                    items?.map((i) => (
                        <Card key={i.id} data={i} />
                    ))

                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home