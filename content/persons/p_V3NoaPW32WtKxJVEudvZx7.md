---
schema: wang-person/v1
id: p_V3NoaPW32WtKxJVEudvZx7
status: active
merged_into: null
display_name: 王三鑑
cbdb_id: 279881
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GYFQdiEEbEL71pSFiFcZRt
        subject_person_id: p_V3NoaPW32WtKxJVEudvZx7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三鑑，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3E4VbkS4Ejn08O9vyZqqxy
          claim_id: c_GYFQdiEEbEL71pSFiFcZRt
          source_id: s_L2vwrydjt2zByyLfmemDyM
          stance: supports
          locator: CBDB:279881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L2vwrydjt2zByyLfmemDyM
            source_type: api_record
            title: 中国历代人物传记资料库：王三鑑（CBDB 279881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279881&o=json
            external_identifier: CBDB:279881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f8Zhtrh5e9eHDb5yTnnpfZ
        subject_person_id: p_V3NoaPW32WtKxJVEudvZx7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P8PkTt5CbG1Xe2mQzfL9NP
          claim_id: c_f8Zhtrh5e9eHDb5yTnnpfZ
          source_id: s_L2vwrydjt2zByyLfmemDyM
          stance: supports
          locator: CBDB:279881
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zJh19SvsE2OSqq2T7E66jy
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V3NoaPW32WtKxJVEudvZx7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j4HjxdgXuBOaUXXNRCPOtU
          claim_id: c_zJh19SvsE2OSqq2T7E66jy
          source_id: s_4vthFCCmL5HQqfMM_W4DQD
          stance: supports
          locator: CBDB：兄弟 王三錫（126453）之父／母 王瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王三鑑 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三鑑 之父／母。
          source:
            id: s_4vthFCCmL5HQqfMM_W4DQD
            source_type: api_record
            title: 中国历代人物传记资料库：王三鑑（CBDB 279881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279881&o=json
            external_identifier: CBDB:279881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NUN9V2WpcJELAKS3hvUbxx
        status: active
        display_name: 王瑞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bWsagJ4neRiDtUoSzhxOA3
        subject_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V3NoaPW32WtKxJVEudvZx7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HeoTG5acMKsuImogihwuGa
          claim_id: c_bWsagJ4neRiDtUoSzhxOA3
          source_id: s_4vthFCCmL5HQqfMM_W4DQD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126453 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4vthFCCmL5HQqfMM_W4DQD
            source_type: api_record
            title: 中国历代人物传记资料库：王三鑑（CBDB 279881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279881&o=json
            external_identifier: CBDB:279881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HkNX6H623Y1z9EYnBdcJJC
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王三鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三鑑，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279881） | accepted |
| name.primary | 王三鑑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NUN9V2WpcJELAKS3hvUbxx | 王瑞 | accepted |
| other | p_HkNX6H623Y1z9EYnBdcJJC | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三鑑（CBDB 279881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279881&o=json)
