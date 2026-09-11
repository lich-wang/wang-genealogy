---
schema: wang-person/v1
id: p_Xx2Qekwh7Rt7Q8zkRs2rJU
status: active
merged_into: null
display_name: 王拔萃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNN6EfN4CDYCeFveKWt7cM
        subject_person_id: p_Xx2Qekwh7Rt7Q8zkRs2rJU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拔萃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G7kKQDUUNqrzDZYkPna6pw
          claim_id: c_GNN6EfN4CDYCeFveKWt7cM
          source_id: s_HGjQNamShQEHUvcoChMmji
          stance: supports
          locator: CBDB:638112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638112）
          source: &a1
            id: s_HGjQNamShQEHUvcoChMmji
            source_type: api_record
            title: 中国历代人物传记资料库：王拔萃（CBDB 638112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638112&o=json
            external_identifier: CBDB:638112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_moBTfxEg2goqRHWJAoCG43
        subject_person_id: p_Xx2Qekwh7Rt7Q8zkRs2rJU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拔萃，清人物。籍贯寧國，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638112）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I-HO_0xA571myJL6Irua5z
          claim_id: c_moBTfxEg2goqRHWJAoCG43
          source_id: s_HGjQNamShQEHUvcoChMmji
          stance: supports
          locator: CBDB:638112
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

# 王拔萃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拔萃 | accepted |
| bio.summary | 王拔萃，清人物。籍贯寧國，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拔萃（CBDB 638112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638112&o=json)
