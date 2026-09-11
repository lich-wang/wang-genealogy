---
schema: wang-person/v1
id: p_fufFuGySBowXc5NCM36K2X
status: active
merged_into: null
display_name: 王遜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mSsEXoojMcEnGM9n1F7yfy
        subject_person_id: p_fufFuGySBowXc5NCM36K2X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bpBrwEp39G3KYMSU9GWb3a
          claim_id: c_mSsEXoojMcEnGM9n1F7yfy
          source_id: s_pQLt31oqcBGcGAK3NiDjRJ
          stance: supports
          locator: CBDB:291073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291073）
          source: &a1
            id: s_pQLt31oqcBGcGAK3NiDjRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 291073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291073&o=json
            external_identifier: CBDB:291073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uAyFJ43D8SdqARQSZXRguc
        subject_person_id: p_fufFuGySBowXc5NCM36K2X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜，明人物。天順元年進士，籍贯固始。（中国历代人物传记资料库 CBDB 291073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ktO8urbX9PUTS_dGJSE4mk
          claim_id: c_uAyFJ43D8SdqARQSZXRguc
          source_id: s_pQLt31oqcBGcGAK3NiDjRJ
          stance: supports
          locator: CBDB:291073
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

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | 王遜，明人物。天順元年進士，籍贯固始。（中国历代人物传记资料库 CBDB 291073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 291073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291073&o=json)
