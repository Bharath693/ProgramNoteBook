 //pagination logic and variables
   const indexOfLastPost = currentPage * postPerPages;
   const indexOfFirstPost = indexOfLastPost - postPerPages

   const Data = ProblamsCardData.slice(indexOfFirstPost,indexOfLastPost)
  const handlePagination = (num) =>{
    // console.log(num)
     setCurrentPage(num)
  }
  console.log(currentPage)
  let pages = [];

  for(let i=0;i<Math.round(ProblamsCardData.length/2);i++){
    pages.push(i);
  }

{pages.map((item) =>(
        <label onClick={() =>handlePagination(item)}>{item+1}</label>
      ))}
