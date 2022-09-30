import styles from 'styled-components'

const StyleNav = styles.div`
.Logo {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: 45.5%;
  margin-top: 5%;
  width: 140px;
}

.Iconsearch {
  position: absolute;
  padding-top: 0.7%;
}

.Iconsearch.active {
  position: absolute;
  padding-top: 0.7%;
  left: 44.3%;
}

.search::placeholder{
  padding-left: 0.2px;
}

.search.active::placeholder{
  padding-left: 0px;
}

.search {
  background-color: aliceblue;
  border: 2px solid #ccc;
  width: 200px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  border-color: rgb(65, 61, 61);
  border-width: 0.5px;
  padding-left: 15%;
  position: relative;
}

.search.active {
  background-color: aliceblue;
  border: 2px solid #ccc;
  width: 109px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  border-color: rgb(65, 61, 61);
  border-width: 0.5px;
  padding-left: 27%;
  right: 41%;
  visibility: visible;
  opacity: 1;
  transform: translateZ(1px);
}

.burgernavbar {
  width: 10%;
  padding-left: 3%;
  padding-right: 12%;
  background-color: #f7d100;
  border-color: #f7d100;
  border-radius: 5px;
  cursor: pointer;
  float: right;
  margin-left: 10%;
  margin-top: 6%;
  z-index: 3;
}

.burgernavbar.active {
  width: 20%;
  padding-left: 3%;
  padding-right: 12%;
  background-color: #f7d100;
  border-color: #f7d100;
  border-radius: 5px;
  cursor: pointer;
  float: right;
  margin-left: 10%;
  margin-top: 10%;
  z-index: 3;
  position: relative;
  left: 43%;
  /*transition: all 0.3s ease ease-out 0s;
  visibility: 0s linear 0.3s;*/

}

.burgernavbar span {
  display: flex;
  width: 14px;
  height: 2px;
  background: black;
  border-radius: 4px;
  transition: 0.5s;
  margin: 5px auto;
  justify-content: left;
}

.burgernavbar span:nth-child(1) {
  width: 18px;
  transform: translateY(3px) translateX(2px);
}

.burgernavbar span:nth-child(3) {
  width: 15px;
  transform: translateY(-3px) translateX(5px);
}

.burgernavbar span:nth-child(2) {
  width: 13px;
  transform: translateY(0px) translateX(7px);
}

.burgernavbar.active span:nth-child(1) {
  -webkit-transform: translateY(10px) rotate(45deg);
  transform: translateY(7px) rotate(45deg) translateX(1px);
}

.burgernavbar.active span:nth-child(3) {
  opacity: 0;
}

.burgernavbar.active span:nth-child(2) {
  -webkit-transform: translateY(20px) rotate(40deg);
  transform: translateY(2px) rotate(-45deg) translateX(1.8px);
  width: 17px;
}

.navmenu {
  position: fixed;
  right: -100%;
  flex-direction: column;
  background-color: #f7d100;
  width: 7%;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  z-index: 2;
  list-style-type: none;
  border: 1px solid black;
  
}

.navmenu.active {
  left: 50.6%;
  top: 17%;
  visibility: visible;
  opacity: 1;
  transform: translateY(2px);
}

.navmenu.active:focus-visible {
  visibility: visible;
  opacity: 1;
  transform: translateY(10px);
  transition-delay: 0s;
}

.navitem {
  text-align: left;
  margin: 1rem;
  margin-left: -5%;
}

.navlink {
  text-decoration: none;
  color: #000;
}

.navlink.active {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

.navlinkKeluar {
  text-decoration: none;
  color: #ed3434;
}

.navlinkKeluar.active {
  text-decoration: none;
  color: #ed3434;
}

.displaynyasisearchdanburger {
  display: flex;
  max-width: 1000px;
}
`