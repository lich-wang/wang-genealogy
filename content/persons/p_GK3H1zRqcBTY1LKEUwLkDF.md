---
schema: wang-person/v1
id: p_GK3H1zRqcBTY1LKEUwLkDF
status: active
merged_into: null
display_name: 王秀疑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NGpLyNjFwdhioPGUpXa1ru
        subject_person_id: p_GK3H1zRqcBTY1LKEUwLkDF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀疑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e1b8tCEQX7NgGye2SEbr5T
          claim_id: c_NGpLyNjFwdhioPGUpXa1ru
          source_id: s_noQ3RWxBkHK83cWTwESUWZ
          stance: supports
          locator: CBDB:639635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639635）
          source: &a1
            id: s_noQ3RWxBkHK83cWTwESUWZ
            source_type: api_record
            title: 中国历代人物传记资料库：王秀疑（CBDB 639635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639635&o=json
            external_identifier: CBDB:639635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uDiannSDCGYgJqsTfYUhf8
        subject_person_id: p_GK3H1zRqcBTY1LKEUwLkDF
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
        - id: cs_DdBhZ7T3NnPjPjHMebT8vM
          claim_id: c_uDiannSDCGYgJqsTfYUhf8
          source_id: s_noQ3RWxBkHK83cWTwESUWZ
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

# 王秀疑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀疑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秀疑（CBDB 639635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639635&o=json)
