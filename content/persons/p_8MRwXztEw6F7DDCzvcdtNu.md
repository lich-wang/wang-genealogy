---
schema: wang-person/v1
id: p_8MRwXztEw6F7DDCzvcdtNu
status: active
merged_into: null
display_name: 王鎬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m8c3eHJ1KsnrmPYvQgFEfi
        subject_person_id: p_8MRwXztEw6F7DDCzvcdtNu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E2ZouussMr56LuLNV44FXQ
          claim_id: c_m8c3eHJ1KsnrmPYvQgFEfi
          source_id: s_Aj3s8nTDdmoBjtCjFyF8MM
          stance: supports
          locator: CBDB:23514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23514）
          source: &a1
            id: s_Aj3s8nTDdmoBjtCjFyF8MM
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 23514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23514&o=json
            external_identifier: CBDB:23514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sAfS4u1mPFB19xHGCfoQkU
        subject_person_id: p_8MRwXztEw6F7DDCzvcdtNu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gfewQWPTpq89DLfAdJe2Zo
          claim_id: c_sAfS4u1mPFB19xHGCfoQkU
          source_id: s_Aj3s8nTDdmoBjtCjFyF8MM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZgP5BUhanmbnMObyd57Luz
        subject_person_id: p_oShGPWRUUN6brzr17EdqQw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8MRwXztEw6F7DDCzvcdtNu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_um0WZyIlfVutD-f3-t4KgA
          claim_id: c_ZgP5BUhanmbnMObyd57Luz
          source_id: s_Aj3s8nTDdmoBjtCjFyF8MM
          stance: supports
          locator: CBDB 双向互证（父 王應期 ⇄ 子 王鎬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_oShGPWRUUN6brzr17EdqQw
        status: active
        display_name: 王應期
        merged_into_person_id: null
  children:
    - claim:
        id: c_sVHqNYvVZEP91SEABfTfXX
        subject_person_id: p_8MRwXztEw6F7DDCzvcdtNu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_91Pcfe43SKLM3QhSvGK4Ky
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5y-ZlNen1PpZPKJ_VdSTXA
          claim_id: c_sVHqNYvVZEP91SEABfTfXX
          source_id: s_Aj3s8nTDdmoBjtCjFyF8MM
          stance: supports
          locator: CBDB 双向互证（子 王汝嘉 ⇄ 父 王鎬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_91Pcfe43SKLM3QhSvGK4Ky
        status: active
        display_name: 王汝嘉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oShGPWRUUN6brzr17EdqQw | 王應期 | accepted |
| children | p_91Pcfe43SKLM3QhSvGK4Ky | 王汝嘉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 23514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23514&o=json)
