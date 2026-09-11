---
schema: wang-person/v1
id: p_5aSsEU9814DJHEv44h4j5R
status: active
merged_into: null
display_name: 王珣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kHdkhq7KsNTBtqXLa7dh8r
        subject_person_id: p_5aSsEU9814DJHEv44h4j5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9D6Z7KSfbPLscyvwkpr3T
          claim_id: c_kHdkhq7KsNTBtqXLa7dh8r
          source_id: s_6jw6DpzNKad2hYu22Ab5HQ
          stance: supports
          locator: CBDB:683888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683888）
          source: &a1
            id: s_6jw6DpzNKad2hYu22Ab5HQ
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 683888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683888&o=json
            external_identifier: CBDB:683888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bnDBAf5FbKYUaWMbyDbQNE
        subject_person_id: p_5aSsEU9814DJHEv44h4j5R
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
        - id: cs_GZGDpybPFPPJBekPWHrKXh
          claim_id: c_bnDBAf5FbKYUaWMbyDbQNE
          source_id: s_6jw6DpzNKad2hYu22Ab5HQ
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
        id: c_Ljh3gaXvpe4-z2Ah-CpXwl
        subject_person_id: p_5aSsEU9814DJHEv44h4j5R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PKez8fDzEkcxaF3twbojXm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zGLPQZm4JUxLB7k9BQdqDw
          claim_id: c_Ljh3gaXvpe4-z2Ah-CpXwl
          source_id: s_W9DpxK8JELPs3zM771HVcQ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_W9DpxK8JELPs3zM771HVcQ
            source_type: api_record
            title: 中国历代人物传记资料库：王蘇七（CBDB 683942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683942&o=json
            external_identifier: CBDB:683942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PKez8fDzEkcxaF3twbojXm
        status: active
        display_name: 王蘇七
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HBxlWVXq0vllmcR82dLfT1
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5aSsEU9814DJHEv44h4j5R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_atgvdQEwJgiSsRQjPvzG2e
          claim_id: c_HBxlWVXq0vllmcR82dLfT1
          source_id: s_coq7t4H45PM4tE5hKEgEQY
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_coq7t4H45PM4tE5hKEgEQY
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 683877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683877&o=json
            external_identifier: CBDB:683877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_481kQQwAFrYze548qXRkp6
        status: active
        display_name: 王章
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PKez8fDzEkcxaF3twbojXm | 王蘇七 | accepted |
| ancestors | p_481kQQwAFrYze548qXRkp6 | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘇七（CBDB 683942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683942&o=json)
- [中国历代人物传记资料库：王珣（CBDB 683888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683888&o=json)
- [中国历代人物传记资料库：王章（CBDB 683877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683877&o=json)
