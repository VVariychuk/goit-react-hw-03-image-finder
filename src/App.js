/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import Loader from "react-loader-spinner";

import s from './App.module.css'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

import imageAPI from './services/imageAPI';
class App extends Component {
  state = {
    pictures: [],
    currentPicture: '',
    searchQuery: '',
    currentPage: 1,
    perPage: 12,
    isLoading: false,
    error: null,
    openModal:false,
  }

  componentDidMount() { }
    

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
    window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
  }
     
  fetchPictures = () => {
    const options = {
      query: this.state.searchQuery,
      page: this.state.page,
      perPage: this.state.perPage,
    }

    this.setState({ isLoading: true })

    return imageAPI.getImage(options).then(pictures => {
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...pictures],
        page: prevState.page + 1,
      }))
    }).catch(error => console.log(error))
      .finally(this.setState({isLoading: false}))
  }

  onSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      pictures: [],
      error:null
    })
  }
  
  toggleModal = () => {
    this.setState((prevState) => (
      {openModal: !prevState.openModal}
    ))
  }
  
  onImgClick = (e) => {
    if (e.target.nodeName !== 'IMG') {
      return
    }
    console.log(e);
    this.setState({      
      currentPicture: e.target.dataset.img,
    })
    this.toggleModal()
  }
  
  render() {
    const {pictures, isLoading, openModal, currentPicture} = this.state;
    return (
      <div className={s.App}>
        {isLoading &&
          <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />}
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery pictures={pictures} imgClickHandler={this.onImgClick}/>
        {pictures.length > 0 && <Button onBtnClick={this.fetchPictures} text={isLoading ? "Загружаем" : "Загрузить еще"} />}
      
      {openModal && (
          <Modal onClose={this.toggleModal}>
            <img src={currentPicture} alt="This is a big picture" />
          </Modal>
        )}
      </div>
    )
  };
}
export default App;