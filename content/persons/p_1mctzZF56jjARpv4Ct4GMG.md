---
schema: wang-person/v1
id: p_1mctzZF56jjARpv4Ct4GMG
status: active
merged_into: null
display_name: 王則
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W2HCv3PnkS98ccF7Mf8hxj
        subject_person_id: p_1mctzZF56jjARpv4Ct4GMG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nc6nP87i2vxgHy7x12JQGo
          claim_id: c_W2HCv3PnkS98ccF7Mf8hxj
          source_id: s_sGNNT41a6uYTV9scwP54wH
          stance: supports
          locator: CBDB:138971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138971）
          source: &a1
            id: s_sGNNT41a6uYTV9scwP54wH
            source_type: api_record
            title: 中国历代人物传记资料库：王則（CBDB 138971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138971&o=json
            external_identifier: CBDB:138971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Pj8B1X7wLBvNm7rN6joMfQ
        subject_person_id: p_1mctzZF56jjARpv4Ct4GMG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 555年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2eQhB31sSu75jEEqZbNgSM
          claim_id: c_Pj8B1X7wLBvNm7rN6joMfQ
          source_id: s_sGNNT41a6uYTV9scwP54wH
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
        id: c_Kb7FH3NbLCwe5W2uhLyS87
        subject_person_id: p_1mctzZF56jjARpv4Ct4GMG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 626年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EjJTwp6UV8GkXSjj6nve31
          claim_id: c_Kb7FH3NbLCwe5W2uhLyS87
          source_id: s_sGNNT41a6uYTV9scwP54wH
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
        id: c_JgzFVvwrL1cKSrZ45bPAbF
        subject_person_id: p_1mctzZF56jjARpv4Ct4GMG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DLgm8k7E3UeYMPe4q5QV3C
          claim_id: c_JgzFVvwrL1cKSrZ45bPAbF
          source_id: s_sGNNT41a6uYTV9scwP54wH
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

# 王則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王則 | accepted |
| birth.date | 555年 | accepted |
| death.date | 626年 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王則（CBDB 138971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138971&o=json)
