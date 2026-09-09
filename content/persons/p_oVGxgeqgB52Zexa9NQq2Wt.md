---
schema: wang-person/v1
id: p_oVGxgeqgB52Zexa9NQq2Wt
status: active
merged_into: null
display_name: 王續
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u1XNMzFdC8b72F9CKwXyCr
        subject_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHe7p85JYfeB2U6dPXLz8c
          claim_id: c_u1XNMzFdC8b72F9CKwXyCr
          source_id: s_pRAsobtmvbmDSpdAh6tAoD
          stance: supports
          locator: CBDB:152187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152187）
          source: &a1
            id: s_pRAsobtmvbmDSpdAh6tAoD
            source_type: api_record
            title: 中国历代人物传记资料库：王續（CBDB 152187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152187&o=json
            external_identifier: CBDB:152187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cy9evWiS8G38X4FzhkCq2G
        subject_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KGU41MtJ26jR6CyqSS7Sii
          claim_id: c_cy9evWiS8G38X4FzhkCq2G
          source_id: s_pRAsobtmvbmDSpdAh6tAoD
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

# 王續

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王續 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王續（CBDB 152187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152187&o=json)
