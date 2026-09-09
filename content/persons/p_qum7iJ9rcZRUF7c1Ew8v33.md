---
schema: wang-person/v1
id: p_qum7iJ9rcZRUF7c1Ew8v33
status: active
merged_into: null
display_name: 王守信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V8wEX6XDTnuzaP1H12H9vn
        subject_person_id: p_qum7iJ9rcZRUF7c1Ew8v33
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bZNRy3EzrKPGxw3F28MgUR
          claim_id: c_V8wEX6XDTnuzaP1H12H9vn
          source_id: s_FVPhDkt9eD4w9gj3aPHtyv
          stance: supports
          locator: CBDB:489796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489796）
          source: &a1
            id: s_FVPhDkt9eD4w9gj3aPHtyv
            source_type: api_record
            title: 中国历代人物传记资料库：王守信（CBDB 489796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489796&o=json
            external_identifier: CBDB:489796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JzHpVP26wiVNdNPTSVyW37
        subject_person_id: p_qum7iJ9rcZRUF7c1Ew8v33
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
        - id: cs_yxJpLNaMKzF9k72M7jm99i
          claim_id: c_JzHpVP26wiVNdNPTSVyW37
          source_id: s_FVPhDkt9eD4w9gj3aPHtyv
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

# 王守信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守信 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守信（CBDB 489796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489796&o=json)
