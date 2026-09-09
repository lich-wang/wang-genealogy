---
schema: wang-person/v1
id: p_khDxq1CQm7XPzNb3PXoCqL
status: active
merged_into: null
display_name: 王元龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1CqqDhe5A35FyAXBxzgW4B
        subject_person_id: p_khDxq1CQm7XPzNb3PXoCqL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ghCmm9jL7HDa5xStLqQnGs
          claim_id: c_1CqqDhe5A35FyAXBxzgW4B
          source_id: s_wz4X95j3obrn6DmuBkTs8R
          stance: supports
          locator: CBDB:636189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636189）
          source: &a1
            id: s_wz4X95j3obrn6DmuBkTs8R
            source_type: api_record
            title: 中国历代人物传记资料库：王元龍（CBDB 636189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636189&o=json
            external_identifier: CBDB:636189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E7Q8SPdQYZTGt3x24MEuF1
        subject_person_id: p_khDxq1CQm7XPzNb3PXoCqL
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
        - id: cs_mhnukgWxq81c29ubA3FDvj
          claim_id: c_E7Q8SPdQYZTGt3x24MEuF1
          source_id: s_wz4X95j3obrn6DmuBkTs8R
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

# 王元龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元龍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元龍（CBDB 636189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636189&o=json)
