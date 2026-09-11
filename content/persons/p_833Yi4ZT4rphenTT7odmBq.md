---
schema: wang-person/v1
id: p_833Yi4ZT4rphenTT7odmBq
status: active
merged_into: null
display_name: 王國祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VZr8kgy2sc1aEroc5ttZSc
        subject_person_id: p_833Yi4ZT4rphenTT7odmBq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GaHDVSQDjrWxqCJx6nxQNR
          claim_id: c_VZr8kgy2sc1aEroc5ttZSc
          source_id: s_JSm96X9AtTxeMcCs3EbA8a
          stance: supports
          locator: CBDB:636670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636670）
          source: &a1
            id: s_JSm96X9AtTxeMcCs3EbA8a
            source_type: api_record
            title: 中国历代人物传记资料库：王國祥（CBDB 636670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636670&o=json
            external_identifier: CBDB:636670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s9LzbRfpXFLJf4wAtFSAQg
        subject_person_id: p_833Yi4ZT4rphenTT7odmBq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國祥，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 636670）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iyO5dXW6RB5qPverS7qFkm
          claim_id: c_s9LzbRfpXFLJf4wAtFSAQg
          source_id: s_JSm96X9AtTxeMcCs3EbA8a
          stance: supports
          locator: CBDB:636670
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

# 王國祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國祥 | accepted |
| bio.summary | 王國祥，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 636670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國祥（CBDB 636670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636670&o=json)
