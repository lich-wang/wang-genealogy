---
schema: wang-person/v1
id: p_c35ntr9Lb7JRmrirML4qFS
status: active
merged_into: null
display_name: 王繼光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7G7xN72cXYv421gHUERjKM
        subject_person_id: p_c35ntr9Lb7JRmrirML4qFS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HKk1HLdzsCdyQD5v5FGds4
          claim_id: c_7G7xN72cXYv421gHUERjKM
          source_id: s_G9YzVbcVfqYeH52uU7zJos
          stance: supports
          locator: CBDB:639866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639866）
          source: &a1
            id: s_G9YzVbcVfqYeH52uU7zJos
            source_type: api_record
            title: 中国历代人物传记资料库：王繼光（CBDB 639866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639866&o=json
            external_identifier: CBDB:639866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A2Uamo7JzbzB6FCc2YrSZn
        subject_person_id: p_c35ntr9Lb7JRmrirML4qFS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼光，清人物。籍贯大興，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 639866）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BXVhOuJxHz78gQlszSecA7
          claim_id: c_A2Uamo7JzbzB6FCc2YrSZn
          source_id: s_G9YzVbcVfqYeH52uU7zJos
          stance: supports
          locator: CBDB:639866
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

# 王繼光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼光 | accepted |
| bio.summary | 王繼光，清人物。籍贯大興，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 639866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼光（CBDB 639866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639866&o=json)
