---
schema: wang-person/v1
id: p_tWXEiZJL7wcd3sE9bC19qu
status: active
merged_into: null
display_name: 王元勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EFnXLK6yqCS1629vwtnm3B
        subject_person_id: p_tWXEiZJL7wcd3sE9bC19qu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ivaQs4m9MpiFMXukSQZcnD
          claim_id: c_EFnXLK6yqCS1629vwtnm3B
          source_id: s_dYALyqraiQ1Q51i3GVcgkB
          stance: supports
          locator: CBDB:494260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494260）
          source: &a1
            id: s_dYALyqraiQ1Q51i3GVcgkB
            source_type: api_record
            title: 中国历代人物传记资料库：王元勳（CBDB 494260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494260&o=json
            external_identifier: CBDB:494260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZMELy2bdrjrhGYqeooNy36
        subject_person_id: p_tWXEiZJL7wcd3sE9bC19qu
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
        - id: cs_UHe819Hj667HrHgeSE9VFg
          claim_id: c_ZMELy2bdrjrhGYqeooNy36
          source_id: s_dYALyqraiQ1Q51i3GVcgkB
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

# 王元勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元勳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元勳（CBDB 494260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494260&o=json)
