import React from 'react';
import ImageGallery from 'react-image-gallery';

class Photos extends React.Component{

     images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    render(){
        return(
             <div><ImageGallery items={this.images} />;</div>
        );
    }
}
export default Photos;