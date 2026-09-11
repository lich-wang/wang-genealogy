---
schema: wang-person/v1
id: p_c2L9ykikiVd7Ps5dU11PRX
status: active
merged_into: null
display_name: 王簡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQ65nYw9di3dXL2H77fNBq
        subject_person_id: p_c2L9ykikiVd7Ps5dU11PRX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZpkHEA6oj9k64y4LVkKexH
          claim_id: c_KQ65nYw9di3dXL2H77fNBq
          source_id: s_enLTu5n97DKQfrcCVp4weJ
          stance: supports
          locator: CBDB:26715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26715）
          source: &a1
            id: s_enLTu5n97DKQfrcCVp4weJ
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 26715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26715&o=json
            external_identifier: CBDB:26715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Uc4BtLKhJ4uLa5dhWW7QAs
        subject_person_id: p_c2L9ykikiVd7Ps5dU11PRX
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
        - id: cs_LWwvuffKX5X5vL8Jv1pt39
          claim_id: c_Uc4BtLKhJ4uLa5dhWW7QAs
          source_id: s_enLTu5n97DKQfrcCVp4weJ
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
        id: c_ddqX5pcGu7KBTAiYaquWj9
        subject_person_id: p_aPYHDa6WDx125wSCvsbr1K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c2L9ykikiVd7Ps5dU11PRX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rsZmY5xLe92lf8JAQf1aA2
          claim_id: c_ddqX5pcGu7KBTAiYaquWj9
          source_id: s_enLTu5n97DKQfrcCVp4weJ
          stance: supports
          locator: CBDB 双向互证（父 王蒼書 ⇄ 子 王簡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_aPYHDa6WDx125wSCvsbr1K
        status: active
        display_name: 王蒼書
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aPYHDa6WDx125wSCvsbr1K | 王蒼書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 26715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26715&o=json)
