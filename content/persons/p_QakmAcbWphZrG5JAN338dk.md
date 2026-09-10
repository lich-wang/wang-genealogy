---
schema: wang-person/v1
id: p_QakmAcbWphZrG5JAN338dk
status: active
merged_into: null
display_name: 蕭氏
revision: 1
cbdb_id: 138303
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9nAroiMFrrCprsx-nhcrwf
        subject_person_id: p_QakmAcbWphZrG5JAN338dk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蕭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NleRDaHpcbbaawYFeT8u3o
          claim_id: c_9nAroiMFrrCprsx-nhcrwf
          source_id: s_hh1QMD_u1zmczoELIXYCVW
          stance: supports
          locator: CBDB:138303
          quotation: null
          interpretation_note: CBDB 明确记录的王煇配偶
          source: &a1
            id: s_hh1QMD_u1zmczoELIXYCVW
            source_type: api_record
            title: 中国历代人物传记资料库：蕭氏(王煇妻)（CBDB 138303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138303&o=json
            external_identifier: CBDB:138303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6Z2p9myXU-t9RFc-2O5ZgG
        subject_person_id: p_QakmAcbWphZrG5JAN338dk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j5f1lCRrBDti8zEIq1Pue7
          claim_id: c_6Z2p9myXU-t9RFc-2O5ZgG
          source_id: s_hh1QMD_u1zmczoELIXYCVW
          stance: supports
          locator: 寶祐登科錄：丈夫
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_1BfrVwNo6KMxGngrdtMrQC
        status: active
        display_name: 王煇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蕭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蕭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1BfrVwNo6KMxGngrdtMrQC | 王煇 | accepted |

## 外部来源

- [中国历代人物传记资料库：蕭氏(王煇妻)（CBDB 138303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138303&o=json)
