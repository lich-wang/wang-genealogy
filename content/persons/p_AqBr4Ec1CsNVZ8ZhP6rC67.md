---
schema: wang-person/v1
id: p_AqBr4Ec1CsNVZ8ZhP6rC67
status: active
merged_into: null
display_name: 王汶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4SrCQP2B8e3iKXT6wXLGBr
        subject_person_id: p_AqBr4Ec1CsNVZ8ZhP6rC67
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yZL177baRhNwoxQCrAnXiD
          claim_id: c_4SrCQP2B8e3iKXT6wXLGBr
          source_id: s_Uw5kx1XPgA8ZH6H4bZ77BK
          stance: supports
          locator: CBDB:565028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565028）
          source: &a1
            id: s_Uw5kx1XPgA8ZH6H4bZ77BK
            source_type: api_record
            title: 中国历代人物传记资料库：王汶（CBDB 565028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565028&o=json
            external_identifier: CBDB:565028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nHKt1RmELDCf7vgC1gTDeA
        subject_person_id: p_AqBr4Ec1CsNVZ8ZhP6rC67
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶，清人物。籍贯泰州，身份为畫家。（中国历代人物传记资料库 CBDB 565028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ahvbBSjnMyRjHeQW7IZiaJ
          claim_id: c_nHKt1RmELDCf7vgC1gTDeA
          source_id: s_Uw5kx1XPgA8ZH6H4bZ77BK
          stance: supports
          locator: CBDB:565028
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

# 王汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汶 | accepted |
| bio.summary | 王汶，清人物。籍贯泰州，身份为畫家。（中国历代人物传记资料库 CBDB 565028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汶（CBDB 565028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565028&o=json)
