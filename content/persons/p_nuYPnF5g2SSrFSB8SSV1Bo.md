---
schema: wang-person/v1
id: p_nuYPnF5g2SSrFSB8SSV1Bo
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tnupLpmbKGueR3iBJSQxnH
        subject_person_id: p_nuYPnF5g2SSrFSB8SSV1Bo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7eKQcWJ7mbCRNRFiJAyXVd
          claim_id: c_tnupLpmbKGueR3iBJSQxnH
          source_id: s_umVdkY2Ev5QTDdKfJe4YPS
          stance: supports
          locator: CBDB:326617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326617）
          source: &a1
            id: s_umVdkY2Ev5QTDdKfJe4YPS
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 326617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326617&o=json
            external_identifier: CBDB:326617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PwW4VYV7wosMenVWH3QsmL
        subject_person_id: p_nuYPnF5g2SSrFSB8SSV1Bo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NwUtPvCk9uo1JbQIZtl7KT
          claim_id: c_PwW4VYV7wosMenVWH3QsmL
          source_id: s_umVdkY2Ev5QTDdKfJe4YPS
          stance: supports
          locator: CBDB:326617
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
        id: c_4EL9oWJldy48HroD4doOiQ
        subject_person_id: p_nuYPnF5g2SSrFSB8SSV1Bo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xHh5B7oe6QQj6HCyNCNkv
          claim_id: c_4EL9oWJldy48HroD4doOiQ
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1rvQicHBV2nhuQQ8M41Xjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 204969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json
            external_identifier: CBDB:204969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PMudrRao4a9cRDuakPq7M
        status: active
        display_name: 王同讚
        merged_into_person_id: null
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326617） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4PMudrRao4a9cRDuakPq7M | 王同讚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 326617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326617&o=json)
- [中国历代人物传记资料库：王同讚（CBDB 204969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json)
