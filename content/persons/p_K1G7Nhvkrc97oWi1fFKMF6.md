---
schema: wang-person/v1
id: p_K1G7Nhvkrc97oWi1fFKMF6
status: active
merged_into: null
display_name: 王昱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sy9QqFMY1cabSc6eFqkGrd
        subject_person_id: p_K1G7Nhvkrc97oWi1fFKMF6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kL78M9wK6jD5CAZ9m2q3JP
          claim_id: c_Sy9QqFMY1cabSc6eFqkGrd
          source_id: s_6N8p7pG2u5JxnSB62NQjst
          stance: supports
          locator: CBDB:380974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380974）
          source: &a1
            id: s_6N8p7pG2u5JxnSB62NQjst
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 380974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380974&o=json
            external_identifier: CBDB:380974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K9YdKL1gzVppY6sNZ2UuJf
        subject_person_id: p_K1G7Nhvkrc97oWi1fFKMF6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XsLiSHNTYBPf2z6TCLR1G3
          claim_id: c_K9YdKL1gzVppY6sNZ2UuJf
          source_id: s_6N8p7pG2u5JxnSB62NQjst
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

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 380974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380974&o=json)
