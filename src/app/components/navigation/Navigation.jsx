// import ConnectedAccount from "./ConnectedAccount";
// import ConnectedNetwork from "./ConnectedNetwork";

// const Navigation = () => {
//   return (
//     <nav>
//       <>
//         <>
//           <ConnectedAccount />
//           <ConnectedNetwork />
//         </>
//       </>
//     </nav>
//   );
// };

// export default Navigation;

import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";

const Navigation = () => {
  return (
    <nav>
      <div className="container mx-auto min-w-screen-sm px-4 py-4">
        <div className="flex flex-row justify-between space-x-16">
          <ConnectedAccount />
          <ConnectedNetwork />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
