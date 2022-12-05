import React from 'react';

const StartHere = () => {
    return(
        <div className="ui container grid" >
            <div className="sixteen column centered row" style={{marginTop:'1.5vh'}}>
                <h3>The Four Principles of Kinetography Laban</h3>
                <div className="sixteen wide tablet eight wide computer column" style={{marginTop:'1.5vh', textAlign: 'justify'}}>
                    <p>The structure of Kinetography is surprisingly simple; the basic forms of the
                        symbols are very few. With these symbols and their logical variations every
                        movement of the human body can be described in accordance with four simple
                        principles. The movement possibilities of the human body are enormous because
                        of its complicated structure. This book with its many examples shows how this
                        complexity can be mastered by the adroit use of a few well chosen and varied
                        signs.</p>
                        <p>The four main questions raised in the description of a movement are:</p>
                        <ol>
                            <li>What happened?</li>
                            <li>When did it happen?</li>
                            <li>How long did it last?</li>
                            <li>Who (or what body part) did it?</li>
                        </ol>
                        <h4>First Principle</h4>
                        <p>The shape of the movement sign shows what should happen. In this case there
                            are two basic possibilities. Progression and rotation. Progression is expressed
                            by the direction signs. These signs are self explanatory, as they are stylised
                            direction arrows.</p>
                        <img src="/img/principle1_1-3.png" alt="first principle"></img>
                        <p>For example, a triangle pointing to the right (Figure 1) means the direction
                            towards the right, and a sign with a sloping line towards right-forward (Figure 2)
                            means the right-forward diagonal direction. Also in turns the shape of the sign
                            shows what should happen, i.e. first, the fact that one should turn and, second,
                            the direction in which one should turn. Figure 3 shows the sign for a turn to the
                            right.</p>   
                        <p>The shading of the direction sign is part of the form of the sign. This
                            expresses the level and, thereby, the third dimension.</p>   
                        <img src="/img/principle1_4.png" alt="first principle"></img>
                        <p>The shading of the direction sign is part of the form of the sign. This
                            expresses the level and, thereby, the third dimension.</p>
                        <ul>
                            <li>Figure 4a: high direction signs are hatched.</li>
                            <li>Figure 4b: medium level is indicated by a dot in an otherwise empty
                                direction sign.</li>
                            <li>Figure 4c: low direction signs are filled in in black.</li>    
                        </ul>
                        <img src="/img/principle1_5.png" alt="first principle"></img>
                        <p>The action stroke, a vertical line, is also a movement sign. It represents an
                            unspecified movement (Figure 5a). The dotted action stroke is the way of writing
                             passive or resulting movements (Figure 5b).</p>
                        <h4>Second Principle</h4>
                        <img src="/img/principle1_6.png" alt="second principle"></img>
                        <p>Kinetography is written and read from below upwards. All movements found
                            one above the other in the reading direction occur one after the other, as with
                            single tones in a melody (Figure 6a). All movements written one beside another 
                            occur at the same moment, as with single tones in a
                            chord (Figure 6b).</p>
                        <h4>Third Principle</h4>  
                        <img src="/img/7.png" alt="third principle"></img>
                        <p>The length of the symbol indicates how long the movement lasts. 
                            For example, if a centimetre is chosen for the length of a crochet (quarter note), 
                            a semi-breve (whole note) will be 4 cm long, a minim (half note) 2 cm, a crochet 1
                            cm, a quaver (eighth note) 0.5 cm, and so on (Figure 7).</p>
                        <img src="/img/8.png" alt="third principle"></img> 
                        <p> One can actually see the rhythm in the kinetogram and understand it even if one does not understand
                            music notes (Figure 8).</p>   
                        <h4>Fourth Principle</h4>
                        <img src="/img/9.png" alt="fourth principle"></img> 
                        <p>From the arrangement of the symbols on the different staves of a score, one can
                            see who should perform the movement.</p>
                        <p>From the arrangement of the symbols in the columns of the individual staves,
                            one can see what moves, i.e. whether it is the body as a whole or only a particular
                            body part.</p>
                        <p>Laban took over the five-lined staff from music notation, but turned it 90
                            degrees, standing it on end. From this staff only the first, third, and fifth lines
                            are written. The second and fourth lines, together with an indefinite number of
                            subsidiary lines to the right and left of the staff, are imaginary. These imaginary
                            lines are shown as dotted lines in Figure 9. The spaces between two drawn or
                            imaginary lines are called columns.</p>  
                        <p>The middle line of the staff is regarded as the middle line of the body. The
                            movements of the right body half are written to the right of the middle line, and
                            those of the left body half are written to the left. On both sides the columns
                            are numbered outwards from the middle line.</p>   
                        <p>The first columns, immediately right and left of the middle line, are for the
                            notation of the movements of the body as a whole, i.e. progression of the body
                            as a whole with steps and jumps, and turns of the body as a whole.</p>    
                        <p>The second columns are called the leg gesture columns. In these columns are
                            written the movements of the legs when they are not carrying the body weight.</p>
                        <p>The third columns are used for the notation of right and left "upper part of
                            the body" movements.</p>
                        <p>The fourth columns are used for the notation of the movements of the arms.</p>
                        <p>Note: If additional symbols such as pin signs, signs for touching the floor, or 
                            dynamic signs must be inserted between the first and second columns, i.e. between
                            the support column and the leg gesture column, an unnumbered "inner subsidiary column" 
                            can be inserted.</p>
                        <p>Likewise, an unnumbered "outer subsidiary column" can be inserted between
                            the third and fourth columns, i.e. between the upper body column and the arm
                            gesture column.</p>
                        <p>From these four principles in Kinetography, one can now answer the four
                            main questions clearly and simply by means of a movement symbol and the
                            staff.</p>
                        <ol>
                            <li>What happened is answered by the shape of the sign.</li>
                            <li>When did it happen is answered by the arrangement in 
                                the writing direction from below upwards.</li>
                            <li>How long did it last is answered by the length of the sign.</li>
                            <li>Who or what did it is answered by the placement of the signs on the score
                                or in the columns of the staves.</li>
                        </ol>
                        <img src="/img/10.png" alt="fourth principle" style={{maxHeight:'220px'}}></img>
                        <p>In Example 10, four fairly quick steps forward are made while the right arm 
                            is lifted slowly to the right, and the left arm is lifted at medium speed forwards 
                            and then high.</p>
                </div>
            </div>
        </div>
    );
};

export default StartHere;