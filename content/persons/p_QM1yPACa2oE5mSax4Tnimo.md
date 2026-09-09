---
schema: wang-person/v1
id: p_QM1yPACa2oE5mSax4Tnimo
status: active
merged_into: null
display_name: 王建鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AfbW7h1GSkG4VCuSHFgCyJ
        subject_person_id: p_QM1yPACa2oE5mSax4Tnimo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_278Mc63iJQFzzB1LCr9NW9
          claim_id: c_AfbW7h1GSkG4VCuSHFgCyJ
          source_id: s_Bxpk9KHVvUMBApf3BaHnNW
          stance: supports
          locator: CBDB:503896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503896）
          source: &a1
            id: s_Bxpk9KHVvUMBApf3BaHnNW
            source_type: api_record
            title: 中国历代人物传记资料库：王建鐸（CBDB 503896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503896&o=json
            external_identifier: CBDB:503896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E8Wx8vanx8nP5o6ym8Mh4X
        subject_person_id: p_QM1yPACa2oE5mSax4Tnimo
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
        - id: cs_w2LgTnHrE5Ky3wiyGeYxhQ
          claim_id: c_E8Wx8vanx8nP5o6ym8Mh4X
          source_id: s_Bxpk9KHVvUMBApf3BaHnNW
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

# 王建鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建鐸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建鐸（CBDB 503896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503896&o=json)
