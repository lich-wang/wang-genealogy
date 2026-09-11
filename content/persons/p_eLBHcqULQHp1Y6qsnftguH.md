---
schema: wang-person/v1
id: p_eLBHcqULQHp1Y6qsnftguH
status: active
merged_into: null
display_name: 張慶雲
revision: 1
cbdb_id: 569528
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FenpIos0pFU8TNn68xmW9O
        subject_person_id: p_eLBHcqULQHp1Y6qsnftguH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張慶雲
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SnmJxjI-W0wJy36lcjz4rr
          claim_id: c_FenpIos0pFU8TNn68xmW9O
          source_id: s_G-ByLZHhtLMYC79lurImcq
          stance: supports
          locator: CBDB:569528
          quotation: null
          interpretation_note: CBDB 明确记录的王定執配偶
          source: &a1
            id: s_G-ByLZHhtLMYC79lurImcq
            source_type: api_record
            title: 中国历代人物传记资料库：張慶雲（CBDB 569528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=569528&o=json
            external_identifier: CBDB:569528
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
        id: c_7yHCB9XMPLgTLqLt0Y8SuN
        subject_person_id: p_hqm8QJPDYRRDX7Me858AJ1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eLBHcqULQHp1Y6qsnftguH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pxEIj8qljooUI43flkTACG
          claim_id: c_7yHCB9XMPLgTLqLt0Y8SuN
          source_id: s_G-ByLZHhtLMYC79lurImcq
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1164292：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hqm8QJPDYRRDX7Me858AJ1
        status: active
        display_name: 王定執
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張慶雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張慶雲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hqm8QJPDYRRDX7Me858AJ1 | 王定執 | accepted |

## 外部来源

- [中国历代人物传记资料库：張慶雲（CBDB 569528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=569528&o=json)
