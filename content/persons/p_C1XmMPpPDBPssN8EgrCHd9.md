---
schema: wang-person/v1
id: p_C1XmMPpPDBPssN8EgrCHd9
status: active
merged_into: null
display_name: 王治民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNutTBpashoEWhqMnajuXS
        subject_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gS9SmEuKEZQpQN19g78JkL
          claim_id: c_FNutTBpashoEWhqMnajuXS
          source_id: s_e7rFDvkM1LS1CbjjEfyMNp
          stance: supports
          locator: CBDB:336586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336586）
          source: &a1
            id: s_e7rFDvkM1LS1CbjjEfyMNp
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 336586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json
            external_identifier: CBDB:336586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qBufNKApiiG3gMENyBfrKv
        subject_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336586）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h1EDvcKLJtG_893lEOQtka
          claim_id: c_qBufNKApiiG3gMENyBfrKv
          source_id: s_e7rFDvkM1LS1CbjjEfyMNp
          stance: supports
          locator: CBDB:336586
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

# 王治民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治民 | accepted |
| bio.summary | 王治民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336586） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治民（CBDB 336586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json)
