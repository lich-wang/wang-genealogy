---
schema: wang-person/v1
id: p_dLxnrx2EJoX5qeZ6Qa78ZU
status: active
merged_into: null
display_name: 王應鳳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FnsAYChB5fEYymF5jgZAZw
        subject_person_id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XMKSZLPB7PvGWWdtQCe66K
          claim_id: c_FnsAYChB5fEYymF5jgZAZw
          source_id: s_tgQaYyBVLUeaz2cLVjcGjv
          stance: supports
          locator: CBDB:19881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19881）
          source: &a1
            id: s_tgQaYyBVLUeaz2cLVjcGjv
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 19881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19881&o=json
            external_identifier: CBDB:19881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vfVNbvX2ZacQDm1VXkzy7s
        subject_person_id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1229年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eKEgbQ1bTSfCYepB3378aZ
          claim_id: c_vfVNbvX2ZacQDm1VXkzy7s
          source_id: s_tgQaYyBVLUeaz2cLVjcGjv
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
        id: c_yQPQrs3hn4EMJSYpFXjar2
        subject_person_id: p_dLxnrx2EJoX5qeZ6Qa78ZU
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
        - id: cs_CGxyuEFJjmVKUAJW3tMR9k
          claim_id: c_yQPQrs3hn4EMJSYpFXjar2
          source_id: s_tgQaYyBVLUeaz2cLVjcGjv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S8n81wLCAc80e6p7un2vf9
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_90b68fSDbwvk2NEiAKJcEt
          claim_id: c_S8n81wLCAc80e6p7un2vf9
          source_id: s_tgQaYyBVLUeaz2cLVjcGjv
          stance: supports
          locator: CBDB 双向互证（父 王撝 ⇄ 子 王應鳳）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UKZ9JENMUQXopMywb8jsK4
        status: active
        display_name: 王撝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jx05a5exEYnU4c2axRuWA0
        subject_person_id: p_uj85L9awApVoYrRPajReL6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9hWvNK9LHcUG1Fxbd78U91
          claim_id: c_jx05a5exEYnU4c2axRuWA0
          source_id: s_tgQaYyBVLUeaz2cLVjcGjv
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uj85L9awApVoYrRPajReL6
        status: active
        display_name: 王安道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鳳 | accepted |
| birth.date | 1229年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKZ9JENMUQXopMywb8jsK4 | 王撝 | accepted |
| ancestors | p_uj85L9awApVoYrRPajReL6 | 王安道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應鳳（CBDB 19881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19881&o=json)
