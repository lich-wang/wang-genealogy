---
schema: wang-person/v1
id: p_FjEtN9HHE5cWHWRD9ddU2X
status: active
merged_into: null
display_name: 王浙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cBNf1f8vfD1v3KDQy6ZX3C
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_63K34b4N6yw3pWLoe1t4uf
          claim_id: c_cBNf1f8vfD1v3KDQy6ZX3C
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: CBDB:212031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212031）
          source: &a1
            id: s_b1K7y7CiNbij2Zu24rUgXG
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 212031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json
            external_identifier: CBDB:212031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJ4W9rfrGUyMqoH4AfW3gX
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浙，明人物。隆慶五年進士，籍贯商城，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 212031）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RbuxP4JJ-o6imIysxw5NZ_
          claim_id: c_LJ4W9rfrGUyMqoH4AfW3gX
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: CBDB:212031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4iwyngyNcOx6vxIV3ULEau
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_812fmjwpSz0ndZ4sL7QZ8i
          claim_id: c_4iwyngyNcOx6vxIV3ULEau
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RvVueiXkPRQ3GnRokiv2tg
        status: active
        display_name: 王莚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浙 | accepted |
| bio.summary | 王浙，明人物。隆慶五年進士，籍贯商城，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 212031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RvVueiXkPRQ3GnRokiv2tg | 王莚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浙（CBDB 212031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json)
