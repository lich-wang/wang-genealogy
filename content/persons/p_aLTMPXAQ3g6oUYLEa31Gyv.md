---
schema: wang-person/v1
id: p_aLTMPXAQ3g6oUYLEa31Gyv
status: active
merged_into: null
display_name: 王綿曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dETmACgyThpwcn6bfjUa4f
        subject_person_id: p_aLTMPXAQ3g6oUYLEa31Gyv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綿曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i55RfDDE57fHmLPdNRBve3
          claim_id: c_dETmACgyThpwcn6bfjUa4f
          source_id: s_inuEuvwSQxq9vXM5CZz77h
          stance: supports
          locator: CBDB:639841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639841）
          source: &a1
            id: s_inuEuvwSQxq9vXM5CZz77h
            source_type: api_record
            title: 中国历代人物传记资料库：王綿曾（CBDB 639841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639841&o=json
            external_identifier: CBDB:639841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P7vsQLXLPGFPeSD2cm2tcG
        subject_person_id: p_aLTMPXAQ3g6oUYLEa31Gyv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綿曾，清人物。籍贯隴西，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_22lmWrZFo6H1FhieUL_Z9C
          claim_id: c_P7vsQLXLPGFPeSD2cm2tcG
          source_id: s_inuEuvwSQxq9vXM5CZz77h
          stance: supports
          locator: CBDB:639841
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

# 王綿曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綿曾 | accepted |
| bio.summary | 王綿曾，清人物。籍贯隴西，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綿曾（CBDB 639841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639841&o=json)
