---
schema: wang-person/v1
id: p_hJE5Kv5NfmNkUurrk6Rsdr
status: active
merged_into: null
display_name: 王家璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KyDsX4tbmHac44MHSui89p
        subject_person_id: p_hJE5Kv5NfmNkUurrk6Rsdr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uBCgN7wjWZc2MQSaDqNxDq
          claim_id: c_KyDsX4tbmHac44MHSui89p
          source_id: s_8cEdwG41FG4GcfhZ8FVqHH
          stance: supports
          locator: CBDB:55667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55667）
          source: &a1
            id: s_8cEdwG41FG4GcfhZ8FVqHH
            source_type: api_record
            title: 中国历代人物传记资料库：王家璧（CBDB 55667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55667&o=json
            external_identifier: CBDB:55667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QwK212N5WgavkgWCWkWsKC
        subject_person_id: p_hJE5Kv5NfmNkUurrk6Rsdr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1814年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ThkWHsfbkYk3a8kwWNFYS7
          claim_id: c_QwK212N5WgavkgWCWkWsKC
          source_id: s_8cEdwG41FG4GcfhZ8FVqHH
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
        id: c_XUfLWg5Q9jM2KUyaojRUUF
        subject_person_id: p_hJE5Kv5NfmNkUurrk6Rsdr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1883年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iAMUwBEVMa4JN5xGggcL83
          claim_id: c_XUfLWg5Q9jM2KUyaojRUUF
          source_id: s_8cEdwG41FG4GcfhZ8FVqHH
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
        id: c_BM9BDdWwunh9LjsoR8BnC3
        subject_person_id: p_hJE5Kv5NfmNkUurrk6Rsdr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7izLL9d28B7uxh4SZ8JSc
          claim_id: c_BM9BDdWwunh9LjsoR8BnC3
          source_id: s_8cEdwG41FG4GcfhZ8FVqHH
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

# 王家璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家璧 | accepted |
| birth.date | 1814年 | accepted |
| death.date | 1883年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家璧（CBDB 55667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55667&o=json)
