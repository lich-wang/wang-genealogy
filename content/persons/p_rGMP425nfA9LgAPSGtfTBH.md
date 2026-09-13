---
schema: wang-person/v1
id: p_rGMP425nfA9LgAPSGtfTBH
status: active
merged_into: null
display_name: 王允康
cbdb_id: 413891
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8fPGk42JL7Th2Cc4FScsEH
        subject_person_id: p_rGMP425nfA9LgAPSGtfTBH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允康，明人物。曾任知府。（中国历代人物传记资料库 CBDB 413891）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lOLdNWHnnLXaHw6ZhfXTAI
          claim_id: c_8fPGk42JL7Th2Cc4FScsEH
          source_id: s_ZqL9ezUnpB2YyFPV2ExHd2
          stance: supports
          locator: CBDB:413891
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZqL9ezUnpB2YyFPV2ExHd2
            source_type: api_record
            title: 中国历代人物传记资料库：王允康（CBDB 413891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413891&o=json
            external_identifier: CBDB:413891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:25.646Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_93q7QE2rV8iLL1RJZbXna1
        subject_person_id: p_rGMP425nfA9LgAPSGtfTBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TKXnoLFNvuqU3skFM2HCjF
          claim_id: c_93q7QE2rV8iLL1RJZbXna1
          source_id: s_ZqL9ezUnpB2YyFPV2ExHd2
          stance: supports
          locator: CBDB:413891
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5001-5100）｜历史性依据：CBDB 朝代 = 明
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

# 王允康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允康，明人物。曾任知府。（中国历代人物传记资料库 CBDB 413891） | accepted |
| name.primary | 王允康 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允康（CBDB 413891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413891&o=json)
