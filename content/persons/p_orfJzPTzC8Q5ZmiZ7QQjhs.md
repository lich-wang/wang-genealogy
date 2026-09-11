---
schema: wang-person/v1
id: p_orfJzPTzC8Q5ZmiZ7QQjhs
status: active
merged_into: null
display_name: 王傅之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DHrac4iSpg4sSSNYsE1S85
        subject_person_id: p_orfJzPTzC8Q5ZmiZ7QQjhs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AMsxbdDM6PsV3mWekFpUwo
          claim_id: c_DHrac4iSpg4sSSNYsE1S85
          source_id: s_1CPRQP3U4ZkazHjWJsF4s6
          stance: supports
          locator: CBDB:384555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384555）
          source: &a1
            id: s_1CPRQP3U4ZkazHjWJsF4s6
            source_type: api_record
            title: 中国历代人物传记资料库：王傅之（CBDB 384555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384555&o=json
            external_identifier: CBDB:384555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3H6FKcCj3EvB3mGPTPnojL
        subject_person_id: p_orfJzPTzC8Q5ZmiZ7QQjhs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅之，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x3pYf2E33v5WuMQdXKAOdQ
          claim_id: c_3H6FKcCj3EvB3mGPTPnojL
          source_id: s_1CPRQP3U4ZkazHjWJsF4s6
          stance: supports
          locator: CBDB:384555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王傅之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅之 | accepted |
| bio.summary | 王傅之，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傅之（CBDB 384555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384555&o=json)
