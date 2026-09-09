---
schema: wang-person/v1
id: p_58p8hELNK651Q9Kxq37Lj5
status: active
merged_into: null
display_name: 王士元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BL9MtwKTuMseLryMLxUT8A
        subject_person_id: p_58p8hELNK651Q9Kxq37Lj5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kXjXFjQki12bb2iUhzz9Ny
          claim_id: c_BL9MtwKTuMseLryMLxUT8A
          source_id: s_AX8GLowYBBjpxLvT4pDVE8
          stance: supports
          locator: CBDB:101026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101026）
          source: &a1
            id: s_AX8GLowYBBjpxLvT4pDVE8
            source_type: api_record
            title: 中国历代人物传记资料库：王士元（CBDB 101026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101026&o=json
            external_identifier: CBDB:101026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cCE8XLhQkmCajwdYrfA79d
        subject_person_id: p_58p8hELNK651Q9Kxq37Lj5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1253年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45aNWcXMDi3yjBnWaCad3u
          claim_id: c_cCE8XLhQkmCajwdYrfA79d
          source_id: s_AX8GLowYBBjpxLvT4pDVE8
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
        id: c_MRzthMU2TDXxBprpCJQDXK
        subject_person_id: p_58p8hELNK651Q9Kxq37Lj5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1308年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7ibyifqyaaX97ZQ64oorX
          claim_id: c_MRzthMU2TDXxBprpCJQDXK
          source_id: s_AX8GLowYBBjpxLvT4pDVE8
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
        id: c_ukZKtcCH6zMbzpKoychP3s
        subject_person_id: p_58p8hELNK651Q9Kxq37Lj5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HpEQQKGrbh6f79ZMA7r9i5
          claim_id: c_ukZKtcCH6zMbzpKoychP3s
          source_id: s_AX8GLowYBBjpxLvT4pDVE8
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

# 王士元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士元 | accepted |
| birth.date | 1253年 | accepted |
| death.date | 1308年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士元（CBDB 101026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101026&o=json)
