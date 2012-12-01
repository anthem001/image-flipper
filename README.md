# image-flipper
=============

Takes a structured set of HTML (dl tags and images) and "flips" through them with text and paging in pure JavaScript.

Simply add flipper.js to the bottom of your page:

    <script language="JavaScript" src="js/flipper.js"></script>

Then the stylesheet in the head (or use your own):

    <link rel="stylesheet" href="css/flipper.css"/>

Template: To use you'll need to add as many "dl" tags (along with images) as you need in your body tag. IMPORTANT: keep same class names/ids. 

    <div id="slider">
    <!-- your dl tags -->
    <dl id="toggle1">
    <dd>
    <img alt="Image1" class="sliderImage" width="325" height="255" src="images/1.png" longdesc="Loading.." />
    <table class="content">
    <tr>
    <td valign="top">
    <div>
    <div>Content Text</div>
    </div>
    <a href="http://github.com" style="color:#004990;text-decoration: underline">Read More...</a></td>
    </tr>
    </table>
    </dd>
    </dl>
    <!--end dl tag-->
    </div>
    
The images will automagically be flipped.

Note: to change flip timeout open flipper.js and modify the timeout at the bottom.

Happy Flipping!


***************************************************************
Copyright 2012 Kelly Martinez

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


