---
schema: wang-person/v1
id: p_nSJyU64RDm1XGBh2kWtdLx
status: active
merged_into: null
display_name: 王疥姐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwJ92GP3LJ9Cp2D3c9mtYJ
        subject_person_id: p_nSJyU64RDm1XGBh2kWtdLx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王疥姐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7vVJEAHzP648AoF6iBWng2
          claim_id: c_EwJ92GP3LJ9Cp2D3c9mtYJ
          source_id: s_qaReeRoc88cBj5JXa8toVk
          stance: supports
          locator: CBDB:689359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689359）
          source: &a1
            id: s_qaReeRoc88cBj5JXa8toVk
            source_type: api_record
            title: 中国历代人物传记资料库：王疥姐（CBDB 689359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689359&o=json
            external_identifier: CBDB:689359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XYUJSiHeJZPa8FGsRveKqM
        subject_person_id: p_nSJyU64RDm1XGBh2kWtdLx
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
        - id: cs_MFJy6U1AF1PRuJgAFAUGeh
          claim_id: c_XYUJSiHeJZPa8FGsRveKqM
          source_id: s_qaReeRoc88cBj5JXa8toVk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hxOmGr5LubKrWtCPM7C5ml
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nSJyU64RDm1XGBh2kWtdLx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QsRbMbL6b5eb3Tb9NS9dRM
          claim_id: c_hxOmGr5LubKrWtCPM7C5ml
          source_id: s_qaReeRoc88cBj5JXa8toVk
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Ci3S96sKz8q9W2YdX1pM
        status: active
        display_name: 王審瓊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王疥姐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王疥姐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王疥姐（CBDB 689359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689359&o=json)
