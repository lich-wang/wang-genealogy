---
schema: wang-person/v1
id: p_mNtynCnTPzAFh2KNKpQimY
status: active
merged_into: null
display_name: 王以忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j6Pdqst8EoDeMh2MFwSMCk
        subject_person_id: p_mNtynCnTPzAFh2KNKpQimY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nQJgZ6GUiWVtpwpYTfayid
          claim_id: c_j6Pdqst8EoDeMh2MFwSMCk
          source_id: s_1rzCoASWYvKrh7yLWDpU4X
          stance: supports
          locator: CBDB:635919
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635919）
          source: &a1
            id: s_1rzCoASWYvKrh7yLWDpU4X
            source_type: api_record
            title: 中国历代人物传记资料库：王以忠（CBDB 635919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635919&o=json
            external_identifier: CBDB:635919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GtWN8aEwQQupFNahJ9hzjs
        subject_person_id: p_mNtynCnTPzAFh2KNKpQimY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王以忠，清人物。籍贯沂州，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635919）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZDKvYhOJiiRRN3GwcCAnvC
          claim_id: c_GtWN8aEwQQupFNahJ9hzjs
          source_id: s_1rzCoASWYvKrh7yLWDpU4X
          stance: supports
          locator: CBDB:635919
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

# 王以忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以忠 | accepted |
| bio.summary | 王以忠，清人物。籍贯沂州，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635919） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以忠（CBDB 635919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635919&o=json)
