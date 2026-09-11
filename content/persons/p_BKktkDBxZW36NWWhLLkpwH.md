---
schema: wang-person/v1
id: p_BKktkDBxZW36NWWhLLkpwH
status: active
merged_into: null
display_name: 王發
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkHeSLNfJWoL6bFT7bPjMr
        subject_person_id: p_BKktkDBxZW36NWWhLLkpwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lyw6EfDDmq9Zobs3CHkBqd
          claim_id: c_vkHeSLNfJWoL6bFT7bPjMr
          source_id: s_K4cAAPq3xBP2LsGZ8g8G9a
          stance: supports
          locator: CBDB:3950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3950）
          source: &a1
            id: s_K4cAAPq3xBP2LsGZ8g8G9a
            source_type: api_record
            title: 中国历代人物传记资料库：王發（CBDB 3950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3950&o=json
            external_identifier: CBDB:3950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QxdMv1D7HoCHVavkqEFKPh
        subject_person_id: p_BKktkDBxZW36NWWhLLkpwH
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
        - id: cs_HQVeGQwexvTpJPgCiGaKC8
          claim_id: c_QxdMv1D7HoCHVavkqEFKPh
          source_id: s_K4cAAPq3xBP2LsGZ8g8G9a
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
        id: c_eOXj8VE_22HX1iBLT-TQF8
        subject_person_id: p_G5SQGh5AbvY3Ln1ftLHdsC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BKktkDBxZW36NWWhLLkpwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3G8YWnoVYZJHJvBSD6S5xc
          claim_id: c_eOXj8VE_22HX1iBLT-TQF8
          source_id: s_K4cAAPq3xBP2LsGZ8g8G9a
          stance: supports
          locator: CBDB 双向互证（父 王克存 ⇄ 子 王發）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_G5SQGh5AbvY3Ln1ftLHdsC
        status: active
        display_name: 王克存
        merged_into_person_id: null
  children:
    - claim:
        id: c_yzc7wMii2Q8gZ6BgbvjqVE
        subject_person_id: p_BKktkDBxZW36NWWhLLkpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_swcbVTDLNjK4ibwNhCz7N9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t2TpW-PAkP5XEDzPjB6rhF
          claim_id: c_yzc7wMii2Q8gZ6BgbvjqVE
          source_id: s_K4cAAPq3xBP2LsGZ8g8G9a
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1137;1141：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_swcbVTDLNjK4ibwNhCz7N9
        status: active
        display_name: 王綯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G5SQGh5AbvY3Ln1ftLHdsC | 王克存 | accepted |
| children | p_swcbVTDLNjK4ibwNhCz7N9 | 王綯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發（CBDB 3950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3950&o=json)
