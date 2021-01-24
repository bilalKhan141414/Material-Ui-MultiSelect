import React, { Component } from "react";
import clsx from 'clsx';
import Select  from "react-select";
import "./styles.css";
import Tooltip from "@material-ui/core/Tooltip";
import SelectAsyncPagination from "./SelectAsyncPagination";
import {defaultStyles} from './style';
import {filterOrignalData, generateOptions} from './../helpers';


export default class SelectAsync extends Component {
  constructor(props){
    super(props);
    this.state = {
        page:1,
        selectedBrand:0,
        Options:[],
        OrignalOptions:[],
        totalPages:0,
        filteredOptions:[],
        placeholder:"",
        value:"",
        isSearching:false
    }
  }
  handleOnchage = ( value, e ) => {
    this.props.onChangeHandler(value, e);
  }
  static getDerivedStateFromProps(nextProps, prevState){
      if((nextProps.Options & prevState.OrignalOptions.length <= 0 || nextProps.Options.length <= 0 || JSON.stringify(nextProps.Options) !== JSON.stringify(prevState.OrignalOptions)) && !prevState.isSearching) 
        {
          let totalPages = Math.ceil(nextProps.Options.length / 10);
          return {
            Options:nextProps.Options,
            OrignalOptions:nextProps.Options,
            totalPages,
            selectedBrand:nextProps.selectedBrand
          }
        }
      return null;
  }
  handlePrevButtonClick = () =>{
    if(this.state.page === 1) return;
    this.setState({
      page:this.state.page === 1?this.state.page :this.state.page - 1,
    })
  }
  handleNextButtonClick = () =>{
    let newPage = this.state.page + 1;
    if(newPage > this.state.totalPages  )
    {  
      return
    };
    this.setState({
      page:(newPage >= this.state.totalPages ? this.state.totalPages : newPage),
    })
  }
  setPageWhenSearchingIsApplied = (inputValue) => {
    this.setState({
      Options: inputValue.length > 0 ? [] : this.state.OrignalOptions,
      isSearching:true
    },()=>{
        var result = filterOrignalData(this.state.OrignalOptions, inputValue);
        if(result.length <= 0) return;
        let totalPages = Math.ceil(result.length / 10);
        this.setState({
            Options:result,
            page:1,
            totalPages:totalPages,
            value:inputValue,
            isSearching:false
        })
    })
  }
  setPagesWhenSearchFieldIsCleared = (inputValue) => {
    let data = this.state.OrignalOptions;
    let totalPages = Math.ceil(data.length / 10);
    this.setState({
        Options:data,
        page:1,
        totalPages:totalPages,
        value:inputValue,
        isSearching:false
    })
  }
  handleOnInputChange = (inputValue) =>{
      if(inputValue.length > 0)
        this.setPageWhenSearchingIsApplied(inputValue);
      else
        this.setPagesWhenSearchFieldIsCleared(inputValue);
  }
  formatOptionLabel = ({ value, label }) => {
      if(value === "pagination") return label;
      let labelLimit = this.props.labelLimit ? this.props.labelLimit : 25;
      return (
        <Tooltip placement="top" title={label} arrow>
            <span>
                {
                  (label.length > labelLimit ? label.substr(0, labelLimit) + "..." : label)
                }
            </span>
        </Tooltip>
      )
  };
  getFinalOptions = ({ page, Options }) => {
    let pageStart = (page*10)-10;
    let size = page*10;
    size = size > Options.length ? Options.length : size;
    return Options && Options.length > 0 ?  [
      ...generateOptions(size, Options,pageStart),
      { 
        label:<SelectAsyncPagination 
          handlePrevButtonClick={this.handlePrevButtonClick}
          handleNextButtonClick={this.handleNextButtonClick}
          currentPage={this.state.page}
          totalPages={this.state.totalPages}
          total={this.state.Options.length}
        />, 
        value: 'pagination',  
        disabled: true 
      }
    ]:[];
  }
  render() {
    return (
      <>
      <Select
      components={{ IndicatorSeparator: () => null }}
      className={clsx("basic-single asyncSelect",this.props.customClassName)}
      classNamePrefix="select"
      name={this.props.name}
      isClearable
      options={this.getFinalOptions(this.state)}
      placeholder={this.props.placeholder}
      value={this.props.value}
      // menuIsOpen
      onChange={this.handleOnchage}
      filterOption = {()=>this.state.Options.length > 0}
      onBlurResetsInput={false}
      formatOptionLabel={this.formatOptionLabel}
      onInputChange={this.handleOnInputChange}
      isLoading={this.props.isLoading}
      blurInputOnSelect={(e)=>e.preventDefault()} 
      onBlur={e=>e.preventDefault()}
      onCloseResetsInput={false} 
      isOptionDisabled={option => option.value === 'pagination'}
      styles={ this.props.styles ? this.props.styles : defaultStyles }
      theme={theme => ({
        ...theme,
        colors: {
            ...theme.colors,
            neutral50: '#9a9999',  // Placeholder color
        },
    })}
      {...this.props}
      />
     </>
    );
  }
}