import Section from "../Section";
import SkillContainer from "./SkillContainer";

// language logos
import PythonLogo from '../../resources/logos/languages/python-logo.png';
import CLogo from '../../resources/logos/languages/C-logo.png';
import CsharpLogo from '../../resources/logos/languages/Csharp-logo.png';
import CssLogo from '../../resources/logos/languages/css-logo.png';
import HTMLLogo from '../../resources/logos/languages/html-logo.png';
import JavascriptLogo from '../../resources/logos/languages/javascript-logo.png';
import JavaLogo from '../../resources/logos/languages/java-logo.png';
import MATLABLogo from '../../resources/logos/languages/matlab-logo.png';
import RLogo from '../../resources/logos/languages/R-logo.png';
import SqlLogo from '../../resources/logos/languages/sql-logo.png';
import TypescriptLogo from '../../resources/logos/languages/typescript-logo.png';

// framework logos
import AspNetLogo from '../../resources/logos/frameworks/aspnet-logo.png';
import FlaskLogo from '../../resources/logos/frameworks/flask-logo.png';
import JavaFXLogo from '../../resources/logos/frameworks/javafx-logo.png';
import JUnitLogo from '../../resources/logos/frameworks/junit-logo.png';
import MochaLogo from '../../resources/logos/frameworks/mocha-logo.png';
import NodeJSLogo from '../../resources/logos/frameworks/nodejs-logo.png';
import NumpyLogo from '../../resources/logos/frameworks/numpy-logo.png';
import PandasLogo from '../../resources/logos/frameworks/pandas-logo.png';
import PuppeteerLogo from '../../resources/logos/frameworks/puppeteer-logo.png';
import ReactLogo from '../../resources/logos/frameworks/react-logo.png';
import SpringbootLogo from '../../resources/logos/frameworks/springboot-logo.png';


const SkillsSection = () => {
    const languageItems = [PythonLogo, JavaLogo, CLogo, CsharpLogo, RLogo, CssLogo, HTMLLogo, JavascriptLogo, TypescriptLogo, SqlLogo]
    const frameworkItems = [ReactLogo, SpringbootLogo, AspNetLogo, FlaskLogo, NodeJSLogo, JavaFXLogo, JUnitLogo, MochaLogo, PuppeteerLogo, NumpyLogo, PandasLogo]
    return (
        <Section id="skills-section">
            <div className="text-text h-screen flex flex-row space-x-10 justify-center items-center">
                <SkillContainer items={languageItems} id="languages" title="Languages" />
                <SkillContainer items={frameworkItems} id="landf" title="Libraries & Frameworks" />
                <SkillContainer id="tandp" title="Tools & Platforms" />
            </div>
        </Section>
    )
}

export default SkillsSection