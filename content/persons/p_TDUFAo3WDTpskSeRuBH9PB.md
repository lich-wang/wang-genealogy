---
schema: wang-person/v1
id: p_TDUFAo3WDTpskSeRuBH9PB
status: active
merged_into: null
display_name: 王仁鎬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VcD3nCBRZpLtuf7EmtQeCR
        subject_person_id: p_TDUFAo3WDTpskSeRuBH9PB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AXAn1hgFHq8jZCj6cXHP23
          claim_id: c_VcD3nCBRZpLtuf7EmtQeCR
          source_id: s_uqPYtbY3DqCL13SyWwpjhv
          stance: supports
          locator: CBDB:3961
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3961）
          source: &a1
            id: s_uqPYtbY3DqCL13SyWwpjhv
            source_type: api_record
            title: 中国历代人物传记资料库：王仁鎬（CBDB 3961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3961&o=json
            external_identifier: CBDB:3961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gQaz1y2f2371BiZ2FBMxME
        subject_person_id: p_TDUFAo3WDTpskSeRuBH9PB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为吳越人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QpmZ5wx7wfNW87XyBbDtdC
          claim_id: c_gQaz1y2f2371BiZ2FBMxME
          source_id: s_uqPYtbY3DqCL13SyWwpjhv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_7qWdVTXEXKZ5dG59swInbD
        subject_person_id: p_TDUFAo3WDTpskSeRuBH9PB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mAafjEhInFNU2prrSEFWij
          claim_id: c_7qWdVTXEXKZ5dG59swInbD
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
          stance: supports
          locator: CBDB 双向互证（曾祖 王仁鎬 ⇄ 曾孫; 重孫 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Kt2AfBh7fKuTLiRwHyCwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FqUud2w7N1wezRTEw6MRZ4
        status: active
        display_name: 王說
        merged_into_person_id: null
    - claim:
        id: c_5KjuThGiMAFB4bkdc40DCQ
        subject_person_id: p_TDUFAo3WDTpskSeRuBH9PB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RSAKfiSKKFZxuzQRhSqMTM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JxSsiWpiyZcC0uTPBUOpaT
          claim_id: c_5KjuThGiMAFB4bkdc40DCQ
          source_id: s_uqPYtbY3DqCL13SyWwpjhv
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王該 ⇄ 曾祖 王仁鎬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_RSAKfiSKKFZxuzQRhSqMTM
        status: active
        display_name: 王該
        merged_into_person_id: null
  other: []
---

# 王仁鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁鎬 | accepted |
| bio.summary | CBDB 记载为吳越人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FqUud2w7N1wezRTEw6MRZ4 | 王說 | accepted |
| descendants | p_RSAKfiSKKFZxuzQRhSqMTM | 王該 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁鎬（CBDB 3961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3961&o=json)
- [中国历代人物传记资料库：王說（CBDB 19870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json)
