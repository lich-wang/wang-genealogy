---
schema: wang-person/v1
id: p_dy11K68D5QxkanwfNRjGMX
status: active
merged_into: null
display_name: 王希庭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nieKpBpBDxG6PqWg93VJRZ
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v6vzWcQBGc5HyV8Vb9yGgy
          claim_id: c_nieKpBpBDxG6PqWg93VJRZ
          source_id: s_epHdK7JgJkGUxQU85p96wv
          stance: supports
          locator: CBDB:145222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145222）
          source: &a1
            id: s_epHdK7JgJkGUxQU85p96wv
            source_type: api_record
            title: 中国历代人物传记资料库：王希庭（CBDB 145222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145222&o=json
            external_identifier: CBDB:145222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LG6AkgYX6Zq1W5tVNthhfE
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 762年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wzQgndxjMtKKsvB8TnAcgy
          claim_id: c_LG6AkgYX6Zq1W5tVNthhfE
          source_id: s_epHdK7JgJkGUxQU85p96wv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_389VvYKDbyg96qw32tKx3m
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JvF679GM66EjYbWsWjt7BC
          claim_id: c_389VvYKDbyg96qw32tKx3m
          source_id: s_epHdK7JgJkGUxQU85p96wv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pu9Ko2NfuPBERq7B93mCB1
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_99bphfEcA1QAp96HYa4Ae4
          claim_id: c_pu9Ko2NfuPBERq7B93mCB1
          source_id: s_epHdK7JgJkGUxQU85p96wv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vi_S0TynNxRT8AYj9RMUej
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4LmSpyB7B9ubXZJPrd7ffT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RKj56wER4F5QdsnUVgVZ0o
          claim_id: c_vi_S0TynNxRT8AYj9RMUej
          source_id: s_iXCnNR7M1h8imaHP66MtjY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iXCnNR7M1h8imaHP66MtjY
            source_type: api_record
            title: 中国历代人物传记资料库：王寂（CBDB 185294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185294&o=json
            external_identifier: CBDB:185294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4LmSpyB7B9ubXZJPrd7ffT
        status: active
        display_name: 王寂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希庭 | accepted |
| birth.date | 762年 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4LmSpyB7B9ubXZJPrd7ffT | 王寂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寂（CBDB 185294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185294&o=json)
- [中国历代人物传记资料库：王希庭（CBDB 145222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145222&o=json)
