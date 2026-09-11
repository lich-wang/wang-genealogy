---
schema: wang-person/v1
id: p_QuF4DaKK4SqaM66dLXVH8d
status: active
merged_into: null
display_name: 王億
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_soHLY8maDJ942gRSNcbKT4
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xpsgw4DvGQ3BppLEC2kWAh
          claim_id: c_soHLY8maDJ942gRSNcbKT4
          source_id: s_JV9KsRurtZYg171fJ7Lg7T
          stance: supports
          locator: CBDB:315703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315703）
          source: &a1
            id: s_JV9KsRurtZYg171fJ7Lg7T
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 315703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315703&o=json
            external_identifier: CBDB:315703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4YLX2fUfB6aXgLdZb4MC9h
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZwOPkbz7YQ7MDN3P0knxsl
          claim_id: c_4YLX2fUfB6aXgLdZb4MC9h
          source_id: s_JV9KsRurtZYg171fJ7Lg7T
          stance: supports
          locator: CBDB:315703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CqWcd8SXHLdBe0lYgTwl4j
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bhp9xkE0dHWgxO8xi1ycrf
          claim_id: c_CqWcd8SXHLdBe0lYgTwl4j
          source_id: s_JV9KsRurtZYg171fJ7Lg7T
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GXZCrH2ek2TqbFGJ8qqmqw
        status: active
        display_name: 王宇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王億 | accepted |
| bio.summary | 王億，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GXZCrH2ek2TqbFGJ8qqmqw | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王億（CBDB 315703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315703&o=json)
