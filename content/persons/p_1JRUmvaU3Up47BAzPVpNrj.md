---
schema: wang-person/v1
id: p_1JRUmvaU3Up47BAzPVpNrj
status: active
merged_into: null
display_name: 王廩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3JPSwL19Sk5Y5w4FqfayP
        subject_person_id: p_1JRUmvaU3Up47BAzPVpNrj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UjJD2Ap8ctLRJRM4qDqajQ
          claim_id: c_P3JPSwL19Sk5Y5w4FqfayP
          source_id: s_HMs7UiLcgX3uTkQZAW6YhE
          stance: supports
          locator: CBDB:437554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437554）
          source: &a1
            id: s_HMs7UiLcgX3uTkQZAW6YhE
            source_type: api_record
            title: 中国历代人物传记资料库：王廩（CBDB 437554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437554&o=json
            external_identifier: CBDB:437554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o97BiS2jLAJo38Bya3ajVa
        subject_person_id: p_1JRUmvaU3Up47BAzPVpNrj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廩，明人物。籍贯建德。（中国历代人物传记资料库 CBDB 437554）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yJz3QNL-Z-U2XjqS4OnwhM
          claim_id: c_o97BiS2jLAJo38Bya3ajVa
          source_id: s_HMs7UiLcgX3uTkQZAW6YhE
          stance: supports
          locator: CBDB:437554
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
  ancestors:
    - claim:
        id: c_oG-Xq0ah3ix4CcqaDz_geo
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1JRUmvaU3Up47BAzPVpNrj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aed0SU-bdycDvezSMUDouW
          claim_id: c_oG-Xq0ah3ix4CcqaDz_geo
          source_id: s_HMs7UiLcgX3uTkQZAW6YhE
          stance: supports
          locator: 全元文，588：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ePUgH55QWsG6Hauqd4raHD
        status: active
        display_name: 王文彪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廩 | accepted |
| bio.summary | 王廩，明人物。籍贯建德。（中国历代人物传记资料库 CBDB 437554） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ePUgH55QWsG6Hauqd4raHD | 王文彪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廩（CBDB 437554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437554&o=json)
