---
schema: wang-person/v1
id: p_w7bFecvCJDtYAzb5F1uEyT
status: active
merged_into: null
display_name: 王友文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ooRkZjVPKx281QxU1XCzgK
        subject_person_id: p_w7bFecvCJDtYAzb5F1uEyT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WqEZK8RhqxPq4VTwR5N98E
          claim_id: c_ooRkZjVPKx281QxU1XCzgK
          source_id: s_7h9hYox43fTMLGcL9JfH5u
          stance: supports
          locator: CBDB:101075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101075）
          source: &a1
            id: s_7h9hYox43fTMLGcL9JfH5u
            source_type: api_record
            title: 中国历代人物传记资料库：王友文（CBDB 101075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101075&o=json
            external_identifier: CBDB:101075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2cDUbQLejPJHtz4oxhLZxF
        subject_person_id: p_w7bFecvCJDtYAzb5F1uEyT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1249年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DqgCHRs6wbQwk5GEFyhXub
          claim_id: c_2cDUbQLejPJHtz4oxhLZxF
          source_id: s_7h9hYox43fTMLGcL9JfH5u
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
        id: c_bNJ8hHEGxjRn746M1FiY8R
        subject_person_id: p_w7bFecvCJDtYAzb5F1uEyT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1312年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o6wEuVACByj8GKvJSVwKYv
          claim_id: c_bNJ8hHEGxjRn746M1FiY8R
          source_id: s_7h9hYox43fTMLGcL9JfH5u
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
        id: c_AagkqCYN2ntacmeKfP2H5n
        subject_person_id: p_w7bFecvCJDtYAzb5F1uEyT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友文（1249年—1312年），元人物。籍贯檀州，身份为以疾廢、拒絕出仕，曾任縣尹。（中国历代人物传记资料库 CBDB 101075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1j_NvyCwY3ubkcyof6dniK
          claim_id: c_AagkqCYN2ntacmeKfP2H5n
          source_id: s_7h9hYox43fTMLGcL9JfH5u
          stance: supports
          locator: CBDB:101075
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王友文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友文 | accepted |
| birth.date | 1249年 | accepted |
| death.date | 1312年 | accepted |
| bio.summary | 王友文（1249年—1312年），元人物。籍贯檀州，身份为以疾廢、拒絕出仕，曾任縣尹。（中国历代人物传记资料库 CBDB 101075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友文（CBDB 101075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101075&o=json)
