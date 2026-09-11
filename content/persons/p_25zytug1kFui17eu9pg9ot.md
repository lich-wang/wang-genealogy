---
schema: wang-person/v1
id: p_25zytug1kFui17eu9pg9ot
status: active
merged_into: null
display_name: 王寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDwMqsqRMbx5DQg6HjwCS8
        subject_person_id: p_25zytug1kFui17eu9pg9ot
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z3Xk1Htn98KV2WAJNSZFux
          claim_id: c_uDwMqsqRMbx5DQg6HjwCS8
          source_id: s_eYEQPT2fXEVoBG5zNVBr99
          stance: supports
          locator: CBDB:386574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386574）
          source: &a1
            id: s_eYEQPT2fXEVoBG5zNVBr99
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 386574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386574&o=json
            external_identifier: CBDB:386574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C5YQo64y5UKnKcNB4VH6sU
        subject_person_id: p_25zytug1kFui17eu9pg9ot
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
        - id: cs_78gnQxvCMHrdA3EkuD6Dyw
          claim_id: c_C5YQo64y5UKnKcNB4VH6sU
          source_id: s_eYEQPT2fXEVoBG5zNVBr99
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
        id: c_N0PKEd9dcPXFi-I3Pbxyh8
        subject_person_id: p_spLcNFvqSKmQAtJPr23JgF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_25zytug1kFui17eu9pg9ot
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ib1PBykudxWewQEvbYcRo
          claim_id: c_N0PKEd9dcPXFi-I3Pbxyh8
          source_id: s_eYEQPT2fXEVoBG5zNVBr99
          stance: supports
          locator: CBDB 双向互证（父 王鑄 ⇄ 子 王寧）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_spLcNFvqSKmQAtJPr23JgF
        status: active
        display_name: 王鑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ERhxkQwfPTP0AsB1mrMiU3
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_25zytug1kFui17eu9pg9ot
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-DbyUYC8vWvB56QLyPbosl
          claim_id: c_ERhxkQwfPTP0AsB1mrMiU3
          source_id: s_eYEQPT2fXEVoBG5zNVBr99
          stance: supports
          locator: 全宋文，卷 5677：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TXTXwSryWLUp2Edx6YAYPe
        status: active
        display_name: 王永年
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_spLcNFvqSKmQAtJPr23JgF | 王鑄 | accepted |
| ancestors | p_TXTXwSryWLUp2Edx6YAYPe | 王永年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 386574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386574&o=json)
