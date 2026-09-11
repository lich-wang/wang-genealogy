---
schema: wang-person/v1
id: p_JL51TddY85M5VjjQdk9Dbd
status: active
merged_into: null
display_name: 王衡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W936141reCkcT4mSqBV27C
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Ng41YRdpPr8yzNhMoX9kJ
          claim_id: c_W936141reCkcT4mSqBV27C
          source_id: s_yK3mHu1cy7AVGH5NvprZUW
          stance: supports
          locator: CBDB:124006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124006）
          source: &a1
            id: s_yK3mHu1cy7AVGH5NvprZUW
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 124006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124006&o=json
            external_identifier: CBDB:124006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w5k8zJj4V3Wp4F96S86Bi9
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
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
        - id: cs_iusGUaDZg6dnELCA3yi8w6
          claim_id: c_w5k8zJj4V3Wp4F96S86Bi9
          source_id: s_yK3mHu1cy7AVGH5NvprZUW
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
        id: c_R20DjLmvf8UWVQQ4ZE3jQw
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQmnYZz_8f2OjZWlNUKwTr
          claim_id: c_R20DjLmvf8UWVQQ4ZE3jQw
          source_id: s_YsbcJEgoKEkyqrpt9WHH91
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YsbcJEgoKEkyqrpt9WHH91
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 217181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217181&o=json
            external_identifier: CBDB:217181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_12DEVgMDKmXWxrfKEnUPE7
        status: active
        display_name: 王琅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2aMg_Sk5Y9ndUP0mTimP2O
        subject_person_id: p_gw3KieyBR7NUwBKxqS6EP8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eW9rEQSo-ZUZK3u2L5TuWn
          claim_id: c_2aMg_Sk5Y9ndUP0mTimP2O
          source_id: s_UJM5X4HZJ7jBoH2kb3xLD5
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UJM5X4HZJ7jBoH2kb3xLD5
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 217170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217170&o=json
            external_identifier: CBDB:217170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gw3KieyBR7NUwBKxqS6EP8
        status: active
        display_name: 王貴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_12DEVgMDKmXWxrfKEnUPE7 | 王琅 | accepted |
| ancestors | p_gw3KieyBR7NUwBKxqS6EP8 | 王貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 217170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217170&o=json)
- [中国历代人物传记资料库：王衡（CBDB 124006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124006&o=json)
- [中国历代人物传记资料库：王琅（CBDB 217181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217181&o=json)
