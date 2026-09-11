---
schema: wang-person/v1
id: p_w7S3vJADqSjJb2gEMyafL5
status: active
merged_into: null
display_name: 王森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uKQ2Xeao2WSHfxgMZmQJ8a
        subject_person_id: p_w7S3vJADqSjJb2gEMyafL5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_REqAdmUAK7CTi5b5Uz6kJE
          claim_id: c_uKQ2Xeao2WSHfxgMZmQJ8a
          source_id: s_YF3F2v9H1FBpHvnJ4g6dP5
          stance: supports
          locator: CBDB:506354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506354）
          source: &a1
            id: s_YF3F2v9H1FBpHvnJ4g6dP5
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 506354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506354&o=json
            external_identifier: CBDB:506354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zk1KFsDibK4cCY1ozzjiEW
        subject_person_id: p_w7S3vJADqSjJb2gEMyafL5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 506354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3Y-4FQvPmZ8sI2GC0wsPx
          claim_id: c_Zk1KFsDibK4cCY1ozzjiEW
          source_id: s_YF3F2v9H1FBpHvnJ4g6dP5
          stance: supports
          locator: CBDB:506354
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

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| bio.summary | 王森，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 506354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 506354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506354&o=json)
