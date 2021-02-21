import React from 'react'
import '../css/TeamMember.css';
import TeamMemberItem from './TeamMemberItem';
import josh from '../assets/img/josh.png'
import esther from '../assets/img/esther.png'
import herbert from '../assets/img/herbert.png'
import michael from '../assets/img/michael.png'
import abdul from '../assets/img/abdul.png'
import tiffany from '../assets/img/tiffany.png'
import kudirat from '../assets/img/kudirat.png'
import yedidia from '../assets/img/yedidia.png'
import you from '../assets/img/you.png'

function TeamMember() {
    return (
        <section className="teamMember">
            <div className="teamMember__title">
                <h2>Meet our team</h2>
                <p>Our team is made up of expert Designers, Developers,Product Managers and Marketers <br/>
                    who are curious to learn, grow and share their knowledge to inspire the African design community. 
                </p>
            </div>

            <div className="teamMember__teams">
                <TeamMemberItem
                img={josh}
                fullname="Venceslas Joshua"
                nation="Congo-kinshasa"
                />
                <TeamMemberItem
                img={esther}
                fullname="Esther Daniel "
                nation="Nigeria"
                />
                <TeamMemberItem
                img={herbert}
                fullname="Herbert Olinga"
                nation="Uganda"
                />
            </div>
            <div className="teamMember__teams">
                <TeamMemberItem
                    img={michael}
                    fullname="Michael Shumaker"
                    nation="Nigeria"
                    />
                    <TeamMemberItem
                    img={abdul}
                    fullname="Abdul Rasheed Dan-Abu"
                    nation="Nigeria"
                    />
                    <TeamMemberItem
                    img={tiffany}
                    fullname="Tiffany Kisero"
                    nation="Congo-kinshasa"
                    />
                </div>
                <div className="teamMember__teams">
                <TeamMemberItem
                    img={kudirat}
                    fullname="Kudirat Bakare"
                    nation="Kenya"
                    />
                    <TeamMemberItem
                    img={yedidia}
                    fullname="Yedidya Lunghe Hyongo"
                    nation="Nigeria"
                    />
                    <TeamMemberItem
                    img={you}
                    fullname="You"
                    nation="???"
                    />
                </div>
        </section>
    )
}

export default TeamMember
