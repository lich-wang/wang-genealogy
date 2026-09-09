---
schema: wang-person/v1
id: p_ChwVo4Bn3TwGaT9qN5VSo6
status: active
merged_into: null
display_name: 王烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HPaCwiUedfBqGDw1bQft4P
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Gs6tdcKtLPYnJAiUpCzoX
          claim_id: c_HPaCwiUedfBqGDw1bQft4P
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: CBDB:139708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139708）
          source: &a1
            id: s_tCfD8QjcvmuW2fCStLZSoK
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 139708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json
            external_identifier: CBDB:139708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H7e3KD6xwQjm3JxHoA4MJZ
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBzobB9JpFeR2NAK9iZcsp
          claim_id: c_H7e3KD6xwQjm3JxHoA4MJZ
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
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
        id: c_zUqTrqBs94NvjF1HyfwMWV
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 674年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hv9ZqEKG3zSKfXvRM69JrY
          claim_id: c_zUqTrqBs94NvjF1HyfwMWV
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
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
        id: c_bCiU9v554mA2VApuFq9FDz
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ynUUse51rm121UBCCV6ny7
          claim_id: c_bCiU9v554mA2VApuFq9FDz
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烈 | accepted |
| birth.date | 623年 | accepted |
| death.date | 674年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 139708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json)
