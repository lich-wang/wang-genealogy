---
schema: wang-person/v1
id: p_kzC2PXr7P2X9uFnRGiTcui
status: active
merged_into: null
display_name: 王綬猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6S39oriQLy78VBKJepkXY
        subject_person_id: p_kzC2PXr7P2X9uFnRGiTcui
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ryyGLxgcEg4FBUqm1fS7y
          claim_id: c_G6S39oriQLy78VBKJepkXY
          source_id: s_4r4FA3yKY7Av2EqbpPP2Ny
          stance: supports
          locator: CBDB:639805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639805）
          source: &a1
            id: s_4r4FA3yKY7Av2EqbpPP2Ny
            source_type: api_record
            title: 中国历代人物传记资料库：王綬猷（CBDB 639805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639805&o=json
            external_identifier: CBDB:639805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RcYwtYZBJ5uYDVr2hCnjC9
        subject_person_id: p_kzC2PXr7P2X9uFnRGiTcui
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tqhx8jj5UyhQWRYqE3utfm
          claim_id: c_RcYwtYZBJ5uYDVr2hCnjC9
          source_id: s_4r4FA3yKY7Av2EqbpPP2Ny
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王綬猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬猷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綬猷（CBDB 639805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639805&o=json)
