---
schema: wang-person/v1
id: p_K4Kv8eN2QeRWaF652DcF1c
status: active
merged_into: null
display_name: 王應符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wJupVtBP3MpGM6uzwVTWUv
        subject_person_id: p_K4Kv8eN2QeRWaF652DcF1c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應符
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eorz7RDAQTEqpD9BEpffUH
          claim_id: c_wJupVtBP3MpGM6uzwVTWUv
          source_id: s_UmhSeVGJKevQF4TrtzQCkY
          stance: supports
          locator: CBDB:574694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574694）
          source: &a1
            id: s_UmhSeVGJKevQF4TrtzQCkY
            source_type: api_record
            title: 中国历代人物传记资料库：王應符（CBDB 574694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574694&o=json
            external_identifier: CBDB:574694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6yBbtFANRT613kKsShL4Fs
        subject_person_id: p_K4Kv8eN2QeRWaF652DcF1c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應符，明人物。籍贯京山。（中国历代人物传记资料库 CBDB 574694）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hfR3NfsAqeWSWl8UG9LICj
          claim_id: c_6yBbtFANRT613kKsShL4Fs
          source_id: s_UmhSeVGJKevQF4TrtzQCkY
          stance: supports
          locator: CBDB:574694
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

# 王應符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應符 | accepted |
| bio.summary | 王應符，明人物。籍贯京山。（中国历代人物传记资料库 CBDB 574694） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應符（CBDB 574694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574694&o=json)
