---
schema: wang-person/v1
id: p_tcgL5LBMq5eq69BKqNNLRU
status: active
merged_into: null
display_name: 王泚
cbdb_id: 377999
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5uV7ZoF7A7TXoxQcVGxLA8
        subject_person_id: p_tcgL5LBMq5eq69BKqNNLRU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泚，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377999）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4g6ozZBGMluoSFYoAtl5lu
          claim_id: c_5uV7ZoF7A7TXoxQcVGxLA8
          source_id: s_uqhqoR98379R2vEYbC9nYs
          stance: supports
          locator: CBDB:377999
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uqhqoR98379R2vEYbC9nYs
            source_type: api_record
            title: 中国历代人物传记资料库：王泚（CBDB 377999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377999&o=json
            external_identifier: CBDB:377999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cNqhPRzXvPi62RB1TzVpuB
        subject_person_id: p_tcgL5LBMq5eq69BKqNNLRU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A8Rk3MHm7Sj4YR7EJULtV7
          claim_id: c_cNqhPRzXvPi62RB1TzVpuB
          source_id: s_uqhqoR98379R2vEYbC9nYs
          stance: supports
          locator: CBDB:377999
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4701-4800）｜历史性依据：CBDB 朝代 = 唐
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

# 王泚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王泚，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377999） | accepted |
| name.primary | 王泚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泚（CBDB 377999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377999&o=json)
