---
schema: wang-person/v1
id: p_wB7qzi8XSQeCC1AHTQVBTm
status: active
merged_into: null
display_name: 王迎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kUnosfFCzjEXyQbdGNWvKo
        subject_person_id: p_wB7qzi8XSQeCC1AHTQVBTm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RXEoQMeeGxY2DzeEg2qM6L
          claim_id: c_kUnosfFCzjEXyQbdGNWvKo
          source_id: s_DK7RsZb7z8q9EP99Ffe3F7
          stance: supports
          locator: CBDB:501974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501974）
          source: &a1
            id: s_DK7RsZb7z8q9EP99Ffe3F7
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 501974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501974&o=json
            external_identifier: CBDB:501974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwsvfKMkWzHU3NCaURTE1z
        subject_person_id: p_wB7qzi8XSQeCC1AHTQVBTm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎，史料所见人物。本项目依据《中国历代人物传记资料库：王迎（CBDB 501974）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RwWyqVfBfMUQmx6oUw5FXj
          claim_id: c_WwsvfKMkWzHU3NCaURTE1z
          source_id: s_DK7RsZb7z8q9EP99Ffe3F7
          stance: supports
          locator: CBDB:501974
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王迎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迎 | accepted |
| bio.summary | 王迎，史料所见人物。本项目依据《中国历代人物传记资料库：王迎（CBDB 501974）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迎（CBDB 501974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501974&o=json)
