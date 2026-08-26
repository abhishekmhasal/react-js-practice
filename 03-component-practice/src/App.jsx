import React from "react";
// import Card from "./component/Card";
// import Nav from "./component/Nav"
import Men from "./component/Men";

 const App = () => {
//   const users = [
//     {
//       fullName: "Peter Parker",
//       title: "Spider-Man",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=SpiderMan",
//       coverImage: "https://picsum.photos/seed/spiderman/1200/400",
//       likeCount: 15420,
//       postCount: 128,
//       viewsCount: 345670,
//       followed: true,
//     },
//     {
//       fullName: "Bruce Wayne",
//       title: "Batman",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=Batman",
//       coverImage: "https://picsum.photos/seed/batman/1200/400",
//       likeCount: 27890,
//       postCount: 215,
//       viewsCount: 892340,
//       followed: false,
//     },
//     {
//       fullName: "Clark Kent",
//       title: "Superman",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=Superman",
//       coverImage: "https://picsum.photos/seed/superman/1200/400",
//       likeCount: 32100,
//       postCount: 301,
//       viewsCount: 1200450,
//       followed: true,
//     },
//     {
//       fullName: "Diana Prince",
//       title: "Wonder Woman",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=WonderWoman",
//       coverImage: "https://picsum.photos/seed/wonderwoman/1200/400",
//       likeCount: 19870,
//       postCount: 187,
//       viewsCount: 654320,
//       followed: true,
//     },
//     {
//       fullName: "Tony Stark",
//       title: "Iron Man",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=IronMan",
//       coverImage: "https://picsum.photos/seed/ironman/1200/400",
//       likeCount: 41250,
//       postCount: 352,
//       viewsCount: 1843000,
//       followed: false,
//     },
//     {
//       fullName: "Steve Rogers",
//       title: "Captain America",
//       profile:
//         "https://api.dicebear.com/7.x/adventurer/svg?seed=CaptainAmerica",
//       coverImage: "https://picsum.photos/seed/captainamerica/1200/400",
//       likeCount: 24350,
//       postCount: 176,
//       viewsCount: 712900,
//       followed: true,
//     },
//     {
//       fullName: "Thor Odinson",
//       title: "Thor",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=Thor",
//       coverImage: "https://picsum.photos/seed/thor/1200/400",
//       likeCount: 36780,
//       postCount: 229,
//       viewsCount: 954210,
//       followed: false,
//     },
//     {
//       fullName: "Barry Allen",
//       title: "The Flash",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=Flash",
//       coverImage: "https://picsum.photos/seed/flash/1200/400",
//       likeCount: 18760,
//       postCount: 143,
//       viewsCount: 543870,
//       followed: true,
//     },
//     {
//       fullName: "Arthur Curry",
//       title: "Aquaman",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aquaman",
//       coverImage: "https://picsum.photos/seed/aquaman/1200/400",
//       likeCount: 16240,
//       postCount: 119,
//       viewsCount: 432510,
//       followed: false,
//     },
//     {
//       fullName: "Hal Jordan",
//       title: "Green Lantern",
//       profile: "https://api.dicebear.com/7.x/adventurer/svg?seed=GreenLantern",
//       coverImage: "https://picsum.photos/seed/greenlantern/1200/400",
//       likeCount: 21430,
//       postCount: 167,
//       viewsCount: 678940,
//       followed: true,
//     },
//   ];
  const links=[ "home","about","contact","bootcpamp"]
  return (
    
    <div>
      <Nav title= " Abhishek"
       links={links.map((item,idx)=>{
           return <h1 key={idx}>{item}</h1>
       })}/>
    </div>
  )};
    // <div className=" p-8 grid grid-cols-4 gap-6 h-screen bg-white -300 ">
    //   {users.map(function(elem){
    //     return <Card users={elem}/>
    //   })}
    ///div>

  
    

       
  

export default App;
