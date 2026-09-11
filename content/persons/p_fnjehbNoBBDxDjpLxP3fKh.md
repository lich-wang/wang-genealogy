---
schema: wang-person/v1
id: p_fnjehbNoBBDxDjpLxP3fKh
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tes1mbGScM9hwbYN72TQiz
        subject_person_id: p_fnjehbNoBBDxDjpLxP3fKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jFxobRjZSNG4ACmQTZtBr5
          claim_id: c_Tes1mbGScM9hwbYN72TQiz
          source_id: s_ZrxR8pK6mAPf5Gw3mCBPHo
          stance: supports
          locator: CBDB:459336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459336）
          source: &a1
            id: s_ZrxR8pK6mAPf5Gw3mCBPHo
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 459336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459336&o=json
            external_identifier: CBDB:459336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CgcmGMPV9hzgQJccEECBG6
        subject_person_id: p_fnjehbNoBBDxDjpLxP3fKh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。入仕鄉貢舉人，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 459336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UwY00l67Xrz9BPWXvqWC2T
          claim_id: c_CgcmGMPV9hzgQJccEECBG6
          source_id: s_ZrxR8pK6mAPf5Gw3mCBPHo
          stance: supports
          locator: CBDB:459336
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。入仕鄉貢舉人，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 459336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 459336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459336&o=json)
