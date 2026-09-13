---
schema: wang-person/v1
id: p_zSbAX6pTq8syEKaPFcTUoJ
status: active
merged_into: null
display_name: 王㦛
cbdb_id: 134169
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8F9FKgsygqNb6DUVMHBfZo
        subject_person_id: p_zSbAX6pTq8syEKaPFcTUoJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㦛，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_I40Eh891AElDfC05tD-8mD
          claim_id: c_8F9FKgsygqNb6DUVMHBfZo
          source_id: s_bYrgshEQRkLtUCabd4VJUL
          stance: supports
          locator: CBDB:134169
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bYrgshEQRkLtUCabd4VJUL
            source_type: api_record
            title: 中国历代人物传记资料库：王㦛（CBDB 134169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134169&o=json
            external_identifier: CBDB:134169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sLxEV8bpw38TvN82vgKwDa
        subject_person_id: p_zSbAX6pTq8syEKaPFcTUoJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㦛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rysk6Gpb3DJjVnxMaC3Xwk
          claim_id: c_sLxEV8bpw38TvN82vgKwDa
          source_id: s_bYrgshEQRkLtUCabd4VJUL
          stance: supports
          locator: CBDB:134169
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_gzY3NKkuZNWz35RIqw2KNG
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zSbAX6pTq8syEKaPFcTUoJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-k81DRjylb94DOJSlqCg0S
          claim_id: c_gzY3NKkuZNWz35RIqw2KNG
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：孫
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

# 王㦛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王㦛，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134169） | accepted |
| name.primary | 王㦛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 100938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json)
- [中国历代人物传记资料库：王㦛（CBDB 134169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134169&o=json)
