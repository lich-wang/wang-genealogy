---
schema: wang-person/v1
id: p_GK7aGSmHeJ7FK9HzqsWEuZ
status: active
merged_into: null
display_name: 王文燠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Si6XbmZx15bGgkRAF1qBU
        subject_person_id: p_GK7aGSmHeJ7FK9HzqsWEuZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文燠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5CoEcDREmadafTPpVuJvkn
          claim_id: c_6Si6XbmZx15bGgkRAF1qBU
          source_id: s_yM4LiZJR6bBCNfFyKudQSQ
          stance: supports
          locator: CBDB:298811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298811）
          source: &a1
            id: s_yM4LiZJR6bBCNfFyKudQSQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文燠（CBDB 298811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298811&o=json
            external_identifier: CBDB:298811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yANhbt8UWJySUDSSrjPNK8
        subject_person_id: p_GK7aGSmHeJ7FK9HzqsWEuZ
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
        - id: cs_vJWAK2K1rifJYDmVqF6n3z
          claim_id: c_yANhbt8UWJySUDSSrjPNK8
          source_id: s_yM4LiZJR6bBCNfFyKudQSQ
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
        id: c_xcEemeS7hSG6CgAGYSrEkY
        subject_person_id: p_GK7aGSmHeJ7FK9HzqsWEuZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0qrjhIZpjlOYWOJxtK8U6u
          claim_id: c_xcEemeS7hSG6CgAGYSrEkY
          source_id: s_yM4LiZJR6bBCNfFyKudQSQ
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
  other: []
---

# 王文燠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文燠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文燠（CBDB 298811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298811&o=json)
