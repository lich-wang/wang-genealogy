---
schema: wang-person/v1
id: p_ByxZLeQEM3c8TBLeF6KvJM
status: active
merged_into: null
display_name: 王繼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9AWZH2NqDHfdcGqYNRaPUN
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NjrhCpPfJsDvh222C2N7tW
          claim_id: c_9AWZH2NqDHfdcGqYNRaPUN
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: CBDB:126877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126877）
          source: &a1
            id: s_vzhFyj98EbzW26DLi4CY6U
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 126877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json
            external_identifier: CBDB:126877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1xnu6LoijmxBoYjWs2rEWt
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1433年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLWDoMyJ8EgMPJkMZYoahJ
          claim_id: c_1xnu6LoijmxBoYjWs2rEWt
          source_id: s_vzhFyj98EbzW26DLi4CY6U
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
        id: c_KypaiuKLKxP5UPGcTwKRJk
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvLmGb4wktccFDq1hXVDk5
          claim_id: c_KypaiuKLKxP5UPGcTwKRJk
          source_id: s_vzhFyj98EbzW26DLi4CY6U
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
        id: c_sDsJZZTwj4W6rUbB217Ps6
        subject_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1TcvBBnaGA2yAJGk7PCQy
          claim_id: c_sDsJZZTwj4W6rUbB217Ps6
          source_id: s_vzhFyj98EbzW26DLi4CY6U
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

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| birth.date | 1433年 | accepted |
| death.date | 1503年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 126877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json)
