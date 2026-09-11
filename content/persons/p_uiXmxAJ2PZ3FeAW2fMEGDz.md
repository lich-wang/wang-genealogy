---
schema: wang-person/v1
id: p_uiXmxAJ2PZ3FeAW2fMEGDz
status: active
merged_into: null
display_name: 王矩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gcNJArmzD1bvM3RzhLKd48
        subject_person_id: p_uiXmxAJ2PZ3FeAW2fMEGDz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eanciRzV7cyvL2izHWbyGJ
          claim_id: c_gcNJArmzD1bvM3RzhLKd48
          source_id: s_HvHBNEyzywqF9V27RSyk6U
          stance: supports
          locator: CBDB:1791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1791）
          source: &a1
            id: s_HvHBNEyzywqF9V27RSyk6U
            source_type: api_record
            title: 中国历代人物传记资料库：王矩（CBDB 1791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1791&o=json
            external_identifier: CBDB:1791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HKbcv8RU4BDzP42vZaemPA
        subject_person_id: p_uiXmxAJ2PZ3FeAW2fMEGDz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矩，宋人物。曾任轉運副使。（中国历代人物传记资料库 CBDB 1791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i-jmaljTG34VB474Tyh-EW
          claim_id: c_HKbcv8RU4BDzP42vZaemPA
          source_id: s_HvHBNEyzywqF9V27RSyk6U
          stance: supports
          locator: CBDB:1791
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

# 王矩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王矩 | accepted |
| bio.summary | 王矩，宋人物。曾任轉運副使。（中国历代人物传记资料库 CBDB 1791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王矩（CBDB 1791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1791&o=json)
