---
schema: wang-person/v1
id: p_mAJWR5ayMFHDtMLPB9B5Bv
status: active
merged_into: null
display_name: 王行
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sfHAmi25YtTKtVFwgTf1E4
        subject_person_id: p_mAJWR5ayMFHDtMLPB9B5Bv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2BxYJfdGyGFVD5EzZ3Y8Yz
          claim_id: c_sfHAmi25YtTKtVFwgTf1E4
          source_id: s_h1AYajc1ce38fcpJJkRkux
          stance: supports
          locator: CBDB:23374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23374）
          source: &a1
            id: s_h1AYajc1ce38fcpJJkRkux
            source_type: api_record
            title: 中国历代人物传记资料库：王行（CBDB 23374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23374&o=json
            external_identifier: CBDB:23374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4r8pv7KBhJ1kKRiNC96U32
        subject_person_id: p_mAJWR5ayMFHDtMLPB9B5Bv
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
        - id: cs_RdMjSMh2vLZZk4FhLo2z6z
          claim_id: c_4r8pv7KBhJ1kKRiNC96U32
          source_id: s_h1AYajc1ce38fcpJJkRkux
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
        id: c_dq_fEt4u_4q3AQQltobSfw
        subject_person_id: p_ynP4K3oyXRCon9LPpN6fzs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mAJWR5ayMFHDtMLPB9B5Bv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y41xsWoLFeKO_Kiw9D1cEK
          claim_id: c_dq_fEt4u_4q3AQQltobSfw
          source_id: s_h1AYajc1ce38fcpJJkRkux
          stance: supports
          locator: CBDB 双向互证（父 王士堯 ⇄ 子 王行）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ynP4K3oyXRCon9LPpN6fzs
        status: active
        display_name: 王士堯
        merged_into_person_id: null
  children:
    - claim:
        id: c_cQ3Oy4-4sugfi6XojMYK8o
        subject_person_id: p_mAJWR5ayMFHDtMLPB9B5Bv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XM12rGRGT5wBm74MJaxt5U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-QRnGgM3nOJ7B1ym5qEBPC
          claim_id: c_cQ3Oy4-4sugfi6XojMYK8o
          source_id: s_h1AYajc1ce38fcpJJkRkux
          stance: supports
          locator: CBDB 双向互证（子 王賓 ⇄ 父 王行）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XM12rGRGT5wBm74MJaxt5U
        status: active
        display_name: 王賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ynP4K3oyXRCon9LPpN6fzs | 王士堯 | accepted |
| children | p_XM12rGRGT5wBm74MJaxt5U | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王行（CBDB 23374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23374&o=json)
