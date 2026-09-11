---
schema: wang-person/v1
id: p_Ra2bytn7KMXAMc2gcTdKTY
status: active
merged_into: null
display_name: 王然
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQB4zM1G42CrZVzD1okTBu
        subject_person_id: p_Ra2bytn7KMXAMc2gcTdKTY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kdqu89aimUFogUkQUoSNqL
          claim_id: c_FQB4zM1G42CrZVzD1okTBu
          source_id: s_obvCtjhyCw8NsAVVJNYgmE
          stance: supports
          locator: CBDB:438469
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438469）
          source: &a1
            id: s_obvCtjhyCw8NsAVVJNYgmE
            source_type: api_record
            title: 中国历代人物传记资料库：王然（CBDB 438469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438469&o=json
            external_identifier: CBDB:438469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T2t5kfX2c1nsynCEZXrNgU
        subject_person_id: p_Ra2bytn7KMXAMc2gcTdKTY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1710年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RkpKA8t6o3qCKcbscCUJVV
          claim_id: c_T2t5kfX2c1nsynCEZXrNgU
          source_id: s_obvCtjhyCw8NsAVVJNYgmE
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
        id: c_7uzhW6P6EH412AcGj3gA2c
        subject_person_id: p_Ra2bytn7KMXAMc2gcTdKTY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王然（卒于1710年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 438469）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bsDCBJCO077VdoLg4aTUnX
          claim_id: c_7uzhW6P6EH412AcGj3gA2c
          source_id: s_obvCtjhyCw8NsAVVJNYgmE
          stance: supports
          locator: CBDB:438469
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

# 王然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王然 | accepted |
| death.date | 1710年 | accepted |
| bio.summary | 王然（卒于1710年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 438469） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王然（CBDB 438469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438469&o=json)
