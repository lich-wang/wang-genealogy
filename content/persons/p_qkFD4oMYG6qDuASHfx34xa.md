---
schema: wang-person/v1
id: p_qkFD4oMYG6qDuASHfx34xa
status: active
merged_into: null
display_name: 王鉒
cbdb_id: 95375
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vjQBX428JpCF6dEcbAwdGE
        subject_person_id: p_qkFD4oMYG6qDuASHfx34xa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉒，宋人物。籍贯汝陰。（中国历代人物传记资料库 CBDB 95375）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7QlEgadmWR9flWepwGQewK
          claim_id: c_vjQBX428JpCF6dEcbAwdGE
          source_id: s_GpYmtuaDhAPH3pgy97HaDW
          stance: supports
          locator: CBDB:95375
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GpYmtuaDhAPH3pgy97HaDW
            source_type: api_record
            title: 中国历代人物传记资料库：王鉒（CBDB 95375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95375&o=json
            external_identifier: CBDB:95375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gMk9kt8gsMVEuxubtjQqXU
        subject_person_id: p_qkFD4oMYG6qDuASHfx34xa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7ZnUbj6xKPiyPHJ2MZhYmh
          claim_id: c_gMk9kt8gsMVEuxubtjQqXU
          source_id: s_GpYmtuaDhAPH3pgy97HaDW
          stance: supports
          locator: CBDB:95375
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5-Soi6vS5A6dDJ0hEkDXai
        subject_person_id: p_4WJALMeWFHaPvrNHD1eLGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qkFD4oMYG6qDuASHfx34xa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J-gybauD7BzH8x_y_GKWEZ
          claim_id: c_5-Soi6vS5A6dDJ0hEkDXai
          source_id: s_GGNt832hGKQMNiNi3Jswk8
          stance: supports
          locator: 宋人傳記資料索引(電子版)，925：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GGNt832hGKQMNiNi3Jswk8
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 1899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1899&o=json
            external_identifier: CBDB:1899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4WJALMeWFHaPvrNHD1eLGP
        status: active
        display_name: 王莘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鉒，宋人物。籍贯汝陰。（中国历代人物传记资料库 CBDB 95375） | accepted |
| name.primary | 王鉒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4WJALMeWFHaPvrNHD1eLGP | 王莘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王莘（CBDB 1899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1899&o=json)
- [中国历代人物传记资料库：王鉒（CBDB 95375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95375&o=json)
