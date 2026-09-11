---
schema: wang-person/v1
id: p_UL2zaY4tRMEVGWumyaLfQ3
status: active
merged_into: null
display_name: 王安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYhUJMC1S7PahszQHNwiaz
        subject_person_id: p_UL2zaY4tRMEVGWumyaLfQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7STUgCWsgj4URwzmkXkqMW
          claim_id: c_FYhUJMC1S7PahszQHNwiaz
          source_id: s_auk34DNNBsbeAA87qaDoDK
          stance: supports
          locator: CBDB:37633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37633）
          source: &a1
            id: s_auk34DNNBsbeAA87qaDoDK
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 37633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37633&o=json
            external_identifier: CBDB:37633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WWcRej9hAcC5Q7E1nGqgS6
        subject_person_id: p_UL2zaY4tRMEVGWumyaLfQ3
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
        - id: cs_pu8Dz2AKv1dnBEok4giRV5
          claim_id: c_WWcRej9hAcC5Q7E1nGqgS6
          source_id: s_auk34DNNBsbeAA87qaDoDK
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
        id: c_I6AZ1EuiJ-W0OWHsTHsATL
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UL2zaY4tRMEVGWumyaLfQ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bwtqm1lnNfdsqTikCrbPa0
          claim_id: c_I6AZ1EuiJ-W0OWHsTHsATL
          source_id: s_auk34DNNBsbeAA87qaDoDK
          stance: supports
          locator: CBDB 双向互证（父 王彥暉 ⇄ 子 王安）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_wJS1Szb9T4ktRk7N1yKT5T
        status: active
        display_name: 王彥暉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJS1Szb9T4ktRk7N1yKT5T | 王彥暉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 37633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37633&o=json)
