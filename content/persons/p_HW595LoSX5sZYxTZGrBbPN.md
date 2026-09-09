---
schema: wang-person/v1
id: p_HW595LoSX5sZYxTZGrBbPN
status: active
merged_into: null
display_name: 王正宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xN7E92BCVzLr3DXc1kS1Hq
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V51TgvDACrAdisbJw2Bvy3
          claim_id: c_xN7E92BCVzLr3DXc1kS1Hq
          source_id: s_eX7Dcsn4SPbNwQXEAQd9JU
          stance: supports
          locator: CBDB:201966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201966）
          source: &a1
            id: s_eX7Dcsn4SPbNwQXEAQd9JU
            source_type: api_record
            title: 中国历代人物传记资料库：王正宗（CBDB 201966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201966&o=json
            external_identifier: CBDB:201966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uiPmARRAfZuSqPuAGFc2ZK
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1483年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dtXTTQF6k3aQq3c7BRH8Z
          claim_id: c_uiPmARRAfZuSqPuAGFc2ZK
          source_id: s_eX7Dcsn4SPbNwQXEAQd9JU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zQchvqXWCvZM2oyZBztTtX
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
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
        - id: cs_ZvoN3HCvKJzV6Suot9fjRL
          claim_id: c_zQchvqXWCvZM2oyZBztTtX
          source_id: s_eX7Dcsn4SPbNwQXEAQd9JU
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

# 王正宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正宗 | accepted |
| birth.date | 1483年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正宗（CBDB 201966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201966&o=json)
