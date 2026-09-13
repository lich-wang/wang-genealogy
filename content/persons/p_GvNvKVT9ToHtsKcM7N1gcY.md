---
schema: wang-person/v1
id: p_GvNvKVT9ToHtsKcM7N1gcY
status: active
merged_into: null
display_name: 王末怛活
cbdb_id: 159536
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MfekmWvPpb5vU9i6dXLdEu
        subject_person_id: p_GvNvKVT9ToHtsKcM7N1gcY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王末怛活，唐人物。籍贯晉陽，曾任衛大將軍。（中国历代人物传记资料库 CBDB 159536）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_47ANsQDZ6p9DIKm1f9KSdM
          claim_id: c_MfekmWvPpb5vU9i6dXLdEu
          source_id: s_MsieVWnZF7tRHAjbkZKxbR
          stance: supports
          locator: CBDB:159536
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MsieVWnZF7tRHAjbkZKxbR
            source_type: api_record
            title: 中国历代人物传记资料库：王末怛活（CBDB 159536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159536&o=json
            external_identifier: CBDB:159536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oUkivdZpEZtBstBJ7P4Ewf
        subject_person_id: p_GvNvKVT9ToHtsKcM7N1gcY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王末怛活
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ftWRxteNPhCB9CRCjowcX7
          claim_id: c_oUkivdZpEZtBstBJ7P4Ewf
          source_id: s_MsieVWnZF7tRHAjbkZKxbR
          stance: supports
          locator: CBDB:159536
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gBwBGvoDVDvg8FzFMtypzY
        subject_person_id: p_3FNZauS21Gbd2HX3KGHkrh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GvNvKVT9ToHtsKcM7N1gcY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGHv9UWGy531BMCqeAusnO
          claim_id: c_gBwBGvoDVDvg8FzFMtypzY
          source_id: s_9rzfoFvGmXcVEnQ7KAo1mx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9rzfoFvGmXcVEnQ7KAo1mx
            source_type: api_record
            title: 中国历代人物传记资料库：王五哥之（CBDB 194709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194709&o=json
            external_identifier: CBDB:194709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3FNZauS21Gbd2HX3KGHkrh
        status: active
        display_name: 王五哥之
        merged_into_person_id: null
  children:
    - claim:
        id: c_UWbEdZPwQ_nPKQmSGDHaQE
        subject_person_id: p_GvNvKVT9ToHtsKcM7N1gcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1nJPjRIUJG9LYn4QQ1FyEB
          claim_id: c_UWbEdZPwQ_nPKQmSGDHaQE
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bJcyg5f5Za13XdP5DsLL6h
            source_type: api_record
            title: 中国历代人物传记资料库：王昇朝（CBDB 159541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json
            external_identifier: CBDB:159541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EzMUKy9VQQxtLyAvd3YBRM
        status: active
        display_name: 王昇朝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王末怛活

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王末怛活，唐人物。籍贯晉陽，曾任衛大將軍。（中国历代人物传记资料库 CBDB 159536） | accepted |
| name.primary | 王末怛活 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3FNZauS21Gbd2HX3KGHkrh | 王五哥之 | accepted |
| children | p_EzMUKy9VQQxtLyAvd3YBRM | 王昇朝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王末怛活（CBDB 159536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159536&o=json)
- [中国历代人物传记资料库：王昇朝（CBDB 159541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json)
- [中国历代人物传记资料库：王五哥之（CBDB 194709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194709&o=json)
