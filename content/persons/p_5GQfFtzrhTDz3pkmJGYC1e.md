---
schema: wang-person/v1
id: p_5GQfFtzrhTDz3pkmJGYC1e
status: active
merged_into: null
display_name: 王彥超
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sPDpqqwX8uqjJgx4pEQX52
        subject_person_id: p_5GQfFtzrhTDz3pkmJGYC1e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YKzG8SKSGRKp7NwchcWexA
          claim_id: c_sPDpqqwX8uqjJgx4pEQX52
          source_id: s_N49Q1xkhsFASe57MZq7MU6
          stance: supports
          locator: CBDB:386570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386570）
          source: &a1
            id: s_N49Q1xkhsFASe57MZq7MU6
            source_type: api_record
            title: 中国历代人物传记资料库：王彥超（CBDB 386570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386570&o=json
            external_identifier: CBDB:386570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qXUV6LU8VL8cD1THkYNpmA
        subject_person_id: p_5GQfFtzrhTDz3pkmJGYC1e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥超，五代人物。籍贯義烏，曾任節度使。（中国历代人物传记资料库 CBDB 386570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ULTixUk9ua8n8JDAnpBPcN
          claim_id: c_qXUV6LU8VL8cD1THkYNpmA
          source_id: s_N49Q1xkhsFASe57MZq7MU6
          stance: supports
          locator: CBDB:386570
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

# 王彥超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥超 | accepted |
| bio.summary | 王彥超，五代人物。籍贯義烏，曾任節度使。（中国历代人物传记资料库 CBDB 386570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥超（CBDB 386570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386570&o=json)
