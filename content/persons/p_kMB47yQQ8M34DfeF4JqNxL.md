---
schema: wang-person/v1
id: p_kMB47yQQ8M34DfeF4JqNxL
status: active
merged_into: null
display_name: 王固業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JNvVEQsBKB3x4oqE8AZfXp
        subject_person_id: p_kMB47yQQ8M34DfeF4JqNxL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3iiHHB6QPh9pqYAy86J2Qv
          claim_id: c_JNvVEQsBKB3x4oqE8AZfXp
          source_id: s_KuJkxmck1MPUE9uRnN8r82
          stance: supports
          locator: CBDB:175656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175656）
          source: &a1
            id: s_KuJkxmck1MPUE9uRnN8r82
            source_type: api_record
            title: 中国历代人物传记资料库：王固業（CBDB 175656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175656&o=json
            external_identifier: CBDB:175656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_diSLG8P5YXj6cykheQBgKd
        subject_person_id: p_kMB47yQQ8M34DfeF4JqNxL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7bu6d4kLeAGZoXyJZYEBM5
          claim_id: c_diSLG8P5YXj6cykheQBgKd
          source_id: s_KuJkxmck1MPUE9uRnN8r82
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
        id: c_2FWZiJSUPaf4zrCPTsM47C
        subject_person_id: p_kMB47yQQ8M34DfeF4JqNxL
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
        - id: cs_7gTtFPKjFty27A1KvbC9kt
          claim_id: c_2FWZiJSUPaf4zrCPTsM47C
          source_id: s_KuJkxmck1MPUE9uRnN8r82
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

# 王固業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固業 | accepted |
| death.date | 655年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王固業（CBDB 175656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175656&o=json)
