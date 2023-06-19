//Starting from day 1, we calculate which of the three choices (i.e. theatre/pub/commercial park) will give the 
//max earning at 'stage1' and update the cost and the choice. For example- On day one, for maximum earning we decide that Theatre is
//built first, then we deduct the 5 days (i.e. the time taken to build theatre) from total days to calculate the remaining days
//for the stage 2 and then again calcualte which is the most profitable choice to build for stage2, and deduct time for completing 
//that choice to calculate remaining days and so on till the time when remaining days <=4 (i.e. the least time required to build something)

//Possibility of earnings from two of the tree options being same at any "stage":There are 3 possible combinations.
//1) Theatre+Pub=7 days left - this will lead to multiple outputs as building theatre or pub is equally profitable
//2) Pub+Commercial Park=13 days left - Here Theatre gives maximum value of earning so both Pub and and commercial park are not outputs
//3) Theatre+Commercial=15 units left - At this stage- both theatre and conference park will give same earning at that stage but choosing 
    //theatre at that stage will give more "overall profit" since there will be option to earn more in next stages- so Theatre option wins 
    //in case of a tie of earnings between theatre and commerical park at any stage

    function MaxProfit(input1, flag, T_Count, P_Count, C_Count, sum) {
        let T_Earn;
        let P_Earn;
        let C_Earn;
      
        //Checking for multiple output when theatre+pub earn maximum.
        if (input1 == 7) {
          flag = 1;
        }
      
        if (input1 > 5) {
          T_Earn = (input1 - 5) * 1500;
        } else {
          T_Earn = 0;
        }
      
        if (input1 > 4) {
          P_Earn = (input1 - 4) * 1000;
        } else {
          P_Earn = 0;
        }
      
        if (input1 > 10) {
          C_Earn = (input1 - 10) * 3000;
        } else {
          C_Earn = 0;
        }
      
        let max = Math.max(T_Earn, P_Earn, C_Earn);
        console.log(max);
        sum = sum + max;
        if (max !== 0) {
          if (max === T_Earn) {
            input1 = input1 - 5;
            T_Count++;
          } else if (max === P_Earn) {
            input1 = input1 - 4;
            P_Count++;
          } else {
            //since I wrote else,this is important in case of Theatre Vs Commercial Park Tie, 
            //once T_Earn is maximum,code flow won't go in else block and C_count is not updated
            input1 = input1 - 10;
            C_Count++;
          }
        }
      
        //console.log(`T:${T_Count}`, `P:${P_Count}`, `C:${C_Count}`);
        return [input1, flag, T_Count, P_Count, C_Count, sum];
      }
      
      function InputValue() {
        let input = document.getElementById("inputTime").value;
        let sum = 0;
        let T_Count = 0;
        let P_Count = 0;
        let C_Count = 0;
        let flag = 0;
      
        count_while = 0;
        let solution1 = document.getElementById("solution1");
        let solution2 = document.getElementById("solution2");
        solution1.innerHTML=""
        solution2.innerHTML=""
      
        let i = 0;
        while (input > 4) {
          [input, flag, T_Count, P_Count, C_Count, sum] = MaxProfit(
            input,
            flag,
            T_Count,
            P_Count,
            C_Count,
            sum
          );
          i++;
        }
        console.log("flag",flag)
        let earning = (document.getElementById("sum").innerHTML = `$${sum}`);
        
      
      
        //flag=1 indicates multiple outputs.
        if (flag == 1) {
          solution1.innerHTML = `Multiple Possible Solutions:
           Solution1=>T:${T_Count},P:${P_Count},C:${C_Count}`;
      
         solution2.innerHTML=
           `Solution2=>T:${T_Count - 1},P:${P_Count + 1},C:${C_Count}`;
        } else {
          solution1.innerHTML = `Solution1=>T:${T_Count},P:${P_Count},C:${C_Count}`;
        }
      
        console.log(sum);
      }
      InputValue();