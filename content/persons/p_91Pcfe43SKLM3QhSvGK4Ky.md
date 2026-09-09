---
schema: wang-person/v1
id: p_91Pcfe43SKLM3QhSvGK4Ky
status: active
merged_into: null
display_name: 王汝嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9PKdQ7pYTcgavhnzbqAuLs
        subject_person_id: p_91Pcfe43SKLM3QhSvGK4Ky
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h1LyiW6MgqE9qZrdbtKAYr
          claim_id: c_9PKdQ7pYTcgavhnzbqAuLs
          source_id: s_NcYWuugpG3PMnVd9wyy1ML
          stance: supports
          locator: CBDB:23515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23515）
          source: &a1
            id: s_NcYWuugpG3PMnVd9wyy1ML
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 23515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23515&o=json
            external_identifier: CBDB:23515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BXLcKGYTfPDPeXB5dup8rR
        subject_person_id: p_91Pcfe43SKLM3QhSvGK4Ky
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1098年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5D1aBaGKpzfnj9s8DzzU3Z
          claim_id: c_BXLcKGYTfPDPeXB5dup8rR
          source_id: s_NcYWuugpG3PMnVd9wyy1ML
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
        id: c_qqksq4ZDtyaDXBCiNNsJF3
        subject_person_id: p_91Pcfe43SKLM3QhSvGK4Ky
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BT9T6rpme9A7U2Cf253LYi
          claim_id: c_qqksq4ZDtyaDXBCiNNsJF3
          source_id: s_NcYWuugpG3PMnVd9wyy1ML
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

# 王汝嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝嘉 | accepted |
| birth.date | 1098年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝嘉（CBDB 23515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23515&o=json)
