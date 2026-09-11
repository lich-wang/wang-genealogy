---
schema: wang-person/v1
id: p_rmBiJK1BayPsKE7zeKbqbS
status: active
merged_into: null
display_name: 劉淑
revision: 1
cbdb_id: 121796
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AL6dxa8WxYbH2x0PvQrZNh
        subject_person_id: p_rmBiJK1BayPsKE7zeKbqbS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉淑
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-MzF6t1isTmvUliqyFTGJL
          claim_id: c_AL6dxa8WxYbH2x0PvQrZNh
          source_id: s_BxiMJ9sNxFIOXeQh5gi1aS
          stance: supports
          locator: CBDB:121796
          quotation: null
          interpretation_note: CBDB 明确记录的王靄配偶
          source: &a1
            id: s_BxiMJ9sNxFIOXeQh5gi1aS
            source_type: api_record
            title: 中国历代人物传记资料库：劉淑（CBDB 121796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121796&o=json
            external_identifier: CBDB:121796
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
        id: c_dTyDZI8c7Ux_MB3D6kKxot
        subject_person_id: p_RC8L1jZaWPo9Kh3C82Np24
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rmBiJK1BayPsKE7zeKbqbS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uabys4cwa-JkyU5IJXdqE-
          claim_id: c_dTyDZI8c7Ux_MB3D6kKxot
          source_id: s_BxiMJ9sNxFIOXeQh5gi1aS
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3837：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RC8L1jZaWPo9Kh3C82Np24
        status: active
        display_name: 王靄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉淑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_RC8L1jZaWPo9Kh3C82Np24 | 王靄 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉淑（CBDB 121796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121796&o=json)
