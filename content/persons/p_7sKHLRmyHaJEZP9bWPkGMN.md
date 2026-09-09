---
schema: wang-person/v1
id: p_7sKHLRmyHaJEZP9bWPkGMN
status: active
merged_into: null
display_name: 王秀之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Di8Ut6riq6zM7C9yMg3yc
        subject_person_id: p_7sKHLRmyHaJEZP9bWPkGMN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CYkM2vDPmWZeNrwgBp25mA
          claim_id: c_9Di8Ut6riq6zM7C9yMg3yc
          source_id: s_PXwQH3AtnJYEA5uBvFqHRh
          stance: supports
          locator: CBDB:497228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497228）
          source: &a1
            id: s_PXwQH3AtnJYEA5uBvFqHRh
            source_type: api_record
            title: 中国历代人物传记资料库：王秀之（CBDB 497228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497228&o=json
            external_identifier: CBDB:497228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZnKQFVGEXxtVqfxzEdGxFj
        subject_person_id: p_7sKHLRmyHaJEZP9bWPkGMN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南齊人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4CutvBJqJ2Uh2NMvU2tA3
          claim_id: c_ZnKQFVGEXxtVqfxzEdGxFj
          source_id: s_PXwQH3AtnJYEA5uBvFqHRh
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

# 王秀之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀之 | accepted |
| bio.summary | CBDB 记载为南齊人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秀之（CBDB 497228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497228&o=json)
