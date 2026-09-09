---
schema: wang-person/v1
id: p_LF1r325Fg2tWyXJQrRXT7v
status: active
merged_into: null
display_name: 王笙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o9hqNspKmj7GrGjSFCoieM
        subject_person_id: p_LF1r325Fg2tWyXJQrRXT7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_enQ2mrNqHP7ZSu2F4Hkh6R
          claim_id: c_o9hqNspKmj7GrGjSFCoieM
          source_id: s_DRcBDfEJfD8tWxZWdAw5wN
          stance: supports
          locator: CBDB:71195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71195）
          source: &a1
            id: s_DRcBDfEJfD8tWxZWdAw5wN
            source_type: api_record
            title: 中国历代人物传记资料库：王笙（CBDB 71195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71195&o=json
            external_identifier: CBDB:71195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sCkuNBAry7EWh6aBMh1cwD
        subject_person_id: p_LF1r325Fg2tWyXJQrRXT7v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1687年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ejbrpAcQL1QJfD1eC1nm5
          claim_id: c_sCkuNBAry7EWh6aBMh1cwD
          source_id: s_DRcBDfEJfD8tWxZWdAw5wN
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
        id: c_8w2qBRHFAW9pgosMdTDS6R
        subject_person_id: p_LF1r325Fg2tWyXJQrRXT7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kDyPXUGDesTkRLhj898KJ
          claim_id: c_8w2qBRHFAW9pgosMdTDS6R
          source_id: s_DRcBDfEJfD8tWxZWdAw5wN
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

# 王笙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王笙 | accepted |
| birth.date | 1687年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王笙（CBDB 71195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71195&o=json)
