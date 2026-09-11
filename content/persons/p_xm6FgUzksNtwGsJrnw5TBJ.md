---
schema: wang-person/v1
id: p_xm6FgUzksNtwGsJrnw5TBJ
status: active
merged_into: null
display_name: 王緘三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T1jDsN6gcEokmH5X9fVfkc
        subject_person_id: p_xm6FgUzksNtwGsJrnw5TBJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緘三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QLfpHTULCTWZpr9V4rc3pu
          claim_id: c_T1jDsN6gcEokmH5X9fVfkc
          source_id: s_HrGAx5XJFM4bLAPTSuPm9m
          stance: supports
          locator: CBDB:698936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698936）
          source: &a1
            id: s_HrGAx5XJFM4bLAPTSuPm9m
            source_type: api_record
            title: 中国历代人物传记资料库：王緘三（CBDB 698936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698936&o=json
            external_identifier: CBDB:698936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kJmRzrhmhr11eEeFNF2esw
        subject_person_id: p_xm6FgUzksNtwGsJrnw5TBJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緘三，清人物。籍贯武進，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9mzMydRqnDvTljrrccV15G
          claim_id: c_kJmRzrhmhr11eEeFNF2esw
          source_id: s_HrGAx5XJFM4bLAPTSuPm9m
          stance: supports
          locator: CBDB:698936
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

# 王緘三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緘三 | accepted |
| bio.summary | 王緘三，清人物。籍贯武進，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緘三（CBDB 698936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698936&o=json)
