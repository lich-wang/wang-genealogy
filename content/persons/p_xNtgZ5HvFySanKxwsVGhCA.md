---
schema: wang-person/v1
id: p_xNtgZ5HvFySanKxwsVGhCA
status: active
merged_into: null
display_name: 王運開
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3i6TGfFQ8Vu7Px3QkjJDdY
        subject_person_id: p_xNtgZ5HvFySanKxwsVGhCA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNCumLHYqit3exu7KFVoC7
          claim_id: c_3i6TGfFQ8Vu7Px3QkjJDdY
          source_id: s_x4wvxzPz3or8nQ6vDfKNTL
          stance: supports
          locator: CBDB:126746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126746）
          source: &a1
            id: s_x4wvxzPz3or8nQ6vDfKNTL
            source_type: api_record
            title: 中国历代人物传记资料库：王運開（CBDB 126746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126746&o=json
            external_identifier: CBDB:126746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XDh6aDHgLBDaModQeLTeZQ
        subject_person_id: p_xNtgZ5HvFySanKxwsVGhCA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運開，明人物。籍贯夾江，曾任府推官。（中国历代人物传记资料库 CBDB 126746）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-QbM0gmBxCwHYN8ULL7mh4
          claim_id: c_XDh6aDHgLBDaModQeLTeZQ
          source_id: s_x4wvxzPz3or8nQ6vDfKNTL
          stance: supports
          locator: CBDB:126746
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

# 王運開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運開 | accepted |
| bio.summary | 王運開，明人物。籍贯夾江，曾任府推官。（中国历代人物传记资料库 CBDB 126746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運開（CBDB 126746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126746&o=json)
