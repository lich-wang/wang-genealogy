---
schema: wang-person/v1
id: p_huysP4DZ8CcC5urovhYQz6
status: active
merged_into: null
display_name: 王仲甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VTjELArLZs72K68WHqaSSQ
        subject_person_id: p_huysP4DZ8CcC5urovhYQz6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qy1E2GHJ9354tECaSkZSyf
          claim_id: c_VTjELArLZs72K68WHqaSSQ
          source_id: s_Q6aoBWAjgXnuBV95EFbS8i
          stance: supports
          locator: CBDB:38860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38860）
          source: &a1
            id: s_Q6aoBWAjgXnuBV95EFbS8i
            source_type: api_record
            title: 中国历代人物传记资料库：王仲甫（CBDB 38860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38860&o=json
            external_identifier: CBDB:38860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U3kD7zRBGo4ef2hEuQdA6e
        subject_person_id: p_huysP4DZ8CcC5urovhYQz6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲甫，宋人物。籍贯華陽，身份为工於作賦，入仕詞科，曾任縣尉。（中国历代人物传记资料库 CBDB 38860）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i3JlYnuMokNAbFTaz28p2K
          claim_id: c_U3kD7zRBGo4ef2hEuQdA6e
          source_id: s_Q6aoBWAjgXnuBV95EFbS8i
          stance: supports
          locator: CBDB:38860
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

# 王仲甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲甫 | accepted |
| bio.summary | 王仲甫，宋人物。籍贯華陽，身份为工於作賦，入仕詞科，曾任縣尉。（中国历代人物传记资料库 CBDB 38860） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲甫（CBDB 38860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38860&o=json)
