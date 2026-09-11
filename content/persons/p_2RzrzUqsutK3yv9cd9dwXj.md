---
schema: wang-person/v1
id: p_2RzrzUqsutK3yv9cd9dwXj
status: active
merged_into: null
display_name: 王允功
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ijDfE1hPe2CXaJ3AXpuYF
        subject_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eMzTtU2MadN9k7bcssfQvv
          claim_id: c_6ijDfE1hPe2CXaJ3AXpuYF
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: CBDB:23652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23652）
          source: &a1
            id: s_ctSqJWMJMSBisWmAAWSuL9
            source_type: api_record
            title: 中国历代人物传记资料库：王允功（CBDB 23652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23652&o=json
            external_identifier: CBDB:23652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wR2k7L9PtkzJvK1NfjgEd3
        subject_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1123年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_miZ9N6kf89XPHuyzBC7736
          claim_id: c_wR2k7L9PtkzJvK1NfjgEd3
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fn3BbNpjAvM3VXBso9i5C7
        subject_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允功（生于1123年），宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 23652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3u5HRY40gwnY5LUzeofZEe
          claim_id: c_fn3BbNpjAvM3VXBso9i5C7
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: CBDB:23652
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LWyUhMQftduHbV_CBL186-
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFQmTsE0DZKZa6fn8g_7vb
          claim_id: c_LWyUhMQftduHbV_CBL186-
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: CBDB 双向互证（父 王琮 ⇄ 子 王允功）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Jzy9nZapWwZfBJyYh44MuQ
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jBDLZz9E9S2Z9Oui9nNSMb
        subject_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4VoHteepWVzbqU7Vmbfk23
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IRM-a-_dQeOvyFqn7drJgH
          claim_id: c_jBDLZz9E9S2Z9Oui9nNSMb
          source_id: s_8GtPmcXQLdyHl_Q1WG7RWJ
          stance: supports
          locator: 紹興十八年同年小錄，157：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8GtPmcXQLdyHl_Q1WG7RWJ
            source_type: api_record
            title: 中国历代人物传记资料库：莫氏(王允功妻)（CBDB 135565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135565&o=json
            external_identifier: CBDB:135565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4VoHteepWVzbqU7Vmbfk23
        status: active
        display_name: 莫氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_rHwtyaBbC4_12dI2Xget7M
        subject_person_id: p_tuQz8K1QJhTDMtht3PXNax
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4URDBVNgueUm0xB0OpELnz
          claim_id: c_rHwtyaBbC4_12dI2Xget7M
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: 紹興十八年同年小錄，157：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tuQz8K1QJhTDMtht3PXNax
        status: active
        display_name: 王浹
        merged_into_person_id: null
    - claim:
        id: c_K_gndFijUAO7y8VfB8peoJ
        subject_person_id: p_u7GjygMhWqMXVVi3SrDkWR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4s_PIF3kkF6G5qFRJpCmNW
          claim_id: c_K_gndFijUAO7y8VfB8peoJ
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: 紹興十八年同年小錄，157：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_u7GjygMhWqMXVVi3SrDkWR
        status: active
        display_name: 王錫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王允功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允功 | accepted |
| birth.date | 1123年 | accepted |
| bio.summary | 王允功（生于1123年），宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 23652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jzy9nZapWwZfBJyYh44MuQ | 王琮 | accepted |
| spouses | p_4VoHteepWVzbqU7Vmbfk23 | 莫氏 | accepted |
| ancestors | p_tuQz8K1QJhTDMtht3PXNax | 王浹 | accepted |
| ancestors | p_u7GjygMhWqMXVVi3SrDkWR | 王錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：莫氏(王允功妻)（CBDB 135565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135565&o=json)
- [中国历代人物传记资料库：王允功（CBDB 23652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23652&o=json)
