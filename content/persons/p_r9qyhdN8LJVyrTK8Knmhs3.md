---
schema: wang-person/v1
id: p_r9qyhdN8LJVyrTK8Knmhs3
status: active
merged_into: null
display_name: 王仰觀
cbdb_id: 248135
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fXnbnLTUpfB9EMyPAM56jH
        subject_person_id: p_r9qyhdN8LJVyrTK8Knmhs3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仰觀，明人物。成化十一年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 248135）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PAmeIidaAD8I1r3t3l2gk1
          claim_id: c_fXnbnLTUpfB9EMyPAM56jH
          source_id: s_VS5tkh63hW8TaL3xySBEvz
          stance: supports
          locator: CBDB:248135
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VS5tkh63hW8TaL3xySBEvz
            source_type: api_record
            title: 中国历代人物传记资料库：王仰觀（CBDB 248135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248135&o=json
            external_identifier: CBDB:248135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ftTa5RCJEN91cwp6UJE4u
        subject_person_id: p_r9qyhdN8LJVyrTK8Knmhs3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仰觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aHvfn57Yb1nPkBzDF8zVTP
          claim_id: c_3ftTa5RCJEN91cwp6UJE4u
          source_id: s_VS5tkh63hW8TaL3xySBEvz
          stance: supports
          locator: CBDB:248135
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4MXpOKELZoj56eH-Iaoh5c
        subject_person_id: p_hkkZy7J5ztQnL3t6fCHvcP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r9qyhdN8LJVyrTK8Knmhs3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OzbsFkBnTXcnF9DGBJfC0E
          claim_id: c_4MXpOKELZoj56eH-Iaoh5c
          source_id: s_0ev_AS6BcGACymK_uBRMT2
          stance: supports
          locator: CBDB：兄弟 王嶽（199663）之父／母 王崇志
          quotation: null
          interpretation_note: 由兄弟关系推断：王仰觀 与 王嶽 为同胞（CBDB 记「弟」），王嶽 之父／母即 王仰觀 之父／母。
          source:
            id: s_0ev_AS6BcGACymK_uBRMT2
            source_type: api_record
            title: 中国历代人物传记资料库：王仰觀（CBDB 248135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248135&o=json
            external_identifier: CBDB:248135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkkZy7J5ztQnL3t6fCHvcP
        status: active
        display_name: 王崇志
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T7tFaYVSnf2rTKP4nV56ob
        subject_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r9qyhdN8LJVyrTK8Knmhs3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uhIxa2ocwjoU6OLl8Xr55g
          claim_id: c_T7tFaYVSnf2rTKP4nV56ob
          source_id: s_0ev_AS6BcGACymK_uBRMT2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199663 王嶽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0ev_AS6BcGACymK_uBRMT2
            source_type: api_record
            title: 中国历代人物传记资料库：王仰觀（CBDB 248135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248135&o=json
            external_identifier: CBDB:248135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cQq1LyruU9xa7MkCKy9rQ3
        status: active
        display_name: 王嶽
        merged_into_person_id: null
---

# 王仰觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仰觀，明人物。成化十一年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 248135） | accepted |
| name.primary | 王仰觀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hkkZy7J5ztQnL3t6fCHvcP | 王崇志 | accepted |
| other | p_cQq1LyruU9xa7MkCKy9rQ3 | 王嶽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仰觀（CBDB 248135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248135&o=json)
