---
schema: wang-person/v1
id: p_UBD7gtEAG7Bisubh3L5M1w
status: active
merged_into: null
display_name: 王敏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_twYyDKCHDLUEN6i24DExJN
        subject_person_id: p_UBD7gtEAG7Bisubh3L5M1w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vCB545Nj6FUCbjyfYGpi8a
          claim_id: c_twYyDKCHDLUEN6i24DExJN
          source_id: s_yELqiZ6PLiPKh3Xt7bAxHu
          stance: supports
          locator: CBDB:308415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308415）
          source: &a1
            id: s_yELqiZ6PLiPKh3Xt7bAxHu
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 308415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308415&o=json
            external_identifier: CBDB:308415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ngEwFwyZ49uzrM9SztmAL3
        subject_person_id: p_UBD7gtEAG7Bisubh3L5M1w
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
        - id: cs_ASvPzQrswEZpRXaiC5Kv2j
          claim_id: c_ngEwFwyZ49uzrM9SztmAL3
          source_id: s_yELqiZ6PLiPKh3Xt7bAxHu
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
        id: c_J6A6eR2ykvZ9JqdJGNrQ5I
        subject_person_id: p_UBD7gtEAG7Bisubh3L5M1w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pJwhh9SEH9qmj8mm8eFbV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1qY2WNmI5nNst4-rAvEuLo
          claim_id: c_J6A6eR2ykvZ9JqdJGNrQ5I
          source_id: s_yELqiZ6PLiPKh3Xt7bAxHu
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第二百一十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pJwhh9SEH9qmj8mm8eFbV6
        status: active
        display_name: 王宗聖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pJwhh9SEH9qmj8mm8eFbV6 | 王宗聖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 308415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308415&o=json)
