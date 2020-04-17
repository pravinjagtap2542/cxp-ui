export function getFormulaAns(field, question, currentQuestionGroup, groups){
      var questionGroup = findQGroup(groups, "Q_CONTRACT_TERM_IN_MONTHS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_CONTRACT_TERM_IN_MONTHS");
      if(qIndex != -1){       
        //(Q_STEADY_STATE_DURATION_IN_YEARS * 12) + Q_DURATION_OF_GRACE_PERIOD_RAMP_IN_MONTHS
        var tempGroup1 = findQGroup(groups, "Q_STEADY_STATE_DURATION_IN_YEARS");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_STEADY_STATE_DURATION_IN_YEARS");
        var tempGroup2 = findQGroup(groups, "Q_DURATION_OF_GRACE_PERIOD_RAMP_IN_MONTHS");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_DURATION_OF_GRACE_PERIOD_RAMP_IN_MONTHS");
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) * 12 : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 )
      }   

      var questionGroup = findQGroup(groups, "Q_PROJECTED_FULL_BILLED_MONTHS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_PROJECTED_FULL_BILLED_MONTHS");
      if(qIndex != -1){      
        //(Q_STEADY_STATE_DURATION_IN_YEARS * 12) + ((Q_DURATION_OF_GRACE_PERIOD_RAMP_IN_MONTHS - Q_REVENUE_START_MONTH) / 2) + 1
        var tempGroup1 = findQGroup(groups, "Q_STEADY_STATE_DURATION_IN_YEARS");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_STEADY_STATE_DURATION_IN_YEARS");
        var tempGroup2 = findQGroup(groups, "Q_DURATION_OF_GRACE_PERIOD_RAMP_IN_MONTHS");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_DURATION_OF_GRACE_PERIOD_RAMP_IN_MONTHS");
        var tempGroup3 = findQGroup(groups, "Q_REVENUE_START_MONTH");
        var temp3Index = tempGroup3.questions.findIndex(question => question.question_tag == "Q_REVENUE_START_MONTH");
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) * 12 : 0 ) + 
        (( ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 ) - 
           ( tempGroup3.questions[temp3Index].fields[0].answer_text ? parseFloat(tempGroup3.questions[temp3Index].fields[0].answer_text) : 0 ) 
          ) / 2
        ) + 1          
      } 

      var questionGroup = findQGroup(groups, "Q_TOTAL_UC_ONLY_USERS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_TOTAL_UC_ONLY_USERS"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_UC_BASIC_USER_BUNDLE");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_UC_BASIC_USER_BUNDLE");
        var tempGroup2 = findQGroup(groups, "Q_UC_CORE_USER_BUNDLE");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_UC_CORE_USER_BUNDLE");
        var tempGroup3 = findQGroup(groups, "Q_UC_POWER_USER_BUNDLE");
        var temp3Index = tempGroup3.questions.findIndex(question => question.question_tag == "Q_UC_POWER_USER_BUNDLE");
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 ) +
        ( tempGroup3.questions[temp3Index].fields[0].answer_text ? parseFloat(tempGroup3.questions[temp3Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_TOTAL_VM_MAILBOXES");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_TOTAL_VM_MAILBOXES"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_UC_BASIC_USER_BUNDLE");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_UC_BASIC_USER_BUNDLE");
        var tempGroup2 = findQGroup(groups, "Q_UC_CORE_USER_BUNDLE");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_UC_CORE_USER_BUNDLE");
        var tempGroup3 = findQGroup(groups, "Q_UC_POWER_USER_BUNDLE");
        var temp3Index = tempGroup3.questions.findIndex(question => question.question_tag == "Q_UC_POWER_USER_BUNDLE");
        var tempGroup4 = findQGroup(groups, "Q_NAMED_AGENTS_AND_SUPERVISORS");
        var temp4Index = tempGroup4.questions.findIndex(question => question.question_tag == "Q_NAMED_AGENTS_AND_SUPERVISORS");
        var tempGroup5 = findQGroup(groups, "Q_ADDITIONAL_VM_MAILBOXES");
        var temp5Index = tempGroup5.questions.findIndex(question => question.question_tag == "Q_ADDITIONAL_VM_MAILBOXES");
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup3.questions[temp3Index].fields[0].answer_text ? parseFloat(tempGroup3.questions[temp3Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup4.questions[temp4Index].fields[0].answer_text ? parseFloat(tempGroup4.questions[temp4Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup5.questions[temp5Index].fields[0].answer_text ? parseFloat(tempGroup5.questions[temp5Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_NUMBER_OF_MISC_OPTIONS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_NUMBER_OF_MISC_OPTIONS"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_UC_ATTENDANT_CONSOLE_OPTION");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_UC_ATTENDANT_CONSOLE_OPTION");
        var tempGroup2 = findQGroup(groups, "Q_CLOUD_CALL_RECORDING_OF_UC_SEATS");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_CLOUD_CALL_RECORDING_OF_UC_SEATS");
        var tempGroup3 = findQGroup(groups, "Q_EXTERNAL_CALL_RECORDING_PORT");
        var temp3Index = tempGroup3.questions.findIndex(question => question.question_tag == "Q_EXTERNAL_CALL_RECORDING_PORT");        
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup3.questions[temp3Index].fields[0].answer_text ? parseFloat(tempGroup3.questions[temp3Index].fields[0].answer_text) : 0 ) ;                                                              
      }

      var questionGroup = findQGroup(groups, "Q_CONCURRENT_AGENTS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_CONCURRENT_AGENTS"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_BASIC_CC_VOICE_BUNDLE");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_BASIC_CC_VOICE_BUNDLE");
        var tempGroup2 = findQGroup(groups, "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE");
        var tempGroup3 = findQGroup(groups, "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");
        var temp3Index = tempGroup3.questions.findIndex(question => question.question_tag == "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");
        var tempGroup4 = findQGroup(groups, "Q_BASIC_DIGITAL_ONLY_BUNDLE");
        var temp4Index = tempGroup4.questions.findIndex(question => question.question_tag == "Q_BASIC_DIGITAL_ONLY_BUNDLE");
        var tempGroup5 = findQGroup(groups, "Q_ADVANCED_DIGITAL_ONLY_BUNDLE");
        var temp5Index = tempGroup5.questions.findIndex(question => question.question_tag == "Q_ADVANCED_DIGITAL_ONLY_BUNDLE");
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup3.questions[temp3Index].fields[0].answer_text ? parseFloat(tempGroup3.questions[temp3Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup4.questions[temp4Index].fields[0].answer_text ? parseFloat(tempGroup4.questions[temp4Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup5.questions[temp5Index].fields[0].answer_text ? parseFloat(tempGroup5.questions[temp5Index].fields[0].answer_text) : 0 );                                                             
      }

      var questionGroup = findQGroup(groups, "Q_POM_PORTS_DUE_TO_BUNDLES");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_POM_PORTS_DUE_TO_BUNDLES"); 
      if(qIndex != -1){
        var temp1Index = questionGroup.questions.findIndex(question => question.question_tag == "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");           
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( questionGroup.questions[temp1Index].fields[0].answer_text ? parseFloat(questionGroup.questions[temp1Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_COMPLIANCE_RECORDING_FROM_BUNDLES");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_COMPLIANCE_RECORDING_FROM_BUNDLES"); 
      var fieldIndex = questionGroup.questions[qIndex].fields.findIndex(field => field.answer_tag == "Q_COMPLIANCE_RECORDING_FROM_BUNDLES_ANS_1");
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_BASIC_CC_VOICE_BUNDLE");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_BASIC_CC_VOICE_BUNDLE");           
        questionGroup.questions[qIndex].fields[fieldIndex].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_SCREEN_CAPTURE_FROM_BUNDLES");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_SCREEN_CAPTURE_FROM_BUNDLES"); 
      var fieldIndex = questionGroup.questions[qIndex].fields.findIndex(field => field.answer_tag == "Q_SCREEN_CAPTURE_FROM_BUNDLES_ANS_2");
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE");           
        questionGroup.questions[qIndex].fields[fieldIndex].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_QUALITY_MONITORING_FROM_BUNDLES");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_QUALITY_MONITORING_FROM_BUNDLES"); 
      var fieldIndex = questionGroup.questions[qIndex].fields.findIndex(field => field.answer_tag == "Q_QUALITY_MONITORING_FROM_BUNDLES_ANS_3");
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");           
        questionGroup.questions[qIndex].fields[fieldIndex].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_TOTAL_IVR_PORTS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_TOTAL_IVR_PORTS"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_INBOUND_IVR_DTMF_PORT");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_INBOUND_IVR_DTMF_PORT"); 
        var tempGroup2 = findQGroup(groups, "Q_BASIC_CC_VOICE_BUNDLE");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_BASIC_CC_VOICE_BUNDLE"); 
        var tempGroup3 = findQGroup(groups, "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE");
        var temp3Index = tempGroup3.questions.findIndex(question => question.question_tag == "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE"); 
        var tempGroup4 = findQGroup(groups, "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");
        var temp4Index = tempGroup4.questions.findIndex(question => question.question_tag == "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");           
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup3.questions[temp3Index].fields[0].answer_text ? parseFloat(tempGroup3.questions[temp3Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup4.questions[temp4Index].fields[0].answer_text ? parseFloat(tempGroup4.questions[temp4Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_TOTAL_SPEECH_IVR_PACKAGES");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_TOTAL_SPEECH_IVR_PACKAGES"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_QUANTITY_OF_SPEECH_IVR_PORTS");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_QUANTITY_OF_SPEECH_IVR_PORTS");           
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 );
      }

      var questionGroup = findQGroup(groups, "Q_TOTAL_CBA_PORTS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_TOTAL_CBA_PORTS"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_CALL_BACK_ASSIST_PER_PORT");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_CALL_BACK_ASSIST_PER_PORT");
        var tempGroup2 = findQGroup(groups, "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_BASIC_OMNI_CHANNEL_CC_BUNDLE");
        var tempGroup3 = findQGroup(groups, "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");
        var temp3Index = tempGroup3.questions.findIndex(question => question.question_tag == "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");        
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup3.questions[temp3Index].fields[0].answer_text ? parseFloat(tempGroup3.questions[temp3Index].fields[0].answer_text) : 0 );                                                              
      }

      var questionGroup = findQGroup(groups, "Q_TOTAL_POM_PORTS");
      var qIndex = questionGroup.questions.findIndex(question => question.question_tag == "Q_TOTAL_POM_PORTS"); 
      if(qIndex != -1){
        var tempGroup1 = findQGroup(groups, "Q_OUTBOUND_MARKETING_PORT");
        var temp1Index = tempGroup1.questions.findIndex(question => question.question_tag == "Q_OUTBOUND_MARKETING_PORT");
        var tempGroup2 = findQGroup(groups, "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");
        var temp2Index = tempGroup2.questions.findIndex(question => question.question_tag == "Q_ADVANCED_OMNICHANNEL_CC_BUNDLE");        
        questionGroup.questions[qIndex].fields[0].answer_text = 
        ( tempGroup1.questions[temp1Index].fields[0].answer_text ? parseFloat(tempGroup1.questions[temp1Index].fields[0].answer_text) : 0 ) + 
        ( tempGroup2.questions[temp2Index].fields[0].answer_text ? parseFloat(tempGroup2.questions[temp2Index].fields[0].answer_text) : 0 );                                                               
      }  
        
}

function findQGroup(groups, qTag){
  var qGroup; 
  groups.forEach(group => {
    let tempGroupIndex = group.questions.findIndex(question => question.question_tag == qTag);
    if(tempGroupIndex > -1){
      qGroup = group;
      return;     
    }
  });
  return qGroup;
}