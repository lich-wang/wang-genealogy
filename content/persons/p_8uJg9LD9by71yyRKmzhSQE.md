---
schema: wang-person/v1
id: p_8uJg9LD9by71yyRKmzhSQE
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i93n5jRLADXVzeqpg6rekv
        subject_person_id: p_8uJg9LD9by71yyRKmzhSQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FGeDTwkxLoaPuYgBZF1FA6
          claim_id: c_i93n5jRLADXVzeqpg6rekv
          source_id: s_6niCFpEszB6kRn6YQEE5vX
          stance: supports
          locator: CBDB:36350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36350）
          source: &a1
            id: s_6niCFpEszB6kRn6YQEE5vX
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 36350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36350&o=json
            external_identifier: CBDB:36350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ghvVa19f1NJJBrgWn92n3o
        subject_person_id: p_8uJg9LD9by71yyRKmzhSQE
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
        - id: cs_MuouUj8xFL8BEDmi86wHuv
          claim_id: c_ghvVa19f1NJJBrgWn92n3o
          source_id: s_6niCFpEszB6kRn6YQEE5vX
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 36350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36350&o=json)
