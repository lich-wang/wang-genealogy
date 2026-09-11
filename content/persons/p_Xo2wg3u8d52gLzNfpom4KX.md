---
schema: wang-person/v1
id: p_Xo2wg3u8d52gLzNfpom4KX
status: active
merged_into: null
display_name: 王國器
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rfk4dHBi9cpLkBCwxfsLX4
        subject_person_id: p_Xo2wg3u8d52gLzNfpom4KX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9MbuW5UuqALq47Pc8P1Gr
          claim_id: c_Rfk4dHBi9cpLkBCwxfsLX4
          source_id: s_wZyGZYmqV8REKkaNF6uqoL
          stance: supports
          locator: CBDB:101331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101331）
          source: &a1
            id: s_wZyGZYmqV8REKkaNF6uqoL
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 101331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101331&o=json
            external_identifier: CBDB:101331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m7qshYAJLZVgHRvotbSisH
        subject_person_id: p_Xo2wg3u8d52gLzNfpom4KX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國器，元人物。籍贯文水，曾任諸路總管府總管。（中国历代人物传记资料库 CBDB 101331）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8X8YbkB0uSgX6J6k-RJicY
          claim_id: c_m7qshYAJLZVgHRvotbSisH
          source_id: s_wZyGZYmqV8REKkaNF6uqoL
          stance: supports
          locator: CBDB:101331
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

# 王國器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國器 | accepted |
| bio.summary | 王國器，元人物。籍贯文水，曾任諸路總管府總管。（中国历代人物传记资料库 CBDB 101331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國器（CBDB 101331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101331&o=json)
