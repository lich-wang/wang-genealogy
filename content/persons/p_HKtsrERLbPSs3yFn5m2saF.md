---
schema: wang-person/v1
id: p_HKtsrERLbPSs3yFn5m2saF
status: active
merged_into: null
display_name: 王錫瓉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ozHUoMztEeuKNG1isBJiBQ
        subject_person_id: p_HKtsrERLbPSs3yFn5m2saF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ce3Q22dFqkHoNbdVa2NQHJ
          claim_id: c_ozHUoMztEeuKNG1isBJiBQ
          source_id: s_h31K8bywqY2NBMrRhSTJ3h
          stance: supports
          locator: CBDB:320863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320863）
          source: &a1
            id: s_h31K8bywqY2NBMrRhSTJ3h
            source_type: api_record
            title: 中国历代人物传记资料库：王錫瓉（CBDB 320863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320863&o=json
            external_identifier: CBDB:320863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzdM5YVHdtPNMCGfEYT4x9
        subject_person_id: p_HKtsrERLbPSs3yFn5m2saF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瓉，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320863）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bCRemaiy2SQhIX30bft-6f
          claim_id: c_FzdM5YVHdtPNMCGfEYT4x9
          source_id: s_h31K8bywqY2NBMrRhSTJ3h
          stance: supports
          locator: CBDB:320863
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
  descendants:
    - claim:
        id: c_QBdMgHkP8TKOaTbDX2XSnQ
        subject_person_id: p_HKtsrERLbPSs3yFn5m2saF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uB_AXbg5OtRG7WMUGhtUSW
          claim_id: c_QBdMgHkP8TKOaTbDX2XSnQ
          source_id: s_h31K8bywqY2NBMrRhSTJ3h
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W2D9MwuPsN8G7PZXkTNBD2
        status: active
        display_name: 王得春
        merged_into_person_id: null
  other: []
---

# 王錫瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫瓉 | accepted |
| bio.summary | 王錫瓉，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320863） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_W2D9MwuPsN8G7PZXkTNBD2 | 王得春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錫瓉（CBDB 320863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320863&o=json)
