---
schema: wang-person/v1
id: p_1n5wArWuUQnUtDqQQxB6TE
status: active
merged_into: null
display_name: 王公覆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4fNYExMp9AaV93fMiCjFu7
        subject_person_id: p_1n5wArWuUQnUtDqQQxB6TE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公覆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_28LmdjALGHuNBuUsECkPSG
          claim_id: c_4fNYExMp9AaV93fMiCjFu7
          source_id: s_dHCyCH4SNfBjP2PM7z4oET
          stance: supports
          locator: CBDB:577545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577545）
          source: &a1
            id: s_dHCyCH4SNfBjP2PM7z4oET
            source_type: api_record
            title: 中国历代人物传记资料库：王公覆（CBDB 577545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577545&o=json
            external_identifier: CBDB:577545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NLhhB7TPL9fKXWEPYAZex8
        subject_person_id: p_1n5wArWuUQnUtDqQQxB6TE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1886年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JiMC63KnF9ATbijANVwQRw
          claim_id: c_NLhhB7TPL9fKXWEPYAZex8
          source_id: s_dHCyCH4SNfBjP2PM7z4oET
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4RqNcjVNqJvLkQg4kMPvdN
        subject_person_id: p_1n5wArWuUQnUtDqQQxB6TE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公覆（生于1886年），清人物。籍贯順天府。（中国历代人物传记资料库 CBDB 577545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S745AwDp16XV3kmJSzwu9M
          claim_id: c_4RqNcjVNqJvLkQg4kMPvdN
          source_id: s_dHCyCH4SNfBjP2PM7z4oET
          stance: supports
          locator: CBDB:577545
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

# 王公覆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公覆 | accepted |
| birth.date | 1886年 | accepted |
| bio.summary | 王公覆（生于1886年），清人物。籍贯順天府。（中国历代人物传记资料库 CBDB 577545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公覆（CBDB 577545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577545&o=json)
