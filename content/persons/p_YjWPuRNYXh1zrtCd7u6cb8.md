---
schema: wang-person/v1
id: p_YjWPuRNYXh1zrtCd7u6cb8
status: active
merged_into: null
display_name: 王夫之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FAnfKoBL5sU91HuEhDP7Tr
        subject_person_id: p_YjWPuRNYXh1zrtCd7u6cb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夫之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BCrfXoG22BLdcgViyV2EyB
          claim_id: c_FAnfKoBL5sU91HuEhDP7Tr
          source_id: s_M7ZrtMHLbQAkA3H9oFYLsH
          stance: supports
          locator: CBDB:65721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65721）
          source: &a1
            id: s_M7ZrtMHLbQAkA3H9oFYLsH
            source_type: api_record
            title: 中国历代人物传记资料库：王夫之（CBDB 65721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65721&o=json
            external_identifier: CBDB:65721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kLutg7xvK7kEnbLsdRNKBT
        subject_person_id: p_YjWPuRNYXh1zrtCd7u6cb8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1619年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4N4bkHEJVxZmpvo2gm2zN
          claim_id: c_kLutg7xvK7kEnbLsdRNKBT
          source_id: s_M7ZrtMHLbQAkA3H9oFYLsH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q5MqdThLdWXtKFU1tRSQ3q
        subject_person_id: p_YjWPuRNYXh1zrtCd7u6cb8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1692年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PGvsETNwdf5T8oZc81auH6
          claim_id: c_Q5MqdThLdWXtKFU1tRSQ3q
          source_id: s_M7ZrtMHLbQAkA3H9oFYLsH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fpk1hQp8ZZ9t3G7eon8TKQ
        subject_person_id: p_YjWPuRNYXh1zrtCd7u6cb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夫之（1619年—1692年），清人物。籍贯衡陽，身份为詩人、史學家，入仕鄉貢舉人，曾任行人司行人。（中国历代人物传记资料库 CBDB 65721）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FTkCyxO22u2qeRwbZ7T1Qw
          claim_id: c_fpk1hQp8ZZ9t3G7eon8TKQ
          source_id: s_M7ZrtMHLbQAkA3H9oFYLsH
          stance: supports
          locator: CBDB:65721
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

# 王夫之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夫之 | accepted |
| birth.date | 1619年 | accepted |
| death.date | 1692年 | accepted |
| bio.summary | 王夫之（1619年—1692年），清人物。籍贯衡陽，身份为詩人、史學家，入仕鄉貢舉人，曾任行人司行人。（中国历代人物传记资料库 CBDB 65721） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夫之（CBDB 65721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65721&o=json)
