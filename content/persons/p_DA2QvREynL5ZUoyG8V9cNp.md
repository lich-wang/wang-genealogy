---
schema: wang-person/v1
id: p_DA2QvREynL5ZUoyG8V9cNp
status: active
merged_into: null
display_name: 王春澤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5oivgDAMqnUXpompMJPmYT
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CH8QgzjnuzbJcw9KqJ1r4A
          claim_id: c_5oivgDAMqnUXpompMJPmYT
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: CBDB:126604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126604）
          source: &a1
            id: s_8PiY9j7LrXwCzoFvhobTJG
            source_type: api_record
            title: 中国历代人物传记资料库：王春澤（CBDB 126604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126604&o=json
            external_identifier: CBDB:126604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qo73nJSpRTusUj6Yee611q
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LK3Sf1fD8sC9boFqas1JCc
          claim_id: c_Qo73nJSpRTusUj6Yee611q
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gUX9zXkUxMSs8U46cvMUwj
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1602年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MS8qfVzRxfNpcCJmwbB9pz
          claim_id: c_gUX9zXkUxMSs8U46cvMUwj
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q8MuSeArgtL6vGku7yieCR
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y71LsCUhrQt2wiLJGFYVKo
          claim_id: c_q8MuSeArgtL6vGku7yieCR
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EScBJlf4iptlRWUea6dRRF
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihJYwIQ4q8inh0LtOaXpNJ
          claim_id: c_EScBJlf4iptlRWUea6dRRF
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xKQ5jL6DiHY4YSqMSAPFzD
            source_type: api_record
            title: 中国历代人物传记资料库：王豸（CBDB 308956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json
            external_identifier: CBDB:308956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EfJdyGwVk7PiJrwsDYXbLo
        status: active
        display_name: 王豸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qumh4sIxPQGtRfRYI75kOD
        subject_person_id: p_84TjPXi8y71DsxeYjH99RG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PzRovKNnj9NRz5P-vzWp5g
          claim_id: c_qumh4sIxPQGtRfRYI75kOD
          source_id: s_49xgzFB5NBr4mo8s3DtWKL
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_49xgzFB5NBr4mo8s3DtWKL
            source_type: api_record
            title: 中国历代人物传记资料库：王龍（CBDB 308955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308955&o=json
            external_identifier: CBDB:308955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_84TjPXi8y71DsxeYjH99RG
        status: active
        display_name: 王龍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王春澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春澤 | accepted |
| birth.date | 1515年 | accepted |
| death.date | 1602年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EfJdyGwVk7PiJrwsDYXbLo | 王豸 | accepted |
| ancestors | p_84TjPXi8y71DsxeYjH99RG | 王龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春澤（CBDB 126604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126604&o=json)
- [中国历代人物传记资料库：王龍（CBDB 308955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308955&o=json)
- [中国历代人物传记资料库：王豸（CBDB 308956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json)
