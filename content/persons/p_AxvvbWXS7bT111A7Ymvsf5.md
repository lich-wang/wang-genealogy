---
schema: wang-person/v1
id: p_AxvvbWXS7bT111A7Ymvsf5
status: active
merged_into: null
display_name: 王師元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_madGJ7NqtwFGo2gC2SCW3y
        subject_person_id: p_AxvvbWXS7bT111A7Ymvsf5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ftdy6ixXKuom4VXSdQmvva
          claim_id: c_madGJ7NqtwFGo2gC2SCW3y
          source_id: s_HpNZuG1DbA8FcBoiBEQMGi
          stance: supports
          locator: CBDB:555352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555352）
          source: &a1
            id: s_HpNZuG1DbA8FcBoiBEQMGi
            source_type: api_record
            title: 中国历代人物传记资料库：王師元（CBDB 555352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555352&o=json
            external_identifier: CBDB:555352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GxYU7cAFyjfyMm5vjVxdy9
        subject_person_id: p_AxvvbWXS7bT111A7Ymvsf5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UEs2y9m8egbZmWZKWUGbcT
          claim_id: c_GxYU7cAFyjfyMm5vjVxdy9
          source_id: s_HpNZuG1DbA8FcBoiBEQMGi
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
        id: c_F5HfP9BHtn8MNS3pIb4mHq
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AxvvbWXS7bT111A7Ymvsf5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vd85LH--blUTK8cL3gaebH
          claim_id: c_F5HfP9BHtn8MNS3pIb4mHq
          source_id: s_HpNZuG1DbA8FcBoiBEQMGi
          stance: supports
          locator: 南陽府志，lgid=878691-878692：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        status: active
        display_name: 王之政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gUR7J7uVATO9b-7hYd33nF
        subject_person_id: p_AxvvbWXS7bT111A7Ymvsf5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jmniLqNmhPjMTADWWw118a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k38BO7dJhAyKMdNatLEMS7
          claim_id: c_gUR7J7uVATO9b-7hYd33nF
          source_id: s_yRT58MzHze4sG4UklPAJXR
          stance: supports
          locator: 南陽府志，lgid=878692：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yRT58MzHze4sG4UklPAJXR
            source_type: api_record
            title: 中国历代人物传记资料库：賀氏(王師元妻)（CBDB 555395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555395&o=json
            external_identifier: CBDB:555395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jmniLqNmhPjMTADWWw118a
        status: active
        display_name: 賀氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王師元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師元 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w1GiHCCDCJVq4Cbb8yEdBZ | 王之政 | accepted |
| spouses | p_jmniLqNmhPjMTADWWw118a | 賀氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：賀氏(王師元妻)（CBDB 555395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555395&o=json)
- [中国历代人物传记资料库：王師元（CBDB 555352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555352&o=json)
