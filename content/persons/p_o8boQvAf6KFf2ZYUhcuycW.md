---
schema: wang-person/v1
id: p_o8boQvAf6KFf2ZYUhcuycW
status: active
merged_into: null
display_name: 王茂元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9F2oixrL3RBY8PwNyeWLLr
        subject_person_id: p_o8boQvAf6KFf2ZYUhcuycW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_725ncu1oavx7UPfaV1AySp
          claim_id: c_9F2oixrL3RBY8PwNyeWLLr
          source_id: s_KH87ibN92rei7quU1WMU5q
          stance: supports
          locator: CBDB:445603
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445603）
          source: &a1
            id: s_KH87ibN92rei7quU1WMU5q
            source_type: api_record
            title: 中国历代人物传记资料库：王茂元（CBDB 445603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445603&o=json
            external_identifier: CBDB:445603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ACNfAME3SHHzY6fz7N4pC3
        subject_person_id: p_o8boQvAf6KFf2ZYUhcuycW
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
        - id: cs_CEEjfFvVP13EJz1csZMs2U
          claim_id: c_ACNfAME3SHHzY6fz7N4pC3
          source_id: s_KH87ibN92rei7quU1WMU5q
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

# 王茂元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂元 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂元（CBDB 445603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445603&o=json)
