---
schema: wang-person/v1
id: p_jbW2GEnx22CuvNGBdKkmRd
status: active
merged_into: null
display_name: 王竒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MYiy455FB3vV1NxWaVxaag
        subject_person_id: p_jbW2GEnx22CuvNGBdKkmRd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YMNpPv439GHVK6Tq2tCt7Q
          claim_id: c_MYiy455FB3vV1NxWaVxaag
          source_id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
          stance: supports
          locator: CBDB:699010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699010）
          source: &a1
            id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
            source_type: api_record
            title: 中国历代人物传记资料库：王竒（CBDB 699010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699010&o=json
            external_identifier: CBDB:699010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8sMmFRBjBCXmGw1U8DYmJA
        subject_person_id: p_jbW2GEnx22CuvNGBdKkmRd
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
        - id: cs_o8vdjA3NGV1wUnNHsX2bc2
          claim_id: c_8sMmFRBjBCXmGw1U8DYmJA
          source_id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Adky2HsOmpZO6cS-B1Oirb
        subject_person_id: p_jbW2GEnx22CuvNGBdKkmRd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wtGA76QNf9kpZkutJfP2Xv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYHQOF-JtMTKvl4O28VouD
          claim_id: c_Adky2HsOmpZO6cS-B1Oirb
          source_id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
          stance: supports
          locator: 新修菏澤縣志，lgid=725118：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wtGA76QNf9kpZkutJfP2Xv
        status: active
        display_name: 王柱峯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wZTzMeaJmihQ4sMhOJknSG
        subject_person_id: p_vfHAVd9bByQfpiLxafmaZr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jbW2GEnx22CuvNGBdKkmRd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P0UvUcB96qsH4OYbOJjKh_
          claim_id: c_wZTzMeaJmihQ4sMhOJknSG
          source_id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
          stance: supports
          locator: 新修菏澤縣志，lgid=725113：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vfHAVd9bByQfpiLxafmaZr
        status: active
        display_name: 王映旭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王竒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王竒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wtGA76QNf9kpZkutJfP2Xv | 王柱峯 | accepted |
| ancestors | p_vfHAVd9bByQfpiLxafmaZr | 王映旭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王竒（CBDB 699010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699010&o=json)
