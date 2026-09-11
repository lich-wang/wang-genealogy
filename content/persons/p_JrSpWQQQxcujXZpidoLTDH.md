---
schema: wang-person/v1
id: p_JrSpWQQQxcujXZpidoLTDH
status: active
merged_into: null
display_name: 王基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rH7mJd8FSEMwtYor45G7Dz
        subject_person_id: p_JrSpWQQQxcujXZpidoLTDH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bg8NLNGBCMiybUzEVsxSEB
          claim_id: c_rH7mJd8FSEMwtYor45G7Dz
          source_id: s_mD9iDogpDAwpMmUBH5y9R5
          stance: supports
          locator: CBDB:140292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140292）
          source: &a1
            id: s_mD9iDogpDAwpMmUBH5y9R5
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 140292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140292&o=json
            external_identifier: CBDB:140292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Byu5pAc7rd16b7Tv7Jzg1P
        subject_person_id: p_JrSpWQQQxcujXZpidoLTDH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZmhWnwFws5rRfxPZ2H8CU
          claim_id: c_Byu5pAc7rd16b7Tv7Jzg1P
          source_id: s_mD9iDogpDAwpMmUBH5y9R5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5q4Cpe6K9fJY16eyGFkvU9
        subject_person_id: p_JrSpWQQQxcujXZpidoLTDH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 715年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7B6trHEb6Zr63ZMA3rHHt
          claim_id: c_5q4Cpe6K9fJY16eyGFkvU9
          source_id: s_mD9iDogpDAwpMmUBH5y9R5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VhNMfPwmuLX91nDbPwCoKU
        subject_person_id: p_JrSpWQQQxcujXZpidoLTDH
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
        - id: cs_2LLQLfyBH6f79rvss8A1QF
          claim_id: c_VhNMfPwmuLX91nDbPwCoKU
          source_id: s_mD9iDogpDAwpMmUBH5y9R5
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
        id: c_6beGpNj0XWoC_o2pcxJQYn
        subject_person_id: p_mQHZyek2KDR5CECX2thLXN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JrSpWQQQxcujXZpidoLTDH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mf_b6k_u6SjAPaZsrTWCgr
          claim_id: c_6beGpNj0XWoC_o2pcxJQYn
          source_id: s_mD9iDogpDAwpMmUBH5y9R5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 17：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mQHZyek2KDR5CECX2thLXN
        status: active
        display_name: 王素
        merged_into_person_id: null
  children:
    - claim:
        id: c_hDOF9Zpb3NKlr-8oYbZEJN
        subject_person_id: p_JrSpWQQQxcujXZpidoLTDH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJXpg2Cqd8cXcAMnETdmVF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bpcm8aeqrNqM4UQ5aS-Ifp
          claim_id: c_hDOF9Zpb3NKlr-8oYbZEJN
          source_id: s_mD9iDogpDAwpMmUBH5y9R5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 17：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aJXpg2Cqd8cXcAMnETdmVF
        status: active
        display_name: 王知謹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王基 | accepted |
| birth.date | 655年 | accepted |
| death.date | 715年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mQHZyek2KDR5CECX2thLXN | 王素 | accepted |
| children | p_aJXpg2Cqd8cXcAMnETdmVF | 王知謹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王基（CBDB 140292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140292&o=json)
