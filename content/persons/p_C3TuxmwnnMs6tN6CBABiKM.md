---
schema: wang-person/v1
id: p_C3TuxmwnnMs6tN6CBABiKM
status: active
merged_into: null
display_name: 王震
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gx8EZxAXsiXxyw68VbRuHT
        subject_person_id: p_C3TuxmwnnMs6tN6CBABiKM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HuARPhvNvc7Ny5hAGHQKqV
          claim_id: c_Gx8EZxAXsiXxyw68VbRuHT
          source_id: s_b9kaKSPBSheh64hDEdY6Vh
          stance: supports
          locator: CBDB:33390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33390）
          source: &a1
            id: s_b9kaKSPBSheh64hDEdY6Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 33390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33390&o=json
            external_identifier: CBDB:33390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q1us2EZj6WoZCz6Z2oDGic
        subject_person_id: p_C3TuxmwnnMs6tN6CBABiKM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震，明人物。籍贯崑山，入仕薦舉 (保任,保舉)。（中国历代人物传记资料库 CBDB 33390）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6VoR8c74Srd7bFi49REBnQ
          claim_id: c_Q1us2EZj6WoZCz6Z2oDGic
          source_id: s_b9kaKSPBSheh64hDEdY6Vh
          stance: supports
          locator: CBDB:33390
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OWH1a3LOnmHuVTsWqQ855z
        subject_person_id: p_4TBo9y69k4Cg8ieb8L1kBY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C3TuxmwnnMs6tN6CBABiKM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fhboKYuK39FBVjXHGfrtvC
          claim_id: c_OWH1a3LOnmHuVTsWqQ855z
          source_id: s_b9kaKSPBSheh64hDEdY6Vh
          stance: supports
          locator: CBDB 双向互证（父 王祖卿 ⇄ 子 王震）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_4TBo9y69k4Cg8ieb8L1kBY
        status: active
        display_name: 王祖卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| bio.summary | 王震，明人物。籍贯崑山，入仕薦舉 (保任,保舉)。（中国历代人物传记资料库 CBDB 33390） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4TBo9y69k4Cg8ieb8L1kBY | 王祖卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 33390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33390&o=json)
