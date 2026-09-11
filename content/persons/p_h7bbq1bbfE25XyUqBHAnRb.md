---
schema: wang-person/v1
id: p_h7bbq1bbfE25XyUqBHAnRb
status: active
merged_into: null
display_name: 王統鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dhCBEUAaLKzzsZkZX2PXjM
        subject_person_id: p_h7bbq1bbfE25XyUqBHAnRb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GXw3B44QNM449F26WrZfmw
          claim_id: c_dhCBEUAaLKzzsZkZX2PXjM
          source_id: s_SZamxwPbLQ5B1ZX99pj6dT
          stance: supports
          locator: CBDB:639787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639787）
          source: &a1
            id: s_SZamxwPbLQ5B1ZX99pj6dT
            source_type: api_record
            title: 中国历代人物传记资料库：王統鈞（CBDB 639787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639787&o=json
            external_identifier: CBDB:639787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n7DTeXqmmKeVrtFQhUzNzX
        subject_person_id: p_h7bbq1bbfE25XyUqBHAnRb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統鈞，清人物。籍贯雄縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 639787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VUoDeJHeAtlHeOXM5AWz1a
          claim_id: c_n7DTeXqmmKeVrtFQhUzNzX
          source_id: s_SZamxwPbLQ5B1ZX99pj6dT
          stance: supports
          locator: CBDB:639787
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

# 王統鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統鈞 | accepted |
| bio.summary | 王統鈞，清人物。籍贯雄縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 639787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王統鈞（CBDB 639787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639787&o=json)
