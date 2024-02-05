export default function TabButton({children,onSelect, isSelect}){
    
    
    return (
        <li>
            <button className={isSelect? "active" : "inactive"} onClick = {onSelect} >{children}</button>
        </li>
    );
}