---
schema: wang-person/v1
id: p_mLc957br4XF3cZUGVjNQAg
status: active
merged_into: null
display_name: 王原膴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wtAqi1nDJ4WDPqX2L4yDk9
        subject_person_id: p_mLc957br4XF3cZUGVjNQAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原膴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37CKNAFayDPRpNdJNu3opJ
          claim_id: c_wtAqi1nDJ4WDPqX2L4yDk9
          source_id: s_x97DnVQ32miPvbmJ8HH1rv
          stance: supports
          locator: CBDB:71945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71945）
          source: &a1
            id: s_x97DnVQ32miPvbmJ8HH1rv
            source_type: api_record
            title: 中国历代人物传记资料库：王原膴（CBDB 71945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71945&o=json
            external_identifier: CBDB:71945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rDc6zB2BjDef6xDJjXrbVz
        subject_person_id: p_mLc957br4XF3cZUGVjNQAg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1618年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJmeM8AHF3NWWKDQAic3Au
          claim_id: c_rDc6zB2BjDef6xDJjXrbVz
          source_id: s_x97DnVQ32miPvbmJ8HH1rv
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
        id: c_4m5dVfx2AfcCcbqNCfde2v
        subject_person_id: p_mLc957br4XF3cZUGVjNQAg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XMGQ26UpM2bXVjDuQFzaDC
          claim_id: c_4m5dVfx2AfcCcbqNCfde2v
          source_id: s_x97DnVQ32miPvbmJ8HH1rv
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
        id: c_ss6UbUvLVtTznyzypZKC7a
        subject_person_id: p_mLc957br4XF3cZUGVjNQAg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原膴（1618年—1670年），清人物。籍贯真定，曾任按察使、布政使司參政。（中国历代人物传记资料库 CBDB 71945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ClTe_D9osmTuvEwBKlC2xk
          claim_id: c_ss6UbUvLVtTznyzypZKC7a
          source_id: s_x97DnVQ32miPvbmJ8HH1rv
          stance: supports
          locator: CBDB:71945
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

# 王原膴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王原膴 | accepted |
| birth.date | 1618年 | accepted |
| death.date | 1670年 | accepted |
| bio.summary | 王原膴（1618年—1670年），清人物。籍贯真定，曾任按察使、布政使司參政。（中国历代人物传记资料库 CBDB 71945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王原膴（CBDB 71945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71945&o=json)
