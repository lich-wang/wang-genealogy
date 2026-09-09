---
schema: wang-person/v1
id: p_i9FSRy4GUDPHuMS7PxNGHT
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NjXVLpsVzkdRjEqq1t9Y1
        subject_person_id: p_i9FSRy4GUDPHuMS7PxNGHT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xBm8UH6CH2aHPac1ZuWegz
          claim_id: c_3NjXVLpsVzkdRjEqq1t9Y1
          source_id: s_A9rPMEKupMy34J8KuF575i
          stance: supports
          locator: CBDB:162932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162932）
          source: &a1
            id: s_A9rPMEKupMy34J8KuF575i
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 162932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162932&o=json
            external_identifier: CBDB:162932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_utW6RjET5Lnre7zQzt6p4V
        subject_person_id: p_i9FSRy4GUDPHuMS7PxNGHT
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
        - id: cs_D6hD4yABq1amBH1c5mYYmQ
          claim_id: c_utW6RjET5Lnre7zQzt6p4V
          source_id: s_A9rPMEKupMy34J8KuF575i
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
  descendants: []
  other: []
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 162932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162932&o=json)
