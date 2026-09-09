---
schema: wang-person/v1
id: p_LgCcRj9KwFJBpLLrnzovos
status: active
merged_into: null
display_name: 王艮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w6MAhQaK5urf3G4dpX7H6T
        subject_person_id: p_LgCcRj9KwFJBpLLrnzovos
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王艮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bmRFUJBNHieRZJxZ23C3p
          claim_id: c_w6MAhQaK5urf3G4dpX7H6T
          source_id: s_tG3HSSFCshV5W9NdJD7bYq
          stance: supports
          locator: CBDB:35052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35052）
          source: &a1
            id: s_tG3HSSFCshV5W9NdJD7bYq
            source_type: api_record
            title: 中国历代人物传记资料库：王艮（CBDB 35052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35052&o=json
            external_identifier: CBDB:35052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rgYsWRDHA7uhGKouJ8JajK
        subject_person_id: p_LgCcRj9KwFJBpLLrnzovos
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1483年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rYtk1MAdHAAyDzrkeVTp68
          claim_id: c_rgYsWRDHA7uhGKouJ8JajK
          source_id: s_tG3HSSFCshV5W9NdJD7bYq
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
        id: c_3g6rcFGSvFhWM9LXabEGzD
        subject_person_id: p_LgCcRj9KwFJBpLLrnzovos
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9meBk7yQHBgJg9QdBkpHVm
          claim_id: c_3g6rcFGSvFhWM9LXabEGzD
          source_id: s_tG3HSSFCshV5W9NdJD7bYq
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
        id: c_C3pTU5Dq3yCRqKTbLKV5hq
        subject_person_id: p_LgCcRj9KwFJBpLLrnzovos
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
        - id: cs_Rs98MaUX9T3TxpHxXFzsuB
          claim_id: c_C3pTU5Dq3yCRqKTbLKV5hq
          source_id: s_tG3HSSFCshV5W9NdJD7bYq
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

# 王艮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王艮 | accepted |
| birth.date | 1483年 | accepted |
| death.date | 1540年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王艮（CBDB 35052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35052&o=json)
