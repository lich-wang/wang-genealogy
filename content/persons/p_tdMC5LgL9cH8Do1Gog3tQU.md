---
schema: wang-person/v1
id: p_tdMC5LgL9cH8Do1Gog3tQU
status: active
merged_into: null
display_name: 秦羅敷
revision: 1
cbdb_id: 135148
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fkmqcEvSFVuK6M_w01TKlX
        subject_person_id: p_tdMC5LgL9cH8Do1Gog3tQU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 秦羅敷，史料所见人物。本项目依据《中国历代人物传记资料库：秦羅敷（CBDB 135148）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYd-4GLbSOuqI-zEb4JE3C
          claim_id: c_fkmqcEvSFVuK6M_w01TKlX
          source_id: s_69srmcBJkRWYXIiCvCYjQ0
          stance: supports
          locator: CBDB:135148
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_69srmcBJkRWYXIiCvCYjQ0
            source_type: api_record
            title: 中国历代人物传记资料库：秦羅敷（CBDB 135148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135148&o=json
            external_identifier: CBDB:135148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NOI-IaJzGixXFQqCBfC5m_
        subject_person_id: p_tdMC5LgL9cH8Do1Gog3tQU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 秦羅敷
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UKj_viHY3tfLni97aPP-6b
          claim_id: c_NOI-IaJzGixXFQqCBfC5m_
          source_id: s_69srmcBJkRWYXIiCvCYjQ0
          stance: supports
          locator: CBDB:135148
          quotation: null
          interpretation_note: CBDB 明确记录的王仁配偶
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
        id: c_0zlQHgnx4dF5Y3eYix_E-N
        subject_person_id: p_4TJBqmFJGA21cbCLKdP51V
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tdMC5LgL9cH8Do1Gog3tQU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vjs7XXvH6_K0KxMBRCXEKv
          claim_id: c_0zlQHgnx4dF5Y3eYix_E-N
          source_id: s_69srmcBJkRWYXIiCvCYjQ0
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1991：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4TJBqmFJGA21cbCLKdP51V
        status: active
        display_name: 王仁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 秦羅敷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 秦羅敷，史料所见人物。本项目依据《中国历代人物传记资料库：秦羅敷（CBDB 135148）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 秦羅敷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4TJBqmFJGA21cbCLKdP51V | 王仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：秦羅敷（CBDB 135148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135148&o=json)
