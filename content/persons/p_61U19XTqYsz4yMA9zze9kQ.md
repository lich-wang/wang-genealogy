---
schema: wang-person/v1
id: p_61U19XTqYsz4yMA9zze9kQ
status: active
merged_into: null
display_name: 王宇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mgBcjdHPJq6QCCAUSnHn1B
        subject_person_id: p_61U19XTqYsz4yMA9zze9kQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hy9yCSduQnPFUyiVN5YPyt
          claim_id: c_mgBcjdHPJq6QCCAUSnHn1B
          source_id: s_EKkUSRQhv2hRyE8pMUHvUa
          stance: supports
          locator: CBDB:28727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28727）
          source: &a1
            id: s_EKkUSRQhv2hRyE8pMUHvUa
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 28727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28727&o=json
            external_identifier: CBDB:28727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nyCfovQsaDgfjMFmf5Fm4P
        subject_person_id: p_61U19XTqYsz4yMA9zze9kQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8mAtW3ed4b54GyaPeUm6to
          claim_id: c_nyCfovQsaDgfjMFmf5Fm4P
          source_id: s_EKkUSRQhv2hRyE8pMUHvUa
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
        id: c_NgBxD7c-Y8QQ24gb-bH__x
        subject_person_id: p_kXhN1ZZdd8m99X37QRa5g5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_61U19XTqYsz4yMA9zze9kQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QM-XyMRCViT7Q2iVQ927to
          claim_id: c_NgBxD7c-Y8QQ24gb-bH__x
          source_id: s_EKkUSRQhv2hRyE8pMUHvUa
          stance: supports
          locator: CBDB 双向互证（父 王經 ⇄ 子 王宇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kXhN1ZZdd8m99X37QRa5g5
        status: active
        display_name: 王經
        merged_into_person_id: null
  children:
    - claim:
        id: c_k21ZjDun54jCnl9V7HBDKp
        subject_person_id: p_61U19XTqYsz4yMA9zze9kQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VhEE1K9QYVSnK1V1eF11SZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pol4q5vgsH1aU6hmG1dOqY
          claim_id: c_k21ZjDun54jCnl9V7HBDKp
          source_id: s_EKkUSRQhv2hRyE8pMUHvUa
          stance: supports
          locator: CBDB 双向互证（子 王天鐸 ⇄ 父 王宇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VhEE1K9QYVSnK1V1eF11SZ
        status: active
        display_name: 王天鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kXhN1ZZdd8m99X37QRa5g5 | 王經 | accepted |
| children | p_VhEE1K9QYVSnK1V1eF11SZ | 王天鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 28727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28727&o=json)
