---
schema: wang-person/v1
id: p_5X4eitoFo5XjwFMw6N8aoW
status: active
merged_into: null
display_name: 王室
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NMhAoaZMRt5ft72GtjzA77
        subject_person_id: p_5X4eitoFo5XjwFMw6N8aoW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qG1LJWRZUPVVxPUm4EbvM8
          claim_id: c_NMhAoaZMRt5ft72GtjzA77
          source_id: s_fSmeJPbUaJvpJQSy5fK9cG
          stance: supports
          locator: CBDB:327851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327851）
          source: &a1
            id: s_fSmeJPbUaJvpJQSy5fK9cG
            source_type: api_record
            title: 中国历代人物传记资料库：王室（CBDB 327851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327851&o=json
            external_identifier: CBDB:327851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LWArHT4cS7n6vg34eFHGdd
        subject_person_id: p_5X4eitoFo5XjwFMw6N8aoW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室，明人物。嘉靖四十一年進士，曾任散官。（中国历代人物传记资料库 CBDB 327851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3EeVAyQQV8mMf3RS63nIjy
          claim_id: c_LWArHT4cS7n6vg34eFHGdd
          source_id: s_fSmeJPbUaJvpJQSy5fK9cG
          stance: supports
          locator: CBDB:327851
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
        id: c_PNKYMIcrKaCe6Wk6bz6oku
        subject_person_id: p_5X4eitoFo5XjwFMw6N8aoW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wjtvU--xpFpug1_2cFrADu
          claim_id: c_PNKYMIcrKaCe6Wk6bz6oku
          source_id: s_fSmeJPbUaJvpJQSy5fK9cG
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rnGMv5wiQ8owdX8n1Qtwbm
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  other: []
---

# 王室

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王室 | accepted |
| bio.summary | 王室，明人物。嘉靖四十一年進士，曾任散官。（中国历代人物传记资料库 CBDB 327851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rnGMv5wiQ8owdX8n1Qtwbm | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王室（CBDB 327851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327851&o=json)
