---
schema: wang-person/v1
id: p_BGZ3Xya3EBe2Q1KNp6DVk3
status: active
merged_into: null
display_name: 王紹鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X94gfQT9P89Gk2P4ms8oRg
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MK4AYxjGS4uWRXQuR1M6C4
          claim_id: c_X94gfQT9P89Gk2P4ms8oRg
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: CBDB:159540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159540）
          source: &a1
            id: s_8Qx7mCtqguJx1LnrSReN3k
            source_type: api_record
            title: 中国历代人物传记资料库：王紹鼎（CBDB 159540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json
            external_identifier: CBDB:159540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n55Yu8x8MXf9X2A2NNC533
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pkUfoJ8dJrCsg1dArAH6b1
          claim_id: c_n55Yu8x8MXf9X2A2NNC533
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
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
        id: c_TcKJpWDjtIG7D3tNq8Nf0U
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AssiYwg2SB0u2COEJqYrH_
          claim_id: c_TcKJpWDjtIG7D3tNq8Nf0U
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 96：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zQ4D2DUAqvMbXPkja89cdD
        status: active
        display_name: 王元逵
        merged_into_person_id: null
  children:
    - claim:
        id: c_nGCzA0_SDF32S_IZrgS89-
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kk5sE8tUMGDNiS98Q9q7LN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-JDhhhNATYqxbRO5KcAlKL
          claim_id: c_nGCzA0_SDF32S_IZrgS89-
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kk5sE8tUMGDNiS98Q9q7LN
        status: active
        display_name: 王景崇
        merged_into_person_id: null
    - claim:
        id: c_bjaFe8QwqWLyBS_fpnhjf9
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rbkQ1KZNcDg636Lb8j13dR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZPeS7lQPa3BIA8LJhmNc3
          claim_id: c_bjaFe8QwqWLyBS_fpnhjf9
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rbkQ1KZNcDg636Lb8j13dR
        status: active
        display_name: 王景胤
        merged_into_person_id: null
    - claim:
        id: c_JAFYYyVhU1KhZFANqiyD7-
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k7ggMKnSkKm3WWUbpUxare
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mUHSdrLhLCht06FHNJ6nQF
          claim_id: c_JAFYYyVhU1KhZFANqiyD7-
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k7ggMKnSkKm3WWUbpUxare
        status: active
        display_name: 王景萼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹鼎 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zQ4D2DUAqvMbXPkja89cdD | 王元逵 | accepted |
| children | p_kk5sE8tUMGDNiS98Q9q7LN | 王景崇 | accepted |
| children | p_rbkQ1KZNcDg636Lb8j13dR | 王景胤 | accepted |
| children | p_k7ggMKnSkKm3WWUbpUxare | 王景萼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹鼎（CBDB 159540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json)
