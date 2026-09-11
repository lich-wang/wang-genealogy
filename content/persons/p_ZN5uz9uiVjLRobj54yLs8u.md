---
schema: wang-person/v1
id: p_ZN5uz9uiVjLRobj54yLs8u
status: active
merged_into: null
display_name: 王又曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b8bJjsL66mz7uCpGDteeWj
        subject_person_id: p_ZN5uz9uiVjLRobj54yLs8u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王又曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TtKJhJey5jvANk7aHf42Za
          claim_id: c_b8bJjsL66mz7uCpGDteeWj
          source_id: s_MUv9u8YqgFp51KzyvK1oLJ
          stance: supports
          locator: CBDB:69042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69042）
          source: &a1
            id: s_MUv9u8YqgFp51KzyvK1oLJ
            source_type: api_record
            title: 中国历代人物传记资料库：王又曾（CBDB 69042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69042&o=json
            external_identifier: CBDB:69042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fXMdNsAshDR1ipfCM3P84c
        subject_person_id: p_ZN5uz9uiVjLRobj54yLs8u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1706年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2a5jkh7AN2Ajvq5jTmD3P
          claim_id: c_fXMdNsAshDR1ipfCM3P84c
          source_id: s_MUv9u8YqgFp51KzyvK1oLJ
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
        id: c_x8Qgvvvrw3GEMDCBdz7axC
        subject_person_id: p_ZN5uz9uiVjLRobj54yLs8u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1762年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NBE6Q7Z5Zbk3N2YQtZheGR
          claim_id: c_x8Qgvvvrw3GEMDCBdz7axC
          source_id: s_MUv9u8YqgFp51KzyvK1oLJ
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
        id: c_gBD1qk2EQdJfy6m6s9A52F
        subject_person_id: p_ZN5uz9uiVjLRobj54yLs8u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王又曾（1706年—1762年），清人物。明清進士進士，籍贯秀水，身份为詩人，入仕進士。（中国历代人物传记资料库 CBDB 69042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-B3c2Oms69OnXzUtHHEcv-
          claim_id: c_gBD1qk2EQdJfy6m6s9A52F
          source_id: s_MUv9u8YqgFp51KzyvK1oLJ
          stance: supports
          locator: CBDB:69042
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

# 王又曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王又曾 | accepted |
| birth.date | 1706年 | accepted |
| death.date | 1762年 | accepted |
| bio.summary | 王又曾（1706年—1762年），清人物。明清進士進士，籍贯秀水，身份为詩人，入仕進士。（中国历代人物传记资料库 CBDB 69042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王又曾（CBDB 69042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69042&o=json)
