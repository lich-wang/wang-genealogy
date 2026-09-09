---
schema: wang-person/v1
id: p_42V1mjqbCc9WXuvE75bXCj
status: active
merged_into: null
display_name: 王朝陽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oQXzyDxftFFdLnuGNmYj97
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RfunTUKXPtGDHS4wE8sQ8p
          claim_id: c_oQXzyDxftFFdLnuGNmYj97
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: CBDB:205436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205436）
          source: &a1
            id: s_U8j9tCza38qAfY1F6tms8G
            source_type: api_record
            title: 中国历代人物传记资料库：王朝陽（CBDB 205436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205436&o=json
            external_identifier: CBDB:205436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8hXCUGHPWeqzmtg5dvP1wk
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SAgNZi5xuFeBEX4m1B45LA
          claim_id: c_8hXCUGHPWeqzmtg5dvP1wk
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vLFLaYzEgMwWuHUcouGQZu
        subject_person_id: p_42V1mjqbCc9WXuvE75bXCj
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
        - id: cs_MgxpP73Hkq9sgUYG835ZNA
          claim_id: c_vLFLaYzEgMwWuHUcouGQZu
          source_id: s_U8j9tCza38qAfY1F6tms8G
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝陽 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝陽（CBDB 205436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205436&o=json)
