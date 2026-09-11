---
schema: wang-person/v1
id: p_3r8GFSLCXB5rYpq5QpkHni
status: active
merged_into: null
display_name: 沈氏
revision: 1
cbdb_id: 333150
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ugfreHU6NIJrmUpM5jFbx8
        subject_person_id: p_3r8GFSLCXB5rYpq5QpkHni
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 333150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dm9Hq3gBRtvygcbnfF-teh
          claim_id: c_ugfreHU6NIJrmUpM5jFbx8
          source_id: s_om_rdrkBpJUIYw2GaEcrjI
          stance: supports
          locator: CBDB:333150
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_om_rdrkBpJUIYw2GaEcrjI
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王朝陽妻)（CBDB 333150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333150&o=json
            external_identifier: CBDB:333150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TA2ArEuo5Do8ZcLs2EvktR
        subject_person_id: p_3r8GFSLCXB5rYpq5QpkHni
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DU2MEPCHXX9rsd9XPvZu0-
          claim_id: c_TA2ArEuo5Do8ZcLs2EvktR
          source_id: s_om_rdrkBpJUIYw2GaEcrjI
          stance: supports
          locator: CBDB:333150
          quotation: null
          interpretation_note: CBDB 明确记录的王朝陽配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Q4LusTkjKcT0fjWO-cSCUI
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3r8GFSLCXB5rYpq5QpkHni
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wpeu887-MrcviR3N0ggRNk
          claim_id: c_Q4LusTkjKcT0fjWO-cSCUI
          source_id: s_om_rdrkBpJUIYw2GaEcrjI
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_42V1mjqbCc9WXuvE75bXCj
        status: active
        display_name: 王朝陽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 沈氏，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 333150） | accepted |
| name.primary | 沈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_42V1mjqbCc9WXuvE75bXCj | 王朝陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王朝陽妻)（CBDB 333150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333150&o=json)
