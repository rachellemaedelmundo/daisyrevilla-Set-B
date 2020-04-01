function evalResult(){
    var gmath= parseInt(document.getElementById('mathGrade').value);
    var rmath= document.getElementById('mathRemarks');
    var gscience= parseInt(document.getElementById('scienceGrade').value);
    var rscience= document.getElementById('scienceRemarks');
    var genglish= parseInt(document.getElementById('englishGrade').value);
    var renglish= document.getElementById('englishRemarks');
    var gfilipino= parseInt(document.getElementById('filipinoGrade').value);
    var rfilipino= document.getElementById('filipinoRemarks');
    var gpe= parseInt(document.getElementById('peGrade').value);
    var rpe= document.getElementById('peRemarks');
    var studentRank = document.getElementById('Rank');
    
        if (gmath>100)
        {
            rmath.textContent= "Invalid Input";
        }
        if (gscience>100)
        {
            rscience.textContent= "Invalid Input";
        }
        if (genglish>100)
        {
            renglish.textContent= "Invalid Input";
        }
        if (gfilipino>100)
        {
            rfilipino.textContent= "Invalid Input";
        }
        if (gpe>100)
        {
            rpe.textContent= "Invalid Input";
        }
        else
        {
            if (gmath>=90 && gmath<=100)
            {
                rmath.textContent="Outstanding";
            }
            if (gmath>= 80 && gmath<=89)
            {
                rmath.textContent="Superior";
            }
            if (gmath>=70 && gmath<=79)
            {
                rmath.textContent="Average";
            }
            if (gmath>=60 && gmath<=69)
            {
                rmath.textContent="Poor";
            }
            if (gmath>=0 && gmath<=59)
            {
                rmath.textContent="Failed";
            }
    
    
            if (gscience>=90 && gscience<=100)
            {
                rscience.textContent="Outstanding";
            }
            if (gscience>=80 && gscience<=89)
            {
                rscience.textContent="Superior";
            }
            if (gscience>=70 && gscience<=79)
            {
                rscience.textContent="Average";
            }
            if (gscience>=60 && gscience<=69)
            {
                rscience.textContent="Poor";
            }
            if (gscience>=0 && gscience<=59)
            {
                rscience.textContent="Failed";
            }

            if (genglish>=90 && genglish<=100)
            {
                renglish.textContent="Outstanding";
            }
            if (genglish>=80 && genglish<=89)
            {
                renglish.textContent="Superior";
            }
            if (genglish>=70 && genglish<=79)
            {
                renglish.textContent="Average";
            }
            if (genglish>=60 && genglish<=69)
            {
                renglish.textContent="Poor";
            }
            if (genglish>=0 && genglish<=59)
            {
                renglish.textContent="Failed";
            }
    
            if (gfilipino>=90 && gfilipino<=100)
            {
                rfilipino.textContent="Outstanding";
            }
            if (gfilipino>=80 && gfilipino<=89)
            {
                rfilipino.textContent="Superior";
            }
            if (gfilipino>=70 && gfilipino<=79)
            {
                rfilipino.textContent="Average";
            }
            if (gfilipino>=60 && gfilipino<=69)
            {
                rfilipino.textContent="Poor";
            }
            if (gfilipino>=0 && gfilipino<=59)
            {
                rfilipino.textContent="Failed";
            }
    
    
            if (gpe>=90 && gpe<=100)
            {
                rpe.textContent="Outstanding";
            }
            if (gpe>=80 && gpe<=89)
            {
                rpe.textContent="Superior";
            }
            if (gpe>=70 && gpe<=79)
            {
                rpe.textContent="Average";
            }
            if (gpe>=60 && gpe<=69)
            {
                rpe.textContent="Poor";
            }
            if (gpe>=0 && gpe<=59)
            {
                rpe.textContent="Failed";
            }
    
            if ((rpe.textContent=="Outstanding") && (rscience.textContent=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent=="Outstanding"))
            {
                studentRank.textContent="With High Honorable Student";
            }
            if (((rpe.textContent!="Oustanding") && (rscience.textContent=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent="Oustanding") && (rscience.textContent!=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent="Oustanding") && (rscience.textContent=="Outstanding") && (rmath.textContent!=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent="Oustanding") && (rscience.textContent=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent==!"Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent="Oustanding") && (rscience.textContent=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent==!"Outstanding"))

            || ((rpe.textContent!="Oustanding") && (rscience.textContent!=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent!="Oustanding") && (rscience.textContent=="Outstanding") && (rmath.textContent!=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent!="Oustanding") && (rscience.textContent=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent==!"Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent!="Oustanding") && (rscience.textContent=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent==!"Outstanding"))
            
            || ((rpe.textContent=="Outstanding") && (rscience.textContent!="Outstanding") && (rmath.textContent!="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent=="Outstanding") && (rscience.textContent!="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent!="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent=="Outstanding") && (rscience.textContent!="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent!="Outstanding"))
            
            || ((rpe.textContent=="Outstanding") && (rscience.textContent=="Outstanding") && (rmath.textContent!="Outstanding") && (renglish.textContent!="Outstanding") && (rfilipino.textContent=="Outstanding"))
            || ((rpe.textContent=="Outstanding") && (rscience.textContent=="Outstanding") && (rmath.textContent!="Outstanding") && (renglish.textContent=="Outstanding") && (rfilipino.textContent!="Outstanding"))
            
            || ((rpe.textContent=="Outstanding") && (rscience.textContent=="Outstanding") && (rmath.textContent=="Outstanding") && (renglish.textContent!="Outstanding") && (rfilipino.textContent!="Outstanding")))
            {
                studentRank.textContent="Honorable Student";
            }
            if ((rpe.textContent=="Poor") || (rscience.textContent=="Poor") || (rmath.textContent=="Poor") || (renglish.textContent=="Poor") || (rfilipino.textContent=="Poor")
            || (rpe.textContent=="Failed") || (rscience.textContent=="Failed") || (rmath.textContent=="Failed") || (renglish.textContent=="Failed") || (rfilipino.textContent=="Failed"))
            {
                studentRank.textContent="Repeater";

            
            }
        }
    
    }