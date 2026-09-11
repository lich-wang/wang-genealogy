---
schema: wang-person/v1
id: p_JCg7FxCWnu6HgyGJw6tThG
status: active
merged_into: null
display_name: 王鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHL4v8KM8YkzeQgg7eoSkG
        subject_person_id: p_JCg7FxCWnu6HgyGJw6tThG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RTW7nAMAxd4C6NEwC5gXev
          claim_id: c_AHL4v8KM8YkzeQgg7eoSkG
          source_id: s_4gv9gRAoDttFUKcC2KrAtx
          stance: supports
          locator: CBDB:260521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260521）
          source: &a1
            id: s_4gv9gRAoDttFUKcC2KrAtx
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 260521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json
            external_identifier: CBDB:260521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_niqw1mMTbeG5TYP6sDCdgv
        subject_person_id: p_JCg7FxCWnu6HgyGJw6tThG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uGmEm5yO9gqKKrDiVOLocf
          claim_id: c_niqw1mMTbeG5TYP6sDCdgv
          source_id: s_4gv9gRAoDttFUKcC2KrAtx
          stance: supports
          locator: CBDB:260521
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

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| bio.summary | 王鑾，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 260521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json)
