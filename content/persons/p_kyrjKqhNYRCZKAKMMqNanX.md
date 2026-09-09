---
schema: wang-person/v1
id: p_kyrjKqhNYRCZKAKMMqNanX
status: active
merged_into: null
display_name: 王書臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dih6neFeuBE2SzLq8iFY6q
        subject_person_id: p_kyrjKqhNYRCZKAKMMqNanX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LvysBHWMeEc4QwyA4yb62C
          claim_id: c_Dih6neFeuBE2SzLq8iFY6q
          source_id: s_5JRe9w6HA2D7pbQU34P7rQ
          stance: supports
          locator: CBDB:638549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638549）
          source: &a1
            id: s_5JRe9w6HA2D7pbQU34P7rQ
            source_type: api_record
            title: 中国历代人物传记资料库：王書臣（CBDB 638549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638549&o=json
            external_identifier: CBDB:638549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3bXW48jRCdG9CQPLGJZqzg
        subject_person_id: p_kyrjKqhNYRCZKAKMMqNanX
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
        - id: cs_sVFtEvYNggArTC2zPZUvE5
          claim_id: c_3bXW48jRCdG9CQPLGJZqzg
          source_id: s_5JRe9w6HA2D7pbQU34P7rQ
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

# 王書臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王書臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王書臣（CBDB 638549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638549&o=json)
