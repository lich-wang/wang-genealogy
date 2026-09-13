---
schema: wang-person/v1
id: p_44S7ZYcMxD2mZkAWsZu2uU
status: active
merged_into: null
display_name: 王中甫
cbdb_id: 38233
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QRiNTfyq5Dhr3Khj2yCSym
        subject_person_id: p_44S7ZYcMxD2mZkAWsZu2uU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中甫，宋人物。曾任漕臣。（中国历代人物传记资料库 CBDB 38233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PLbVciyVjIy-TcZbHYq_6E
          claim_id: c_QRiNTfyq5Dhr3Khj2yCSym
          source_id: s_JA95W6bFjeZ5FdoQGB2pP5
          stance: supports
          locator: CBDB:38233
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JA95W6bFjeZ5FdoQGB2pP5
            source_type: api_record
            title: 中国历代人物传记资料库：王中甫（CBDB 38233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38233&o=json
            external_identifier: CBDB:38233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GUu9UuMTN4YdWa73C8d72e
        subject_person_id: p_44S7ZYcMxD2mZkAWsZu2uU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uZBJNjg1SZYj66gVSzzJK2
          claim_id: c_GUu9UuMTN4YdWa73C8d72e
          source_id: s_JA95W6bFjeZ5FdoQGB2pP5
          stance: supports
          locator: CBDB:38233
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王中甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王中甫，宋人物。曾任漕臣。（中国历代人物传记资料库 CBDB 38233） | accepted |
| name.primary | 王中甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中甫（CBDB 38233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38233&o=json)
