---
schema: wang-person/v1
id: p_X7o9ixF2UZ4ZYG6apCTsVu
status: active
merged_into: null
display_name: 王志忠
cbdb_id: 155583
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3oUJAAJT3vLLpWhmeVrCYW
        subject_person_id: p_X7o9ixF2UZ4ZYG6apCTsVu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志忠，史料所见人物。本项目依据《中国历代人物传记资料库：王志忠（CBDB 155583）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_BI9bZia6YYrnRWZo904nLe
          claim_id: c_3oUJAAJT3vLLpWhmeVrCYW
          source_id: s_5Uho2nxsr9dcK5KcVP1pWR
          stance: supports
          locator: CBDB:155583
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5Uho2nxsr9dcK5KcVP1pWR
            source_type: api_record
            title: 中国历代人物传记资料库：王志忠（CBDB 155583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155583&o=json
            external_identifier: CBDB:155583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6gKu5GDy7RyrtitUE6HZhv
        subject_person_id: p_X7o9ixF2UZ4ZYG6apCTsVu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dzt2KucGod8UmpB3sEBppL
          claim_id: c_6gKu5GDy7RyrtitUE6HZhv
          source_id: s_5Uho2nxsr9dcK5KcVP1pWR
          stance: supports
          locator: CBDB:155583
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__2Y7u_ot75bv18GAID3ymc
        subject_person_id: p_K2d49Yq9hEHtm6jMk4r66o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X7o9ixF2UZ4ZYG6apCTsVu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fs4_XC3UpOIhXZ6eeOO3S
          claim_id: c__2Y7u_ot75bv18GAID3ymc
          source_id: s_Y8GJJBP1tFbMTVUQgh1zL8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 39：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y8GJJBP1tFbMTVUQgh1zL8
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 141289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141289&o=json
            external_identifier: CBDB:141289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K2d49Yq9hEHtm6jMk4r66o
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志忠，史料所见人物。本项目依据《中国历代人物传记资料库：王志忠（CBDB 155583）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王志忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K2d49Yq9hEHtm6jMk4r66o | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 141289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141289&o=json)
- [中国历代人物传记资料库：王志忠（CBDB 155583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155583&o=json)
