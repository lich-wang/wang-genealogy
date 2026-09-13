---
schema: wang-person/v1
id: p_5ai8dyq8yszY5qzzqs4u8x
status: active
merged_into: null
display_name: 王宗龍
cbdb_id: 69241
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nc4NwAHmBFJ1p2ZS23XEWi
        subject_person_id: p_5ai8dyq8yszY5qzzqs4u8x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗龍（卒于1781年），清人物。籍贯長安，入仕募入軍伍，曾任督標前營千總、營都司。（中国历代人物传记资料库 CBDB 69241）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OghLzyR1p77U4WYyY6h65L
          claim_id: c_Nc4NwAHmBFJ1p2ZS23XEWi
          source_id: s_HKFShmgfBEzzApRc9XX3K5
          stance: supports
          locator: CBDB:69241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HKFShmgfBEzzApRc9XX3K5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗龍（CBDB 69241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69241&o=json
            external_identifier: CBDB:69241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tsc3aEYLekhtEQnmm3pkL6
        subject_person_id: p_5ai8dyq8yszY5qzzqs4u8x
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1781-01-01
            latest: 1781-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k3vjLpGhYmjrcwyCBizHRG
          claim_id: c_tsc3aEYLekhtEQnmm3pkL6
          source_id: s_HKFShmgfBEzzApRc9XX3K5
          stance: supports
          locator: CBDB:69241
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1781
          source:
            id: s_HKFShmgfBEzzApRc9XX3K5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗龍（CBDB 69241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69241&o=json
            external_identifier: CBDB:69241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GP47iHWiToM1gDWANaKQaJ
        subject_person_id: p_5ai8dyq8yszY5qzzqs4u8x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QigB5omT32rc6AYQekFP52
          claim_id: c_GP47iHWiToM1gDWANaKQaJ
          source_id: s_HKFShmgfBEzzApRc9XX3K5
          stance: supports
          locator: CBDB:69241
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1781
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

# 王宗龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗龍（卒于1781年），清人物。籍贯長安，入仕募入軍伍，曾任督標前營千總、營都司。（中国历代人物传记资料库 CBDB 69241） | accepted |
| death.date | 1781年 | accepted |
| name.primary | 王宗龍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗龍（CBDB 69241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69241&o=json)
