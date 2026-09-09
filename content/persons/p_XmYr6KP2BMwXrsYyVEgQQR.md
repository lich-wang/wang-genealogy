---
schema: wang-person/v1
id: p_XmYr6KP2BMwXrsYyVEgQQR
status: active
merged_into: null
display_name: 王巳之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z9zxLbjVic9LHZMMLm8xdu
        subject_person_id: p_XmYr6KP2BMwXrsYyVEgQQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巳之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WKspD5FKy6KikCtNVB3Wry
          claim_id: c_Z9zxLbjVic9LHZMMLm8xdu
          source_id: s_hbG8FWXNGTHV9NrG6yurLt
          stance: supports
          locator: CBDB:546077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546077）
          source: &a1
            id: s_hbG8FWXNGTHV9NrG6yurLt
            source_type: api_record
            title: 中国历代人物传记资料库：王巳之（CBDB 546077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546077&o=json
            external_identifier: CBDB:546077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.478Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YR6cC6RrwbvHynY5VQhAaC
        subject_person_id: p_XmYr6KP2BMwXrsYyVEgQQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_purg7qEgnvzdzwwF6sE5SK
          claim_id: c_YR6cC6RrwbvHynY5VQhAaC
          source_id: s_hbG8FWXNGTHV9NrG6yurLt
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

# 王巳之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巳之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巳之（CBDB 546077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546077&o=json)
