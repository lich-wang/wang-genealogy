---
schema: wang-person/v1
id: p_fzZCsXLW4mxeciVKFBF62N
status: active
merged_into: null
display_name: 王夢求
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FW6pFhigsCrtD5Eq9MibgD
        subject_person_id: p_fzZCsXLW4mxeciVKFBF62N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢求
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bG5vJ7HjGuSF1uiiHzLY1
          claim_id: c_FW6pFhigsCrtD5Eq9MibgD
          source_id: s_jhWvku9UJV828NNF6zJrpA
          stance: supports
          locator: CBDB:576120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576120）
          source: &a1
            id: s_jhWvku9UJV828NNF6zJrpA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢求（CBDB 576120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576120&o=json
            external_identifier: CBDB:576120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RbypE3h2HFf5X3EZCCP46T
        subject_person_id: p_fzZCsXLW4mxeciVKFBF62N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢求，清人物。籍贯內鄉，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576120）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2heSXfWkRJ04kIvLz44M1L
          claim_id: c_RbypE3h2HFf5X3EZCCP46T
          source_id: s_jhWvku9UJV828NNF6zJrpA
          stance: supports
          locator: CBDB:576120
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

# 王夢求

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢求 | accepted |
| bio.summary | 王夢求，清人物。籍贯內鄉，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢求（CBDB 576120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576120&o=json)
