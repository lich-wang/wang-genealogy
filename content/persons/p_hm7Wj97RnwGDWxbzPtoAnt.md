---
schema: wang-person/v1
id: p_hm7Wj97RnwGDWxbzPtoAnt
status: active
merged_into: null
display_name: 王浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n6pxToek9JhwJQjCieaDT7
        subject_person_id: p_hm7Wj97RnwGDWxbzPtoAnt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zh63JtQNqpiTcsuvPaKpWk
          claim_id: c_n6pxToek9JhwJQjCieaDT7
          source_id: s_8iGQvjzV3xMFZ3D3eaQNCG
          stance: supports
          locator: CBDB:291578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291578）
          source: &a1
            id: s_8iGQvjzV3xMFZ3D3eaQNCG
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 291578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291578&o=json
            external_identifier: CBDB:291578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qNSVkYpg5NknVtw5cvNjfr
        subject_person_id: p_hm7Wj97RnwGDWxbzPtoAnt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩，明人物。嘉靖十一年進士，籍贯交河。（中国历代人物传记资料库 CBDB 291578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bK6mc7qqvMrLTl5emw3Lig
          claim_id: c_qNSVkYpg5NknVtw5cvNjfr
          source_id: s_8iGQvjzV3xMFZ3D3eaQNCG
          stance: supports
          locator: CBDB:291578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dfVf7viL747mSP0_jx_52-
        subject_person_id: p_hm7Wj97RnwGDWxbzPtoAnt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_znAcPph3Ny2FkUGcQdE5go
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_epFUuGz7PqicpPvWMofJkn
          claim_id: c_dfVf7viL747mSP0_jx_52-
          source_id: s_8iGQvjzV3xMFZ3D3eaQNCG
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_znAcPph3Ny2FkUGcQdE5go
        status: active
        display_name: 王珩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | 王浩，明人物。嘉靖十一年進士，籍贯交河。（中国历代人物传记资料库 CBDB 291578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_znAcPph3Ny2FkUGcQdE5go | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 291578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291578&o=json)
