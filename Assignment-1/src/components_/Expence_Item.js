import './css_files_/Expence_Item.css';
import EntryDate from './EntryDate.js';

function ExpenceItem(App_props_){
    // Variables:

    // A part to build HTML component:
    return(
        <div className="expence_root">
            <EntryDate ls_date={App_props_.ls_date} />
            <div className='expence_description_'>
                <div className='expence_price_'>{App_props_.ls_price}</div>
                <div className='expence_title_'><a target={"_blank"} href={App_props_.ls_href}>{App_props_.ls_linkname}</a></div>
            </div>
        </div>
    );//[return]
}//[fn]

export default ExpenceItem;