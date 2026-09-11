---
schema: wang-person/v1
id: p_WtvQS3ESjefyzCFCXsFmzA
status: active
merged_into: null
display_name: 王溶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63fM2nLrxsN4i5aFnZsMsq
        subject_person_id: p_WtvQS3ESjefyzCFCXsFmzA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9EbHDSCdD9PYy8oPbLGAF
          claim_id: c_63fM2nLrxsN4i5aFnZsMsq
          source_id: s_vN3k4WonVgnsEJ5Q7u7bD1
          stance: supports
          locator: CBDB:134184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134184）
          source: &a1
            id: s_vN3k4WonVgnsEJ5Q7u7bD1
            source_type: api_record
            title: 中国历代人物传记资料库：王溶（CBDB 134184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134184&o=json
            external_identifier: CBDB:134184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fRkZwLJrWmsy3kS5WsE2Po
        subject_person_id: p_WtvQS3ESjefyzCFCXsFmzA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溶，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134184）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cRvlw73K3VNMRPVDGjBkN_
          claim_id: c_fRkZwLJrWmsy3kS5WsE2Po
          source_id: s_vN3k4WonVgnsEJ5Q7u7bD1
          stance: supports
          locator: CBDB:134184
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c__Mxq03T6jlGghEM8ZVLM5i
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WtvQS3ESjefyzCFCXsFmzA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xnr5cFVn8G9QCh9uJEPh9G
          claim_id: c__Mxq03T6jlGghEM8ZVLM5i
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L25tMjRPyRu4qPsx4K9Mwg
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 100938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json
            external_identifier: CBDB:100938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王溶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溶 | accepted |
| bio.summary | 王溶，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134184） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 100938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json)
- [中国历代人物传记资料库：王溶（CBDB 134184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134184&o=json)
