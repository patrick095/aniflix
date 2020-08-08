/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categories from '../../respositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    categories.getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        setData(categoriesWithVideos);
      });
    // const URL = window.location.hostname.includes('localhost')
    //   ? 'http://localhost:8080/categorias?_embed=videos'
    //   : 'https://devflix-nine.herokuapp.com/categorias?_embed=videos';
    // fetch(URL)
    //   .then(async (res) => {
    //     const response = await res.json();
    //     setCategory(response);
    //     console.log(response);
    //   });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {data.length === 0 && (<div>Loading...</div>)}

      {data.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={data[0].videos[0].titulo}
                url={data[0].videos[0].url}
                videoDescription="O que é Front-end?"
              />
              <Carousel
                ignoreFirstVideo
                category={data[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
