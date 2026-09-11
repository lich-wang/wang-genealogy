---
schema: wang-person/v1
id: p_LBwtULPH5gocXPRyJzZShp
status: active
merged_into: null
display_name: 王澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VgCMBLz6MQDWrE6ZzgyWS7
        subject_person_id: p_LBwtULPH5gocXPRyJzZShp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UjHg7w5uyj6dHZc7Yz8GHG
          claim_id: c_VgCMBLz6MQDWrE6ZzgyWS7
          source_id: s_1QcpQFdodVYJ2gX3nisM7X
          stance: supports
          locator: CBDB:510371
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510371）
          source: &a1
            id: s_1QcpQFdodVYJ2gX3nisM7X
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 510371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510371&o=json
            external_identifier: CBDB:510371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nm2TJ36Zxc8oioLgeXQ11h
        subject_person_id: p_LBwtULPH5gocXPRyJzZShp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍，清人物。入仕鄉貢舉人，曾任州同知。（中国历代人物传记资料库 CBDB 510371）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7VHnWhBLnMXL7ayxDfsxR5
          claim_id: c_nm2TJ36Zxc8oioLgeXQ11h
          source_id: s_1QcpQFdodVYJ2gX3nisM7X
          stance: supports
          locator: CBDB:510371
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

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | 王澍，清人物。入仕鄉貢舉人，曾任州同知。（中国历代人物传记资料库 CBDB 510371） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 510371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510371&o=json)
