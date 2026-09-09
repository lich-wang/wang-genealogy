---
schema: wang-person/v1
id: p_m2auC9SpLPg6hMQoiQtter
status: active
merged_into: null
display_name: 王晏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EAT46AoE22xWK5Pp7cYN2j
        subject_person_id: p_m2auC9SpLPg6hMQoiQtter
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jyt3wtRCf3AxdeYEAAm5yL
          claim_id: c_EAT46AoE22xWK5Pp7cYN2j
          source_id: s_tkyk3sBYQWzmA5i38Fg2oe
          stance: supports
          locator: CBDB:38122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38122）
          source: &a1
            id: s_tkyk3sBYQWzmA5i38Fg2oe
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 38122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38122&o=json
            external_identifier: CBDB:38122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ejDeiVdcZCZF971vQ366fR
        subject_person_id: p_m2auC9SpLPg6hMQoiQtter
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 890年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWkkcEmXC3ZgbatpjtHRVL
          claim_id: c_ejDeiVdcZCZF971vQ366fR
          source_id: s_tkyk3sBYQWzmA5i38Fg2oe
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
        id: c_nH3UVBmX8sQ3Gk5ruAY1hd
        subject_person_id: p_m2auC9SpLPg6hMQoiQtter
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 966年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m2pXwzPKEph9bCiQN6NEbz
          claim_id: c_nH3UVBmX8sQ3Gk5ruAY1hd
          source_id: s_tkyk3sBYQWzmA5i38Fg2oe
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
        id: c_a2o8CTcN1rG6Z1eqRVxCyq
        subject_person_id: p_m2auC9SpLPg6hMQoiQtter
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aokcn3bUiQ1S39YQ6c7BgJ
          claim_id: c_a2o8CTcN1rG6Z1eqRVxCyq
          source_id: s_tkyk3sBYQWzmA5i38Fg2oe
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

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏 | accepted |
| birth.date | 890年 | accepted |
| death.date | 966年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏（CBDB 38122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38122&o=json)
