---
schema: wang-person/v1
id: p_16RbGhSEcKBxA1f5LMSqsr
status: active
merged_into: null
display_name: 王由道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6XjhDzsBHFsZqFrmDH38w
        subject_person_id: p_16RbGhSEcKBxA1f5LMSqsr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XUf7KXHwXNNDpktHrPjgNb
          claim_id: c_N6XjhDzsBHFsZqFrmDH38w
          source_id: s_xWPKJ9JV8TV5vaKxocapCM
          stance: supports
          locator: CBDB:559947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（559947）
          source: &a1
            id: s_xWPKJ9JV8TV5vaKxocapCM
            source_type: api_record
            title: 中国历代人物传记资料库：王由道（CBDB 559947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559947&o=json
            external_identifier: CBDB:559947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DjFyNJQqBdzjB5vtGD69vM
        subject_person_id: p_16RbGhSEcKBxA1f5LMSqsr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由道，明人物。籍贯樂平，入仕薦舉 (保任,保舉)。（中国历代人物传记资料库 CBDB 559947）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GLo6rlI7aCP-vcxu4U75dK
          claim_id: c_DjFyNJQqBdzjB5vtGD69vM
          source_id: s_xWPKJ9JV8TV5vaKxocapCM
          stance: supports
          locator: CBDB:559947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王由道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王由道 | accepted |
| bio.summary | 王由道，明人物。籍贯樂平，入仕薦舉 (保任,保舉)。（中国历代人物传记资料库 CBDB 559947） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王由道（CBDB 559947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559947&o=json)
