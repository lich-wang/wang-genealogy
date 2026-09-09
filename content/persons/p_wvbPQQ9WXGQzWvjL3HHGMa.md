---
schema: wang-person/v1
id: p_wvbPQQ9WXGQzWvjL3HHGMa
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BZ6JjV8NAvMcrfjjLqi34F
        subject_person_id: p_wvbPQQ9WXGQzWvjL3HHGMa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JjGE2Le67cMQoxKQmFiXpd
          claim_id: c_BZ6JjV8NAvMcrfjjLqi34F
          source_id: s_ArSU8FE22ubbfVKYHjuL7D
          stance: supports
          locator: CBDB:692609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692609）
          source: &a1
            id: s_ArSU8FE22ubbfVKYHjuL7D
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 692609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692609&o=json
            external_identifier: CBDB:692609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9WBz9ffT37p8XUeTNVeEYT
        subject_person_id: p_wvbPQQ9WXGQzWvjL3HHGMa
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
        - id: cs_g6W4Kaw4XvFR9jHh6aLuni
          claim_id: c_9WBz9ffT37p8XUeTNVeEYT
          source_id: s_ArSU8FE22ubbfVKYHjuL7D
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 692609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692609&o=json)
