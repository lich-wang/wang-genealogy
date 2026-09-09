---
schema: wang-person/v1
id: p_UXibooViX2ieAxHnopMENX
status: active
merged_into: null
display_name: 王樹之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qXPUTrJbEfjuj2L3GDMXMK
        subject_person_id: p_UXibooViX2ieAxHnopMENX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y5Qk5tFpnbp9bn2NN99vrM
          claim_id: c_qXPUTrJbEfjuj2L3GDMXMK
          source_id: s_FnKhUzjMpWpLtD7RbcUm4v
          stance: supports
          locator: CBDB:638835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638835）
          source: &a1
            id: s_FnKhUzjMpWpLtD7RbcUm4v
            source_type: api_record
            title: 中国历代人物传记资料库：王樹之（CBDB 638835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638835&o=json
            external_identifier: CBDB:638835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FeCPVDktc4CXGmKzjJmFv4
        subject_person_id: p_UXibooViX2ieAxHnopMENX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oN7bNArDDdeY5DR79nccBd
          claim_id: c_FeCPVDktc4CXGmKzjJmFv4
          source_id: s_FnKhUzjMpWpLtD7RbcUm4v
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

# 王樹之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹之 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹之（CBDB 638835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638835&o=json)
