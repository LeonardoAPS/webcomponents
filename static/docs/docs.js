const api = 'http://eeldasilva.prod.acquia-sites.com/api/docs?_format=json';
//const api = 'https://swapi.dev/api/people/?format=json';
const col_limit = 4;

//initiate variable to call service
var getJSON = function(url, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function()
    {
        var status = xhr.status;

        if (status == 200)
        {
            callback(null, xhr.response);
        }
        else
        {
            callback(status);
        }
    };
    xhr.send();
}

//callback function to render the json data
getJSON(api, function(err, data)
{
    if (err != null)
    {
        console.error(err);
    }
    else
    {
        tableFromJson(data);
  }
})

// using regular methods.
function tableFromJson(json)
{
  // Extract value from table header.
  var col = [];
  for (var i = 0; i < json.length; i++) {
    for (var key in json[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // Create a table.
  var table = document.createElement("table");

  // Create table header row using the extracted headers above.
  // table row.
  var tr = table.insertRow(-1);

  for (var i = 0; i < col.length && i<col_limit; i++) {
    // table header.
    var th = document.createElement("th");
    th.scope = 'col';
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // add json data to the table as rows.
  for (var i = 0; i < json.length; i++)
  {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length && j<col_limit; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.scope = 'row';

      //last 2 columns
      if(j==col_limit-1)
      {
        //var html = '<a href="/form/contact?doc='+json[i][col[j]]+'" class="btn btn-warning webform-dialog webform-dialog-normal">Download</a>';
        var html = '<a onclick="Drupal.webformOpenDialog(\'/form/contact?doc=' + json[i][col[j]] + '\', \'webform-dialog-normal\')" class="btn btn-warning webform-dialog webform-dialog-normal">Download</a>';
        tabCell.innerHTML = html;
      }
      else if(j==col_limit-2)
      {
        var html = '<a href="http://useacquia.com/products" target="_blank" class="btn btn-outline-dark">'+json[i][col[j]]+'</a>'
        tabCell.innerHTML = html;
      }
      else
        tabCell.innerHTML = json[i][col[j]];
    }
  }

  // Now, add the newly created table with json data, to a container.
  var divShowData = window.document.getElementsByClassName('docs')[0];//document.getElementById('showData');
  divShowData.innerHTML = "";
  divShowData.appendChild(table);
}
