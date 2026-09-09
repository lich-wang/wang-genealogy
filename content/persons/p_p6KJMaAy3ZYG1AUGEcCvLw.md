---
schema: wang-person/v1
id: p_p6KJMaAy3ZYG1AUGEcCvLw
status: active
merged_into: null
display_name: 王道中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U77ZimY21TEBD4tF9KuXzm
        subject_person_id: p_p6KJMaAy3ZYG1AUGEcCvLw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_McVa3YA5mpsDwqC8SWZGSS
          claim_id: c_U77ZimY21TEBD4tF9KuXzm
          source_id: s_ssAD4qQSE6fYEPVwLmeK4Y
          stance: supports
          locator: CBDB:342862
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342862）
          source: &a1
            id: s_ssAD4qQSE6fYEPVwLmeK4Y
            source_type: api_record
            title: 中国历代人物传记资料库：王道中（CBDB 342862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342862&o=json
            external_identifier: CBDB:342862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3fG672J4kDxir1U5X25H3P
        subject_person_id: p_p6KJMaAy3ZYG1AUGEcCvLw
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
        - id: cs_LDqskWNC8iLhFvPGDTBcja
          claim_id: c_3fG672J4kDxir1U5X25H3P
          source_id: s_ssAD4qQSE6fYEPVwLmeK4Y
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

# 王道中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道中（CBDB 342862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342862&o=json)
