import {  useState } from 'react';
import ReactPaginate from 'react-paginate';
import Reciters from '../Components/Al-Reciters/Reciters';
import { Reciter } from '../Types/app';

export default function PaginatedItems({ itemsPerPage , data }:{ itemsPerPage :number, data:object[] }) {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset :number= itemOffset + itemsPerPage;
  const currentItems:Reciter[] = data.slice(itemOffset, endOffset) as  Reciter[];
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event:{ selected: number}) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    
  };
  return (
    <>
{ pageCount == 0 ? <div className='text-center py-5 mt-5' style={{height:200}}>
<h2>لا يوجد القارئ الذي تبحث عنه</h2>
</div> : <> <Reciters reciters={currentItems} />
      <div className='mx-auto col-8 mt-3 '>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        selectedPageRel={'1'}
        nextClassName={`p-0  ${pageCount == 1 &&  'd-none'}`}
        nextLinkClassName=' btn btn-outline-secondary  py-2 px-3 '
        previousLinkClassName=' btn btn-outline-secondary p-2 px-3'
        previousClassName={`p-0  ${pageCount == 1 &&  'd-none'}`}
        breakLinkClassName='btn btn-outline-secondary'
        pageLinkClassName='btn btn-outline-secondary'
        activeLinkClassName='bg-secondary  rounded text-light'
        className='d-flex gap-2 py-3 justify-content-around align-items-center '
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      </div>
      </>
      }
    </>
  );
}
