import React from 'react'
import '../css/TeamMember.css';
import TeamMemberItem from './TeamMemberItem';
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
                img="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2011/10/christucker1.jpg?w=525"
                fullname="venceslas"
                nation="Congo-kinshasa"
                />
                <TeamMemberItem
                img="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2011/10/christucker1.jpg?w=525"
                fullname="venceslas"
                nation="Congo-kinshasa"
                />
                <TeamMemberItem
                img="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2011/10/christucker1.jpg?w=525"
                fullname="venceslas"
                nation="Congo-kinshasa"
                />
            </div>
            <div className="teamMember__teams">
                <TeamMemberItem
                    img="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2011/10/christucker1.jpg?w=525"
                    fullname="venceslas"
                    nation="Congo-kinshasa"
                    />
                    <TeamMemberItem
                    img="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2011/10/christucker1.jpg?w=525"
                    fullname="venceslas"
                    nation="Congo-kinshasa"
                    />
                    <TeamMemberItem
                    img="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2011/10/christucker1.jpg?w=525"
                    fullname="venceslas"
                    nation="Congo-kinshasa"
                    />
                </div>
        </section>
    )
}

export default TeamMember
