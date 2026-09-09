---
schema: wang-person/v1
id: p_JPAuYuPPYN5hwLqZJ733sk
status: active
merged_into: null
display_name: 王倚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rqSiqr3eScUHeaQMAujz5L
        subject_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MFfmrbvs3mMsY8JnkZPvLK
          claim_id: c_rqSiqr3eScUHeaQMAujz5L
          source_id: s_3rzW4xdZ2jccgdKhrohDMB
          stance: supports
          locator: CBDB:38158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38158）
          source: &a1
            id: s_3rzW4xdZ2jccgdKhrohDMB
            source_type: api_record
            title: 中国历代人物传记资料库：王倚（CBDB 38158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38158&o=json
            external_identifier: CBDB:38158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_m9a62dhrQDVxACEMewYjrp
        subject_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9KDiVPNn2XDfCyEcyR1FRP
          claim_id: c_m9a62dhrQDVxACEMewYjrp
          source_id: s_3rzW4xdZ2jccgdKhrohDMB
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
        id: c_FdaGFzanJaHYM8cEYHC5t2
        subject_person_id: p_JPAuYuPPYN5hwLqZJ733sk
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
        - id: cs_pvW7BXGVdySWeYBWtR15Ku
          claim_id: c_FdaGFzanJaHYM8cEYHC5t2
          source_id: s_3rzW4xdZ2jccgdKhrohDMB
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

# 王倚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倚 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倚（CBDB 38158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38158&o=json)
