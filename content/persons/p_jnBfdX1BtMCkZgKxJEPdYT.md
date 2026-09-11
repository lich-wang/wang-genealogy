---
schema: wang-person/v1
id: p_jnBfdX1BtMCkZgKxJEPdYT
status: active
merged_into: null
display_name: 王佑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5KTbyEQe3S5K1tWMgaA7TD
        subject_person_id: p_jnBfdX1BtMCkZgKxJEPdYT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCQSUHxCPSHUrN9n8z33px
          claim_id: c_5KTbyEQe3S5K1tWMgaA7TD
          source_id: s_n6D3NEiWqg6PCpKgEq4es2
          stance: supports
          locator: CBDB:336679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336679）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fGxWvFyFt1pQ71LFcZM8dp
        subject_person_id: p_jnBfdX1BtMCkZgKxJEPdYT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。隆慶二年進士，曾任知府。（中国历代人物传记资料库 CBDB 336679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cJz694wL7hos4XYPNVPACo
          claim_id: c_fGxWvFyFt1pQ71LFcZM8dp
          source_id: s_n6D3NEiWqg6PCpKgEq4es2
          stance: supports
          locator: CBDB:336679
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
  descendants:
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
          source: *a1
      object_person:
        id: p_WfLtQwVEGpoYGNPH8XRY6N
        status: active
        display_name: 王藻
        merged_into_person_id: null
  other: []
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。隆慶二年進士，曾任知府。（中国历代人物传记资料库 CBDB 336679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WfLtQwVEGpoYGNPH8XRY6N | 王藻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 336679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336679&o=json)
