import React from 'react';


const BadgeCard = ({id, name, picture,description }) => {
   // Handle print badge
   const printBadge = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${name} Badge</title>
        </head>
        <body>
          <div id="badge-card-${id}">
            <h2>${name} Badge</h2>
            <img src="${picture}" alt="Badge icon" />
            <p>${description}</p>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };
  



    return (
        <>

<div className="transition-all duration-1000 bg-tetriady hover:bg-primary hover:shadow-xl m-2 p-4 relative  group rounded-xl text-center ">
  <div className="py-2 px-9 relative flex flex-col items-center rounded-xl border-secondary border-solid border-2 "> {/* Updated */}
    <div className="text-center my-2 rounded-xl">
      <img className="h-16 w-16 rounded-full" src={picture} alt="badge icon" />
    </div>
    <div className="text-center flex flex-row justify-center rounded-xl"> {/* Updated */}
      <h3 className="mt-8 text-lg font-semibold text-secondary group-hover:text-white">{name}</h3>
      

    <button onClick={printBadge}>
      <svg className="w-38 h-38" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#ffffff" viewBox="0 0 38 38">
        <path stroke="#1A4E38" strokeLinejoin="round" strokeWidth="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
      </svg>
    </button>
    </div>
    <p className="my-3 text-sm font-semibold text-secondary group-hover:text-white">{description}</p>
  </div>
</div>



        
        
        </>

    );
}

export default BadgeCard;