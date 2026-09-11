---
schema: wang-person/v1
id: p_HdmcH8BjjMFEQA7zt2VkuG
status: active
merged_into: null
display_name: 王延嗣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wESS1PQNhD4VqLkquDCUwK
        subject_person_id: p_HdmcH8BjjMFEQA7zt2VkuG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延嗣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5zHsTMY3RCDSnk73WWrfWn
          claim_id: c_wESS1PQNhD4VqLkquDCUwK
          source_id: s_GrZuWeNUZoe69jMt6HYPPM
          stance: supports
          locator: CBDB:37231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37231）
          source: &a1
            id: s_GrZuWeNUZoe69jMt6HYPPM
            source_type: api_record
            title: 中国历代人物传记资料库：王延嗣（CBDB 37231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37231&o=json
            external_identifier: CBDB:37231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ARfQfnrKahaEg6D9cxStYU
        subject_person_id: p_HdmcH8BjjMFEQA7zt2VkuG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延嗣，宋人物。籍贯會稽。（中国历代人物传记资料库 CBDB 37231）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Xrf6nY4McempE4NoirodO
          claim_id: c_ARfQfnrKahaEg6D9cxStYU
          source_id: s_GrZuWeNUZoe69jMt6HYPPM
          stance: supports
          locator: CBDB:37231
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

# 王延嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延嗣 | accepted |
| bio.summary | 王延嗣，宋人物。籍贯會稽。（中国历代人物传记资料库 CBDB 37231） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延嗣（CBDB 37231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37231&o=json)
