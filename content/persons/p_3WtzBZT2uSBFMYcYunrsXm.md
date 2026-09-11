---
schema: wang-person/v1
id: p_3WtzBZT2uSBFMYcYunrsXm
status: active
merged_into: null
display_name: 王澤溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8tE2W3dvHgASPeKnLuZH8e
        subject_person_id: p_3WtzBZT2uSBFMYcYunrsXm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxV6CR8yZzKjUet1V8AJoL
          claim_id: c_8tE2W3dvHgASPeKnLuZH8e
          source_id: s_cE8JQ5PS4nXPs52zF53Ryg
          stance: supports
          locator: CBDB:575362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575362）
          source: &a1
            id: s_cE8JQ5PS4nXPs52zF53Ryg
            source_type: api_record
            title: 中国历代人物传记资料库：王澤溥（CBDB 575362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575362&o=json
            external_identifier: CBDB:575362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NNAXaLXj1KqVqLRhMc2R91
        subject_person_id: p_3WtzBZT2uSBFMYcYunrsXm
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
        - id: cs_eA99B6GrLuBQMF62n7GFrw
          claim_id: c_NNAXaLXj1KqVqLRhMc2R91
          source_id: s_cE8JQ5PS4nXPs52zF53Ryg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wXAc7vovFGShCOp_-OZ32n
        subject_person_id: p_3WtzBZT2uSBFMYcYunrsXm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kv7FMHEC1WtEJafT3xgqLJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pI1NmfeXGPQ59Xh_cNSS6e
          claim_id: c_wXAc7vovFGShCOp_-OZ32n
          source_id: s_cE8JQ5PS4nXPs52zF53Ryg
          stance: supports
          locator: 雲和縣志，lgid=369323：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kv7FMHEC1WtEJafT3xgqLJ
        status: active
        display_name: 王杏林
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澤溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤溥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Kv7FMHEC1WtEJafT3xgqLJ | 王杏林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤溥（CBDB 575362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575362&o=json)
