---
schema: wang-person/v1
id: p_SADMGGMDGmbfXiRVgHshfm
status: active
merged_into: null
display_name: 王調
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2UT4wbmKvpzcm5vzQZj4nv
        subject_person_id: p_SADMGGMDGmbfXiRVgHshfm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王調
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FA8Wrw4BUtqRSJweS2io2L
          claim_id: c_2UT4wbmKvpzcm5vzQZj4nv
          source_id: s_QUjiB4uZQMCPvw19Lu7VVv
          stance: supports
          locator: CBDB:640276
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640276）
          source: &a1
            id: s_QUjiB4uZQMCPvw19Lu7VVv
            source_type: api_record
            title: 中国历代人物传记资料库：王調（CBDB 640276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640276&o=json
            external_identifier: CBDB:640276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RVuHfq6b1sEMJ93mDnk7DV
        subject_person_id: p_SADMGGMDGmbfXiRVgHshfm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王調，清人物。籍贯平越直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 640276）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TV5xk9jjI5BUj8IemPr0cY
          claim_id: c_RVuHfq6b1sEMJ93mDnk7DV
          source_id: s_QUjiB4uZQMCPvw19Lu7VVv
          stance: supports
          locator: CBDB:640276
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
  descendants: []
  other: []
---

# 王調

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王調 | accepted |
| bio.summary | 王調，清人物。籍贯平越直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 640276） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王調（CBDB 640276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640276&o=json)
