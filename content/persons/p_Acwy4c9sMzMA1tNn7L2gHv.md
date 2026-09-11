---
schema: wang-person/v1
id: p_Acwy4c9sMzMA1tNn7L2gHv
status: active
merged_into: null
display_name: 王業泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vnAj7Bt1CTLxGeejKL6EJm
        subject_person_id: p_Acwy4c9sMzMA1tNn7L2gHv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FRD7bHKrvQq8PCSKuyNXGf
          claim_id: c_vnAj7Bt1CTLxGeejKL6EJm
          source_id: s_av1SdCRBNnMztJE72pTbb9
          stance: supports
          locator: CBDB:561379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561379）
          source: &a1
            id: s_av1SdCRBNnMztJE72pTbb9
            source_type: api_record
            title: 中国历代人物传记资料库：王業泰（CBDB 561379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561379&o=json
            external_identifier: CBDB:561379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5HDdeHRcLkBV96caT9NmvX
        subject_person_id: p_Acwy4c9sMzMA1tNn7L2gHv
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
        - id: cs_iKSkfQTvEbgV6bkCprpBLM
          claim_id: c_5HDdeHRcLkBV96caT9NmvX
          source_id: s_av1SdCRBNnMztJE72pTbb9
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
        id: c_Mlge-fAJhsO9FJ4-7C536p
        subject_person_id: p_XM6mAGcrGG9zdfhaW7wsMr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Acwy4c9sMzMA1tNn7L2gHv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBE9b4-pp9M7NuFKNteTai
          claim_id: c_Mlge-fAJhsO9FJ4-7C536p
          source_id: s_av1SdCRBNnMztJE72pTbb9
          stance: supports
          locator: 紹興府志:八十卷，Igid=316394：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XM6mAGcrGG9zdfhaW7wsMr
        status: active
        display_name: 王先通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王業泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業泰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XM6mAGcrGG9zdfhaW7wsMr | 王先通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王業泰（CBDB 561379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561379&o=json)
