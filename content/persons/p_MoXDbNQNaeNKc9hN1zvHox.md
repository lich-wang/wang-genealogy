---
schema: wang-person/v1
id: p_MoXDbNQNaeNKc9hN1zvHox
status: active
merged_into: null
display_name: 王仙敬
cbdb_id: 150415
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xAA42HMch9Bc6sxMvmQgN2
        subject_person_id: p_MoXDbNQNaeNKc9hN1zvHox
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙敬，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150415 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_bk2JuB7DVi6Y_esUrosd2i
          claim_id: c_xAA42HMch9Bc6sxMvmQgN2
          source_id: s_8Z5DinJFudG5rTsqfJy8n8
          stance: supports
          locator: CBDB:150415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8Z5DinJFudG5rTsqfJy8n8
            source_type: api_record
            title: 中国历代人物传记资料库：王仙敬（CBDB 150415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150415&o=json
            external_identifier: CBDB:150415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x6Tu2MBnkWB93B71REqUYP
        subject_person_id: p_MoXDbNQNaeNKc9hN1zvHox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JgUFaywVBaZbCKFSYBSj3a
          claim_id: c_x6Tu2MBnkWB93B71REqUYP
          source_id: s_8Z5DinJFudG5rTsqfJy8n8
          stance: supports
          locator: CBDB:150415
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_8Z5DinJFudG5rTsqfJy8n8
            source_type: api_record
            title: 中国历代人物传记资料库：王仙敬（CBDB 150415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150415&o=json
            external_identifier: CBDB:150415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mb48isdvAa-cmOL7r4ite6
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MoXDbNQNaeNKc9hN1zvHox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Yo3a4XYFE77XazbQ1ssPb
          claim_id: c_mb48isdvAa-cmOL7r4ite6
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 31：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MHQj8p6JKDeBHpAZKz9dix
            source_type: api_record
            title: 中国历代人物传记资料库：王侁（CBDB 140136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140136&o=json
            external_identifier: CBDB:140136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9xcg6CwbyTEQgcCr8e5FM9
        status: active
        display_name: 王侁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仙敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仙敬，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150415 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仙敬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9xcg6CwbyTEQgcCr8e5FM9 | 王侁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侁（CBDB 140136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140136&o=json)
- [中国历代人物传记资料库：王仙敬（CBDB 150415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150415&o=json)
