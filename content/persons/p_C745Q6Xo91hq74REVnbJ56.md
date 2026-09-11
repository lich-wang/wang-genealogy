---
schema: wang-person/v1
id: p_C745Q6Xo91hq74REVnbJ56
status: active
merged_into: null
display_name: 王一本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dc5VBmtzgcp1AjiNNaYpLN
        subject_person_id: p_C745Q6Xo91hq74REVnbJ56
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r82woJ2FP15LZ8R1c5d6WF
          claim_id: c_dc5VBmtzgcp1AjiNNaYpLN
          source_id: s_V8cHtyFEhJ34J8pjVuMouy
          stance: supports
          locator: CBDB:213988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213988）
          source: &a1
            id: s_V8cHtyFEhJ34J8pjVuMouy
            source_type: api_record
            title: 中国历代人物传记资料库：王一本（CBDB 213988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213988&o=json
            external_identifier: CBDB:213988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_237mKiKAfGZAB4K7rfnwjJ
        subject_person_id: p_C745Q6Xo91hq74REVnbJ56
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一本，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213988）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oYPzBnk7G2NmK9tiLGCB-c
          claim_id: c_237mKiKAfGZAB4K7rfnwjJ
          source_id: s_V8cHtyFEhJ34J8pjVuMouy
          stance: supports
          locator: CBDB:213988
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

# 王一本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一本 | accepted |
| bio.summary | 王一本，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一本（CBDB 213988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213988&o=json)
