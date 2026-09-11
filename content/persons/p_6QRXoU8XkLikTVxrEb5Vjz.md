---
schema: wang-person/v1
id: p_6QRXoU8XkLikTVxrEb5Vjz
status: active
merged_into: null
display_name: 王收
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LcWfscvYKfSJZkwQfsAPpR
        subject_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王收
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mmszTWHsViF5jEW43qMDHB
          claim_id: c_LcWfscvYKfSJZkwQfsAPpR
          source_id: s_T5N3atNoGhL7PiV5R3mAhx
          stance: supports
          locator: CBDB:247215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247215）
          source: &a1
            id: s_T5N3atNoGhL7PiV5R3mAhx
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 247215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json
            external_identifier: CBDB:247215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qkfriiHw1frK5hNAYi85Y
        subject_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王收，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247215）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAG0ruxZ_GuZqjl8YbaeBG
          claim_id: c_3qkfriiHw1frK5hNAYi85Y
          source_id: s_T5N3atNoGhL7PiV5R3mAhx
          stance: supports
          locator: CBDB:247215
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

# 王收

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王收 | accepted |
| bio.summary | 王收，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王收（CBDB 247215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json)
