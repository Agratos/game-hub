import React from 'react';

const MyPageGamePlatforms = () => {
  return (
    <>
      <h2 className='mypage-headline'>Game platforms</h2>
      <div className='mainpage-game-platforms-card'>
        <div style={{ width: '50%' }}>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='87'
              height='71'
              viewBox='0 0 87 71'
            >
              <path
                d='M-6 80.047l38.043 5.244V48.977H-6zm0-35.757h38.043V7.53L-6 12.775zm42.227 41.559L86.82 92.82V48.977H36.227zm0-78.876V44.29h50.594V0z'
                fill='#FFF'
                opacity='.2'
              ></path>
            </svg>
          </span>
        </div>
        <div style={{ width: '25%' }}>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='102'
              height='74'
              viewBox='0 0 102 74'
            >
              <path
                fill='#FFF'
                d='M44.766 96L25.84 87.924V0s41.132 6.88 46.793 23.924c5.664 17.047-3.161 28.088-6.257 28.413-8.645.897-11.923-4.487-11.923-4.487V20.335l-9.388-3.887-.3 79.552zm4.919-12.113v10.315S94.243 79.848 100.8 74.317c6.557-5.533-15.35-19.289-27.121-16.6 0 0-12.51.606-23.845 5.533-.108.044 0 9.27 0 9.27l28.761-6.727 10.133 4.485-39.043 13.61zM21.07 83.14s-5.812 2.99-18.777 2.84C-10.671 85.828-22.148 82.24-22 74.467c.15-7.776 21.46-16.299 42.92-19.888v10.915l-22.8 5.981s-3.903 4.94 1.342 5.084c11.922.332 21.758-2.842 21.758-2.842l-.15 9.423z'
                opacity='.2'
              ></path>
            </svg>
          </span>
        </div>
        <div style={{ width: '15%' }}>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='72'
              height='80'
              viewBox='0 0 72 80'
            >
              <g fill='#666' opacity='.2'>
                <path d='M51.198-4h.704c.564 6.722-2.099 11.744-5.335 15.381-3.176 3.612-7.525 7.115-14.558 6.584-.47-6.626 2.198-11.276 5.43-14.904C40.437-.321 45.932-3.33 51.198-4z'></path>
                <path d='M72 65.634v.19c-1.985 5.829-4.817 10.825-8.272 15.46-3.154 4.21-7.02 9.873-13.922 9.873-5.964 0-9.925-3.718-16.037-3.82-6.466-.1-10.022 3.11-15.933 3.918H15.82c-4.341-.61-7.844-3.943-10.397-6.946C-2.102 75.435-7.918 63.971-9 49.302v-4.31c.458-10.5 5.72-19.036 12.713-23.173 3.691-2.2 8.765-4.073 14.415-3.236 2.421.364 4.895 1.168 7.063 1.963 2.055.766 4.625 2.123 7.06 2.051 1.649-.046 3.289-.88 4.951-1.467 4.87-1.705 9.642-3.66 15.933-2.741 7.56 1.108 12.927 4.365 16.243 9.39-6.396 3.947-11.452 9.894-10.589 20.05.768 9.226 6.3 14.624 13.211 17.805z'></path>
              </g>
            </svg>
          </span>
        </div>
        <div style={{ width: '10%' }}>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='71'
              viewBox='0 0 48 71'
            >
              <path
                fill='#FFF'
                d='M41.06 0H.94C-2.9 0-6 3.134-6 6.993v82.02C-6 92.87-2.9 96 .94 96h40.12c3.833 0 6.94-3.131 6.94-6.986V6.994C48 3.133 44.893 0 41.06 0zM11.1 4.247h19.807c.5 0 .907.752.907 1.683 0 .93-.407 1.686-.907 1.686H11.1c-.504 0-.903-.756-.903-1.686 0-.93.4-1.683.903-1.683zm9.903 84.85c-2.442 0-4.43-2-4.43-4.463s1.988-4.457 4.43-4.457c2.436 0 4.424 1.994 4.424 4.457s-1.988 4.464-4.424 4.464zm21.799-15.283h-43.6V11.8h43.6v62.014z'
                opacity='.2'
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <p
        style={{
          fontSize: '14px',
        }}
      >
        Be proud of your platform preferences. For better accuracy choose the
        platform on which you played while adding games to your profile.
      </p>
    </>
  );
};

export default MyPageGamePlatforms;
