---
schema: wang-person/v1
id: p_8yXHpS1XXTWNEbHqcV5CiM
status: active
merged_into: null
display_name: 王瑢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vK4ThC36tU7Mi7Q41dHs2y
        subject_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bc3tg27n4QBkNZsnfapp1M
          claim_id: c_vK4ThC36tU7Mi7Q41dHs2y
          source_id: s_ffAox6VEvUocx6P9wMiwSM
          stance: supports
          locator: CBDB:290018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290018）
          source: &a1
            id: s_ffAox6VEvUocx6P9wMiwSM
            source_type: api_record
            title: 中国历代人物传记资料库：王瑢（CBDB 290018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json
            external_identifier: CBDB:290018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TuqwQLhedsBAFJGbB7Ask
        subject_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
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
        - id: cs_1kzt5todSajnxKWufiMQmM
          claim_id: c_5TuqwQLhedsBAFJGbB7Ask
          source_id: s_ffAox6VEvUocx6P9wMiwSM
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

# 王瑢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑢（CBDB 290018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json)
