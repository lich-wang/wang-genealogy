---
schema: wang-person/v1
id: p_oXNXhcmP3pgs4EeZNT7tYq
status: active
merged_into: null
display_name: 王篆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_61uWpk43HThDEy9CpqE6HR
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bYVqdBaAqmAZSzTe7xKnn1
          claim_id: c_61uWpk43HThDEy9CpqE6HR
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
          stance: supports
          locator: CBDB:205090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205090）
          source: &a1
            id: s_Na2wbX6AVZxBfFuDJULbnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王篆（CBDB 205090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205090&o=json
            external_identifier: CBDB:205090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1kKuSHNL6Tk84LRg8bP9DQ
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P8N1QVRe8rjt3n51TMPRgZ
          claim_id: c_1kKuSHNL6Tk84LRg8bP9DQ
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ftzFY5SEXxz6znD6s4cxny
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
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
        - id: cs_8We86x3i2F1kXA5y61rNsH
          claim_id: c_ftzFY5SEXxz6znD6s4cxny
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
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

# 王篆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王篆 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王篆（CBDB 205090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205090&o=json)
