import React from 'react'
// import prof images 
import josh from '../../assets/images/josh.png';
import esther from '../../assets/images/esther.png'
import herbert from '../../assets/images/herbert.png'
import michael from '../../assets/images/michael.png'
import abdul from '../../assets/images/abdul.png'
import tiffany from '../../assets/images/tiffany.png'
import kudirat from '../../assets/images/kudirat.png'
import yedidia from '../../assets/images/yedidia.png'
import you from '../../assets/images/you.png'

// import components
import MemberItem from '../memberItem/memberItem.component';

function Member() {
    return (
        <section className="mt-4">
            <div className="text-center">
                <h2>Meet our team</h2>
                <p className="mt-2">Our team is made up of expert Designers, Developers,Product Managers and Marketers <br/>
                    who are curious to learn, grow and share their knowledge to inspire the African design community. 
                </p>
            </div>
            <div className="row">
                <MemberItem
                img={josh}
                name="Venceslas Joshua"
                nationality="Congo-kinshasa"
                />
                <MemberItem
                img={esther}
                name="Esther Daniel "
                nationality="Nigeria"
                />
                <MemberItem
                img={herbert}
                name="Herbert Olinga"
                nationality="Uganda"
                />
                <MemberItem
                    img={michael}
                    name="Michael Shumaker"
                    nationality="Nigeria"
                    />
                    <MemberItem
                    img={abdul}
                    name="Abdul Rasheed Dan-Abu"
                    nationality="Nigeria"
                    />
                    <MemberItem
                    img={tiffany}
                    name="Tiffany Kisero"
                    nationality="Congo-kinshasa"
                    />
                    <MemberItem
                    img={kudirat}
                    name="Kudirat Bakare"
                    nationality="Kenya"
                    />
                    <MemberItem
                    img={yedidia}
                    name="Yedidya Lunghe Hyongo"
                    nationality="Nigeria"
                    />
                    <MemberItem
                    img={you}
                    name="You"
                    nationality="???"
                    />
            </div>
        </section>
    )
}

export default Member
