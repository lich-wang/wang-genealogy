---
schema: wang-person/v1
id: p_Wa16TzeejBWNkkMC2TRyMt
status: active
merged_into: null
display_name: 王文亨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZ8sJmp1zhuGP6fvKi3PmG
        subject_person_id: p_Wa16TzeejBWNkkMC2TRyMt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B6B6B1iNMTK9Ec1J5PnB77
          claim_id: c_FZ8sJmp1zhuGP6fvKi3PmG
          source_id: s_XzXJf8xfsiM75MBwNW7pks
          stance: supports
          locator: CBDB:288681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288681）
          source: &a1
            id: s_XzXJf8xfsiM75MBwNW7pks
            source_type: api_record
            title: 中国历代人物传记资料库：王文亨（CBDB 288681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288681&o=json
            external_identifier: CBDB:288681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7qZiCqv1B4mubHfFit6JNd
        subject_person_id: p_Wa16TzeejBWNkkMC2TRyMt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文亨，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288681）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g4ZsB0-jyMOm2hJOPcO-km
          claim_id: c_7qZiCqv1B4mubHfFit6JNd
          source_id: s_XzXJf8xfsiM75MBwNW7pks
          stance: supports
          locator: CBDB:288681
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
        id: c_WPWkgsNX9CqyT-Hd8vR9qc
        subject_person_id: p_Wa16TzeejBWNkkMC2TRyMt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TtYJGCYPu4hyD8Y8epg7vF
          claim_id: c_WPWkgsNX9CqyT-Hd8vR9qc
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UEWpGjBMG8mpTrFMd5NdKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 202468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json
            external_identifier: CBDB:202468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hdA2EX5rq1DHua8Wnk5XqK
        status: active
        display_name: 王鉅
        merged_into_person_id: null
  other: []
---

# 王文亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文亨 | accepted |
| bio.summary | 王文亨，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288681） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hdA2EX5rq1DHua8Wnk5XqK | 王鉅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉅（CBDB 202468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json)
- [中国历代人物传记资料库：王文亨（CBDB 288681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288681&o=json)
