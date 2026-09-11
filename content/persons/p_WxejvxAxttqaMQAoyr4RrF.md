---
schema: wang-person/v1
id: p_WxejvxAxttqaMQAoyr4RrF
status: active
merged_into: null
display_name: 王紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y7vyWRUDtYShvHDe7MY2EB
        subject_person_id: p_WxejvxAxttqaMQAoyr4RrF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Qj3Yiy47nSfQpg6HSEtZL
          claim_id: c_Y7vyWRUDtYShvHDe7MY2EB
          source_id: s_UjJqJybmha9hxt5cfRecjy
          stance: supports
          locator: CBDB:258712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（258712）
          source: &a1
            id: s_UjJqJybmha9hxt5cfRecjy
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 258712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258712&o=json
            external_identifier: CBDB:258712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QNmojGNLEYsPC7T1A4pvqM
        subject_person_id: p_WxejvxAxttqaMQAoyr4RrF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。成化二十三年進士，籍贯祥符，入仕監生。（中国历代人物传记资料库 CBDB 258712）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0jZmVqKqc5xyWUteXfnOkH
          claim_id: c_QNmojGNLEYsPC7T1A4pvqM
          source_id: s_UjJqJybmha9hxt5cfRecjy
          stance: supports
          locator: CBDB:258712
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

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。成化二十三年進士，籍贯祥符，入仕監生。（中国历代人物传记资料库 CBDB 258712） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 258712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258712&o=json)
