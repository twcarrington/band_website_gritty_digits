import React, { Component } from 'react';
import Lightbox from 'react-images';
import grittyPic from "../public/gritty_digits.jpg"


export default class Photos extends Component {
  constructor() {
		super();
		this.state = {
			lightboxIsOpen: true,
			currentImage: 0
		};

    this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

	gotoPrevious () {
		this.setState({currentImage: this.state.currentImage - 1,});
	}

	gotoNext () {
		this.setState({currentImage: this.state.currentImage + 1});
	}

	gotoImage (index) {
		this.setState({currentImage: index});
	}

	handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) {return};
    this.gotoNext();
  }
	renderGallery () {
    const images = [
      {src: {grittyPic}},
      {src: require("../public/pikmin.jpg")},
      {src: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png"}
    ];

    const gallery = images.map((imageObject, index) => {
      return(
        <div>
          <a
            href={imageObject.src}
            className=""
            key={index}
            onClick={(e) => this.openLightbox(index, e)}  // is this even valid arrow function syntax, inside JSX?  seems like its missing brackets for the function block?
          >
            <img src={imageObject.thumbnail}/>
            <img className="responsive-img" src={grittyPic}/>
            <img className="responsive-img" src={grittyPic}/>            
          </a>
        </div>
      )
    });

		return (<div>{gallery}</div>);
  }

  render() {
    return (
      <div id ="Photos" className ="center-align section scrollspy">
        <h3 className ="ComponentHeader"> photos </h3>
        {this.renderGallery()}
        <Lightbox
					currentImage={this.state.currentImage}
					images={[
            {src: {grittyPic}},
            {src: require("../public/gritty_digits.jpg")},
            {src: require("../public/pikmin.jpg")},
            {src: "https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png"}
          ]}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
				/>
      </div>
    );
  }
}
