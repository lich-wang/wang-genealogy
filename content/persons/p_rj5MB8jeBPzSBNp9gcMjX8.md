---
schema: wang-person/v1
id: p_rj5MB8jeBPzSBNp9gcMjX8
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujy5rHrRtHAzNgWYBVRMC5
        subject_person_id: p_rj5MB8jeBPzSBNp9gcMjX8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iq8PrU3jx2JQmGWoDCDDZK
          claim_id: c_ujy5rHrRtHAzNgWYBVRMC5
          source_id: s_idbJLFRnh2rznyhm1drscs
          stance: supports
          locator: CBDB:35525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35525）
          source: &a1
            id: s_idbJLFRnh2rznyhm1drscs
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 35525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35525&o=json
            external_identifier: CBDB:35525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKJFLBGRgAFPehZNXo2WJn
        subject_person_id: p_rj5MB8jeBPzSBNp9gcMjX8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fEg4Ka1ETyCB7cSf6BECnL
          claim_id: c_EKJFLBGRgAFPehZNXo2WJn
          source_id: s_idbJLFRnh2rznyhm1drscs
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
  ancestors:
    - claim:
        id: c_5_TslU-JW99iDWnfVtpvLa
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rj5MB8jeBPzSBNp9gcMjX8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sAOGwTaUvI9AKoMVbUdz1m
          claim_id: c_5_TslU-JW99iDWnfVtpvLa
          source_id: s_idbJLFRnh2rznyhm1drscs
          stance: supports
          locator: CBDB 双向互证（祖父 王斯覺 ⇄ 孫 王溥）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 35525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35525&o=json)
