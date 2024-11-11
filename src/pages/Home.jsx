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

  const popularList = [1, 2]
  const latestList = [1, 2, 3, 4, 5]

  return (
    <div className='bg-black p-3 pb-5 relative top-[10vh] mb-[20vh]'>
      <input
        type="text"
        placeholder='Search'
        className='border-none w-full px-2 py-3 rounded-md mb-2'
      />

      <section>
        <h2 className='text-white text-2xl font-bold my-2'>Popular</h2>
        <div className='border border-white h-[50vh] w-full flex gap-3 rounded-md overflow-x-auto p-2 '>
          {
            popularList.map((p) => (
              <div className='border border-white rounded-md w-full min-w-96'>
                <p className='text-white'>{p}</p>
              </div>
            )
            )
          }
        </div>
      </section>

      <section>
        <h2 className='text-white text-2xl font-bold my-2'>Latest</h2>
        <div className='border border-white h-[50vh] flex gap-3 rounded-md overflow-x-auto p-2'>
          {
            latestList.map((p) => (
              <div className='border border-white rounded-md w-screen min-w-96'>
                <p className='text-white'>{p}</p>
              </div>
            )
            )
          }
        </div>
      </section>
    </div>
  )
}

export default Home