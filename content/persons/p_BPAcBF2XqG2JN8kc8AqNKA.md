---
schema: wang-person/v1
id: p_BPAcBF2XqG2JN8kc8AqNKA
status: active
merged_into: null
display_name: 王肇元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mcge1CJwiogu6b3REd4Xva
        subject_person_id: p_BPAcBF2XqG2JN8kc8AqNKA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UQ58PzJan4cYazaJUumWUW
          claim_id: c_Mcge1CJwiogu6b3REd4Xva
          source_id: s_XzAeHmH5Qzm1GMTs9PqK4K
          stance: supports
          locator: CBDB:639966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639966）
          source: &a1
            id: s_XzAeHmH5Qzm1GMTs9PqK4K
            source_type: api_record
            title: 中国历代人物传记资料库：王肇元（CBDB 639966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639966&o=json
            external_identifier: CBDB:639966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dgtfnJk9r64wYDNjN1wMCi
        subject_person_id: p_BPAcBF2XqG2JN8kc8AqNKA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇元，清人物。籍贯石阡府直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_88hLZRBiS9x1m2f_21Zucu
          claim_id: c_dgtfnJk9r64wYDNjN1wMCi
          source_id: s_XzAeHmH5Qzm1GMTs9PqK4K
          stance: supports
          locator: CBDB:639966
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

# 王肇元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇元 | accepted |
| bio.summary | 王肇元，清人物。籍贯石阡府直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇元（CBDB 639966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639966&o=json)
