---
schema: wang-person/v1
id: p_nPX4pESNvDbTkhUGiuxRin
status: active
merged_into: null
display_name: 王瑀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_stk4iNKrC7L9BFr8DAuTpt
        subject_person_id: p_nPX4pESNvDbTkhUGiuxRin
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H4T2AzYPEVj6qqPiPGVySy
          claim_id: c_stk4iNKrC7L9BFr8DAuTpt
          source_id: s_Z4KUHYid5sUNCu6teBKbje
          stance: supports
          locator: CBDB:256031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256031）
          source: &a1
            id: s_Z4KUHYid5sUNCu6teBKbje
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 256031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json
            external_identifier: CBDB:256031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLkFmeLFhEGdWntnDAoqDg
        subject_person_id: p_nPX4pESNvDbTkhUGiuxRin
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀，明人物。成化十七年進士，籍贯長垣，曾任承事郎。（中国历代人物传记资料库 CBDB 256031）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XZmElh5LmfCKKgNH2Fdr-K
          claim_id: c_rLkFmeLFhEGdWntnDAoqDg
          source_id: s_Z4KUHYid5sUNCu6teBKbje
          stance: supports
          locator: CBDB:256031
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

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，明人物。成化十七年進士，籍贯長垣，曾任承事郎。（中国历代人物传记资料库 CBDB 256031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 256031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json)
