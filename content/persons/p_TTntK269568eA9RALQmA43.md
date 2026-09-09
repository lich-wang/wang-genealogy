---
schema: wang-person/v1
id: p_TTntK269568eA9RALQmA43
status: active
merged_into: null
display_name: 王納言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ej9VMFFQGjut4J7TwmHboE
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2B7AerTxN2f7KhTNC6EGjq
          claim_id: c_Ej9VMFFQGjut4J7TwmHboE
          source_id: s_aTLSrYZ8FAxY6igyweBs3N
          stance: supports
          locator: CBDB:68459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68459）
          source: &a1
            id: s_aTLSrYZ8FAxY6igyweBs3N
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 68459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68459&o=json
            external_identifier: CBDB:68459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8KtT94FnL1y4GEuHm2Caj
        subject_person_id: p_TTntK269568eA9RALQmA43
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
        - id: cs_TxRhni3nxHohafZDR5gLf2
          claim_id: c_h8KtT94FnL1y4GEuHm2Caj
          source_id: s_aTLSrYZ8FAxY6igyweBs3N
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

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王納言（CBDB 68459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68459&o=json)
