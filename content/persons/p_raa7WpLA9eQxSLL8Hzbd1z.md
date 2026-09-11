---
schema: wang-person/v1
id: p_raa7WpLA9eQxSLL8Hzbd1z
status: active
merged_into: null
display_name: 王占鰲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNgPdC1vM3xEaNzUcwn1kG
        subject_person_id: p_raa7WpLA9eQxSLL8Hzbd1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王占鰲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B1KWvVaEbrjng75Fg93cd6
          claim_id: c_UNgPdC1vM3xEaNzUcwn1kG
          source_id: s_ZfB34kXVvKG4v3oZDVc3T3
          stance: supports
          locator: CBDB:69146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69146）
          source: &a1
            id: s_ZfB34kXVvKG4v3oZDVc3T3
            source_type: api_record
            title: 中国历代人物传记资料库：王占鰲（CBDB 69146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69146&o=json
            external_identifier: CBDB:69146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vTdNNHWi5yN8fQnPH1qJoC
        subject_person_id: p_raa7WpLA9eQxSLL8Hzbd1z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7bE5u5VK2SbPee9rqtufd
          claim_id: c_vTdNNHWi5yN8fQnPH1qJoC
          source_id: s_ZfB34kXVvKG4v3oZDVc3T3
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
        id: c_XCnNxviwjLYKVRtvvNpagA
        subject_person_id: p_raa7WpLA9eQxSLL8Hzbd1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王占鰲（卒于1802年），清人物。籍贯安順府。（中国历代人物传记资料库 CBDB 69146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M4zloWmElvtAtmZwJNayC-
          claim_id: c_XCnNxviwjLYKVRtvvNpagA
          source_id: s_ZfB34kXVvKG4v3oZDVc3T3
          stance: supports
          locator: CBDB:69146
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

# 王占鰲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王占鰲 | accepted |
| death.date | 1802年 | accepted |
| bio.summary | 王占鰲（卒于1802年），清人物。籍贯安順府。（中国历代人物传记资料库 CBDB 69146） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王占鰲（CBDB 69146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69146&o=json)
