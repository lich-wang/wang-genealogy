---
schema: wang-person/v1
id: p_BVkBAP336H6h6hUZQK8J4m
status: active
merged_into: null
display_name: 王珂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNQsiyCRC42yFqT74P4aeL
        subject_person_id: p_BVkBAP336H6h6hUZQK8J4m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9QXKdVZ38v2jRNc6MxMpor
          claim_id: c_CNQsiyCRC42yFqT74P4aeL
          source_id: s_Wm3MBEVaPDKwAQVCFtAL7F
          stance: supports
          locator: CBDB:194808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194808）
          source: &a1
            id: s_Wm3MBEVaPDKwAQVCFtAL7F
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 194808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194808&o=json
            external_identifier: CBDB:194808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mFLmfsBfP4NKueRVNMR5rn
        subject_person_id: p_BVkBAP336H6h6hUZQK8J4m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 924年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NiWVGUr7mJV6CGa5Qw9bnu
          claim_id: c_mFLmfsBfP4NKueRVNMR5rn
          source_id: s_Wm3MBEVaPDKwAQVCFtAL7F
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
        id: c_mDJwzFPdDKxKpjVvBAf3XQ
        subject_person_id: p_BVkBAP336H6h6hUZQK8J4m
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
        - id: cs_qoi5qHwaLoWFMuij5wMQQb
          claim_id: c_mDJwzFPdDKxKpjVvBAf3XQ
          source_id: s_Wm3MBEVaPDKwAQVCFtAL7F
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

# 王珂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珂 | accepted |
| death.date | 924年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珂（CBDB 194808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194808&o=json)
