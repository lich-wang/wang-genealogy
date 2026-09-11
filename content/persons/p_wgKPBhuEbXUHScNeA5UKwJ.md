---
schema: wang-person/v1
id: p_wgKPBhuEbXUHScNeA5UKwJ
status: active
merged_into: null
display_name: 王時
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E4Ldg1bvrH3YF6s6VVXCSq
        subject_person_id: p_wgKPBhuEbXUHScNeA5UKwJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SiKTu7KT6AREU6FnMz5xHd
          claim_id: c_E4Ldg1bvrH3YF6s6VVXCSq
          source_id: s_iWkrziPpo5a4ec5Yci9YVK
          stance: supports
          locator: CBDB:100759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100759）
          source: &a1
            id: s_iWkrziPpo5a4ec5Yci9YVK
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 100759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100759&o=json
            external_identifier: CBDB:100759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2q5xKH9diH2DxMHPzkJZMs
        subject_person_id: p_wgKPBhuEbXUHScNeA5UKwJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y298sM6iU5P15phUoe2uyV
          claim_id: c_2q5xKH9diH2DxMHPzkJZMs
          source_id: s_iWkrziPpo5a4ec5Yci9YVK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ccsJK-g1ESyNGbOpgWjcDM
        subject_person_id: p_mmCMTHXKoM3sDTwtCUF3kb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wgKPBhuEbXUHScNeA5UKwJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rhf5cL8Rsy9OJc2zVKDil7
          claim_id: c_ccsJK-g1ESyNGbOpgWjcDM
          source_id: s_QRfNg7XqnZWEFxZT224FKc
          stance: supports
          locator: 元人傳記資料索引，572：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QRfNg7XqnZWEFxZT224FKc
            source_type: api_record
            title: 中国历代人物传记资料库：王克敬（CBDB 101197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101197&o=json
            external_identifier: CBDB:101197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mmCMTHXKoM3sDTwtCUF3kb
        status: active
        display_name: 王克敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mmCMTHXKoM3sDTwtCUF3kb | 王克敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克敬（CBDB 101197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101197&o=json)
- [中国历代人物传记资料库：王時（CBDB 100759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100759&o=json)
