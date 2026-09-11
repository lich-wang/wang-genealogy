---
schema: wang-person/v1
id: p_3B9Fn8g9ftJyrriUZjQ4xY
status: active
merged_into: null
display_name: 王元浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_metCNXTznyC85y8qdxL3r1
        subject_person_id: p_3B9Fn8g9ftJyrriUZjQ4xY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3VzCT5cw31SuQAuy6bHJi9
          claim_id: c_metCNXTznyC85y8qdxL3r1
          source_id: s_D1n66rCvN3eLFuvPqYUGrr
          stance: supports
          locator: CBDB:322410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322410）
          source: &a1
            id: s_D1n66rCvN3eLFuvPqYUGrr
            source_type: api_record
            title: 中国历代人物传记资料库：王元浩（CBDB 322410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322410&o=json
            external_identifier: CBDB:322410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZ7rt2k8kHq357MhhQTrz2
        subject_person_id: p_3B9Fn8g9ftJyrriUZjQ4xY
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
        - id: cs_ChjXCF5bCCYNqzZm44SLCB
          claim_id: c_EZ7rt2k8kHq357MhhQTrz2
          source_id: s_D1n66rCvN3eLFuvPqYUGrr
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
        id: c_38Z4eqNn4Dahg_-KkmbAqj
        subject_person_id: p_3B9Fn8g9ftJyrriUZjQ4xY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZPnPI0uAGOHAL7iMp-MD1m
          claim_id: c_38Z4eqNn4Dahg_-KkmbAqj
          source_id: s_D1n66rCvN3eLFuvPqYUGrr
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PgnoAWh3cGCvbB7v53hNcS
        status: active
        display_name: 王復
        merged_into_person_id: null
  other: []
---

# 王元浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元浩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PgnoAWh3cGCvbB7v53hNcS | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元浩（CBDB 322410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322410&o=json)
