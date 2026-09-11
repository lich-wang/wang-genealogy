---
schema: wang-person/v1
id: p_PgnoAWh3cGCvbB7v53hNcS
status: active
merged_into: null
display_name: 王復
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTqkqZzSR9fDeTUjB3asNr
        subject_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_udY4gwvpGgjs6ZEEqnfxq7
          claim_id: c_zTqkqZzSR9fDeTUjB3asNr
          source_id: s_4NgZGnBBUC86VSegGA4nCB
          stance: supports
          locator: CBDB:204673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204673）
          source: &a1
            id: s_4NgZGnBBUC86VSegGA4nCB
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 204673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204673&o=json
            external_identifier: CBDB:204673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RrfuJadbugJXUuyatSKNd5
        subject_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1398年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViTuczYKm196MKT4eEzxSZ
          claim_id: c_RrfuJadbugJXUuyatSKNd5
          source_id: s_4NgZGnBBUC86VSegGA4nCB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KpAY3FcQ8BKEFUftQ2cCLG
        subject_person_id: p_PgnoAWh3cGCvbB7v53hNcS
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
        - id: cs_q42t4rCzMEi4pchcDvBFYh
          claim_id: c_KpAY3FcQ8BKEFUftQ2cCLG
          source_id: s_4NgZGnBBUC86VSegGA4nCB
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
  ancestors:
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
          source:
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
      object_person:
        id: p_3B9Fn8g9ftJyrriUZjQ4xY
        status: active
        display_name: 王元浩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| birth.date | 1398年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3B9Fn8g9ftJyrriUZjQ4xY | 王元浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 204673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204673&o=json)
- [中国历代人物传记资料库：王元浩（CBDB 322410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322410&o=json)
