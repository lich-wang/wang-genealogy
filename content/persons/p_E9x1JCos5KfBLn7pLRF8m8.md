---
schema: wang-person/v1
id: p_E9x1JCos5KfBLn7pLRF8m8
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 143476
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M0w4z8xylNEYJA4icEcNOF
        subject_person_id: p_E9x1JCos5KfBLn7pLRF8m8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-6ELfxWlJ2E6Alw8KxTKzr
          claim_id: c_M0w4z8xylNEYJA4icEcNOF
          source_id: s_0Er3DGUubrf_m1ArgSqQyo
          stance: supports
          locator: CBDB:143476
          quotation: null
          interpretation_note: CBDB 明确记录的王怡政配偶
          source: &a1
            id: s_0Er3DGUubrf_m1ArgSqQyo
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王怡政妻)（CBDB 143476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143476&o=json
            external_identifier: CBDB:143476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ocewvlruTvMCglx4_uS1AE
        subject_person_id: p_A14LP6YVSXyCHjhPT46BAe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_E9x1JCos5KfBLn7pLRF8m8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VrK7t7F2looGPhHeJwsrWG
          claim_id: c_ocewvlruTvMCglx4_uS1AE
          source_id: s_0Er3DGUubrf_m1ArgSqQyo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A14LP6YVSXyCHjhPT46BAe
        status: active
        display_name: 王怡政
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_A14LP6YVSXyCHjhPT46BAe | 王怡政 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王怡政妻)（CBDB 143476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143476&o=json)
