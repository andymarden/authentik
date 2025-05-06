export interface ReleasesProps {
    releases: string[];
}

const Releases: React.FC<ReleasesProps> = ({ releases }) => {
    return JSON.stringify(releases);
};

export default Releases;
