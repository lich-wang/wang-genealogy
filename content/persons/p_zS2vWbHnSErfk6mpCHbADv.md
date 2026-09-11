---
schema: wang-person/v1
id: p_zS2vWbHnSErfk6mpCHbADv
status: active
merged_into: null
display_name: 王禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZNuenSxjETADHBwjVUNpfj
        subject_person_id: p_zS2vWbHnSErfk6mpCHbADv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1tpjhJgZcG8vcGHmA5v8K3
          claim_id: c_ZNuenSxjETADHBwjVUNpfj
          source_id: s_fnTxUPEtUPQz2r5sXELZqb
          stance: supports
          locator: CBDB:481958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481958）
          source: &a1
            id: s_fnTxUPEtUPQz2r5sXELZqb
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 481958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481958&o=json
            external_identifier: CBDB:481958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tTzMBPSKiD8T7JqVEP35xz
        subject_person_id: p_zS2vWbHnSErfk6mpCHbADv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮，明人物。入仕世襲(替)，曾任百戶、副千戶、僉事。（中国历代人物传记资料库 CBDB 481958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q5Uw0HwUVM6CHmXUU5InSG
          claim_id: c_tTzMBPSKiD8T7JqVEP35xz
          source_id: s_fnTxUPEtUPQz2r5sXELZqb
          stance: supports
          locator: CBDB:481958
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

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| bio.summary | 王禮，明人物。入仕世襲(替)，曾任百戶、副千戶、僉事。（中国历代人物传记资料库 CBDB 481958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 481958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481958&o=json)
