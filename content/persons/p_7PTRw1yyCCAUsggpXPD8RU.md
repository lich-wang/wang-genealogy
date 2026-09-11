---
schema: wang-person/v1
id: p_7PTRw1yyCCAUsggpXPD8RU
status: active
merged_into: null
display_name: 王肇興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XhRuJpJwyB2PvyL8LYCJpJ
        subject_person_id: p_7PTRw1yyCCAUsggpXPD8RU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FKNn1UP69S6FACpbHQkGVX
          claim_id: c_XhRuJpJwyB2PvyL8LYCJpJ
          source_id: s_3xgR1nm5B2oJ7SHWLjysUr
          stance: supports
          locator: CBDB:639967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639967）
          source: &a1
            id: s_3xgR1nm5B2oJ7SHWLjysUr
            source_type: api_record
            title: 中国历代人物传记资料库：王肇興（CBDB 639967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639967&o=json
            external_identifier: CBDB:639967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pMo2k6DV3uoR3gvQyz61gt
        subject_person_id: p_7PTRw1yyCCAUsggpXPD8RU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇興，清人物。籍贯石屏州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y0UkmU8LRnFHzbDV2FP287
          claim_id: c_pMo2k6DV3uoR3gvQyz61gt
          source_id: s_3xgR1nm5B2oJ7SHWLjysUr
          stance: supports
          locator: CBDB:639967
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

# 王肇興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇興 | accepted |
| bio.summary | 王肇興，清人物。籍贯石屏州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇興（CBDB 639967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639967&o=json)
