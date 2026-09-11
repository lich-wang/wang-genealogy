---
schema: wang-person/v1
id: p_beX9WzUXsuR5Fu65JnvuNA
status: active
merged_into: null
display_name: 王俊德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6Z3YQcDeJXFFhm9j1vQe5
        subject_person_id: p_beX9WzUXsuR5Fu65JnvuNA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v2Vw3jiamPhc8Jdma1tyBC
          claim_id: c_T6Z3YQcDeJXFFhm9j1vQe5
          source_id: s_EWyWNHRx6XKRGHwCP6UGGr
          stance: supports
          locator: CBDB:573007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573007）
          source: &a1
            id: s_EWyWNHRx6XKRGHwCP6UGGr
            source_type: api_record
            title: 中国历代人物传记资料库：王俊德（CBDB 573007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573007&o=json
            external_identifier: CBDB:573007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8oHM873Xe8aRBQdq2ntrGN
        subject_person_id: p_beX9WzUXsuR5Fu65JnvuNA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊德，明人物。籍贯歙縣，入仕進士，曾任布政使司左布政使、監察御史、巡按御史。（中国历代人物传记资料库 CBDB 573007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RYnVER1WDDf8T5qrO5-8R3
          claim_id: c_8oHM873Xe8aRBQdq2ntrGN
          source_id: s_EWyWNHRx6XKRGHwCP6UGGr
          stance: supports
          locator: CBDB:573007
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

# 王俊德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊德 | accepted |
| bio.summary | 王俊德，明人物。籍贯歙縣，入仕進士，曾任布政使司左布政使、監察御史、巡按御史。（中国历代人物传记资料库 CBDB 573007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊德（CBDB 573007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573007&o=json)
