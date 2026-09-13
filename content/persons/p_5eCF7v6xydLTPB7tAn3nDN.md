---
schema: wang-person/v1
id: p_5eCF7v6xydLTPB7tAn3nDN
status: active
merged_into: null
display_name: 王景倓
cbdb_id: 38066
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_crdL8hw9Kd9CRrEVJz3PNX
        subject_person_id: p_5eCF7v6xydLTPB7tAn3nDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景倓（生于1206年），宋人物。寶祐進士，籍贯新建，入仕進士。（中国历代人物传记资料库 CBDB 38066）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aN2r4J4q4kHtojKpHdOZBQ
          claim_id: c_crdL8hw9Kd9CRrEVJz3PNX
          source_id: s_SkaCkxM5jnp56JBm26UCwr
          stance: supports
          locator: CBDB:38066
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SkaCkxM5jnp56JBm26UCwr
            source_type: api_record
            title: 中国历代人物传记资料库：王景倓（CBDB 38066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38066&o=json
            external_identifier: CBDB:38066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ph5p6ABR3H13b5jnhMyi7h
        subject_person_id: p_5eCF7v6xydLTPB7tAn3nDN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1206年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1206-01-01
            latest: 1206-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5N99HwWa7mR37rAMStYHwo
          claim_id: c_Ph5p6ABR3H13b5jnhMyi7h
          source_id: s_SkaCkxM5jnp56JBm26UCwr
          stance: supports
          locator: CBDB:38066
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1206
          source:
            id: s_SkaCkxM5jnp56JBm26UCwr
            source_type: api_record
            title: 中国历代人物传记资料库：王景倓（CBDB 38066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38066&o=json
            external_identifier: CBDB:38066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RUtjNyBmQn7pbyWpqNmLg4
        subject_person_id: p_5eCF7v6xydLTPB7tAn3nDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景倓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8pU8cf7KVsbaamdP4GWJe4
          claim_id: c_RUtjNyBmQn7pbyWpqNmLg4
          source_id: s_SkaCkxM5jnp56JBm26UCwr
          stance: supports
          locator: CBDB:38066
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1206
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_py7q9U4AYywCIOCasypQHL
        subject_person_id: p_JwEaq79pvhejygp4rNvhpM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5eCF7v6xydLTPB7tAn3nDN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nsf0cz3F91wsHnP-LVUF8O
          claim_id: c_py7q9U4AYywCIOCasypQHL
          source_id: s_T6zA3DgeYdSdwtU56qs5bK
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T6zA3DgeYdSdwtU56qs5bK
            source_type: api_record
            title: 中国历代人物传记资料库：王禹（CBDB 137671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137671&o=json
            external_identifier: CBDB:137671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JwEaq79pvhejygp4rNvhpM
        status: active
        display_name: 王禹
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王景倓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景倓（生于1206年），宋人物。寶祐進士，籍贯新建，入仕進士。（中国历代人物传记资料库 CBDB 38066） | accepted |
| birth.date | 1206年 | accepted |
| name.primary | 王景倓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_JwEaq79pvhejygp4rNvhpM | 王禹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景倓（CBDB 38066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38066&o=json)
- [中国历代人物传记资料库：王禹（CBDB 137671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137671&o=json)
