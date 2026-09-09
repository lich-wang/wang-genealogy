---
schema: wang-person/v1
id: p_YyZ8kzZipn24meCF2Ez4Sz
status: active
merged_into: null
display_name: 王致和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZBhwxVL3fE8foqKKoBYbdL
        subject_person_id: p_YyZ8kzZipn24meCF2Ez4Sz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KzD44wwmsLwz7JDDfGGZcg
          claim_id: c_ZBhwxVL3fE8foqKKoBYbdL
          source_id: s_twKfjoBHsu3hbcApX4r5kY
          stance: supports
          locator: CBDB:212072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212072）
          source: &a1
            id: s_twKfjoBHsu3hbcApX4r5kY
            source_type: api_record
            title: 中国历代人物传记资料库：王致和（CBDB 212072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json
            external_identifier: CBDB:212072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2c9NnSWRT1zUpC8An5JWtR
        subject_person_id: p_YyZ8kzZipn24meCF2Ez4Sz
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
        - id: cs_7WP3R5kpo8BwD11iKt7R42
          claim_id: c_2c9NnSWRT1zUpC8An5JWtR
          source_id: s_twKfjoBHsu3hbcApX4r5kY
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

# 王致和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致和 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致和（CBDB 212072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json)
