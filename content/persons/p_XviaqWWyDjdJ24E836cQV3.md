---
schema: wang-person/v1
id: p_XviaqWWyDjdJ24E836cQV3
status: active
merged_into: null
display_name: 王從政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bUp3Y4QMjqi8Yo4KaJToEL
        subject_person_id: p_XviaqWWyDjdJ24E836cQV3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bjFjt4wnKEkyBY8ubL2Tzf
          claim_id: c_bUp3Y4QMjqi8Yo4KaJToEL
          source_id: s_1DEMUPHjjsGoz38cCobuk6
          stance: supports
          locator: CBDB:119735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119735）
          source: &a1
            id: s_1DEMUPHjjsGoz38cCobuk6
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 119735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119735&o=json
            external_identifier: CBDB:119735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3GoG6815Cwkw61LYXuAofr
        subject_person_id: p_XviaqWWyDjdJ24E836cQV3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1058年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bD3F7CkbJmuHMgp9aD1ALb
          claim_id: c_3GoG6815Cwkw61LYXuAofr
          source_id: s_1DEMUPHjjsGoz38cCobuk6
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
        id: c_mVzPqjcyrg5CGHMvXQHhe2
        subject_person_id: p_XviaqWWyDjdJ24E836cQV3
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
        - id: cs_jxSMZDfeUVaap5u28PcrWw
          claim_id: c_mVzPqjcyrg5CGHMvXQHhe2
          source_id: s_1DEMUPHjjsGoz38cCobuk6
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
        id: c_w-NqfgCeC1qQ3QkN8yRL-6
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XviaqWWyDjdJ24E836cQV3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVYG1LZUWT60szcEKcE1ET
          claim_id: c_w-NqfgCeC1qQ3QkN8yRL-6
          source_id: s_1DEMUPHjjsGoz38cCobuk6
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pLswWqSBPoyLmU6amLYFt3
        status: active
        display_name: 王漢忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_TaIa5nwpG3hALg2BoJTOi0
        subject_person_id: p_XviaqWWyDjdJ24E836cQV3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_roLoSWGkKgEN9ziGJeaf3g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mqdCVtOQgs8wps6_mL4arh
          claim_id: c_TaIa5nwpG3hALg2BoJTOi0
          source_id: s_1DEMUPHjjsGoz38cCobuk6
          stance: supports
          locator: CBDB 双向互证（子 王道恭 ⇄ 父 王從政）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_roLoSWGkKgEN9ziGJeaf3g
        status: active
        display_name: 王道恭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王從政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從政 | accepted |
| death.date | 1058年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pLswWqSBPoyLmU6amLYFt3 | 王漢忠 | accepted |
| children | p_roLoSWGkKgEN9ziGJeaf3g | 王道恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從政（CBDB 119735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119735&o=json)
