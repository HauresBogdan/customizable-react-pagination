# customizable-react-pagination


### A simple lightweight fully customizable react component for pagination. With no other dependencies.

<br/>
<img src="https://raw.githubusercontent.com/HauresBogdan/reusable/master/images/customizable-react-pagination.jpg" alt="React Pagination" height="40px"/>
<br/>
<br/>

## Installation

```
$ npm install customizable-react-pagination
```
## Usage

```javascript
import "./App.css";
import React,{ useState } from "react";
import Pagination from 'customizable-react-pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(pageNumber) {
    console.log("current page: ", pageNumber);
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <Pagination 
      totalPages={27} 
      displayRange={5} 
      currentPage={currentPage} 
      onPageFlip={handlePageChange}
      backText={"Back"}
      nextText={"Next"}
      firstText={"Fist"}
      lastText={"Last"}
       />
    </div>
  );
}

export default App;
```

## Customization example


```CSS
.ul-pagination {
  list-style-type: none;
  display: flex;
  justify-content: center; 
}

.li-pagination, .li-next, .li-back, .li-first, .li-last {
  padding: 0 10px;
  border-top: 1px solid rgb(170, 170, 170);
  border-bottom: 1px solid rgb(170, 170, 170);
  border-left: 1px solid rgb(170, 170, 170);
  color: rgb(0, 123, 255);
}

.li-pagination:hover, .li-next:hover, .li-back:hover, .li-first:hover, .li-last:hover {  
  background: rgb(224, 224, 224);
  cursor: pointer;
}

.li-last {
  border-right: 1px solid rgb(170, 170, 170);
}

.li-active, .li-active:hover {
  background: rgb(0, 123, 255);
  color: white;
}

.li-first {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.li-last {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```