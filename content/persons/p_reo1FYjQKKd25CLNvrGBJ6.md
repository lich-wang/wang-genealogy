---
schema: wang-person/v1
id: p_reo1FYjQKKd25CLNvrGBJ6
status: active
merged_into: null
display_name: 王夢得
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_84LSD1dWshpD1esHNW5PoD
        subject_person_id: p_reo1FYjQKKd25CLNvrGBJ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_isHeWoVyXfER9EhNxwqEdt
          claim_id: c_84LSD1dWshpD1esHNW5PoD
          source_id: s_QbDDiL6keFNFAB9GV7QfEZ
          stance: supports
          locator: CBDB:38292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38292）
          source: &a1
            id: s_QbDDiL6keFNFAB9GV7QfEZ
            source_type: api_record
            title: 中国历代人物传记资料库：王夢得（CBDB 38292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38292&o=json
            external_identifier: CBDB:38292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o4Nqbj1rAW18CprpMuEvAu
        subject_person_id: p_reo1FYjQKKd25CLNvrGBJ6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1205年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RFmBAd11fED2oqC91RLLTL
          claim_id: c_o4Nqbj1rAW18CprpMuEvAu
          source_id: s_QbDDiL6keFNFAB9GV7QfEZ
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
        id: c_dJsFqVhf15oZJU5rPLtkzi
        subject_person_id: p_reo1FYjQKKd25CLNvrGBJ6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1271年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6L2Vm24ARZY6qa4PHCwxcz
          claim_id: c_dJsFqVhf15oZJU5rPLtkzi
          source_id: s_QbDDiL6keFNFAB9GV7QfEZ
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
        id: c_6pFivCtX8rPcURgkNbks28
        subject_person_id: p_reo1FYjQKKd25CLNvrGBJ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢得（1205年—1271年），宋人物。籍贯金華，入仕進士，曾任迪功郎、奉議郎、太府寺丞。（中国历代人物传记资料库 CBDB 38292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_22lqEfA86B1LSEWxPLZVWt
          claim_id: c_6pFivCtX8rPcURgkNbks28
          source_id: s_QbDDiL6keFNFAB9GV7QfEZ
          stance: supports
          locator: CBDB:38292
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

# 王夢得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢得 | accepted |
| birth.date | 1205年 | accepted |
| death.date | 1271年 | accepted |
| bio.summary | 王夢得（1205年—1271年），宋人物。籍贯金華，入仕進士，曾任迪功郎、奉議郎、太府寺丞。（中国历代人物传记资料库 CBDB 38292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢得（CBDB 38292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38292&o=json)
