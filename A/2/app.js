let data = [
    {
        name: 'Arsenal',
        points: 60,
        GD: 45,
    },
    {
        name: 'Chelse',
        points: 93,
        GD: 40,
    },
    {
        name: 'Liverpool',
        points: 88,
        GD: 32,
    },
    {
        name: 'Manchester United',
        points: 60,
        GD:30,
    },
]

let res = [];
let maxArr = data.length;
while(data.length != 0)
{
    let highest = {
        name: data[0].name,
        points: data[0].points,
        GD: data[0].GD,
        position : maxArr - data.length + 1,
    }
    let highest_index = 0;
    
    for(let i = 1; i < data.length; i++)
    {
        if(data[i].points > highest.points)
        {
            highest.name = data[i].name;
            highest.points = data[i].points;
            highest.GD = data[i].GD;
            highest_index = i;
        }
        else if(data[i].points == highest.points)
        {
            if(data[i].GD > highest.GD)
            {
                highest.name = data[i].name;
                highest.points = data[i].points;
                highest.GD = data[i].GD;
                highest_index = i;
            }
            else if(data[i].GD == highest.GD)
            {
                if(parseInt(data[i].name.charAt(0)) < parseInt(highest.name.charAt(0)))
                {
                    highest.name = data[i].name;
                    highest.points = data[i].points;
                    highest.GD = data[i].GD;
                    highest_index = i;
                }
            };
        }
    }
    
    res.push(highest);
    data.splice(highest_index, 1);
}

console.log(res)