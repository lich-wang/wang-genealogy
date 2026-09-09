---
schema: wang-person/v1
id: p_FVu8JYqz73iUBBc8kY34nY
status: active
merged_into: null
display_name: 王謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JcAyc7zwwMXSGd1JgWDm2E
        subject_person_id: p_FVu8JYqz73iUBBc8kY34nY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kpK31uhBDC919EDquXniVt
          claim_id: c_JcAyc7zwwMXSGd1JgWDm2E
          source_id: s_CX7ibCHhjkeN5xpY4oW64B
          stance: supports
          locator: CBDB:71233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71233）
          source: &a1
            id: s_CX7ibCHhjkeN5xpY4oW64B
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 71233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71233&o=json
            external_identifier: CBDB:71233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RQUqXTSXWcPhYvE1GjEwSt
        subject_person_id: p_FVu8JYqz73iUBBc8kY34nY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1688年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z257VEsnvwsG8XP4WzGHTr
          claim_id: c_RQUqXTSXWcPhYvE1GjEwSt
          source_id: s_CX7ibCHhjkeN5xpY4oW64B
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
        id: c_8rPAEZ5h6zhD2K7H1Xkhvu
        subject_person_id: p_FVu8JYqz73iUBBc8kY34nY
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
        - id: cs_hKvWwdBM845Y4853eK5oEP
          claim_id: c_8rPAEZ5h6zhD2K7H1Xkhvu
          source_id: s_CX7ibCHhjkeN5xpY4oW64B
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

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| birth.date | 1688年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 71233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71233&o=json)
