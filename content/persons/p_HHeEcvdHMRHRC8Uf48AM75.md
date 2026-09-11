---
schema: wang-person/v1
id: p_HHeEcvdHMRHRC8Uf48AM75
status: active
merged_into: null
display_name: 王濬生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8bh65P25Lrfw8zpEhyumM7
        subject_person_id: p_HHeEcvdHMRHRC8Uf48AM75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vPQbWhSNq7a4GGNSUAW9EU
          claim_id: c_8bh65P25Lrfw8zpEhyumM7
          source_id: s_1EY6GWp7QGMbQfq8mMqfsV
          stance: supports
          locator: CBDB:639255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639255）
          source: &a1
            id: s_1EY6GWp7QGMbQfq8mMqfsV
            source_type: api_record
            title: 中国历代人物传记资料库：王濬生（CBDB 639255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639255&o=json
            external_identifier: CBDB:639255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNNsLToykiA4tZHgfD21KT
        subject_person_id: p_HHeEcvdHMRHRC8Uf48AM75
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬生，清人物。籍贯靈州，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZPaK_fxlbr7jS6vpNQG2m1
          claim_id: c_GNNsLToykiA4tZHgfD21KT
          source_id: s_1EY6GWp7QGMbQfq8mMqfsV
          stance: supports
          locator: CBDB:639255
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

# 王濬生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬生 | accepted |
| bio.summary | 王濬生，清人物。籍贯靈州，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濬生（CBDB 639255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639255&o=json)
