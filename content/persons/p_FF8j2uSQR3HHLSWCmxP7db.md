---
schema: wang-person/v1
id: p_FF8j2uSQR3HHLSWCmxP7db
status: active
merged_into: null
display_name: 王蘭修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FquLDAbfd2PWzdv6fvjwQ7
        subject_person_id: p_FF8j2uSQR3HHLSWCmxP7db
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLkEA7CP55Aj3mLCw3CDQn
          claim_id: c_FquLDAbfd2PWzdv6fvjwQ7
          source_id: s_DsQt3JX54h1SxgKWcRo89X
          stance: supports
          locator: CBDB:568693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568693）
          source: &a1
            id: s_DsQt3JX54h1SxgKWcRo89X
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭修（CBDB 568693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568693&o=json
            external_identifier: CBDB:568693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R1n4WPHPPyhMttR4kpinrn
        subject_person_id: p_FF8j2uSQR3HHLSWCmxP7db
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭修，清人物。籍贯上海。（中国历代人物传记资料库 CBDB 568693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_266RSRiP43cPDt9hzcKyAM
          claim_id: c_R1n4WPHPPyhMttR4kpinrn
          source_id: s_DsQt3JX54h1SxgKWcRo89X
          stance: supports
          locator: CBDB:568693
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

# 王蘭修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭修 | accepted |
| bio.summary | 王蘭修，清人物。籍贯上海。（中国历代人物传记资料库 CBDB 568693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭修（CBDB 568693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568693&o=json)
