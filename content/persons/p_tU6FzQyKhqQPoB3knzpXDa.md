---
schema: wang-person/v1
id: p_tU6FzQyKhqQPoB3knzpXDa
status: active
merged_into: null
display_name: 王某某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G3z2oSs1D4MQEYo3n95AMo
        subject_person_id: p_tU6FzQyKhqQPoB3knzpXDa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2b46AqYWKcFtPMnRxHQ9a9
          claim_id: c_G3z2oSs1D4MQEYo3n95AMo
          source_id: s_FnxKrHq9uHtnB6SB1usKPe
          stance: supports
          locator: CBDB:476204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476204）
          source: &a1
            id: s_FnxKrHq9uHtnB6SB1usKPe
            source_type: api_record
            title: 中国历代人物传记资料库：王某某（CBDB 476204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476204&o=json
            external_identifier: CBDB:476204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3oUZFC13k5KTM2VaELB6Gp
        subject_person_id: p_tU6FzQyKhqQPoB3knzpXDa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某某，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 476204）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TwHWVuTDEV3e7qlfjltcO_
          claim_id: c_3oUZFC13k5KTM2VaELB6Gp
          source_id: s_FnxKrHq9uHtnB6SB1usKPe
          stance: supports
          locator: CBDB:476204
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

# 王某某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王某某 | accepted |
| bio.summary | 王某某，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 476204） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王某某（CBDB 476204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476204&o=json)
