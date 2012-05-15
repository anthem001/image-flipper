# image-flipper
=============

Takes a structured set of HTML and creates a rotating image with text and paging utilizing JQuery.

First reference JQuery:

    <script language="JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

Then the flipper js:

    <script language="JavaScript" src="js/flipper.js"></script>

Then the stylesheet (or use your own):

    <link rel="stylesheet" href="css/flipper.css"/>

To use you'll need to add as many "dl" tags as you need in your body tag. The images will automagically be rotated and counted:

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
    </code>

