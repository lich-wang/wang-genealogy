---
schema: wang-person/v1
id: p_BHQTdQiE6sACKqhVy258wF
status: active
merged_into: null
display_name: 王志中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pxUtJYGBPZenaL9ExDCc2C
        subject_person_id: p_BHQTdQiE6sACKqhVy258wF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1TbhEUMYLsvwP5B7y4ApY
          claim_id: c_pxUtJYGBPZenaL9ExDCc2C
          source_id: s_gHjg5XUrrnL4s76aqPLHAQ
          stance: supports
          locator: CBDB:240937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240937）
          source: &a1
            id: s_gHjg5XUrrnL4s76aqPLHAQ
            source_type: api_record
            title: 中国历代人物传记资料库：王志中（CBDB 240937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240937&o=json
            external_identifier: CBDB:240937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ug2Ucg8y1o9Bk6MC2ESQ6s
        subject_person_id: p_BHQTdQiE6sACKqhVy258wF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志中，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240937）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5bLemBXUDCjbCjK8nio-du
          claim_id: c_ug2Ucg8y1o9Bk6MC2ESQ6s
          source_id: s_gHjg5XUrrnL4s76aqPLHAQ
          stance: supports
          locator: CBDB:240937
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_8IwWWbwq_uvp8y3zMTUZtk
        subject_person_id: p_BHQTdQiE6sACKqhVy258wF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z5S5a3vTHgwZid8XEKrJG6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDvpABn2TaUHFPMAFrtdJf
          claim_id: c_8IwWWbwq_uvp8y3zMTUZtk
          source_id: s_gHjg5XUrrnL4s76aqPLHAQ
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z5S5a3vTHgwZid8XEKrJG6
        status: active
        display_name: 王讓
        merged_into_person_id: null
  other: []
---

# 王志中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志中 | accepted |
| bio.summary | 王志中，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240937） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Z5S5a3vTHgwZid8XEKrJG6 | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志中（CBDB 240937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240937&o=json)
