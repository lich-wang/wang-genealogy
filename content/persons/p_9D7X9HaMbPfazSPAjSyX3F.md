---
schema: wang-person/v1
id: p_9D7X9HaMbPfazSPAjSyX3F
status: active
merged_into: null
display_name: 曹貞秀
revision: 1
cbdb_id: 54756
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TCy-Y2Rw1R0XGuUW23DRTY
        subject_person_id: p_9D7X9HaMbPfazSPAjSyX3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹貞秀（1762—1822），清人物。籍贯休寧。（中国历代人物传记资料库 CBDB 54756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RcEHqX8n5jpw4I9Aw8ents
          claim_id: c_TCy-Y2Rw1R0XGuUW23DRTY
          source_id: s_0ONmJlQ2Ke6qQ1-rY0dHRQ
          stance: supports
          locator: CBDB:54756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_0ONmJlQ2Ke6qQ1-rY0dHRQ
            source_type: api_record
            title: 中国历代人物传记资料库：曹貞秀（CBDB 54756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54756&o=json
            external_identifier: CBDB:54756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7NgcbnmxHfLfBB1OPq8kAl
        subject_person_id: p_9D7X9HaMbPfazSPAjSyX3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹貞秀
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dkh55XK9InYq-6UkcwmlHm
          claim_id: c_7NgcbnmxHfLfBB1OPq8kAl
          source_id: s_0ONmJlQ2Ke6qQ1-rY0dHRQ
          stance: supports
          locator: CBDB:54756
          quotation: null
          interpretation_note: CBDB 明确记录的王芑孫配偶
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
        id: c_c64HdXx2Keqo_P1RIw2IHQ
        subject_person_id: p_w6bavUenYEmE24oN1vUZUD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9D7X9HaMbPfazSPAjSyX3F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NE1V_4vwaPR28Zf7Zx7vRZ
          claim_id: c_c64HdXx2Keqo_P1RIw2IHQ
          source_id: s_0ONmJlQ2Ke6qQ1-rY0dHRQ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4634：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w6bavUenYEmE24oN1vUZUD
        status: active
        display_name: 王芑孫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹貞秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曹貞秀（1762—1822），清人物。籍贯休寧。（中国历代人物传记资料库 CBDB 54756） | accepted |
| name.primary | 曹貞秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_w6bavUenYEmE24oN1vUZUD | 王芑孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹貞秀（CBDB 54756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54756&o=json)
