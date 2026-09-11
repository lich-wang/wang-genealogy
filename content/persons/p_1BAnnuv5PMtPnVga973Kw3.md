---
schema: wang-person/v1
id: p_1BAnnuv5PMtPnVga973Kw3
status: active
merged_into: null
display_name: 王道盛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zf5GNJpDJ6LauWB6uR8f7i
        subject_person_id: p_1BAnnuv5PMtPnVga973Kw3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7tQWBUHrAFeoj5KejrCRm8
          claim_id: c_zf5GNJpDJ6LauWB6uR8f7i
          source_id: s_NXWxn4QBRXHFFXtWxD9BM3
          stance: supports
          locator: CBDB:640460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640460）
          source: &a1
            id: s_NXWxn4QBRXHFFXtWxD9BM3
            source_type: api_record
            title: 中国历代人物传记资料库：王道盛（CBDB 640460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640460&o=json
            external_identifier: CBDB:640460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HA89K5WPRSno3zCw55J5HJ
        subject_person_id: p_1BAnnuv5PMtPnVga973Kw3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道盛，清人物。籍贯成都，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640460）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jbN7O1Q4k0YONQ_dBDdlQA
          claim_id: c_HA89K5WPRSno3zCw55J5HJ
          source_id: s_NXWxn4QBRXHFFXtWxD9BM3
          stance: supports
          locator: CBDB:640460
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

# 王道盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道盛 | accepted |
| bio.summary | 王道盛，清人物。籍贯成都，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 640460） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道盛（CBDB 640460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640460&o=json)
