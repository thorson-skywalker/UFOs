# UFOs

## Purpose

The purpose of this project was to create an interactive webpage that would display UFO sighting data for easy access and filtering.

## Resources

- Data: data.js
- Software: Javascript, HTML

## Results

The table was created from the data.js file using a `for` loop to create cells for all the data contained in the data file. Once the loop was created it was inserted into the HTML index so that it could be displayed. Once we created the webpage and made adjustments a function was created to filter the table based on user input. Initially only a single input field was created, however four more fields were created to insure all criteria could be filtered.

- Filter Fields:
![](/static/images/filterFields.png)

Once the filter fields were created in the HTML file, we could see how our webpage displayed all the information we wanted it to show.

- Webpage:
![](/static/images/webpageFinal.png)

Finally after adding functions to loop through and edit the table based on othe inputs the user wanted.

- Filter in Use:
![](/static/images/filtersInUse.png)

## Summary

While this does a great job of giving the user the ability to search by filtering the information, the filters must be exact to work. This drawback could lead to disatisfaction for the user base if they mistakenly believe the webpage to be broken or unusable. By adding an error message when the user's input does not match the proper format could reduce user frustration while using the page. Another addition could be to add a message when there is not matching data. As it stands now, the table will simply return blank, however by adding a message it would be more clear to the user that the information was entered correctly and there were simple no matches within the data.