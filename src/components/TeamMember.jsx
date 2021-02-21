import React from 'react'
import '../css/TeamMember.css';
import TeamMemberItem from './TeamMemberItem';
import josh from '../assets/img/josh.png'
import esther from '../assets/img/esther.png'
import herbert from '../assets/img/herbert.png'
import michael from '../assets/img/michael.png'
import abdul from '../assets/img/abdul.png'
import tiffany from '../assets/img/tiffany.png'

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
                fullname="venceslas"
                nation="Congo-kinshasa"
                />
                <TeamMemberItem
                img={esther}
                fullname="venceslas"
                nation="Congo-kinshasa"
                />
                <TeamMemberItem
                img={herbert}
                fullname="venceslas"
                nation="Congo-kinshasa"
                />
            </div>
            <div className="teamMember__teams">
                <TeamMemberItem
                    img={michael}
                    fullname="venceslas"
                    nation="Congo-kinshasa"
                    />
                    <TeamMemberItem
                    img={abdul}
                    fullname="venceslas"
                    nation="Congo-kinshasa"
                    />
                    <TeamMemberItem
                    img={tiffany}
                    fullname="venceslas"
                    nation="Congo-kinshasa"
                    />
                </div>
        </section>
    )
}

export default TeamMember
