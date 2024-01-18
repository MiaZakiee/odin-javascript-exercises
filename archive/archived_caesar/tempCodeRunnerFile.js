            if (temp >= 97 && temp <= 122 && temp + key > 122) {
                temp = 97 + ((temp + key) - 122);
            }
            if (temp >= 65 && temp <= 90 && temp + key > 90) {
                temp = 65 + ((temp + key) - 90);
            }