---
schema: wang-person/v1
id: p_R5xXVMm2VFc9ZSK17QQRYB
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ciPc9hSy1TubVKSZ6tD1Q
        subject_person_id: p_R5xXVMm2VFc9ZSK17QQRYB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_prghywszCu5fE4yPCqrcBF
          claim_id: c_5ciPc9hSy1TubVKSZ6tD1Q
          source_id: s_Y8gKpATUSjQBqMg7YCor6a
          stance: supports
          locator: CBDB:333037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333037）
          source: &a1
            id: s_Y8gKpATUSjQBqMg7YCor6a
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 333037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333037&o=json
            external_identifier: CBDB:333037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8RFcWU9UjcFt7i4zfxGWRF
        subject_person_id: p_R5xXVMm2VFc9ZSK17QQRYB
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
        - id: cs_pESDRL5nadHZSYP3DF4JJn
          claim_id: c_8RFcWU9UjcFt7i4zfxGWRF
          source_id: s_Y8gKpATUSjQBqMg7YCor6a
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
        id: c_kR6NRxYkMcKF7JV_lnPoK9
        subject_person_id: p_R5xXVMm2VFc9ZSK17QQRYB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HRB6JYhQLj6r8mmLxbphsR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EqCpAuqYCB-gpdg9dLpnCR
          claim_id: c_kR6NRxYkMcKF7JV_lnPoK9
          source_id: s_Y8gKpATUSjQBqMg7YCor6a
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HRB6JYhQLj6r8mmLxbphsR
        status: active
        display_name: 王用章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HRB6JYhQLj6r8mmLxbphsR | 王用章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 333037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333037&o=json)
