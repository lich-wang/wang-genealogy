---
schema: wang-person/v1
id: p_Mv2aNMzKtP5PgMFCDfxLjJ
status: active
merged_into: null
display_name: 王凝祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zKeQNzZSN7jNcCAnYKP782
        subject_person_id: p_Mv2aNMzKtP5PgMFCDfxLjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wwFhu3Arz7A7sKWyQp7vib
          claim_id: c_zKeQNzZSN7jNcCAnYKP782
          source_id: s_g5sCGF2wFrM9jp4qycznP1
          stance: supports
          locator: CBDB:636361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636361）
          source: &a1
            id: s_g5sCGF2wFrM9jp4qycznP1
            source_type: api_record
            title: 中国历代人物传记资料库：王凝祥（CBDB 636361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636361&o=json
            external_identifier: CBDB:636361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GKsFQdCZ6CTw8DxoPLbT6Z
        subject_person_id: p_Mv2aNMzKtP5PgMFCDfxLjJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王凝祥，清人物。籍贯廣州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636361）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T5YIghMc73MlH6ugNGVT8-
          claim_id: c_GKsFQdCZ6CTw8DxoPLbT6Z
          source_id: s_g5sCGF2wFrM9jp4qycznP1
          stance: supports
          locator: CBDB:636361
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

# 王凝祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝祥 | accepted |
| bio.summary | 王凝祥，清人物。籍贯廣州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636361） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凝祥（CBDB 636361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636361&o=json)
