---
schema: wang-person/v1
id: p_VDAVZeoqbbJa1FqUoSurhF
status: active
merged_into: null
display_name: 王潮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aFHjVcoEpGLv8UKGneXfSJ
        subject_person_id: p_VDAVZeoqbbJa1FqUoSurhF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WALmo65k756UL9NsjSiqZF
          claim_id: c_aFHjVcoEpGLv8UKGneXfSJ
          source_id: s_scA1WfobQ8x1coThjr1mDU
          stance: supports
          locator: CBDB:445574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445574）
          source: &a1
            id: s_scA1WfobQ8x1coThjr1mDU
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 445574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445574&o=json
            external_identifier: CBDB:445574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UnHDjomS4A6J4jDWMe75R8
        subject_person_id: p_VDAVZeoqbbJa1FqUoSurhF
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
        - id: cs_J8LA4UuLWY8RUYQuGsBtQG
          claim_id: c_UnHDjomS4A6J4jDWMe75R8
          source_id: s_scA1WfobQ8x1coThjr1mDU
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
  descendants: []
  other: []
---

# 王潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潮 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 445574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445574&o=json)
