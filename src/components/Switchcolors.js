import "./Switchcolors.scss";
import "../variable.scss";

function Switchcolors() {
  
  const root = document.querySelector(":root")
  let isDark = true
  
  function randColor() {

    root.style.setProperty("--color-mainbg", "#" + Math.floor(Math.random()*16777215).toString(16));
    root.style.setProperty("--color-black", "#" + Math.floor(Math.random()*16777215).toString(16));
    root.style.setProperty("--color-gray", "#" + Math.floor(Math.random()*16777215).toString(16));
    root.style.setProperty("--color-mainDark", "#" + Math.floor(Math.random()*16777215).toString(16));
    root.style.setProperty("--color-mainLight", "#" + Math.floor(Math.random()*16777215).toString(16));
  }
  
  function changeTheme() {
    

    if (isDark) {
      root.style.setProperty("--color-mainbg", "#F3E3E2");
      root.style.setProperty("--color-black", "#74112F");
      root.style.setProperty("--color-gray", "#24242B");
      root.style.setProperty("--color-mainDark", "#6B2E3C");
      root.style.setProperty("--color-mainLight", "#0C0C1E");
      
      isDark = false
    }
    
    else {
      root.style.setProperty("--color-mainbg", "#24242B");
      root.style.setProperty("--color-black", "#0C0C1E");
      root.style.setProperty("--color-gray", "#6B2E3C");
      root.style.setProperty("--color-mainDark", "#74112F");
      root.style.setProperty("--color-mainLight", "#F3E3E2");

      isDark = true
    }

  }

  return (
    <div className="Switchcolors">
      <div>
        <button className="Switchcolors-button" onClick={randColor}>
            <span>Change</span>
        </button>
      </div>
      <div>
        <button className="Switchcolors-button" onClick={changeTheme}>
            <span>Light/Dark</span>
        </button>
      </div>
    </div>
  );
}
export default Switchcolors;