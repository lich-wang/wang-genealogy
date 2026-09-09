---
schema: wang-person/v1
id: p_Vm5KLkk2edurY5vg6P7quT
status: active
merged_into: null
display_name: 王公亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ttVRUCyZ3V7xA2Wb2r3yAu
        subject_person_id: p_Vm5KLkk2edurY5vg6P7quT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o8uQYKkA1kCh29JJAmd3cH
          claim_id: c_ttVRUCyZ3V7xA2Wb2r3yAu
          source_id: s_siacuJF6xjG7rYX8wNZo6f
          stance: supports
          locator: CBDB:101069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101069）
          source: &a1
            id: s_siacuJF6xjG7rYX8wNZo6f
            source_type: api_record
            title: 中国历代人物传记资料库：王公亮（CBDB 101069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101069&o=json
            external_identifier: CBDB:101069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ds7WkxTKP23NU5EDguqGBr
        subject_person_id: p_Vm5KLkk2edurY5vg6P7quT
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
        - id: cs_CkTp3u8zv2cbfkLPK6NARx
          claim_id: c_Ds7WkxTKP23NU5EDguqGBr
          source_id: s_siacuJF6xjG7rYX8wNZo6f
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

# 王公亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公亮 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公亮（CBDB 101069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101069&o=json)
