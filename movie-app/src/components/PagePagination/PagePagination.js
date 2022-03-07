import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './pagination.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const darkTheme = createMuiTheme ({
  palette: {
    type: 'dark',
  }
})

const PagePagination = ({setPage, numOfPages = 10}) => {
	const handlePageChange = (page) => {
		setPage(page);
		window.scroll(0, 0);
	}

  return (
    <div className='pagination'>
      <ThemeProvider theme={darkTheme}>
      <Pagination
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        color='primary'
      />
      </ThemeProvider>
    </div>
  )
}

export default PagePagination;