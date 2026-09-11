---
schema: wang-person/v1
id: p_vFrareYRs8BujyJitkmWc6
status: active
merged_into: null
display_name: 王敏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijW23mwVLVuKq5kruqY8hb
        subject_person_id: p_vFrareYRs8BujyJitkmWc6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JdtHANkHs4SzEtF2PENeJw
          claim_id: c_ijW23mwVLVuKq5kruqY8hb
          source_id: s_mGm3QsSwTtD8YSmbhUMxei
          stance: supports
          locator: CBDB:10240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10240）
          source: &a1
            id: s_mGm3QsSwTtD8YSmbhUMxei
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 10240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10240&o=json
            external_identifier: CBDB:10240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fQ7AAaQJA1VVUNNsWywLao
        subject_person_id: p_vFrareYRs8BujyJitkmWc6
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
        - id: cs_1K9m2opnProMHXgtmLstrC
          claim_id: c_fQ7AAaQJA1VVUNNsWywLao
          source_id: s_mGm3QsSwTtD8YSmbhUMxei
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
        id: c_VDPPMO9aKyKBh1zaAN45MC
        subject_person_id: p_dHZC3EZ3ECRTV8RLzJtHuV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vFrareYRs8BujyJitkmWc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4TE9B2GeTtuq-8ajeToydb
          claim_id: c_VDPPMO9aKyKBh1zaAN45MC
          source_id: s_5s32gXNt1LKDKSS177a7JW
          stance: supports
          locator: CBDB 双向互证（子 王敏 ⇄ 父 王矩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_5s32gXNt1LKDKSS177a7JW
            source_type: api_record
            title: 中国历代人物传记资料库：王矩（CBDB 24349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24349&o=json
            external_identifier: CBDB:24349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHZC3EZ3ECRTV8RLzJtHuV
        status: active
        display_name: 王矩
        merged_into_person_id: null
  children:
    - claim:
        id: c_-mYMxeFn6lEkvif4OlNevx
        subject_person_id: p_vFrareYRs8BujyJitkmWc6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fWF3nnEN6hjupeD4fHR2qh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ScYNa3g9AFtMCQj5Y-VOWs
          claim_id: c_-mYMxeFn6lEkvif4OlNevx
          source_id: s_mGm3QsSwTtD8YSmbhUMxei
          stance: supports
          locator: CBDB 双向互证（子 王嵩卿 ⇄ 父 王敏）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_fWF3nnEN6hjupeD4fHR2qh
        status: active
        display_name: 王嵩卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_5x2cKj0fZaNQuHoGXiE79q
        subject_person_id: p_vFrareYRs8BujyJitkmWc6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eR6u4pxVeSz465GAaAYUG7
          claim_id: c_5x2cKj0fZaNQuHoGXiE79q
          source_id: s_mGm3QsSwTtD8YSmbhUMxei
          stance: supports
          locator: 全宋文，卷 7197：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N1sjWWAngPbNQ5mXRM9s3H
        status: active
        display_name: 王介
        merged_into_person_id: null
  other: []
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dHZC3EZ3ECRTV8RLzJtHuV | 王矩 | accepted |
| children | p_fWF3nnEN6hjupeD4fHR2qh | 王嵩卿 | accepted |
| descendants | p_N1sjWWAngPbNQ5mXRM9s3H | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王矩（CBDB 24349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24349&o=json)
- [中国历代人物传记资料库：王敏（CBDB 10240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10240&o=json)
