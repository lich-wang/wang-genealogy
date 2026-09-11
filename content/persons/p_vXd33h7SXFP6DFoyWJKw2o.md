---
schema: wang-person/v1
id: p_vXd33h7SXFP6DFoyWJKw2o
status: active
merged_into: null
display_name: 王鴻緒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ND62zkMuuziHDYF3wnDNAN
        subject_person_id: p_vXd33h7SXFP6DFoyWJKw2o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NtCai4vUVA3XPoR7yVTGvF
          claim_id: c_ND62zkMuuziHDYF3wnDNAN
          source_id: s_EkxDj8F8CmhAoCnCGBG3e7
          stance: supports
          locator: CBDB:64906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（64906）
          source: &a1
            id: s_EkxDj8F8CmhAoCnCGBG3e7
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻緒（CBDB 64906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64906&o=json
            external_identifier: CBDB:64906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1cmYWUVAZQFx6MzZaH9esn
        subject_person_id: p_vXd33h7SXFP6DFoyWJKw2o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv1KUH842ZykWrj6PNKYb5
          claim_id: c_1cmYWUVAZQFx6MzZaH9esn
          source_id: s_EkxDj8F8CmhAoCnCGBG3e7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E3tM9tJw7r1P4YVsZtGXFj
        subject_person_id: p_vXd33h7SXFP6DFoyWJKw2o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1723年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2Aj5sbLNFwi5u3nqKR5cQ
          claim_id: c_E3tM9tJw7r1P4YVsZtGXFj
          source_id: s_EkxDj8F8CmhAoCnCGBG3e7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JCDXENqKUeoEovue9FXBRk
        subject_person_id: p_vXd33h7SXFP6DFoyWJKw2o
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
        - id: cs_eR96zUF3qW78Z3MBntfVeA
          claim_id: c_JCDXENqKUeoEovue9FXBRk
          source_id: s_EkxDj8F8CmhAoCnCGBG3e7
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
        id: c_iywX9Oz2NB6zfTEZi08TXv
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vXd33h7SXFP6DFoyWJKw2o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7qllJu36WfJjmG6gMQ74xb
          claim_id: c_iywX9Oz2NB6zfTEZi08TXv
          source_id: s_EkxDj8F8CmhAoCnCGBG3e7
          stance: supports
          locator: 江南通志，lgid=65761：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T3HfvKJwe8oNYNwYQCppo7
        status: active
        display_name: 王广心
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鴻緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻緒 | accepted |
| birth.date | 1645年 | accepted |
| death.date | 1723年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T3HfvKJwe8oNYNwYQCppo7 | 王广心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鴻緒（CBDB 64906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64906&o=json)
