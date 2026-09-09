---
schema: wang-person/v1
id: p_fVwHvivQzDYcoN8uZB1uwy
status: active
merged_into: null
display_name: 王良臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XyKT7XrQf99vNSnJ7jqv5B
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aH9JAf9w7N8FrnFCt6GuP6
          claim_id: c_XyKT7XrQf99vNSnJ7jqv5B
          source_id: s_i5FYxNcHwKfsukv1mchys6
          stance: supports
          locator: CBDB:207791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207791）
          source: &a1
            id: s_i5FYxNcHwKfsukv1mchys6
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 207791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207791&o=json
            external_identifier: CBDB:207791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ks3ip2PSj1PWt11E7Dz4L1
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1584年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLXhwrne7foG1nPbAie8nm
          claim_id: c_Ks3ip2PSj1PWt11E7Dz4L1
          source_id: s_i5FYxNcHwKfsukv1mchys6
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
        id: c_ybzN7bLS7EqftTnN2tXJGn
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
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
        - id: cs_qR9VWE38BpXozqDj13okWL
          claim_id: c_ybzN7bLS7EqftTnN2tXJGn
          source_id: s_i5FYxNcHwKfsukv1mchys6
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

# 王良臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良臣 | accepted |
| birth.date | 1584年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良臣（CBDB 207791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207791&o=json)
