import React from 'react';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
  Season,
  Color,
  Episodes,
  atual,
  animeName
}) {
  var categoryTitle;
  var categoryColor; 
  var videos;
  if (category) {
    categoryTitle = category.name;
    categoryColor = category.color; 
    videos = category.animes;
  }
  else {
    categoryTitle = Season;
    categoryColor = Color; 
    videos = Episodes;
  }
  let URL;
  
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }
          if(atual === 'home'){
            URL = `/anime/${video.name}`;
          }
          else if (atual === 'anime'){
            URL = `/anime/${animeName}/${(index+1)}`;
          }
          return (
            <SliderItem key={video.name}>
              <VideoCard
                videoTitle={video.name}
                videoURL={URL}
                categoryColor={categoryColor}
                videoCape={video.capeURL}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;