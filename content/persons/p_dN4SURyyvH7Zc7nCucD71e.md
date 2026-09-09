---
schema: wang-person/v1
id: p_dN4SURyyvH7Zc7nCucD71e
status: active
merged_into: null
display_name: 王發澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2a1h7jJ8ZdMKyNQyDJKZZ4
        subject_person_id: p_dN4SURyyvH7Zc7nCucD71e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cLjVBHnc55C9ioQ3w66yn7
          claim_id: c_2a1h7jJ8ZdMKyNQyDJKZZ4
          source_id: s_QNWJ7F7qYjQ2QzNMGrLgnB
          stance: supports
          locator: CBDB:636462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636462）
          source: &a1
            id: s_QNWJ7F7qYjQ2QzNMGrLgnB
            source_type: api_record
            title: 中国历代人物传记资料库：王發澄（CBDB 636462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636462&o=json
            external_identifier: CBDB:636462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AT2dnCPqrVoKj5YcAfLnK5
        subject_person_id: p_dN4SURyyvH7Zc7nCucD71e
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
        - id: cs_Fe1radgTBQW2yDjePFF4Bo
          claim_id: c_AT2dnCPqrVoKj5YcAfLnK5
          source_id: s_QNWJ7F7qYjQ2QzNMGrLgnB
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

# 王發澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發澄 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王發澄（CBDB 636462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636462&o=json)
