---
schema: wang-person/v1
id: p_2rcftiHALGf6MKuEG9xrki
status: active
merged_into: null
display_name: 王遇時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mv741n8RFPsmC4j4ytnA9i
        subject_person_id: p_2rcftiHALGf6MKuEG9xrki
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kTiKEVycZWAW4DWdSJ1do1
          claim_id: c_Mv741n8RFPsmC4j4ytnA9i
          source_id: s_F5EpfpQHr8Tjmui1fdL3so
          stance: supports
          locator: CBDB:640436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640436）
          source: &a1
            id: s_F5EpfpQHr8Tjmui1fdL3so
            source_type: api_record
            title: 中国历代人物传记资料库：王遇時（CBDB 640436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640436&o=json
            external_identifier: CBDB:640436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pA3bVfWGGyfJKvEpUArsUe
        subject_person_id: p_2rcftiHALGf6MKuEG9xrki
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇時，清人物。籍贯三原，曾任典史。（中国历代人物传记资料库 CBDB 640436）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ndLRC7ZaosOzkCOGug2F9m
          claim_id: c_pA3bVfWGGyfJKvEpUArsUe
          source_id: s_F5EpfpQHr8Tjmui1fdL3so
          stance: supports
          locator: CBDB:640436
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

# 王遇時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇時 | accepted |
| bio.summary | 王遇時，清人物。籍贯三原，曾任典史。（中国历代人物传记资料库 CBDB 640436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇時（CBDB 640436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640436&o=json)
