---
schema: wang-person/v1
id: p_3HBAW4cy1TpBbNBYKGPE4v
status: active
merged_into: null
display_name: 王慶詢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SL9oLncUatGa9wifyMNKNy
        subject_person_id: p_3HBAW4cy1TpBbNBYKGPE4v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8v3m7G5KsDobZAVH5bUKtv
          claim_id: c_SL9oLncUatGa9wifyMNKNy
          source_id: s_6mzG3dBzsqJLnzFW2wVALQ
          stance: supports
          locator: CBDB:33407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33407）
          source: &a1
            id: s_6mzG3dBzsqJLnzFW2wVALQ
            source_type: api_record
            title: 中国历代人物传记资料库：王慶詢（CBDB 33407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33407&o=json
            external_identifier: CBDB:33407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k7fzJ91kqoEAuCMW9DPbKK
        subject_person_id: p_3HBAW4cy1TpBbNBYKGPE4v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMYeSKxfrbj6j3kJ94NWV9
          claim_id: c_k7fzJ91kqoEAuCMW9DPbKK
          source_id: s_6mzG3dBzsqJLnzFW2wVALQ
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
        id: c_XGXkU97HtuUCtwYF9JzFOh
        subject_person_id: p_9GgV84dRaD1Xvo7gkKfq8K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3HBAW4cy1TpBbNBYKGPE4v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KHd22qkxumTaa1XPR9sh5X
          claim_id: c_XGXkU97HtuUCtwYF9JzFOh
          source_id: s_6mzG3dBzsqJLnzFW2wVALQ
          stance: supports
          locator: CBDB 双向互证（父 王國器 ⇄ 子 王慶詢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_9GgV84dRaD1Xvo7gkKfq8K
        status: active
        display_name: 王國器
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶詢 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9GgV84dRaD1Xvo7gkKfq8K | 王國器 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶詢（CBDB 33407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33407&o=json)
