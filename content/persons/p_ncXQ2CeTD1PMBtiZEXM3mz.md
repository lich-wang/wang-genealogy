---
schema: wang-person/v1
id: p_ncXQ2CeTD1PMBtiZEXM3mz
status: active
merged_into: null
display_name: 王煦文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dJ9ws7VBnABjuXzT8r2yhk
        subject_person_id: p_ncXQ2CeTD1PMBtiZEXM3mz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5xD8y276Qx45cb2m6LkLJg
          claim_id: c_dJ9ws7VBnABjuXzT8r2yhk
          source_id: s_qUu3SNkkVaNt5x3pZ3vBAg
          stance: supports
          locator: CBDB:556911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556911）
          source: &a1
            id: s_qUu3SNkkVaNt5x3pZ3vBAg
            source_type: api_record
            title: 中国历代人物传记资料库：王煦文（CBDB 556911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556911&o=json
            external_identifier: CBDB:556911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BpMWHMZjRZeT9ENtExUJ1B
        subject_person_id: p_ncXQ2CeTD1PMBtiZEXM3mz
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
        - id: cs_NJVrDVBLrJDTFrFnDFKqQs
          claim_id: c_BpMWHMZjRZeT9ENtExUJ1B
          source_id: s_qUu3SNkkVaNt5x3pZ3vBAg
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

# 王煦文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煦文 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煦文（CBDB 556911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556911&o=json)
