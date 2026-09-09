---
schema: wang-person/v1
id: p_cnxHgvNWzCNiTbu6SVUA3o
status: active
merged_into: null
display_name: 王春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2m3Ryp1kiggHECP1XA1ki
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZ3JxJPJkxJCnhGVKHLBmv
          claim_id: c_F2m3Ryp1kiggHECP1XA1ki
          source_id: s_M5K8c7YTrHQkmNymF17C3J
          stance: supports
          locator: CBDB:198362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198362）
          source: &a1
            id: s_M5K8c7YTrHQkmNymF17C3J
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 198362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198362&o=json
            external_identifier: CBDB:198362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L6N8vUWJEpqu8eEg1McttH
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMA4mCECYW78A21bnLdHtL
          claim_id: c_L6N8vUWJEpqu8eEg1McttH
          source_id: s_M5K8c7YTrHQkmNymF17C3J
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
        id: c_zQ4dK4A5eXwP3rXovn3QYr
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
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
        - id: cs_5CmXD2ZMPN5WM2BhSEw5ev
          claim_id: c_zQ4dK4A5eXwP3rXovn3QYr
          source_id: s_M5K8c7YTrHQkmNymF17C3J
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

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| birth.date | 1424年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 198362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198362&o=json)
