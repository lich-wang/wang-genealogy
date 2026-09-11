---
schema: wang-person/v1
id: p_XYgRDTMQMKLwMjzmrS4u9S
status: active
merged_into: null
display_name: 王神念
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1jSz6ETNnXPhop67Km79e
        subject_person_id: p_XYgRDTMQMKLwMjzmrS4u9S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王神念
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GpaV8QAT6AZ7Trs8RB6bHF
          claim_id: c_D1jSz6ETNnXPhop67Km79e
          source_id: s_7pwdxXmyoz1AKHuC8L9wQ3
          stance: supports
          locator: CBDB:175838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175838）
          source: &a1
            id: s_7pwdxXmyoz1AKHuC8L9wQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王神念（CBDB 175838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175838&o=json
            external_identifier: CBDB:175838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gEfxKxiAgFCUXEXXcADuqH
        subject_person_id: p_XYgRDTMQMKLwMjzmrS4u9S
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 519年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pyzxN5MC7mYspwsodtmp4T
          claim_id: c_gEfxKxiAgFCUXEXXcADuqH
          source_id: s_7pwdxXmyoz1AKHuC8L9wQ3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_knGu4LEdFb6MGyDv9gm5hk
        subject_person_id: p_XYgRDTMQMKLwMjzmrS4u9S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LczEGsqTytBDGFY5XV2hch
          claim_id: c_knGu4LEdFb6MGyDv9gm5hk
          source_id: s_7pwdxXmyoz1AKHuC8L9wQ3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YDxgg1uiFIHwhbHd9QuJ-C
        subject_person_id: p_XYgRDTMQMKLwMjzmrS4u9S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PG9Fvg9NtVnjeDz9wSwJyM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G3vJfzBt-ZfmxmE3hQvBbd
          claim_id: c_YDxgg1uiFIHwhbHd9QuJ-C
          source_id: s_7pwdxXmyoz1AKHuC8L9wQ3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PG9Fvg9NtVnjeDz9wSwJyM
        status: active
        display_name: 王僧辩
        merged_into_person_id: null
    - claim:
        id: c_9jBicmIvsJvD9tsqHBA5N7
        subject_person_id: p_XYgRDTMQMKLwMjzmrS4u9S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2FfCNSZbmawkyTxk2zgdBv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xFacOXk-QPkL3U_Ko12XAg
          claim_id: c_9jBicmIvsJvD9tsqHBA5N7
          source_id: s_7pwdxXmyoz1AKHuC8L9wQ3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2FfCNSZbmawkyTxk2zgdBv
        status: active
        display_name: 王僧修
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王神念

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王神念 | accepted |
| death.date | 519年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PG9Fvg9NtVnjeDz9wSwJyM | 王僧辩 | accepted |
| children | p_2FfCNSZbmawkyTxk2zgdBv | 王僧修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王神念（CBDB 175838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175838&o=json)
