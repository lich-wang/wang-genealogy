---
schema: wang-person/v1
id: p_mmZABGPVCnyp9LtVFRLFwv
status: active
merged_into: null
display_name: 王允琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FAdHMGQFMgPmto6KGXuyYV
        subject_person_id: p_mmZABGPVCnyp9LtVFRLFwv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QDDG83xHzGvDWG5PQGB2V4
          claim_id: c_FAdHMGQFMgPmto6KGXuyYV
          source_id: s_j8vbFszXBFd2EHWmMd4noB
          stance: supports
          locator: CBDB:71444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71444）
          source: &a1
            id: s_j8vbFszXBFd2EHWmMd4noB
            source_type: api_record
            title: 中国历代人物传记资料库：王允琳（CBDB 71444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71444&o=json
            external_identifier: CBDB:71444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G4h59qiffxiMgqPjz28brJ
        subject_person_id: p_mmZABGPVCnyp9LtVFRLFwv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nSob39bKAmQoNMFbecYFGQ
          claim_id: c_G4h59qiffxiMgqPjz28brJ
          source_id: s_j8vbFszXBFd2EHWmMd4noB
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
        id: c_DCmWYPDHrTe1A2RFNzwCLL
        subject_person_id: p_mmZABGPVCnyp9LtVFRLFwv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允琳（生于1594年），清人物。籍贯漢軍鑲藍旗。（中国历代人物传记资料库 CBDB 71444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o1MzUDv3DKXtfqiOmJfBPM
          claim_id: c_DCmWYPDHrTe1A2RFNzwCLL
          source_id: s_j8vbFszXBFd2EHWmMd4noB
          stance: supports
          locator: CBDB:71444
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

# 王允琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允琳 | accepted |
| birth.date | 1594年 | accepted |
| bio.summary | 王允琳（生于1594年），清人物。籍贯漢軍鑲藍旗。（中国历代人物传记资料库 CBDB 71444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允琳（CBDB 71444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71444&o=json)
