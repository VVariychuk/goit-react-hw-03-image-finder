import React, { Component } from 'react';
import s from './Searchbar.module.css'
export default class Searchbar extends Component {
    state = {
        seachQuery: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.seachQuery)
        this.setState({seachQuery: ''})
    }
    
    onInputChange = (e) => {
        this.setState({seachQuery: e.target.value})
    }

    render() {
        return (
           <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={this.onFormSubmit}>
              <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
              </button>

              <input
                className={s.SearchFormInput}
                value={this.state.seachQuery}
                onChange={this.onInputChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
           </form>
        </header>
       ) 
    }
}
