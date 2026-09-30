import './Calendar.css'

export function Calendar({ date }) {
    console.log(date)

    const weekDay = date.toLocaleDateString('ru-RU', { weekday: 'long' });

    const day = date.getDate();
    const monthName = date.toLocaleDateString('ru-RU', { month: 'long' });
    const year = date.getFullYear()

    const getCurrentDayClassName = (dayNumber) => dayNumber === day ? 'ui-datepicker-today' : null

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{ weekDay }</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{ day }</div>
                    <div className="ui-datepicker-material-month">{ monthName }</div>
                    <div className="ui-datepicker-material-year">{ year }</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{ monthName }</span>&nbsp;<span
                    className="ui-datepicker-year">{ year }</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="ui-datepicker-other-month">28</td>
                    <td className="ui-datepicker-other-month">29</td>
                    <td className="ui-datepicker-other-month">30</td>
                    <td className={ getCurrentDayClassName(1) }>1</td>
                    <td className={ getCurrentDayClassName(2) }>2</td>
                    <td className={ getCurrentDayClassName(3) }>3</td>
                    <td className={ getCurrentDayClassName(4) }>4</td>
                </tr>
                <tr>
                    <td className={ getCurrentDayClassName(5) }>5</td>
                    <td className={ getCurrentDayClassName(6) }>6</td>
                    <td className={ getCurrentDayClassName(7) }>7</td>
                    <td className={ getCurrentDayClassName(8) }>8</td>
                    <td className={ getCurrentDayClassName(9) }>9</td>
                    <td className={ getCurrentDayClassName(10) }>10</td>
                    <td className={ getCurrentDayClassName(11) }>11</td>
                </tr>
                <tr>
                    <td className={ getCurrentDayClassName(12) }>12</td>
                    <td className={ getCurrentDayClassName(13) }>13</td>
                    <td className={ getCurrentDayClassName(14) }>14</td>
                    <td className={ getCurrentDayClassName(15) }>15</td>
                    <td className={ getCurrentDayClassName(16) }>16</td>
                    <td className={ getCurrentDayClassName(17) }>17</td>
                    <td className={ getCurrentDayClassName(18) }>18</td>
                </tr>
                <tr>
                    <td className={ getCurrentDayClassName(19) }>19</td>
                    <td className={ getCurrentDayClassName(20) }>20</td>
                    <td className={ getCurrentDayClassName(21) }>21</td>
                    <td className={ getCurrentDayClassName(22) }>22</td>
                    <td className={ getCurrentDayClassName(23) }>23</td>
                    <td className={ getCurrentDayClassName(24) }>24</td>
                    <td className={ getCurrentDayClassName(25) }>25</td>
                </tr>
                <tr>
                    <td className={ getCurrentDayClassName(26) }>26</td>
                    <td className={ getCurrentDayClassName(27) }>27</td>
                    <td className={ getCurrentDayClassName(28) }>28</td>
                    <td className={ getCurrentDayClassName(29) }>29</td>
                    <td className={ getCurrentDayClassName(30) }>30</td>
                    <td className={ getCurrentDayClassName(31) }>31</td>
                    <td className="ui-datepicker-other-month">1</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}