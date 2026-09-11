---
schema: wang-person/v1
id: p_ycwP7eJoJFzc6EySTHfLVG
status: active
merged_into: null
display_name: 王庸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WCMsSXwf7LYKiAwkcPpiyE
        subject_person_id: p_ycwP7eJoJFzc6EySTHfLVG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7AfSRpsAY3ofa595ufn59H
          claim_id: c_WCMsSXwf7LYKiAwkcPpiyE
          source_id: s_L1ndnmQF1r5bWhML2CwiEr
          stance: supports
          locator: CBDB:509536
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509536）
          source: &a1
            id: s_L1ndnmQF1r5bWhML2CwiEr
            source_type: api_record
            title: 中国历代人物传记资料库：王庸（CBDB 509536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509536&o=json
            external_identifier: CBDB:509536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kNH2BDzpMwQJ693vyXuuxf
        subject_person_id: p_ycwP7eJoJFzc6EySTHfLVG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸，明人物。曾任知州。（中国历代人物传记资料库 CBDB 509536）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2_bbtsysJMKyr3D4EoVt05
          claim_id: c_kNH2BDzpMwQJ693vyXuuxf
          source_id: s_L1ndnmQF1r5bWhML2CwiEr
          stance: supports
          locator: CBDB:509536
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

# 王庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庸 | accepted |
| bio.summary | 王庸，明人物。曾任知州。（中国历代人物传记资料库 CBDB 509536） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庸（CBDB 509536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509536&o=json)
