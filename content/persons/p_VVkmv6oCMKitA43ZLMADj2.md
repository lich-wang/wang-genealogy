---
schema: wang-person/v1
id: p_VVkmv6oCMKitA43ZLMADj2
status: active
merged_into: null
display_name: 王用中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bS7cqLgvAdXF12cg9AT82S
        subject_person_id: p_VVkmv6oCMKitA43ZLMADj2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7cfw1zfvF9QAz3wNHjz29W
          claim_id: c_bS7cqLgvAdXF12cg9AT82S
          source_id: s_JRbrQ7jZ3x3T5yK6tjQiVT
          stance: supports
          locator: CBDB:466769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466769）
          source: &a1
            id: s_JRbrQ7jZ3x3T5yK6tjQiVT
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 466769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466769&o=json
            external_identifier: CBDB:466769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zBep1Jdv6SLhp4TzAWpXJK
        subject_person_id: p_VVkmv6oCMKitA43ZLMADj2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中，明人物。曾任學正。（中国历代人物传记资料库 CBDB 466769）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4gAyG8qRCnJoSX3020vjEL
          claim_id: c_zBep1Jdv6SLhp4TzAWpXJK
          source_id: s_JRbrQ7jZ3x3T5yK6tjQiVT
          stance: supports
          locator: CBDB:466769
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

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| bio.summary | 王用中，明人物。曾任學正。（中国历代人物传记资料库 CBDB 466769） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用中（CBDB 466769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466769&o=json)
