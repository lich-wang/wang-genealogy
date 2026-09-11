---
schema: wang-person/v1
id: p_kVtzE9Qc8CWYZ97EnQuRkw
status: active
merged_into: null
display_name: 王廷獻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qV1UEj9HU4hYt2bsKV6Afi
        subject_person_id: p_kVtzE9Qc8CWYZ97EnQuRkw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3QsWyXFuvRi6Jit8HQT3gM
          claim_id: c_qV1UEj9HU4hYt2bsKV6Afi
          source_id: s_7gTGmRazuh5rKxEM4ru9Kz
          stance: supports
          locator: CBDB:461212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461212）
          source: &a1
            id: s_7gTGmRazuh5rKxEM4ru9Kz
            source_type: api_record
            title: 中国历代人物传记资料库：王廷獻（CBDB 461212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461212&o=json
            external_identifier: CBDB:461212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DBcR3L1qfd9Wjxz7kNda63
        subject_person_id: p_kVtzE9Qc8CWYZ97EnQuRkw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷獻，明人物。入仕鄉貢舉人，曾任縣令。（中国历代人物传记资料库 CBDB 461212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GaJxzWIbNfQTy9cxsUBsb3
          claim_id: c_DBcR3L1qfd9Wjxz7kNda63
          source_id: s_7gTGmRazuh5rKxEM4ru9Kz
          stance: supports
          locator: CBDB:461212
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

# 王廷獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷獻 | accepted |
| bio.summary | 王廷獻，明人物。入仕鄉貢舉人，曾任縣令。（中国历代人物传记资料库 CBDB 461212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷獻（CBDB 461212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461212&o=json)
