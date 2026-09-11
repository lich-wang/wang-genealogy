---
schema: wang-person/v1
id: p_hYgNMB8xPvKVkCBozBYg3b
status: active
merged_into: null
display_name: 王叔姬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sS7igLrgwSzzG2SJAPhCoX
        subject_person_id: p_hYgNMB8xPvKVkCBozBYg3b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔姬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X595Eq8Nmc7yzetEnFjTTc
          claim_id: c_sS7igLrgwSzzG2SJAPhCoX
          source_id: s_9bu989A4dbaJYMuo3yMcBZ
          stance: supports
          locator: CBDB:566434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566434）
          source: &a1
            id: s_9bu989A4dbaJYMuo3yMcBZ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔姬（CBDB 566434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566434&o=json
            external_identifier: CBDB:566434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQa6mEyswg5Rp9x3s4dtoC
        subject_person_id: p_hYgNMB8xPvKVkCBozBYg3b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔姬，明人物。籍贯雲南。（中国历代人物传记资料库 CBDB 566434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rGVPUfvJGL9UwI46ZHwKY3
          claim_id: c_HQa6mEyswg5Rp9x3s4dtoC
          source_id: s_9bu989A4dbaJYMuo3yMcBZ
          stance: supports
          locator: CBDB:566434
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

# 王叔姬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔姬 | accepted |
| bio.summary | 王叔姬，明人物。籍贯雲南。（中国历代人物传记资料库 CBDB 566434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔姬（CBDB 566434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566434&o=json)
