---
schema: wang-person/v1
id: p_fAq6TMSbokMLmP3RMJ2rTM
status: active
merged_into: null
display_name: 王淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCjQCLZLimj9TZM31rYNts
        subject_person_id: p_fAq6TMSbokMLmP3RMJ2rTM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cvq9CvMsxzcZ7XcwJK36KW
          claim_id: c_uCjQCLZLimj9TZM31rYNts
          source_id: s_DN3CWi8DN7Gc6zjQoX2AHd
          stance: supports
          locator: CBDB:509762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509762）
          source: &a1
            id: s_DN3CWi8DN7Gc6zjQoX2AHd
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 509762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509762&o=json
            external_identifier: CBDB:509762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Dd2RwMNn9RVyF38KQtgkP
        subject_person_id: p_fAq6TMSbokMLmP3RMJ2rTM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淳，明人物。曾任典史。（中国历代人物传记资料库 CBDB 509762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yevj1E3l-iljIdpYsF3i6u
          claim_id: c_5Dd2RwMNn9RVyF38KQtgkP
          source_id: s_DN3CWi8DN7Gc6zjQoX2AHd
          stance: supports
          locator: CBDB:509762
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

# 王淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淳 | accepted |
| bio.summary | 王淳，明人物。曾任典史。（中国历代人物传记资料库 CBDB 509762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淳（CBDB 509762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509762&o=json)
