---
schema: wang-person/v1
id: p_eEW7hHSgi5M9G3JPcBdrw8
status: active
merged_into: null
display_name: 王徽之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyXmCb9S8C6LvPQBNAgqt4
        subject_person_id: p_eEW7hHSgi5M9G3JPcBdrw8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ubk4A7i8YZPENEwWjPgirc
          claim_id: c_tyXmCb9S8C6LvPQBNAgqt4
          source_id: s_neYKgCnFeP6U6tTPpfMr2C
          stance: supports
          locator: CBDB:25794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25794）
          source: &a1
            id: s_neYKgCnFeP6U6tTPpfMr2C
            source_type: api_record
            title: 中国历代人物传记资料库：王徽之（CBDB 25794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25794&o=json
            external_identifier: CBDB:25794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5iC4sJNcLcJDwd6mq7zce5
        subject_person_id: p_eEW7hHSgi5M9G3JPcBdrw8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25794）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ME6PUjMK5VBmmn4r0hFVab
          claim_id: c_5iC4sJNcLcJDwd6mq7zce5
          source_id: s_neYKgCnFeP6U6tTPpfMr2C
          stance: supports
          locator: CBDB:25794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_10meSp_HxtSSlkFI3D8idR
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eEW7hHSgi5M9G3JPcBdrw8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3q-H8NgxlgQQlU0xo4EzXZ
          claim_id: c_10meSp_HxtSSlkFI3D8idR
          source_id: s_3X9-Y9RMVHu5yqbvwZB62D
          stance: supports
          locator: 晋书·卷八十·王羲之传：子徽之。
          quotation: null
          interpretation_note: 依据《晋书·王羲之传》正史原文复核补充。
          source:
            id: s_3X9-Y9RMVHu5yqbvwZB62D
            source_type: website
            title: 维基文库：晋书·卷八十·王羲之
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/晉書/卷080
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T11:16:42.454Z
            metadata_json: null
      object_person:
        id: p_VCkK1jW79rQ6D9gE1Q4vrU
        status: active
        display_name: 王羲之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王徽之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽之 | accepted |
| bio.summary | 王徽之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VCkK1jW79rQ6D9gE1Q4vrU | 王羲之 | accepted |

## 外部来源

- [维基文库：晋书·卷八十·王羲之](https://zh.wikisource.org/wiki/晉書/卷080)
- [中国历代人物传记资料库：王徽之（CBDB 25794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25794&o=json)
