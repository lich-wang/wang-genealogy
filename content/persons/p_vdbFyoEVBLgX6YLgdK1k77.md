---
schema: wang-person/v1
id: p_vdbFyoEVBLgX6YLgdK1k77
status: active
merged_into: null
display_name: 王何
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijQgU6HAtn24aHnv8mXMaK
        subject_person_id: p_vdbFyoEVBLgX6YLgdK1k77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王何
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SWuj8cJyUEVm8kZZRTVcqu
          claim_id: c_ijQgU6HAtn24aHnv8mXMaK
          source_id: s_fmJGk9uobrKSsaVtwrSRL9
          stance: supports
          locator: CBDB:175966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175966）
          source: &a1
            id: s_fmJGk9uobrKSsaVtwrSRL9
            source_type: api_record
            title: 中国历代人物传记资料库：王何（CBDB 175966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175966&o=json
            external_identifier: CBDB:175966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_u757o1eidZZihM81rd7Aqc
        subject_person_id: p_vdbFyoEVBLgX6YLgdK1k77
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N73o77PRYJZ4FSdHQePtsf
          claim_id: c_u757o1eidZZihM81rd7Aqc
          source_id: s_fmJGk9uobrKSsaVtwrSRL9
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
        id: c_FEwCYMsHC6ya93L8yVZryw
        subject_person_id: p_vdbFyoEVBLgX6YLgdK1k77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z5P1nMkwDrmbBAp55piFNr
          claim_id: c_FEwCYMsHC6ya93L8yVZryw
          source_id: s_fmJGk9uobrKSsaVtwrSRL9
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
        id: c_WUbfRBtOUeMUl3Dh5BGDm1
        subject_person_id: p_9yvh4nFHNCnzjZjAPZavYb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vdbFyoEVBLgX6YLgdK1k77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYLE8r6cgJ3421HoSRdUOQ
          claim_id: c_WUbfRBtOUeMUl3Dh5BGDm1
          source_id: s_bGGz6MKkoJWjusg9UPRsBk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bGGz6MKkoJWjusg9UPRsBk
            source_type: api_record
            title: 中国历代人物传记资料库：王滔（CBDB 175965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175965&o=json
            external_identifier: CBDB:175965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9yvh4nFHNCnzjZjAPZavYb
        status: active
        display_name: 王滔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王何

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王何 | accepted |
| death.date | 801年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9yvh4nFHNCnzjZjAPZavYb | 王滔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王何（CBDB 175966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175966&o=json)
- [中国历代人物传记资料库：王滔（CBDB 175965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175965&o=json)
