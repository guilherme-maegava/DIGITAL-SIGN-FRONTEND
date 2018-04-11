import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DigitalSignService {

    public envelopeId = '';

    constructor(private http: HttpClient) {}

    getUrl(): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = 'http://localhost:8082/e8/reportgenerator/pdf/digitalsign/send';
            const body = {
                'reportId': '1',
                'content':    {
                    'employee':       {
                        'employeeId': '000655773',
                        'effDate': 1504234800000,
                        'registry': 662429,
                        'cenapeCode': 601624,
                        'hourlyFra': '338',
                        'workplaceCode': '865',
                        'creationDate': 1518573600000,
                        'processInstance': 1746945,
                        'hireDate': 1237172400000,
                        'lastHireDate': 1237172400000,
                        'terminationDate': null,
                        'rcd': 0,
                        'effSeq': 0,
                        'departmentId': 605,
                        'department': 'Ag Av Eduardo Cotching Atend',
                        'jobCode': 'B75389',
                        'positionNbr': '00178262',
                        'status': 'A',
                        'company': '008',
                        'supervisorId': '000620451',
                        'reportsTo': '00166205',
                        'name': 'CARLA CRISTINA CAPETTO FERNANDEZ',
                        'emailAddress': 'e000carla.fernandez@santander.com.br',
                        'workplaceCityCode': '5300108',
                        'workplaceCity': 'BRASILIA',
                        'workplaceCounty': 'Asa Sul',
                        'workplaceState': 'DF',
                        'workplacePostalCode': '70331-520',
                        'workplaceDescription': 'W3 Sul Quadra 503 Bl B Ljs 53',
                        'tradeUnionCode': '044',
                        'departmentIdVP': null,
                        'departmentVP': null,
                        'birthdate': 47617200000,
                        'birthPlace': '3550308',
                        'birthCountry': 'BRA',
                        'birthState': 'SP',
                        'dateOfDeath': null,
                        'originalHireDate': 1237172400000,
                        'spouseName': 'MARCIO MARTIN FERNANDEZ',
                        'motherName': 'JOSEFINA DELMINADA CAPETTO',
                        'fatherName': 'ORLANDO FRANCISCO CAPETTO',
                        'manager':          {
                            'employeeId': '000620451',
                            'effDate': 1504234800000,
                            'registry': 641315,
                            'departmentId': 605,
                            'department': 'Ag Av Eduardo Cotching Atend',
                            'jobCode': 'B75392',
                            'company': '008',
                            'name': 'LIVIA GIBERTONI',
                            'emailAddress': 'livia.gibertoni@santander.com.br'
                        }
                    },
                    'healthBenefit':       {
                        'employeeId': '000655773',
                        'effectiveDate': 1515031200000,
                        'employeeRcd': 0,
                        'eventId': 0,
                        'planType': '10',
                        'benefitNbr': 0,
                        'benefitPlan': '057',
                        'coverageElect': 'E',
                        'coverageElectDate': 1515031200000,
                        'benefitOption': 1237172400000,
                        'birthdate': 47617200000,
                        'age': 46,
                        'minAgeRange': 0,
                        'maxAgeRange': 999,
                        'cost': 228.25,
                        'costCCT': 34.74,
                        'monthlyCost': 913,
                        'monthlyCostCCT': 138.96,
                        'benefitiaryTotalCostCCT': 312.66,
                        'benefitiaryTotalCostLegal': 16434,
                        'totalCostCCT': 104.22,
                        'totalCostLegal': 5478,
                        'cctSelectionStatus': null,
                        'cctSelectionDate': null,
                        'legalSelectionStatus': null,
                        'legalSelectionDate': null,
                        'dependents': 3,
                        'aggregates': 1,
                        'beneficiaries': 4,
                        'group': 3,
                        'changeId': null,
                        'healthBenefitDependents':          [
                                        {
                            'employeeId': '000655773',
                            'dependentId': '01',
                            'changeId': null,
                            'effectiveDate': 1515031200000,
                            'providerId': '00023',
                            'agreegateIndicator': false,
                            'agreegatePlan': ' ',
                            'name': 'DEPENDENTE OB FUNC OOOFGGJJD',
                            'motherName': 'MAE DEPENDENTE OB FUNC OOOFGGJJD',
                            'genre': 'M',
                            'student': 'N',
                            'birthdate': 104900400000,
                            'adoptionDate': null,
                            'age': 45,
                            'minAgeRange': 0,
                            'maxAgeRange': 999,
                            'cost': 228.25,
                            'costCCT': 34.74,
                            'benefitiaryTotalCostCCT': 104.22,
                            'benefitiaryTotalCostLegal': 5478,
                            'cpf': '10130056863',
                            'relationshipTag': 'SP',
                            'relationship': 'Cônjuge',
                            'incapable': false,
                            'cctExclude': null,
                            'legalExclude': null,
                            'dentalExclude': null
                            },
                                        {
                            'employeeId': '000655773',
                            'dependentId': '02',
                            'changeId': null,
                            'effectiveDate': 1515031200000,
                            'providerId': '00023',
                            'agreegateIndicator': true,
                            'agreegatePlan': '057',
                            'name': 'DEPENDENTE OX FUNC OOOFGGJJD',
                            'motherName': 'MAE DEPENDENTE OX FUNC OOOFGGJJD',
                            'genre': 'F',
                            'student': 'Y',
                            'birthdate': 805431600000,
                            'adoptionDate': null,
                            'age': null,
                            'minAgeRange': null,
                            'maxAgeRange': null,
                            'cost': null,
                            'costCCT': null,
                            'benefitiaryTotalCostCCT': null,
                            'benefitiaryTotalCostLegal': null,
                            'cpf': '44788214881',
                            'relationshipTag': 'D',
                            'relationship': 'Filha',
                            'incapable': false,
                            'cctExclude': null,
                            'legalExclude': null,
                            'dentalExclude': null
                            },
                                        {
                            'employeeId': '000655773',
                            'dependentId': '03',
                            'changeId': null,
                            'effectiveDate': 1515031200000,
                            'providerId': '00023',
                            'agreegateIndicator': false,
                            'agreegatePlan': ' ',
                            'name': 'DEPENDENTE OD FUNC OOOFGGJJD',
                            'motherName': 'MAE DEPENDENTE OD FUNC OOOFGGJJD',
                            'genre': 'M',
                            'student': 'N',
                            'birthdate': 985057200000,
                            'adoptionDate': null,
                            'age': 17,
                            'minAgeRange': 0,
                            'maxAgeRange': 999,
                            'cost': 228.25,
                            'costCCT': 34.74,
                            'benefitiaryTotalCostCCT': 104.22,
                            'benefitiaryTotalCostLegal': 5478,
                            'cpf': '49655852830',
                            'relationshipTag': 'S',
                            'relationship': 'Filho',
                            'incapable': false,
                            'cctExclude': null,
                            'legalExclude': null,
                            'dentalExclude': null
                            },
                                        {
                            'employeeId': '000655773',
                            'dependentId': '04',
                            'changeId': null,
                            'effectiveDate': 1515031200000,
                            'providerId': '00023',
                            'agreegateIndicator': false,
                            'agreegatePlan': ' ',
                            'name': 'DEPENDENTE OZ FUNC OOOFGGJJD',
                            'motherName': 'MAE DEPENDENTE OZ FUNC OOOFGGJJD',
                            'genre': 'M',
                            'student': 'N',
                            'birthdate': 1147748400000,
                            'adoptionDate': null,
                            'age': 11,
                            'minAgeRange': 0,
                            'maxAgeRange': 999,
                            'cost': 228.25,
                            'costCCT': 34.74,
                            'benefitiaryTotalCostCCT': 104.22,
                            'benefitiaryTotalCostLegal': 5478,
                            'cpf': null,
                            'relationshipTag': 'S',
                            'relationship': 'Filho',
                            'incapable': false,
                            'cctExclude': null,
                            'legalExclude': null,
                            'dentalExclude': null
                            }
                        ],
                        'relationshipTag': '',
                        'incapable': false
                    },
                    'codes':       {
                        'type': 'BEN',
                        'idPs': '10057',
                        'idFpw': '10002AM1620301000000',
                        'description': 'Sulamerica - Master I',
                        'tipoPlano': '10',
                        'codPs': '057',
                        'codFpw': '10002',
                        'charge': 166,
                        'range': 1,
                        'vendor': 23,
                        'vendorFpw': 22
                    },
                    'dismissalRequest':       {
                        'id': 18971,
                        'employeeId': '000655773',
                        'employeeRcd': 0,
                        'transDate': 1251169200000,
                        'means': '1',
                        'reason': '2',
                        'actionDate': 1251169200000,
                        'notice': 'N',
                        'type': '1',
                        'expectedDate': 1251169200000,
                        'approvalStatus': 'D',
                        'requesterId': '000631297',
                        'authorizationId': '000625207',
                        'authorizationDate': 1251169200000,
                        'employeeIdLPO': '000625207',
                        'occur': 'N',
                        'status': 'D',
                        'employeeIdReplaced': ' ',
                        'comments': 'Solicito aprovação para demissão da funcionária Carla Cristina Capetto Fernandez',
                        'classified': 'N',
                        'dismissalDate': 1515031200000,
                        'action': 'TER',
                        'actionReason': 'DSC'
                    },
                    'extensionModel':       {
                        'benefitException': false,
                        'benefitExceptionByCity': false,
                        'benefitExceptionByTradeUnion': true,
                        'isAgeRangedCost': false,
                        'isAgeRangedCostCCT': false,
                        'isLifelong': false,
                        'isRetired': false,
                        'checkIfRetired': true,
                        'extensionPeriodCCT': 3,
                        'legalRightPeriod': 24,
                        'lifelongRightTime': null,
                        'startDismissalDate': 1515031200000,
                        'finalDismissalDate': 1588215600000,
                        'startPolicyDateCCT': 1517450400000,
                        'endPolicyDateCCT': 1525057200000,
                        'startPolicyDateLegal': 1525143600000,
                        'endPolicyDateLegal': 1588215600000,
                        'totalCostCCT': 416.88,
                        'totalCostLegal': 21912,
                        'cctOptionStatus': 0,
                        'legalOptionStatus': 0
                    },
                    'attributeDates':       {
                        'groupHireDate': 1226023200000,
                        'law9656Date': null,
                        'retirementDate': null
                    }
                }
                };

                this.http
                    .post(url, body)
                    .subscribe((response: any) => {
                        resolve(response.content);
                    });
        });
    }
}