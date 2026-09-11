---
schema: wang-person/v1
id: p_pP89K6a61yquC5wjNZD3hv
status: active
merged_into: null
display_name: 王鉞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2ZiNPVsGo3q9u6GNWkXPw
        subject_person_id: p_pP89K6a61yquC5wjNZD3hv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D42HxKdyjGR2GKDG3CcY93
          claim_id: c_U2ZiNPVsGo3q9u6GNWkXPw
          source_id: s_gXeD6tqxbhQeb49H7eZHfx
          stance: supports
          locator: CBDB:328398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328398）
          source: &a1
            id: s_gXeD6tqxbhQeb49H7eZHfx
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 328398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328398&o=json
            external_identifier: CBDB:328398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u2JG2WjNbJgFeX9A9M1oPu
        subject_person_id: p_pP89K6a61yquC5wjNZD3hv
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
        - id: cs_8QxFaX5EZ8oqkHp8ybC1Pr
          claim_id: c_u2JG2WjNbJgFeX9A9M1oPu
          source_id: s_gXeD6tqxbhQeb49H7eZHfx
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
  ancestors: []
  descendants:
    - claim:
        id: c_9g4LSQFa53lcxmy5tfl3TU
        subject_person_id: p_pP89K6a61yquC5wjNZD3hv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2X56zUa2MYrGErZu5r54un
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cRNnHeAlRrARG4ne2a38Yy
          claim_id: c_9g4LSQFa53lcxmy5tfl3TU
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百一十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vJrdW9xMquKxDLAjo4S8K1
            source_type: api_record
            title: 中国历代人物传记资料库：王爕（CBDB 205106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json
            external_identifier: CBDB:205106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2X56zUa2MYrGErZu5r54un
        status: active
        display_name: 王爕
        merged_into_person_id: null
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2X56zUa2MYrGErZu5r54un | 王爕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爕（CBDB 205106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 328398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328398&o=json)
