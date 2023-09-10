import Section from "../Section";
import SkillContainer from "./SkillContainer";
import PythonLogo from '../../resources/logos/languages/python-logo.png';
import CLogo from '../../resources/logos/languages/C-logo.png';
import CsharpLogo from '../../resources/logos/languages/Csharp-logo.png';
import CssLogo from '../../resources/logos/languages/css-logo.png';
import HTMLLogo from '../../resources/logos/languages/html-logo.png';
import JavascriptLogo from '../../resources/logos/languages/javascript-logo.png';
import MATLABLogo from '../../resources/logos/languages/matlab-logo.png';
import RLogo from '../../resources/logos/languages/R-logo.png';
import SqlLogo from '../../resources/logos/languages/sql-logo.png';
import TypescriptLogo from '../../resources/logos/languages/typescript-logo.png';

const SkillsSection = () => {
    const buttonSize = 50;
    const languageItems = [PythonLogo, CLogo, CsharpLogo, CssLogo, HTMLLogo, JavascriptLogo, MATLABLogo, RLogo, SqlLogo, TypescriptLogo]
    return (
        <Section id="skills-section">
            <div className="text-text h-screen flex justify-center items-center">
                <SkillContainer items={languageItems} title="other" />
                <SkillContainer title="other" />
                <SkillContainer title="other" />
            </div>
        </Section>
    )
}

export default SkillsSection