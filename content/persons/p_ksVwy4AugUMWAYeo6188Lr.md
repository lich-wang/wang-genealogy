---
schema: wang-person/v1
id: p_ksVwy4AugUMWAYeo6188Lr
status: active
merged_into: null
display_name: 王傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_veRiMBurD2ysB2eZNUjJEK
        subject_person_id: p_ksVwy4AugUMWAYeo6188Lr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TaTyPnFFMom7MwhiS5Ffio
          claim_id: c_veRiMBurD2ysB2eZNUjJEK
          source_id: s_pBxFuuWoFuh4AZFgo51AQG
          stance: supports
          locator: CBDB:690122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690122）
          source: &a1
            id: s_pBxFuuWoFuh4AZFgo51AQG
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 690122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690122&o=json
            external_identifier: CBDB:690122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t45mjQQD397fv4ZkRJh8EF
        subject_person_id: p_ksVwy4AugUMWAYeo6188Lr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A4irF2ajDYkNF2XCcj7Hca
          claim_id: c_t45mjQQD397fv4ZkRJh8EF
          source_id: s_pBxFuuWoFuh4AZFgo51AQG
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
        id: c_P2wugFWB-0Nm47VBUHGyCo
        subject_person_id: p_ksVwy4AugUMWAYeo6188Lr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQHeNiJCyMt1FXAtJo53Hm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SR_lAeSS8h_00lQOaz2-NA
          claim_id: c_P2wugFWB-0Nm47VBUHGyCo
          source_id: s_pBxFuuWoFuh4AZFgo51AQG
          stance: supports
          locator: CBDB 双向互证（子 王盛 ⇄ 父 王傑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_nQHeNiJCyMt1FXAtJo53Hm
        status: active
        display_name: 王盛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nQHeNiJCyMt1FXAtJo53Hm | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 690122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690122&o=json)
