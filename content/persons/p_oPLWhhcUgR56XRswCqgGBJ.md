---
schema: wang-person/v1
id: p_oPLWhhcUgR56XRswCqgGBJ
status: active
merged_into: null
display_name: 王能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2gyCAyHh4swi8ipFxWV6q2
        subject_person_id: p_oPLWhhcUgR56XRswCqgGBJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ejuiVHMtEnAAESwJAf7xD9
          claim_id: c_2gyCAyHh4swi8ipFxWV6q2
          source_id: s_qj13FWfUvhF8rt11uZmN5k
          stance: supports
          locator: CBDB:200150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200150）
          source: &a1
            id: s_qj13FWfUvhF8rt11uZmN5k
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 200150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200150&o=json
            external_identifier: CBDB:200150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_foCnvwB13E8GVaJwNWdckP
        subject_person_id: p_oPLWhhcUgR56XRswCqgGBJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1373年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6q3RXod2H3gU1uq7YEbx2A
          claim_id: c_foCnvwB13E8GVaJwNWdckP
          source_id: s_qj13FWfUvhF8rt11uZmN5k
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
        id: c_J7Ex9xJSQEtinZBYXYrmuL
        subject_person_id: p_oPLWhhcUgR56XRswCqgGBJ
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
        - id: cs_oa5yFKL8s3Eq2R33JwSog3
          claim_id: c_J7Ex9xJSQEtinZBYXYrmuL
          source_id: s_qj13FWfUvhF8rt11uZmN5k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| birth.date | 1373年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 200150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200150&o=json)
