---
schema: wang-person/v1
id: p_E1dEJGjr8W7R22AiXBD3Nw
status: active
merged_into: null
display_name: 王曇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NHZjhX1z8oe9J9zgNDwgsQ
        subject_person_id: p_E1dEJGjr8W7R22AiXBD3Nw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pJyBDSu1CsrbG3B7qAJvW7
          claim_id: c_NHZjhX1z8oe9J9zgNDwgsQ
          source_id: s_dpFTpzKTzV53jBpXCPejVS
          stance: supports
          locator: CBDB:71098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71098）
          source: &a1
            id: s_dpFTpzKTzV53jBpXCPejVS
            source_type: api_record
            title: 中国历代人物传记资料库：王曇（CBDB 71098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71098&o=json
            external_identifier: CBDB:71098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fqxjk9tEwtPBtGYGbN9hh6
        subject_person_id: p_E1dEJGjr8W7R22AiXBD3Nw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VbLNYKfTjnsHAPGZ58nwyh
          claim_id: c_Fqxjk9tEwtPBtGYGbN9hh6
          source_id: s_dpFTpzKTzV53jBpXCPejVS
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
        id: c_62p95E8jaGo1DhPmutha16
        subject_person_id: p_E1dEJGjr8W7R22AiXBD3Nw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1892年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hsgtUuf7PJcQkmjw1g4bPC
          claim_id: c_62p95E8jaGo1DhPmutha16
          source_id: s_dpFTpzKTzV53jBpXCPejVS
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
        id: c_y5Qtw6DgxvA8mia4jZrdt5
        subject_person_id: p_E1dEJGjr8W7R22AiXBD3Nw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曇（1867年—1892年），清人物。籍贯溧陽。（中国历代人物传记资料库 CBDB 71098）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b-Wn_vcpsfaZID0arX84Mo
          claim_id: c_y5Qtw6DgxvA8mia4jZrdt5
          source_id: s_dpFTpzKTzV53jBpXCPejVS
          stance: supports
          locator: CBDB:71098
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

# 王曇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曇 | accepted |
| birth.date | 1867年 | accepted |
| death.date | 1892年 | accepted |
| bio.summary | 王曇（1867年—1892年），清人物。籍贯溧陽。（中国历代人物传记资料库 CBDB 71098） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曇（CBDB 71098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71098&o=json)
