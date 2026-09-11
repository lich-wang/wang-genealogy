---
schema: wang-person/v1
id: p_F3pNzMENWG4uYW3AxH8QLo
status: active
merged_into: null
display_name: 王崿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2KCBhVx4W7anAdSShFkLLD
        subject_person_id: p_F3pNzMENWG4uYW3AxH8QLo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2tZDKvi5dGS3GCFP6a9zDn
          claim_id: c_2KCBhVx4W7anAdSShFkLLD
          source_id: s_M491TP7WiN4b2jUR9jDzc3
          stance: supports
          locator: CBDB:562690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562690）
          source: &a1
            id: s_M491TP7WiN4b2jUR9jDzc3
            source_type: api_record
            title: 中国历代人物传记资料库：王崿（CBDB 562690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562690&o=json
            external_identifier: CBDB:562690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wqyUYX9rtVrxD3pHCWHsuG
        subject_person_id: p_F3pNzMENWG4uYW3AxH8QLo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崿，明人物。籍贯山陰，身份为畫家。（中国历代人物传记资料库 CBDB 562690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y5Yq51O5nNQ5yt_pRDmQDv
          claim_id: c_wqyUYX9rtVrxD3pHCWHsuG
          source_id: s_M491TP7WiN4b2jUR9jDzc3
          stance: supports
          locator: CBDB:562690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mF33cMf_cnnfghpko83gSJ
        subject_person_id: p_fZbxFn7bwWhxetr3LG6dJj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F3pNzMENWG4uYW3AxH8QLo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8i1Fc2HNFXbiub8UnRjA7g
          claim_id: c_mF33cMf_cnnfghpko83gSJ
          source_id: s_M491TP7WiN4b2jUR9jDzc3
          stance: supports
          locator: 紹興府志:八十卷，lgid=316652：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fZbxFn7bwWhxetr3LG6dJj
        status: active
        display_name: 王雨謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崿 | accepted |
| bio.summary | 王崿，明人物。籍贯山陰，身份为畫家。（中国历代人物传记资料库 CBDB 562690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fZbxFn7bwWhxetr3LG6dJj | 王雨謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崿（CBDB 562690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562690&o=json)
