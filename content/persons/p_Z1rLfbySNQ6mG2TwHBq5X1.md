---
schema: wang-person/v1
id: p_Z1rLfbySNQ6mG2TwHBq5X1
status: active
merged_into: null
display_name: 王瑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sPQuJQmM2aSBZkxnEzXBP6
        subject_person_id: p_Z1rLfbySNQ6mG2TwHBq5X1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YNwzd4TE6N9Wq4F4WkApt6
          claim_id: c_sPQuJQmM2aSBZkxnEzXBP6
          source_id: s_7PMBKA6cNe5o3f2BFHwaS8
          stance: supports
          locator: CBDB:100867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100867）
          source: &a1
            id: s_7PMBKA6cNe5o3f2BFHwaS8
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 100867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100867&o=json
            external_identifier: CBDB:100867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gkCPwvhnyfPy2GWYnu6Qm4
        subject_person_id: p_Z1rLfbySNQ6mG2TwHBq5X1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NR9z1DFTu2cjtnRzf3dXu3
          claim_id: c_gkCPwvhnyfPy2GWYnu6Qm4
          source_id: s_7PMBKA6cNe5o3f2BFHwaS8
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
        id: c_fQxG9HSAUbyZxmBp7cN2iz
        subject_person_id: p_Z1rLfbySNQ6mG2TwHBq5X1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1294年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JP9L1Gefuy96nekcsP8oPv
          claim_id: c_fQxG9HSAUbyZxmBp7cN2iz
          source_id: s_7PMBKA6cNe5o3f2BFHwaS8
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
        id: c_5L3JUF1AUsjxHw3esic37D
        subject_person_id: p_Z1rLfbySNQ6mG2TwHBq5X1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄（1236年—1294年），元人物。籍贯藍田，身份为以疾廢，曾任肅政廉訪司副使、肅政廉訪司僉事、行中書省郎中。（中国历代人物传记资料库 CBDB 100867）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KoLD0CJLDROqYxmzqwC3Rk
          claim_id: c_5L3JUF1AUsjxHw3esic37D
          source_id: s_7PMBKA6cNe5o3f2BFHwaS8
          stance: supports
          locator: CBDB:100867
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

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| birth.date | 1236年 | accepted |
| death.date | 1294年 | accepted |
| bio.summary | 王瑄（1236年—1294年），元人物。籍贯藍田，身份为以疾廢，曾任肅政廉訪司副使、肅政廉訪司僉事、行中書省郎中。（中国历代人物传记资料库 CBDB 100867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 100867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100867&o=json)
