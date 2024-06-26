import React from 'react';

const page = () => {
  return (
    <section>
      <div className='relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <div className='flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl'>
            <p className='mx-auto text-base leading-relaxed text-gray-500'>
              Happenify revolutionized our event management process! With its
              intuitive interface and comprehensive features.
            </p>
            <h2 className='mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase'>
              Manu M Benakal,{' '}
              <span className='font-semibold text-black lg:mb-0'>
                CosmicTech{' '}
              </span>
            </h2>
            <img
              alt='Manu'
              className='inline-block object-cover object-center w-20 h-20 mt-8 rounded-full'
              src='https://media.licdn.com/dms/image/D5603AQHQXM5XlUqjTg/profile-displayphoto-shrink_200_200/0/1705721021390?e=1718841600&v=beta&t=nW1eygeIkNHMBjUpd35bqaRvLI0YnRlmjXda9v4AbY4'
            />
          </div>
          <div className='flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl'>
            <p className='mx-auto text-base leading-relaxed text-gray-500'>
              As an event organizer, I have ve used several platforms, but none
              come close to the efficiency and flexibility offered by Happenify.
            </p>
            <h2 className='mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase'>
              Prajwal P,{' '}
              <span className='font-semibold text-black lg:mb-0'>TCS </span>
            </h2>
            <img
              alt='Prajwal'
              className='inline-block object-cover object-center w-20 h-20 mt-8 rounded-full'
              src='https://media.licdn.com/dms/image/D5603AQHt6jez8Jy4XA/profile-displayphoto-shrink_200_200/0/1711940673464?e=1718841600&v=beta&t=0WsfOloXduBcUexcYjowq3yYXRxvbUIqUdFNBRPWl2I'
            />
          </div>
          <div className='flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl'>
            <p className='mx-auto text-base leading-relaxed text-gray-500'>
              Attending events has never been more enjoyable thanks to
              Happenify! The user-friendly interface
            </p>
            <h2 className='mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase'>
              Varun S Athreya,{' '}
              <span className='font-semibold text-black lg:mb-0'>
                ContentStack{' '}
              </span>
            </h2>
            <img
              alt='Varun'
              className='inline-block object-cover object-center w-20 h-20 mt-8 rounded-full'
              src='https://media.licdn.com/dms/image/D5603AQGON4a5-BXIZw/profile-displayphoto-shrink_800_800/0/1701156182059?e=1724284800&v=beta&t=9bZY3Roz2mJWDxE3GnbA0VIOY4pyVKTrMBuDw6K5cto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
