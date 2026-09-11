---
schema: wang-person/v1
id: p_eVgnixxUsvw75T791tRRgi
status: active
merged_into: null
display_name: 王成翼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6iNd15V8qwHrkhhyr1LWSu
        subject_person_id: p_eVgnixxUsvw75T791tRRgi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EKvDCzJBY4SLJh5L1Nt52s
          claim_id: c_6iNd15V8qwHrkhhyr1LWSu
          source_id: s_j6h7rKZ5ZyGF1eMw4oTnzG
          stance: supports
          locator: CBDB:691550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691550）
          source: &a1
            id: s_j6h7rKZ5ZyGF1eMw4oTnzG
            source_type: api_record
            title: 中国历代人物传记资料库：王成翼（CBDB 691550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691550&o=json
            external_identifier: CBDB:691550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_28xYqm9ek21eQMxU2ne2VU
        subject_person_id: p_eVgnixxUsvw75T791tRRgi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3fbfcsrvPzK8wgyZnbfLc
          claim_id: c_28xYqm9ek21eQMxU2ne2VU
          source_id: s_j6h7rKZ5ZyGF1eMw4oTnzG
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
        id: c_8SF7_DRHBuFhlFgma51eCw
        subject_person_id: p_5cXgvbeFMDihkMnt3zvFS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eVgnixxUsvw75T791tRRgi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b2ib-99ZlVcS1rcfNd20RJ
          claim_id: c_8SF7_DRHBuFhlFgma51eCw
          source_id: s_j6h7rKZ5ZyGF1eMw4oTnzG
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，一一九 王德倫墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5cXgvbeFMDihkMnt3zvFS6
        status: active
        display_name: 王德倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成翼 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5cXgvbeFMDihkMnt3zvFS6 | 王德倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成翼（CBDB 691550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691550&o=json)
