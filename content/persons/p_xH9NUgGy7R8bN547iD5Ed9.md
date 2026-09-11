---
schema: wang-person/v1
id: p_xH9NUgGy7R8bN547iD5Ed9
status: active
merged_into: null
display_name: 王方寔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A5Wfg2W5TscXPLkGFHGHec
        subject_person_id: p_xH9NUgGy7R8bN547iD5Ed9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方寔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RBHBYqhiGHoEwGDpF588pW
          claim_id: c_A5Wfg2W5TscXPLkGFHGHec
          source_id: s_KBpSgcBTh66Z3uq1MHXx1e
          stance: supports
          locator: CBDB:175645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175645）
          source: &a1
            id: s_KBpSgcBTh66Z3uq1MHXx1e
            source_type: api_record
            title: 中国历代人物传记资料库：王方寔（CBDB 175645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175645&o=json
            external_identifier: CBDB:175645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wh3Dn19ADQUVNzerLvT9yv
        subject_person_id: p_xH9NUgGy7R8bN547iD5Ed9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zheNJsc7fsG2gifQ8vTnZ
          claim_id: c_wh3Dn19ADQUVNzerLvT9yv
          source_id: s_KBpSgcBTh66Z3uq1MHXx1e
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
        id: c_N2zAd5ei64sbPNbveHjmEf
        subject_person_id: p_xH9NUgGy7R8bN547iD5Ed9
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
        - id: cs_5H6oviCWV3NCvkJXbTx4sQ
          claim_id: c_N2zAd5ei64sbPNbveHjmEf
          source_id: s_KBpSgcBTh66Z3uq1MHXx1e
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
        id: c_Dp6CQhOiX7CJGcRS1umfM0
        subject_person_id: p_d8L59zy2zZVwSD6YCuqjLx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xH9NUgGy7R8bN547iD5Ed9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EEufaf-2ORujB3sswNTPs-
          claim_id: c_Dp6CQhOiX7CJGcRS1umfM0
          source_id: s_bM7JM4o4DuJX466VYuwPpY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bM7JM4o4DuJX466VYuwPpY
            source_type: api_record
            title: 中国历代人物传记资料库：王弘仁（CBDB 175643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175643&o=json
            external_identifier: CBDB:175643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d8L59zy2zZVwSD6YCuqjLx
        status: active
        display_name: 王弘仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方寔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方寔 | accepted |
| death.date | 625年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d8L59zy2zZVwSD6YCuqjLx | 王弘仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方寔（CBDB 175645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175645&o=json)
- [中国历代人物传记资料库：王弘仁（CBDB 175643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175643&o=json)
