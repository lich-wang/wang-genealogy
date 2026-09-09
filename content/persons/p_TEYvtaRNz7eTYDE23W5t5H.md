---
schema: wang-person/v1
id: p_TEYvtaRNz7eTYDE23W5t5H
status: active
merged_into: null
display_name: 王守素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_97Q2CTb4s3d1JHq8vihmYe
        subject_person_id: p_TEYvtaRNz7eTYDE23W5t5H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d4naMy8foTRQ14u97Kyx9P
          claim_id: c_97Q2CTb4s3d1JHq8vihmYe
          source_id: s_Cm8GtZu2b6qCX1fYNsNwhy
          stance: supports
          locator: CBDB:206541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206541）
          source: &a1
            id: s_Cm8GtZu2b6qCX1fYNsNwhy
            source_type: api_record
            title: 中国历代人物传记资料库：王守素（CBDB 206541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206541&o=json
            external_identifier: CBDB:206541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7jgeaQXAY1e2qJnn1A8i9E
        subject_person_id: p_TEYvtaRNz7eTYDE23W5t5H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1552年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9UPm3EUWLB16YRwEa9EEHs
          claim_id: c_7jgeaQXAY1e2qJnn1A8i9E
          source_id: s_Cm8GtZu2b6qCX1fYNsNwhy
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
        id: c_ghGFujsakyyCxwvcymnV6p
        subject_person_id: p_TEYvtaRNz7eTYDE23W5t5H
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
        - id: cs_89FZX3prnvujfPPoxBpJFV
          claim_id: c_ghGFujsakyyCxwvcymnV6p
          source_id: s_Cm8GtZu2b6qCX1fYNsNwhy
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

# 王守素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守素 | accepted |
| birth.date | 1552年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守素（CBDB 206541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206541&o=json)
