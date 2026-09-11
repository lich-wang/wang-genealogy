---
schema: wang-person/v1
id: p_mz9BXCY2MrMzrtedYeaKMu
status: active
merged_into: null
display_name: 王滔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mRqNsMwTRAirT7bDb7S8KK
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N5xwXgRUK2PY72wYMajk1s
          claim_id: c_mRqNsMwTRAirT7bDb7S8KK
          source_id: s_3bUYPAJ3VBmeuq3LMyjgZ2
          stance: supports
          locator: CBDB:314532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314532）
          source: &a1
            id: s_3bUYPAJ3VBmeuq3LMyjgZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王滔（CBDB 314532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314532&o=json
            external_identifier: CBDB:314532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D4MtSSqLakm74sK3QUc3XF
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滔，明人物。嘉靖二十九年進士，籍贯烏程，曾任醫學正術。（中国历代人物传记资料库 CBDB 314532）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9aeQCbi6FvIE_Ot1ENmG3h
          claim_id: c_D4MtSSqLakm74sK3QUc3XF
          source_id: s_3bUYPAJ3VBmeuq3LMyjgZ2
          stance: supports
          locator: CBDB:314532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fn-nDPo_QKcv4W1Vf9QSEX
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HqWctAKkcklbI5a7-ENEV5
          claim_id: c_fn-nDPo_QKcv4W1Vf9QSEX
          source_id: s_3bUYPAJ3VBmeuq3LMyjgZ2
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SGWPi4n8QUjY5AE1caMiEq
        status: active
        display_name: 王傑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滔 | accepted |
| bio.summary | 王滔，明人物。嘉靖二十九年進士，籍贯烏程，曾任醫學正術。（中国历代人物传记资料库 CBDB 314532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SGWPi4n8QUjY5AE1caMiEq | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滔（CBDB 314532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314532&o=json)
