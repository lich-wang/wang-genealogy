---
schema: wang-person/v1
id: p_KHXgQXdxjU1xg17QDh5jwi
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8w7hxTX2mpw1LHu8iGn2hB
        subject_person_id: p_KHXgQXdxjU1xg17QDh5jwi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tw1A2QYNA8MMGtfNw6E41B
          claim_id: c_8w7hxTX2mpw1LHu8iGn2hB
          source_id: s_eYyH3aDBQSxi6PnPLj1CS3
          stance: supports
          locator: CBDB:66339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66339）
          source: &a1
            id: s_eYyH3aDBQSxi6PnPLj1CS3
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 66339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66339&o=json
            external_identifier: CBDB:66339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Zax7MsAT1AKfP833Sgj6oB
        subject_person_id: p_KHXgQXdxjU1xg17QDh5jwi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1331年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_abokJ5xhMMa9FiS6JKEieZ
          claim_id: c_Zax7MsAT1AKfP833Sgj6oB
          source_id: s_eYyH3aDBQSxi6PnPLj1CS3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZXBZv2VVWTJHFdcTpMmoUi
        subject_person_id: p_KHXgQXdxjU1xg17QDh5jwi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1393年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztHQQEnHtucRBfGj2sK1Sk
          claim_id: c_ZXBZv2VVWTJHFdcTpMmoUi
          source_id: s_eYyH3aDBQSxi6PnPLj1CS3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zs5yJvyLuu8JTnF1RW28hQ
        subject_person_id: p_KHXgQXdxjU1xg17QDh5jwi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼（1331年—1393年），明人物。籍贯臨淮，曾任都督府都督僉事、副將軍、衛親軍指揮使。（中国历代人物传记资料库 CBDB 66339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__d98-DDa7VegZJI-2roqOD
          claim_id: c_zs5yJvyLuu8JTnF1RW28hQ
          source_id: s_eYyH3aDBQSxi6PnPLj1CS3
          stance: supports
          locator: CBDB:66339
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| birth.date | 1331年 | accepted |
| death.date | 1393年 | accepted |
| bio.summary | 王弼（1331年—1393年），明人物。籍贯臨淮，曾任都督府都督僉事、副將軍、衛親軍指揮使。（中国历代人物传记资料库 CBDB 66339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 66339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66339&o=json)
