---
schema: wang-person/v1
id: p_dHZC3EZ3ECRTV8RLzJtHuV
status: active
merged_into: null
display_name: 王矩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6S1y1H7kDcBWBHVJJv6ns
        subject_person_id: p_dHZC3EZ3ECRTV8RLzJtHuV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_537Cto8B9DF7SK8yP3K4A9
          claim_id: c_e6S1y1H7kDcBWBHVJJv6ns
          source_id: s_5s32gXNt1LKDKSS177a7JW
          stance: supports
          locator: CBDB:24349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24349）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yUBoT8LHnTmFE5TMLQndAC
        subject_person_id: p_dHZC3EZ3ECRTV8RLzJtHuV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矩，宋人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 24349）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JeFvk3S12YY2Ho2J708r15
          claim_id: c_yUBoT8LHnTmFE5TMLQndAC
          source_id: s_5s32gXNt1LKDKSS177a7JW
          stance: supports
          locator: CBDB:24349
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_vFrareYRs8BujyJitkmWc6
        status: active
        display_name: 王敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_k8nIfDELV8xN_TyB1yl82K
        subject_person_id: p_dHZC3EZ3ECRTV8RLzJtHuV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a4GWCwvARKRPHzjvDxRZ2H
          claim_id: c_k8nIfDELV8xN_TyB1yl82K
          source_id: s_5s32gXNt1LKDKSS177a7JW
          stance: supports
          locator: 全宋文，卷 7197：曾孫; 重孫
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

# 王矩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王矩 | accepted |
| bio.summary | 王矩，宋人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 24349） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vFrareYRs8BujyJitkmWc6 | 王敏 | accepted |
| descendants | p_N1sjWWAngPbNQ5mXRM9s3H | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王矩（CBDB 24349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24349&o=json)
