import {useState} from 'react';

function Pagination(props) {

  const totalPages = props.totalPages;
  var currentPage = props.currentPage;
  const displayRange = props.displayRange;
  const pagesArr = [];
    
  for(let i=1; i<=totalPages; i++){
    pagesArr.push(i);
  }
  const [trimmedData, setTrimedData]  = useState(pagesArr.slice(0,displayRange));

  function handlePageChange(page) {
    if(page==="Back" && currentPage>1 ) {
      currentPage = currentPage - 1;
      props.onPageFlip(currentPage);
    } else if (page==="Next" && currentPage<totalPages) {
      currentPage = currentPage + 1;
      props.onPageFlip(currentPage);
    } else if(page!=="Back" && page!=="Next")
    { 
      currentPage = page;
      props.onPageFlip(currentPage);
    }
    //calling pagination function so we get out trimmedData and use it to render visible pages
    pagination();
  }
 
  function pagination() {
    var trimStart;
    var trimEnd;
    //if the current page is at the end of the array minus half of diplay range
    //put trimstart as pagesArr.length-displayRange we it wont get trim again
    if (currentPage>pagesArr.length-displayRange/2) {
      trimStart =  pagesArr.length-displayRange;
      trimEnd =  (trimStart+displayRange);
    }
    //if current page is under half of the display range
    else if(currentPage<displayRange/2){
      trimStart =  0;
      trimEnd =  (trimStart+displayRange);
    } 
    //if current page is after half of diplay page trim so that current active page remain in middle
    else if (currentPage>displayRange/2)
    {
      trimStart =  currentPage-displayRange/2;
      trimEnd =  (trimStart+displayRange);
    }    
    setTrimedData(pagesArr.slice(trimStart,trimEnd));
  };
  
  return (
    <div className="unselectable">  
      <ul className="ul-pagination">
        <li className={"li-first"} onClick={()=>{handlePageChange(1)}}>{props.firstText ?  props.firstText : "<<"}</li>
        <li className="li-back" onClick={()=>{handlePageChange("Back")}}>{props.backText ?  props.backText : "<"}</li>
        {trimmedData.map((page,i) => (i+1<=displayRange) && <li className={`li-pagination ${currentPage===page && "li-active"}`} 
        onClick={()=>{handlePageChange(page)}}  key={page}>{page}</li>)}    
        <li className="li-next" onClick={()=>{handlePageChange("Next")}}>{props.nextText ?  props.nextText : ">"}</li>
        <li className="li-last" onClick={()=>{handlePageChange(props.totalPages)}}>{props.lastText ?  props.lastText : ">>"}</li>
      </ul>
    </div>
  );
}

export default Pagination;