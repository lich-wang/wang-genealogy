---
schema: wang-person/v1
id: p_fCRf7pKJyhsAXWGSNN7cKV
status: active
merged_into: null
display_name: 王崑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_njLJFB23LEUGCbFqwWTFGb
        subject_person_id: p_fCRf7pKJyhsAXWGSNN7cKV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fKuPDSjagNLHFo9KR8fKnC
          claim_id: c_njLJFB23LEUGCbFqwWTFGb
          source_id: s_DGKxb11paufQRHpSzNTQMa
          stance: supports
          locator: CBDB:175873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175873）
          source: &a1
            id: s_DGKxb11paufQRHpSzNTQMa
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 175873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175873&o=json
            external_identifier: CBDB:175873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Py9AyMdJedmT9xjVy7TUuk
        subject_person_id: p_fCRf7pKJyhsAXWGSNN7cKV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KcqubAC1RfBYTxd8ECuvBa
          claim_id: c_Py9AyMdJedmT9xjVy7TUuk
          source_id: s_DGKxb11paufQRHpSzNTQMa
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
        id: c_C6LWgXnQHno4y9UteK7mCH
        subject_person_id: p_fCRf7pKJyhsAXWGSNN7cKV
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
        - id: cs_Aq49YuKmGQ7EDzSS6SHgKE
          claim_id: c_C6LWgXnQHno4y9UteK7mCH
          source_id: s_DGKxb11paufQRHpSzNTQMa
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

# 王崑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑 | accepted |
| death.date | 798年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崑（CBDB 175873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175873&o=json)
