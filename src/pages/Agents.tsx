import AgentProfile from '@/sections/agents/AgentProfile';
import TeamMembersSlider from '@/sections/agents/TeamSlider';
import React from 'react';

const Agents: React.FC = () => {
    return (
        <div>
            <AgentProfile />
            <TeamMembersSlider />
        </div>
    );
};

export default Agents;