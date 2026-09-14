---
schema: wang-person/v1
id: p_HN3wvQGcyeirDW1CMYtJmt
status: active
merged_into: null
display_name: 王象頤
cbdb_id: 211371
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qcayGGNNBE5qbLNR9CVmtj
        subject_person_id: p_HN3wvQGcyeirDW1CMYtJmt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象頤，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 211371）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wz_SZBxXdkT7cr0dMGysAq
          claim_id: c_qcayGGNNBE5qbLNR9CVmtj
          source_id: s_7GsqDuFHjSVNePYJhTqhi3
          stance: supports
          locator: CBDB:211371
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7GsqDuFHjSVNePYJhTqhi3
            source_type: api_record
            title: 中国历代人物传记资料库：王象頤（CBDB 211371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211371&o=json
            external_identifier: CBDB:211371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tm7cAMAFfWB3XpZD7Tyyp
        subject_person_id: p_HN3wvQGcyeirDW1CMYtJmt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XrGzCLQmBw6PqtsPk6VLFM
          claim_id: c_5tm7cAMAFfWB3XpZD7Tyyp
          source_id: s_7GsqDuFHjSVNePYJhTqhi3
          stance: supports
          locator: CBDB:211371
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uobR_-2uTDxl-CUq_er4Nu
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_HN3wvQGcyeirDW1CMYtJmt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2udZqugYeTL_fdbHD65Ww
          claim_id: c_uobR_-2uTDxl-CUq_er4Nu
          source_id: s_pGJw0CLoGojuReT3J3lFMl
          stance: supports
          locator: CBDB：兄弟 王象乾（65764）之父／母 王之垣
          quotation: null
          interpretation_note: 由兄弟关系推断：王象頤 与 王象乾 为同胞（CBDB 记「兄」），王象乾 之父／母即 王象頤 之父／母。
          source:
            id: s_pGJw0CLoGojuReT3J3lFMl
            source_type: api_record
            title: 中国历代人物传记资料库：王象頤（CBDB 211371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211371&o=json
            external_identifier: CBDB:211371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RZPqcCImtY7mznCQJpnR8d
        subject_person_id: p_HN3wvQGcyeirDW1CMYtJmt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jIHSEP4wArEi675zT3Yjv_
          claim_id: c_RZPqcCImtY7mznCQJpnR8d
          source_id: s_pGJw0CLoGojuReT3J3lFMl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 65764 王象乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pGJw0CLoGojuReT3J3lFMl
            source_type: api_record
            title: 中国历代人物传记资料库：王象頤（CBDB 211371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211371&o=json
            external_identifier: CBDB:211371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
---

# 王象頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象頤，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 211371） | accepted |
| name.primary | 王象頤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| other | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象頤（CBDB 211371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211371&o=json)
