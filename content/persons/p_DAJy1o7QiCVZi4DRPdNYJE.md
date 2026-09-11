---
schema: wang-person/v1
id: p_DAJy1o7QiCVZi4DRPdNYJE
status: active
merged_into: null
display_name: 王尊賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BHoBpHybWqztYkym7gtVQC
        subject_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尊賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QViNLLyAcsiAQK77gQy4fB
          claim_id: c_BHoBpHybWqztYkym7gtVQC
          source_id: s_6ANbt2S4fBJ8YcE3nF1tCB
          stance: supports
          locator: CBDB:285854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285854）
          source: &a1
            id: s_6ANbt2S4fBJ8YcE3nF1tCB
            source_type: api_record
            title: 中国历代人物传记资料库：王尊賢（CBDB 285854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json
            external_identifier: CBDB:285854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UHu8g4r4F9KsRKm4GRPP9E
        subject_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尊賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Tx9N3AY0mBZnDvtR95VG2
          claim_id: c_UHu8g4r4F9KsRKm4GRPP9E
          source_id: s_6ANbt2S4fBJ8YcE3nF1tCB
          stance: supports
          locator: CBDB:285854
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

# 王尊賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尊賢 | accepted |
| bio.summary | 王尊賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尊賢（CBDB 285854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json)
