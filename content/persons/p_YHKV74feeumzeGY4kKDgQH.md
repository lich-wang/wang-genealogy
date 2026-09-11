---
schema: wang-person/v1
id: p_YHKV74feeumzeGY4kKDgQH
status: active
merged_into: null
display_name: 王冠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uStrcb2pinN9BZidfXdbd3
        subject_person_id: p_YHKV74feeumzeGY4kKDgQH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ibzW519WAbZtGYk5eLtPq6
          claim_id: c_uStrcb2pinN9BZidfXdbd3
          source_id: s_PwNKBNDT2nzDPgtkpMNdvC
          stance: supports
          locator: CBDB:97818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97818）
          source: &a1
            id: s_PwNKBNDT2nzDPgtkpMNdvC
            source_type: api_record
            title: 中国历代人物传记资料库：王冠（CBDB 97818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97818&o=json
            external_identifier: CBDB:97818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Nw9jFi8qj87XUbAVkiot8
        subject_person_id: p_YHKV74feeumzeGY4kKDgQH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠，宋人物。曾任閤門宣贊舍人、武節郎。（中国历代人物传记资料库 CBDB 97818）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EialEIzEdlx0s-__266TwY
          claim_id: c_1Nw9jFi8qj87XUbAVkiot8
          source_id: s_PwNKBNDT2nzDPgtkpMNdvC
          stance: supports
          locator: CBDB:97818
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

# 王冠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冠 | accepted |
| bio.summary | 王冠，宋人物。曾任閤門宣贊舍人、武節郎。（中国历代人物传记资料库 CBDB 97818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冠（CBDB 97818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97818&o=json)
