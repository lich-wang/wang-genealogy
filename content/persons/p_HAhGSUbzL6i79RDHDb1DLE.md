---
schema: wang-person/v1
id: p_HAhGSUbzL6i79RDHDb1DLE
status: active
merged_into: null
display_name: 王澤春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fdria8yWMbUVXtrKN5r4bt
        subject_person_id: p_HAhGSUbzL6i79RDHDb1DLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D4ynPKADQC9DMfDRGiCDsM
          claim_id: c_fdria8yWMbUVXtrKN5r4bt
          source_id: s_ys1dGw8kwRyduvgrr4DsiJ
          stance: supports
          locator: CBDB:639228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639228）
          source: &a1
            id: s_ys1dGw8kwRyduvgrr4DsiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王澤春（CBDB 639228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639228&o=json
            external_identifier: CBDB:639228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q9b8hruY21Z1Nva994HhST
        subject_person_id: p_HAhGSUbzL6i79RDHDb1DLE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤春，清人物。籍贯旌德，入仕廩生，曾任主事。（中国历代人物传记资料库 CBDB 639228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E2DoHnuQ4pDmgG9r8C4bih
          claim_id: c_q9b8hruY21Z1Nva994HhST
          source_id: s_ys1dGw8kwRyduvgrr4DsiJ
          stance: supports
          locator: CBDB:639228
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

# 王澤春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤春 | accepted |
| bio.summary | 王澤春，清人物。籍贯旌德，入仕廩生，曾任主事。（中国历代人物传记资料库 CBDB 639228） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤春（CBDB 639228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639228&o=json)
