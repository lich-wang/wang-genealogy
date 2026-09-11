---
schema: wang-person/v1
id: p_yUzWKF8zQ1oJ5fyKaNDrhA
status: active
merged_into: null
display_name: 王樸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uBxtpAx9rt1YzbQy7Q7LGG
        subject_person_id: p_yUzWKF8zQ1oJ5fyKaNDrhA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aD48Kg6xNNFPeh8MUVxDrP
          claim_id: c_uBxtpAx9rt1YzbQy7Q7LGG
          source_id: s_2VTtrJxS6RpCcaZyV9ACB7
          stance: supports
          locator: CBDB:531132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531132）
          source: &a1
            id: s_2VTtrJxS6RpCcaZyV9ACB7
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 531132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531132&o=json
            external_identifier: CBDB:531132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_noDbyutnGBSdGtCgQEMQEX
        subject_person_id: p_yUzWKF8zQ1oJ5fyKaNDrhA
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
        - id: cs_c8uukN58NSPwSftCNRFqAn
          claim_id: c_noDbyutnGBSdGtCgQEMQEX
          source_id: s_2VTtrJxS6RpCcaZyV9ACB7
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
        id: c_kjGdUkLPiRMMupcvsNTNrq
        subject_person_id: p_AgKmu3if3fzH6xxsK1rH6a
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yUzWKF8zQ1oJ5fyKaNDrhA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r-7Xb4ByzcTZYvha5kbHUE
          claim_id: c_kjGdUkLPiRMMupcvsNTNrq
          source_id: s_YTSva9txjCwUpSQWa23PfC
          stance: supports
          locator: 榆林府志，lgid=1046726：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YTSva9txjCwUpSQWa23PfC
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 531133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531133&o=json
            external_identifier: CBDB:531133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AgKmu3if3fzH6xxsK1rH6a
        status: active
        display_name: 王威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AgKmu3if3fzH6xxsK1rH6a | 王威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 531132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531132&o=json)
- [中国历代人物传记资料库：王威（CBDB 531133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531133&o=json)
