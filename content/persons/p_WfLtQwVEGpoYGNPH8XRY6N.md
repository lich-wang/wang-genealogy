---
schema: wang-person/v1
id: p_WfLtQwVEGpoYGNPH8XRY6N
status: active
merged_into: null
display_name: 王藻
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RUDDiiTYAJRheQzwspp5Gw
        subject_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZBHDRSDJLDVa5CaVJPDDx
          claim_id: c_RUDDiiTYAJRheQzwspp5Gw
          source_id: s_jAopuSXYRtXGC9vT17X6qE
          stance: supports
          locator: CBDB:205665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205665）
          source: &a1
            id: s_jAopuSXYRtXGC9vT17X6qE
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 205665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205665&o=json
            external_identifier: CBDB:205665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_umHaF9UNGEseot5SvekSFM
        subject_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1544年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4E4m7vWXpC6TyHDSsCoZA
          claim_id: c_umHaF9UNGEseot5SvekSFM
          source_id: s_jAopuSXYRtXGC9vT17X6qE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X1xGne9o4h23bfF2qAtprY
        subject_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRvjyb5CbwLb59djrV5rLc
          claim_id: c_X1xGne9o4h23bfF2qAtprY
          source_id: s_jAopuSXYRtXGC9vT17X6qE
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
        id: c_GaW5LSre0fCsSpFFmZttMN
        subject_person_id: p_VE28NqLkKGnLAhg7LWjfCA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCALNTS1sJJCaiho4Fl6Zn
          claim_id: c_GaW5LSre0fCsSpFFmZttMN
          source_id: s_ErSy6Mx2ZYMAmC9yXBH7kf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ErSy6Mx2ZYMAmC9yXBH7kf
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 336680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336680&o=json
            external_identifier: CBDB:336680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VE28NqLkKGnLAhg7LWjfCA
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_51eg37cb28iLj03PC4xlmJ
        subject_person_id: p_HfQ8vHdEkoZDLPDA9aRBns
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uPOxjw9NKRUQbsoG15TUm9
          claim_id: c_51eg37cb28iLj03PC4xlmJ
          source_id: s_7ULhViFNdQ43jnm8LmCBiS
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百一十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7ULhViFNdQ43jnm8LmCBiS
            source_type: api_record
            title: 中国历代人物传记资料库：王連（CBDB 336678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336678&o=json
            external_identifier: CBDB:336678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HfQ8vHdEkoZDLPDA9aRBns
        status: active
        display_name: 王連
        merged_into_person_id: null
    - claim:
        id: c_NV1tCK3WWjRCOBUwyNnlD4
        subject_person_id: p_jnBfdX1BtMCkZgKxJEPdYT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbM-cbCN3N1hGZta2xTQkc
          claim_id: c_NV1tCK3WWjRCOBUwyNnlD4
          source_id: s_n6D3NEiWqg6PCpKgEq4es2
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百一十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n6D3NEiWqg6PCpKgEq4es2
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 336679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336679&o=json
            external_identifier: CBDB:336679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jnBfdX1BtMCkZgKxJEPdYT
        status: active
        display_name: 王佑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| birth.date | 1544年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VE28NqLkKGnLAhg7LWjfCA | 王撫民 | accepted |
| ancestors | p_HfQ8vHdEkoZDLPDA9aRBns | 王連 | accepted |
| ancestors | p_jnBfdX1BtMCkZgKxJEPdYT | 王佑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 336680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336680&o=json)
- [中国历代人物传记资料库：王連（CBDB 336678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336678&o=json)
- [中国历代人物传记资料库：王佑（CBDB 336679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336679&o=json)
- [中国历代人物传记资料库：王藻（CBDB 205665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205665&o=json)
