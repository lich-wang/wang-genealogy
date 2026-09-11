---
schema: wang-person/v1
id: p_3Md8WPv7cuTKZXMtanULNH
status: active
merged_into: null
display_name: 王稹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q9Tin6B79zxzSN1vm14JzX
        subject_person_id: p_3Md8WPv7cuTKZXMtanULNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_STsWxgDd4L6LY6B8B7TvYD
          claim_id: c_Q9Tin6B79zxzSN1vm14JzX
          source_id: s_uSMJ2CXCUsdYcfuVxbtuvf
          stance: supports
          locator: CBDB:37833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37833）
          source: &a1
            id: s_uSMJ2CXCUsdYcfuVxbtuvf
            source_type: api_record
            title: 中国历代人物传记资料库：王稹（CBDB 37833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37833&o=json
            external_identifier: CBDB:37833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jEMy4k6KW4vh5kjKFfogZb
        subject_person_id: p_3Md8WPv7cuTKZXMtanULNH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稹，宋人物。曾任太子中舍人、尚書省刑部比部司員外郎。（中国历代人物传记资料库 CBDB 37833）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O6Z5eUs18CRPEuQBTSgHMK
          claim_id: c_jEMy4k6KW4vh5kjKFfogZb
          source_id: s_uSMJ2CXCUsdYcfuVxbtuvf
          stance: supports
          locator: CBDB:37833
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

# 王稹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稹 | accepted |
| bio.summary | 王稹，宋人物。曾任太子中舍人、尚書省刑部比部司員外郎。（中国历代人物传记资料库 CBDB 37833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王稹（CBDB 37833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37833&o=json)
