---
schema: wang-person/v1
id: p_k9Fqx1NVAiuMAdkEqC8PuB
status: active
merged_into: null
display_name: 王仲全
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TCPsdUodCuc3NqBw1GGy9y
        subject_person_id: p_k9Fqx1NVAiuMAdkEqC8PuB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQK4XcLj1cGHUB2Ex5te6P
          claim_id: c_TCPsdUodCuc3NqBw1GGy9y
          source_id: s_5kmKUVg8GUU5PC76dHTmW8
          stance: supports
          locator: CBDB:572159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572159）
          source: &a1
            id: s_5kmKUVg8GUU5PC76dHTmW8
            source_type: api_record
            title: 中国历代人物传记资料库：王仲全（CBDB 572159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572159&o=json
            external_identifier: CBDB:572159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GbJWsRKUPMo6zXDb6bcumH
        subject_person_id: p_k9Fqx1NVAiuMAdkEqC8PuB
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
        - id: cs_Xx2N7sT5LpJs8BG1m4PmEz
          claim_id: c_GbJWsRKUPMo6zXDb6bcumH
          source_id: s_5kmKUVg8GUU5PC76dHTmW8
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
        id: c_2uRTxi0ZsUiTJT_F8ithh9
        subject_person_id: p_k9Fqx1NVAiuMAdkEqC8PuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pXVs6AL8HvV23fdzJAEFmC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVrCC_G7TLasuA3ckBsInQ
          claim_id: c_2uRTxi0ZsUiTJT_F8ithh9
          source_id: s_5kmKUVg8GUU5PC76dHTmW8
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160746：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pXVs6AL8HvV23fdzJAEFmC
        status: active
        display_name: 王貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲全 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pXVs6AL8HvV23fdzJAEFmC | 王貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲全（CBDB 572159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572159&o=json)
