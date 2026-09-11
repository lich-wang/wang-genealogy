---
schema: wang-person/v1
id: p_1w1QV6jGG4fjm3v1NT14S4
status: active
merged_into: null
display_name: 王縡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AXvLaXgi3BV5qTQ6Keq9Nw
        subject_person_id: p_1w1QV6jGG4fjm3v1NT14S4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5QGJBA4zjPZS4DXyc1qy9g
          claim_id: c_AXvLaXgi3BV5qTQ6Keq9Nw
          source_id: s_uiWj1ULDL7j87K4s6Vhku4
          stance: supports
          locator: CBDB:71260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71260）
          source: &a1
            id: s_uiWj1ULDL7j87K4s6Vhku4
            source_type: api_record
            title: 中国历代人物传记资料库：王縡（CBDB 71260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71260&o=json
            external_identifier: CBDB:71260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mZWbU97cNtUd8TrV5cA4pk
        subject_person_id: p_1w1QV6jGG4fjm3v1NT14S4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1833年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_efhCb3QcNgzEPTcEBAzoML
          claim_id: c_mZWbU97cNtUd8TrV5cA4pk
          source_id: s_uiWj1ULDL7j87K4s6Vhku4
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
        id: c_QjTF3WUwvoiYQA4jzcyPNF
        subject_person_id: p_1w1QV6jGG4fjm3v1NT14S4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1880年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZCL1bu7P8C2srDjEBgeyBJ
          claim_id: c_QjTF3WUwvoiYQA4jzcyPNF
          source_id: s_uiWj1ULDL7j87K4s6Vhku4
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
        id: c_g3YZFwSe7BnRTpod6uBDXH
        subject_person_id: p_1w1QV6jGG4fjm3v1NT14S4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縡（1833年—1880年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71260）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vuQVxhwmyRaB9YMQ6aw4S0
          claim_id: c_g3YZFwSe7BnRTpod6uBDXH
          source_id: s_uiWj1ULDL7j87K4s6Vhku4
          stance: supports
          locator: CBDB:71260
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

# 王縡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縡 | accepted |
| birth.date | 1833年 | accepted |
| death.date | 1880年 | accepted |
| bio.summary | 王縡（1833年—1880年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縡（CBDB 71260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71260&o=json)
