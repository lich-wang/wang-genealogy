---
schema: wang-person/v1
id: p_uTGWZPP3K2AvshF7Q9pjcC
status: active
merged_into: null
display_name: 王能
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WLNrPjpUKMcSbJ1uGcyLee
        subject_person_id: p_uTGWZPP3K2AvshF7Q9pjcC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1dyANuGN1oaZdFicFnGF8J
          claim_id: c_WLNrPjpUKMcSbJ1uGcyLee
          source_id: s_5J7GFUAmiehHA45GrcwMQF
          stance: supports
          locator: CBDB:248446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248446）
          source: &a1
            id: s_5J7GFUAmiehHA45GrcwMQF
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 248446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248446&o=json
            external_identifier: CBDB:248446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iw6ApaRiSwu7zHADA1Y8A5
        subject_person_id: p_uTGWZPP3K2AvshF7Q9pjcC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能，明人物。成化十一年進士，籍贯宣府前衛。（中国历代人物传记资料库 CBDB 248446）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_le2_i2cOEInul55ZcR8KE9
          claim_id: c_iw6ApaRiSwu7zHADA1Y8A5
          source_id: s_5J7GFUAmiehHA45GrcwMQF
          stance: supports
          locator: CBDB:248446
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xx-KSAdP9jD6WCfANndTkL
        subject_person_id: p_uTGWZPP3K2AvshF7Q9pjcC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wtbH7xExyKzkv5ZQ6eBmE5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l-L2Kn6kCHEXi_nuBQRMRH
          claim_id: c_xx-KSAdP9jD6WCfANndTkL
          source_id: s_5J7GFUAmiehHA45GrcwMQF
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wtbH7xExyKzkv5ZQ6eBmE5
        status: active
        display_name: 王敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | 王能，明人物。成化十一年進士，籍贯宣府前衛。（中国历代人物传记资料库 CBDB 248446） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wtbH7xExyKzkv5ZQ6eBmE5 | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 248446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248446&o=json)
