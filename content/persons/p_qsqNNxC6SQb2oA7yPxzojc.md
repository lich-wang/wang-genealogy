---
schema: wang-person/v1
id: p_qsqNNxC6SQb2oA7yPxzojc
status: active
merged_into: null
display_name: 王相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_coeUuE1L13ZRNz4E79jBpe
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SNLzfJ3KK8VQCWLk7ruQjw
          claim_id: c_coeUuE1L13ZRNz4E79jBpe
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: CBDB:311389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311389）
          source: &a1
            id: s_GYs3JvJ7e3R4XSB5TUuNUD
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 311389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json
            external_identifier: CBDB:311389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bsUGFg25nPRHW2voqYbS3D
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。嘉靖二十六年進士，籍贯洪洞，曾任知縣、戶部分司。（中国历代人物传记资料库 CBDB 311389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ljzYmvQKPr_-VzZIHsab5
          claim_id: c_bsUGFg25nPRHW2voqYbS3D
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: CBDB:311389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_H5DHtcKk4sjfxvrDq0QfUq
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsGwaKQVPhoBZJfFDmuuvw
          claim_id: c_H5DHtcKk4sjfxvrDq0QfUq
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百八十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vc9c3mkQxRy6aUfxzv3hqq
        status: active
        display_name: 王三接
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。嘉靖二十六年進士，籍贯洪洞，曾任知縣、戶部分司。（中国历代人物传记资料库 CBDB 311389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vc9c3mkQxRy6aUfxzv3hqq | 王三接 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 311389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json)
