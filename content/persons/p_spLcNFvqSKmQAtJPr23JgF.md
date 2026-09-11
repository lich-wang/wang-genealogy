---
schema: wang-person/v1
id: p_spLcNFvqSKmQAtJPr23JgF
status: active
merged_into: null
display_name: 王鑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1JuLATKo7yEWHjwE2eSeHc
        subject_person_id: p_spLcNFvqSKmQAtJPr23JgF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JhAhPp3WtjP6xTQXYDuyMX
          claim_id: c_1JuLATKo7yEWHjwE2eSeHc
          source_id: s_LDR381h4r4qkwzASGbKEcf
          stance: supports
          locator: CBDB:17657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17657）
          source: &a1
            id: s_LDR381h4r4qkwzASGbKEcf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑄（CBDB 17657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17657&o=json
            external_identifier: CBDB:17657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HJoANLXNJxNRmtZ7fHLVjr
        subject_person_id: p_spLcNFvqSKmQAtJPr23JgF
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
        - id: cs_KBE4icFpwSK77iV3QBsYWy
          claim_id: c_HJoANLXNJxNRmtZ7fHLVjr
          source_id: s_LDR381h4r4qkwzASGbKEcf
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
          source:
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
      object_person:
        id: p_25zytug1kFui17eu9pg9ot
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_jinGuvdNbLY_zXqFIsgKnN
        subject_person_id: p_spLcNFvqSKmQAtJPr23JgF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uj5CLmvfB4euhULD7fRHEY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZKEm1VHlVJcOD9ZHYWOQR
          claim_id: c_jinGuvdNbLY_zXqFIsgKnN
          source_id: s_LDR381h4r4qkwzASGbKEcf
          stance: supports
          locator: CBDB 双向互证（子 王寅 ⇄ 父 王鑄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_uj5CLmvfB4euhULD7fRHEY
        status: active
        display_name: 王寅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VEci3Ruz6pZATnSaxP1Iv9
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_spLcNFvqSKmQAtJPr23JgF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlVMwyF1tez_wB35l-hLgs
          claim_id: c_VEci3Ruz6pZATnSaxP1Iv9
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（孫 王鑄 ⇄ 祖父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_L4DnLA3g6o2C8iwvdjkTk9
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 386572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json
            external_identifier: CBDB:386572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dbnj6E8kMUFP6rJiZMSDLw
        status: active
        display_name: 王說
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑄 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_25zytug1kFui17eu9pg9ot | 王寧 | accepted |
| children | p_uj5CLmvfB4euhULD7fRHEY | 王寅 | accepted |
| ancestors | p_Dbnj6E8kMUFP6rJiZMSDLw | 王說 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 386574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386574&o=json)
- [中国历代人物传记资料库：王說（CBDB 386572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json)
- [中国历代人物传记资料库：王鑄（CBDB 17657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17657&o=json)
