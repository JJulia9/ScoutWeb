import React from 'react';


const BadgeCard = ({id, name, picture }) => {
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

        <div   // Add an ID to the badge card element to print modifivation
          className="transition-all duration-1000 bg-tetriady hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group"
        >
          <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
          <div className="py-2 px-9 relative">
            
          <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full"
                                src={picture}
                                alt="badge icon" />
                  </div>
            <div>
              <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{name}</h3>
              {/* <p className="mt-4 text-base text-gray-600 group-hover:text-white"> nothing for now</p> */}
            </div>
            <button onClick={printBadge}>Print Badge</button>
          </div>
        </div>
        
        </>

    );
}

export default BadgeCard;