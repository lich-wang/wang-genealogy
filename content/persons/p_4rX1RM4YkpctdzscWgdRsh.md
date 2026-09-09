---
schema: wang-person/v1
id: p_4rX1RM4YkpctdzscWgdRsh
status: active
merged_into: null
display_name: 王綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATjyDvfC4y9w24DC6w98hi
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H8RpXmzGUiJ8fr2sAt4Yc9
          claim_id: c_ATjyDvfC4y9w24DC6w98hi
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: CBDB:126788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126788）
          source: &a1
            id: s_tniXLNayvNhe4q9rD3xh4y
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 126788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json
            external_identifier: CBDB:126788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aM5tKrX2FNAJbAPpTEtABb
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1455年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JHVV5QwbQZu9Y2xz8EMSYv
          claim_id: c_aM5tKrX2FNAJbAPpTEtABb
          source_id: s_tniXLNayvNhe4q9rD3xh4y
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
        id: c_jRkHG9YaNC2QxN4MSH43vR
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boND5LWak3QMLYGG1YC5NC
          claim_id: c_jRkHG9YaNC2QxN4MSH43vR
          source_id: s_tniXLNayvNhe4q9rD3xh4y
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
        id: c_5coA1qFNmJfPAmbt2JyK8w
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
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
        - id: cs_YUJsKZfy4GM6uZ1YErdjA7
          claim_id: c_5coA1qFNmJfPAmbt2JyK8w
          source_id: s_tniXLNayvNhe4q9rD3xh4y
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

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| birth.date | 1455年 | accepted |
| death.date | 1511年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 126788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json)
