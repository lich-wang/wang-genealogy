---
schema: wang-person/v1
id: p_2ddZfiRdRdFhTiZEXg4BiA
status: active
merged_into: null
display_name: 王粹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oEfBhaEqBFXgHxLfc5bEr3
        subject_person_id: p_2ddZfiRdRdFhTiZEXg4BiA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ves7NA6exoPcxNLmEAJ6gn
          claim_id: c_oEfBhaEqBFXgHxLfc5bEr3
          source_id: s_U8SH9UM5h9n9YqUXmx3paU
          stance: supports
          locator: CBDB:100913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100913）
          source: &a1
            id: s_U8SH9UM5h9n9YqUXmx3paU
            source_type: api_record
            title: 中国历代人物传记资料库：王粹（CBDB 100913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100913&o=json
            external_identifier: CBDB:100913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Mpo2wr663KXWLk4PNEyWNe
        subject_person_id: p_2ddZfiRdRdFhTiZEXg4BiA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1243年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CbBMrnrUHseS48yfCLoa15
          claim_id: c_Mpo2wr663KXWLk4PNEyWNe
          source_id: s_U8SH9UM5h9n9YqUXmx3paU
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
        id: c_1UP6n379rLEyDtWHCz6AMt
        subject_person_id: p_2ddZfiRdRdFhTiZEXg4BiA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bPFBuPQYXTC1UssHru4PiJ
          claim_id: c_1UP6n379rLEyDtWHCz6AMt
          source_id: s_U8SH9UM5h9n9YqUXmx3paU
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

# 王粹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王粹 | accepted |
| death.date | 1243年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王粹（CBDB 100913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100913&o=json)
