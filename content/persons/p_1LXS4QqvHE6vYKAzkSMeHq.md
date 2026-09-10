---
schema: wang-person/v1
id: p_1LXS4QqvHE6vYKAzkSMeHq
status: active
merged_into: null
display_name: 王暟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5R3VhLsbonBikpr5KqZV2
        subject_person_id: p_1LXS4QqvHE6vYKAzkSMeHq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t8t5gWQWWafbMy39ELGcHM
          claim_id: c_L5R3VhLsbonBikpr5KqZV2
          source_id: s_DSUZ1TRdbpVbP3xenMMuYY
          stance: supports
          locator: CBDB:150807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150807）
          source: &a1
            id: s_DSUZ1TRdbpVbP3xenMMuYY
            source_type: api_record
            title: 中国历代人物传记资料库：王暟（CBDB 150807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150807&o=json
            external_identifier: CBDB:150807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M941svAsBCxWxRSvPVcKLS
        subject_person_id: p_1LXS4QqvHE6vYKAzkSMeHq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuaxLvKkX6jjBi4qb5eCmc
          claim_id: c_M941svAsBCxWxRSvPVcKLS
          source_id: s_DSUZ1TRdbpVbP3xenMMuYY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4qUp4FkThf61_gCsIUdixF
        subject_person_id: p_KRJzmY18UWZPSeL3isfUAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1LXS4QqvHE6vYKAzkSMeHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3eWV8Z5gON2L6ovJSIfsi0
          claim_id: c_4qUp4FkThf61_gCsIUdixF
          source_id: s_DSUZ1TRdbpVbP3xenMMuYY
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 27 YP NewEpitaphID=1512：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KRJzmY18UWZPSeL3isfUAa
        status: active
        display_name: 王行果
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王暟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暟 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KRJzmY18UWZPSeL3isfUAa | 王行果 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暟（CBDB 150807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150807&o=json)
