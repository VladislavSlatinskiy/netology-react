import './IconSwitch.css'

export function IconSwitch({icon, onSwitch}) {
    return (
        <button className={`icon-switch icon-switch_${icon}`} onClick={() => onSwitch()}></button>
    )
}
