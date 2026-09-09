---
schema: wang-person/v1
id: p_aNYYLf4AMVAXh7vdBQNd7w
status: active
merged_into: null
display_name: 王紞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FaGnGq35rM34f6S37nGL9
        subject_person_id: p_aNYYLf4AMVAXh7vdBQNd7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQCPh5k7dHpH7CGR9BEBUC
          claim_id: c_4FaGnGq35rM34f6S37nGL9
          source_id: s_f5pG9mLWctZUdyrK88HGUG
          stance: supports
          locator: CBDB:259210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259210）
          source: &a1
            id: s_f5pG9mLWctZUdyrK88HGUG
            source_type: api_record
            title: 中国历代人物传记资料库：王紞（CBDB 259210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259210&o=json
            external_identifier: CBDB:259210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xd82nSviH7qB6rcKsJ1sqY
        subject_person_id: p_aNYYLf4AMVAXh7vdBQNd7w
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
        - id: cs_f8kXExbZBGZe45qB48Gqyi
          claim_id: c_Xd82nSviH7qB6rcKsJ1sqY
          source_id: s_f5pG9mLWctZUdyrK88HGUG
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

# 王紞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紞（CBDB 259210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259210&o=json)
