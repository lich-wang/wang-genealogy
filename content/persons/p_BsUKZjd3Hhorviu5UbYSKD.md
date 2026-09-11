---
schema: wang-person/v1
id: p_BsUKZjd3Hhorviu5UbYSKD
status: active
merged_into: null
display_name: 王琰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GZuwgCwDMfwgVHkLF1pJPZ
        subject_person_id: p_BsUKZjd3Hhorviu5UbYSKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTQD3GemJVh29owpvNqdXH
          claim_id: c_GZuwgCwDMfwgVHkLF1pJPZ
          source_id: s_JMTL4D59ebemMdHFK7o5Qv
          stance: supports
          locator: CBDB:268136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268136）
          source: &a1
            id: s_JMTL4D59ebemMdHFK7o5Qv
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 268136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268136&o=json
            external_identifier: CBDB:268136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9YViWfNMH4pBUsHDFYsqBK
        subject_person_id: p_BsUKZjd3Hhorviu5UbYSKD
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
        - id: cs_Pye7tP6oe8m6gSBfJLcPtg
          claim_id: c_9YViWfNMH4pBUsHDFYsqBK
          source_id: s_JMTL4D59ebemMdHFK7o5Qv
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
  descendants:
    - claim:
        id: c_DlPzevs-Xkt-T54Z-s4l1d
        subject_person_id: p_BsUKZjd3Hhorviu5UbYSKD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RT6d5cQE2zEn1ueSTuJWcR
          claim_id: c_DlPzevs-Xkt-T54Z-s4l1d
          source_id: s_JMTL4D59ebemMdHFK7o5Qv
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BDk6YNhR5VP5UAnHiZAmaN
        status: active
        display_name: 王九思
        merged_into_person_id: null
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BDk6YNhR5VP5UAnHiZAmaN | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琰（CBDB 268136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268136&o=json)
