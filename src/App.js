import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  //handle gender radiobuttons
  const handleGenderChange = (e) =>{
    setGender(e.target.value);
  }
  //handle skills checkboxes
  const handleSkillChange = (e) =>{
    const selectedSkill = e.target.value;
    if(skills.includes(selectedSkill)){
      setSkills(skills.filter(skill => skill !== selectedSkill));
    }
    else{
      setSkills([...skills, selectedSkill]);
    }
  }
  //handle enroll button
  const handleEnrollBtn = (e) =>{
    e.preventDefault();
    const newStudents = {
      name: name,
      gender: gender,
      email: email,
      websiteLink: websiteLink,
      skills: Array.isArray(skills) ? skills : [skills],
      imageLink: imageLink,
    }
    setEnrolledStudents([...enrolledStudents, newStudents])
    setName("");
    setEmail("");
    setWebsiteLink("");
    setImageLink("");
    setGender("");
    setSkills("");
  }
  //handle clear button
  const handleClearBtn = () =>{
    setName("");
    setEmail("");
    setWebsiteLink("");
    setImageLink("");
    setGender("");
    setSkills("");
  }

  return (
    <div className="App">
      <div className="header">
        <h2>STUDENT ENROLLMENT FORM</h2>
      </div>
      <div className="wrapper">
        <div className="inputs">
          <form>
              <fieldset>
                <h3>Student Enrollment Details</h3>
                <div className="field">
                    <label>Name<sup>*</sup></label>
                    <input 
                      type="text" 
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) =>setName(e.target.value)}
                      />
                </div>

                <div className="field" id="email">
                    <label>Email Address<sup>*</sup></label>
                    <input 
                      type="text" 
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) =>setEmail(e.target.value)}
                      />
                </div>

                <div className="field">
                    <label>Website Link<sup>*</sup></label>
                    <input 
                      type="text" 
                      placeholder="Enter website link"
                      value={websiteLink}
                      onChange={(e) =>setWebsiteLink(e.target.value)}
                      />
                </div>

                <div className="field">
                    <label>Image Link<sup>*</sup></label>
                    <input 
                      type="text" 
                      placeholder="Enter image link"
                      value={imageLink}
                      onChange={(e) =>setImageLink(e.target.value)}
                      />
                </div>

                <div id="radio-btn">
                    <label>Gender<sup>*</sup></label>
                    <input 
                      type="radio"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={handleGenderChange}
                      />
                    <label>Male</label>
                    <input 
                      type="radio"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={handleGenderChange}
                      />
                    <label>Female</label>
                </div>

                <div id="checkbox-btn">
                    <label>Skills</label>
                    <input 
                      type="checkbox"
                      value="HTML"
                      checked={skills.includes('HTML')}
                      onChange={handleSkillChange}
                      />
                    <label>HTML</label>
                    <input 
                      type="checkbox"
                      value="CSS"
                      checked={skills.includes('CSS')}
                      onChange={handleSkillChange}
                      />
                    <label>CSS</label>
                    <input 
                      type="checkbox"
                      value="JavaScript"
                      checked={skills.includes('JavaScript')}
                      onChange={handleSkillChange}
                      />
                    <label>JavaScript</label>
                    <input 
                      type="checkbox"
                      value="React"
                      checked={skills.includes('React')}
                      onChange={handleSkillChange}
                      />
                    <label>React</label>
                </div>

                <div>
                  <button id="enroll-btn" onClick={handleEnrollBtn}>Enroll Student</button>
                  <button id="clear-btn" onClick={handleClearBtn}>Clear</button>
                </div>
              </fieldset>
          </form>
          </div>

          <div className="output">
            <h3>Enrolled Students</h3>
            <div className="description">
              {enrolledStudents.map((student, index) =>(
                <div key={index} className='student-card'>
                  <div className='student-info'>
                    <h4>{student.name}</h4>
                    <p>{student.gender}</p>
                    <p>{student.email}</p>
                    <p><a href={student.websiteLink} target="_blank" rel="noopener noreferrer">{student.websiteLink}</a></p>
                    <p>{student.skills.join(',')}</p>
                  </div>
                  <div className='student-image'>
                    <img src={student.imageLink} alt={`Image of ${student.name}`}/>
                  </div>

                </div>
              ))}
            </div>
          </div>
        

        

 



      </div>
       
    </div>
  );
}

export default App;
