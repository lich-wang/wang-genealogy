---
schema: wang-person/v1
id: p_DQN1sEVrdLYQ7FBcwLS1Bs
status: active
merged_into: null
display_name: 王廷燦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bZb7437MDmVjtdSsUiMy3A
        subject_person_id: p_DQN1sEVrdLYQ7FBcwLS1Bs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TwY3XEGjEh33mz9W1Fe7g3
          claim_id: c_bZb7437MDmVjtdSsUiMy3A
          source_id: s_jyarhEM96R5Z4QTnixMuuv
          stance: supports
          locator: CBDB:253506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253506）
          source: &a1
            id: s_jyarhEM96R5Z4QTnixMuuv
            source_type: api_record
            title: 中国历代人物传记资料库：王廷燦（CBDB 253506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253506&o=json
            external_identifier: CBDB:253506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QnJKDvBMCnAj3nuL1E1rP5
        subject_person_id: p_DQN1sEVrdLYQ7FBcwLS1Bs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷燦，明人物。成化十四年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 253506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RcJwONqC-pVZ5Puce0J3QR
          claim_id: c_QnJKDvBMCnAj3nuL1E1rP5
          source_id: s_jyarhEM96R5Z4QTnixMuuv
          stance: supports
          locator: CBDB:253506
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OXuhwV1NwwJCMgWaYjHKTC
        subject_person_id: p_DQN1sEVrdLYQ7FBcwLS1Bs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sEeXqdWXxCSXF7ps67if1m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rlM_rLXGC4IBrKNkmEX5hi
          claim_id: c_OXuhwV1NwwJCMgWaYjHKTC
          source_id: s_jyarhEM96R5Z4QTnixMuuv
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sEeXqdWXxCSXF7ps67if1m
        status: active
        display_name: 王朝器
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷燦 | accepted |
| bio.summary | 王廷燦，明人物。成化十四年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 253506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sEeXqdWXxCSXF7ps67if1m | 王朝器 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷燦（CBDB 253506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253506&o=json)
