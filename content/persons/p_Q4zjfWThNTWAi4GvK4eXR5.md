---
schema: wang-person/v1
id: p_Q4zjfWThNTWAi4GvK4eXR5
status: active
merged_into: null
display_name: 王查蔚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NytTNmnbE7FxGvp37GrRKu
        subject_person_id: p_Q4zjfWThNTWAi4GvK4eXR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王查蔚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6NDT2GAY8L8oHUy72RaCck
          claim_id: c_NytTNmnbE7FxGvp37GrRKu
          source_id: s_FJBi5M3ssmoy3zGDyHFogg
          stance: supports
          locator: CBDB:638699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638699）
          source: &a1
            id: s_FJBi5M3ssmoy3zGDyHFogg
            source_type: api_record
            title: 中国历代人物传记资料库：王查蔚（CBDB 638699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638699&o=json
            external_identifier: CBDB:638699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dHtsH8FA4Yc7cfJCpaaQyy
        subject_person_id: p_Q4zjfWThNTWAi4GvK4eXR5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王查蔚，清人物。籍贯衡州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5rOFFKmtkHu9fFiEMmlMYE
          claim_id: c_dHtsH8FA4Yc7cfJCpaaQyy
          source_id: s_FJBi5M3ssmoy3zGDyHFogg
          stance: supports
          locator: CBDB:638699
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

# 王查蔚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王查蔚 | accepted |
| bio.summary | 王查蔚，清人物。籍贯衡州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王查蔚（CBDB 638699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638699&o=json)
