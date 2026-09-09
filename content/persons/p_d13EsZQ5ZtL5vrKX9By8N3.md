---
schema: wang-person/v1
id: p_d13EsZQ5ZtL5vrKX9By8N3
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BHZ2Fhz5otM76FXpHzzN89
        subject_person_id: p_d13EsZQ5ZtL5vrKX9By8N3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b9ztJCLJ83jxyPZEam41YW
          claim_id: c_BHZ2Fhz5otM76FXpHzzN89
          source_id: s_G9H3iLjDUh9Wg3LBE2AyDS
          stance: supports
          locator: CBDB:39420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39420）
          source: &a1
            id: s_G9H3iLjDUh9Wg3LBE2AyDS
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 39420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39420&o=json
            external_identifier: CBDB:39420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V6eo8F3jBJ5R8Hs76M8Gux
        subject_person_id: p_d13EsZQ5ZtL5vrKX9By8N3
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
        - id: cs_Lv3yxg1ssM2xU4CZMnUNGK
          claim_id: c_V6eo8F3jBJ5R8Hs76M8Gux
          source_id: s_G9H3iLjDUh9Wg3LBE2AyDS
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

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 39420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39420&o=json)
