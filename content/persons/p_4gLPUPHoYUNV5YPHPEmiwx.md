---
schema: wang-person/v1
id: p_4gLPUPHoYUNV5YPHPEmiwx
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vTp219CRJhtk21vFHrJfSp
        subject_person_id: p_4gLPUPHoYUNV5YPHPEmiwx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WgGhXxdPS8HqBgK6C3QD5H
          claim_id: c_vTp219CRJhtk21vFHrJfSp
          source_id: s_6FihFwgL24JFfPdCRm1o5y
          stance: supports
          locator: CBDB:331406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331406）
          source: &a1
            id: s_6FihFwgL24JFfPdCRm1o5y
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 331406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331406&o=json
            external_identifier: CBDB:331406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bqv6dTZjUBuEnz47NzJM9E
        subject_person_id: p_4gLPUPHoYUNV5YPHPEmiwx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UMP60cEZ0MEf_j05Jli20u
          claim_id: c_Bqv6dTZjUBuEnz47NzJM9E
          source_id: s_6FihFwgL24JFfPdCRm1o5y
          stance: supports
          locator: CBDB:331406
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
  ancestors: []
  descendants:
    - claim:
        id: c_YTuwchK7Um_IE-wF89kJpt
        subject_person_id: p_4gLPUPHoYUNV5YPHPEmiwx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKYjWGunERrPHyzSqYs8nX
          claim_id: c_YTuwchK7Um_IE-wF89kJpt
          source_id: s_6FihFwgL24JFfPdCRm1o5y
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RCQhQuX7PGCpAotpnDmWLC
        status: active
        display_name: 王湘
        merged_into_person_id: null
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RCQhQuX7PGCpAotpnDmWLC | 王湘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 331406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331406&o=json)
