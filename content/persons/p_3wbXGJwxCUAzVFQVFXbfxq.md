---
schema: wang-person/v1
id: p_3wbXGJwxCUAzVFQVFXbfxq
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 444799
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwdZ_Yhlw8N1kKKuA6K8JN
        subject_person_id: p_3wbXGJwxCUAzVFQVFXbfxq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7D7Qh_7v3xTo29XU8f733U
          claim_id: c_EwdZ_Yhlw8N1kKKuA6K8JN
          source_id: s_sWm7S4qovYh6icJhPNtbYQ
          stance: supports
          locator: CBDB:444799
          quotation: null
          interpretation_note: CBDB 明确记录的王紹卿配偶
          source: &a1
            id: s_sWm7S4qovYh6icJhPNtbYQ
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王紹卿妻)（CBDB 444799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444799&o=json
            external_identifier: CBDB:444799
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
        id: c_YAt-1SIBqve-LEWCZp2ETh
        subject_person_id: p_PLBcDaR5MFCHa1Jo4jwpML
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3wbXGJwxCUAzVFQVFXbfxq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N8D4F97MHwyh6mV5wpQKzW
          claim_id: c_YAt-1SIBqve-LEWCZp2ETh
          source_id: s_sWm7S4qovYh6icJhPNtbYQ
          stance: supports
          locator: 舊唐書，2199：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PLBcDaR5MFCHa1Jo4jwpML
        status: active
        display_name: 王紹卿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PLBcDaR5MFCHa1Jo4jwpML | 王紹卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王紹卿妻)（CBDB 444799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444799&o=json)
