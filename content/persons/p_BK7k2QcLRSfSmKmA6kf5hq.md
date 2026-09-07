---
schema: wang-person/v1
id: p_BK7k2QcLRSfSmKmA6kf5hq
status: active
merged_into: null
display_name: 王长述
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKnjLnx6H-mJ4XKkjOOoBS
        subject_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王长述（卒于627年），史料所见人物。本项目依据《王长述》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_r10OwaG0coXF4LnDFBYtl6
          claim_id: c_pKnjLnx6H-mJ4XKkjOOoBS
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: Q11573236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1X3J7cb3Crn96v5myXuvC8
        subject_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 627年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0627-01-01
            latest: 0627-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wTAMwdkxJcCeQNgHmHraAE
          claim_id: c_1X3J7cb3Crn96v5myXuvC8
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a2Ch7j7uFihGQycSBZwN3t
        subject_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王长述
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZCXSMeq4VFU7GqowLheBrc
          claim_id: c_a2Ch7j7uFihGQycSBZwN3t
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: Q11573236
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dRbc2aZLaHSiD3ue5PXK62
        subject_person_id: p_dsKdJmxGEgXimyPn78iufE
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EFhLWsSFpGJ4vpzak8MSKv
          claim_id: c_dRbc2aZLaHSiD3ue5PXK62
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
        - id: cs_reMnv4AtshSvA3kAywXVVL
          claim_id: c_dRbc2aZLaHSiD3ue5PXK62
          source_id: s_7Ss8KmuHxjBqnB2FcgQvrd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7Ss8KmuHxjBqnB2FcgQvrd
            source_type: api_record
            title: 维基数据：王庆远（Q45679705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679705
            external_identifier: Q45679705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person:
        id: p_dsKdJmxGEgXimyPn78iufE
        status: active
        display_name: 王庆远
        merged_into_person_id: null
  children:
    - claim:
        id: c_cypefaz2BA4nzZK7RNMMkn
        subject_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CeCKJToPiqJ44CrjN1dbFC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EcTcoYetG2VzoUNg7MUi8c
          claim_id: c_cypefaz2BA4nzZK7RNMMkn
          source_id: s_S8nRwGMbu7ksKGZji5Z1Xm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_S8nRwGMbu7ksKGZji5Z1Xm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王述（175929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json
            external_identifier: CBDB:175929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:51.803Z
            metadata_json: null
        - id: cs_aPnw6FJRufKkQd3muNwkfb
          claim_id: c_cypefaz2BA4nzZK7RNMMkn
          source_id: s_5EoK36HE943L6gsZuQuBcL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5EoK36HE943L6gsZuQuBcL
            source_type: api_record
            title: 维基数据：王弘福（Q45485004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45485004
            external_identifier: Q45485004
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json: null
        - id: cs_fSnf1tdUsJt4KXKq1dzwX3
          claim_id: c_cypefaz2BA4nzZK7RNMMkn
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
      object_person:
        id: p_CeCKJToPiqJ44CrjN1dbFC
        status: active
        display_name: 王弘福
        merged_into_person_id: null
    - claim:
        id: c_Rmp5GZQ1vMd4EwnchTCbZi
        subject_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GD5YsC8n47gTKpFPHcFj2F
          claim_id: c_Rmp5GZQ1vMd4EwnchTCbZi
          source_id: s_S8nRwGMbu7ksKGZji5Z1Xm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_S8nRwGMbu7ksKGZji5Z1Xm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王述（175929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json
            external_identifier: CBDB:175929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:51.803Z
            metadata_json: null
        - id: cs_XBGjYZ8bGinyQg5BSQQKEJ
          claim_id: c_Rmp5GZQ1vMd4EwnchTCbZi
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
        - id: cs_pUrNLkQ8kvbb5vmAZDmX8s
          claim_id: c_Rmp5GZQ1vMd4EwnchTCbZi
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iBsZCuymcCHq9LAP1EAxCz
            source_type: api_record
            title: 维基数据：王某（Q45679773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679773
            external_identifier: Q45679773
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person:
        id: p_9De1waQrNPPNQ2rPBDtZB4
        status: active
        display_name: 王某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王长述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王长述（卒于627年），史料所见人物。本项目依据《王长述》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 627年 | accepted |
| name.primary | 王长述 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dsKdJmxGEgXimyPn78iufE | 王庆远 | accepted |
| children | p_CeCKJToPiqJ44CrjN1dbFC | 王弘福 | accepted |
| children | p_9De1waQrNPPNQ2rPBDtZB4 | 王某 | accepted |

## 外部来源

- [维基数据：王弘福（Q45485004）](https://www.wikidata.org/wiki/Q45485004)
- [维基数据：王某（Q45679773）](https://www.wikidata.org/wiki/Q45679773)
- [维基数据：王庆远（Q45679705）](https://www.wikidata.org/wiki/Q45679705)
- [维基数据：王长述（Q11573236）](https://www.wikidata.org/wiki/Q11573236)
- [CBDB 中国历代人物传记资料库：王述（175929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json)
