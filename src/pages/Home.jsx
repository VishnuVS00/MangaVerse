import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchManga } from '../redux/mangaAction';

function Home() {

  const dispatch = useDispatch();

  const fetchMangaData = useSelector(
    (state) => state.manga?.fetchMangaData
  );

  useEffect(() => {
    // dispatch(fetchManga());
  }, [])

  return (
    <div className='bg-black p-3 h-[80vh]'>
      <input
        type="text"
        placeholder='Search'
        className='border-none w-full px-2 py-3 rounded-md mb-2'
      />

      <section>

      </section>
    </div>
  )
}

export default Home