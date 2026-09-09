---
schema: wang-person/v1
id: p_ANeppbxTm56LA1X59e1kGK
status: active
merged_into: null
display_name: 王待徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P4QUPtRKaNKJtapPswxzHG
        subject_person_id: p_ANeppbxTm56LA1X59e1kGK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王待徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hciuq42aDY2AvsWe5NaD6f
          claim_id: c_P4QUPtRKaNKJtapPswxzHG
          source_id: s_o8Pe63bQXpJ4by7h9DNdh4
          stance: supports
          locator: CBDB:142900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142900）
          source: &a1
            id: s_o8Pe63bQXpJ4by7h9DNdh4
            source_type: api_record
            title: 中国历代人物传记资料库：王待徵（CBDB 142900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142900&o=json
            external_identifier: CBDB:142900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t8x5YuQHLyfC9DYpmpw1BM
        subject_person_id: p_ANeppbxTm56LA1X59e1kGK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 675年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cmgod4a2ZMbKYas6ExC6dj
          claim_id: c_t8x5YuQHLyfC9DYpmpw1BM
          source_id: s_o8Pe63bQXpJ4by7h9DNdh4
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
        id: c_BwAz3UuFUaeuMF4xdGXYbt
        subject_person_id: p_ANeppbxTm56LA1X59e1kGK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 725年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VseM1eGzk3gjbGeATyHh9Z
          claim_id: c_BwAz3UuFUaeuMF4xdGXYbt
          source_id: s_o8Pe63bQXpJ4by7h9DNdh4
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
        id: c_PFjjbZoJw3UHCdga24wDdf
        subject_person_id: p_ANeppbxTm56LA1X59e1kGK
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
        - id: cs_zLWiQQA9HFjJvgLxj8NgGU
          claim_id: c_PFjjbZoJw3UHCdga24wDdf
          source_id: s_o8Pe63bQXpJ4by7h9DNdh4
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

# 王待徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王待徵 | accepted |
| birth.date | 675年 | accepted |
| death.date | 725年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王待徵（CBDB 142900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142900&o=json)
