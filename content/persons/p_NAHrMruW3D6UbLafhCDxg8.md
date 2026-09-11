---
schema: wang-person/v1
id: p_NAHrMruW3D6UbLafhCDxg8
status: active
merged_into: null
display_name: 王臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qUMTeRpgvCeefAPsAZQpx4
        subject_person_id: p_NAHrMruW3D6UbLafhCDxg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xrsEDvLnWH1GY4PCpQ2Chy
          claim_id: c_qUMTeRpgvCeefAPsAZQpx4
          source_id: s_XoP9yrrkvfJxJDmH48ygRS
          stance: supports
          locator: CBDB:318792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318792）
          source: &a1
            id: s_XoP9yrrkvfJxJDmH48ygRS
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 318792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318792&o=json
            external_identifier: CBDB:318792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tFPJGhVCMa5ony5Ut7gsfG
        subject_person_id: p_NAHrMruW3D6UbLafhCDxg8
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
        - id: cs_sa2WUS47dAEP3HBBMJ1BBN
          claim_id: c_tFPJGhVCMa5ony5Ut7gsfG
          source_id: s_XoP9yrrkvfJxJDmH48ygRS
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
        id: c_JhDTJuLddBFBDb_4upDB6J
        subject_person_id: p_NAHrMruW3D6UbLafhCDxg8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kcXGv1dQOleggmG4TxbdbP
          claim_id: c_JhDTJuLddBFBDb_4upDB6J
          source_id: s_XoP9yrrkvfJxJDmH48ygRS
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BXF3dbPMGdrpkj3BGNYpWy
        status: active
        display_name: 王文政
        merged_into_person_id: null
  other: []
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BXF3dbPMGdrpkj3BGNYpWy | 王文政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 318792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318792&o=json)
