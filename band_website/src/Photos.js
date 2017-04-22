import React, { Component } from 'react';
import Lightbox from 'react-images';
import grittyPic from "../public/gritty_digits.jpg"


export default class Photos extends Component {
  constructor () {
		super();
		this.state = {
			lightboxIsOpen: false,
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
      {src: require("../public/gritty_digits.jpg")},
      {src: require("../public/pikmin.jpg")}
    ];

    const gallery = images.map((imageObject, index) => {
      return(
        <a
          href={imageObject.src}
          className=""
          key={index}
          onClick={(e) => this.openLightbox(index, e)}  // is this even valid arrow function syntax, inside JSX?  seems like its missing brackets for the function block?
        >
        </a>
      )
    });

		return (<div>{gallery}</div>);
  }

  render() {
    return (
      <div id ="Photos" className ="center-align section scrollspy">
        {this.renderGallery()}
        <Lightbox
					currentImage={this.state.currentImage}
					images={this.props.images}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
				/>
        <h3 className ="ComponentHeader"> photos </h3>
        <img src ={grittyPic}/>
      </div>
    );
  }
}
