---
schema: wang-person/v1
id: p_2o3H2wNCvrjjLiLvCy7Rsx
status: active
merged_into: null
display_name: 王天祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H2e7WjG5PuCMQuUZGiHqGm
        subject_person_id: p_2o3H2wNCvrjjLiLvCy7Rsx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VY7SEqjA1txaCuNA67GX2h
          claim_id: c_H2e7WjG5PuCMQuUZGiHqGm
          source_id: s_VfVGL54V6wJP8f8yZcMeYc
          stance: supports
          locator: CBDB:101081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101081）
          source: &a1
            id: s_VfVGL54V6wJP8f8yZcMeYc
            source_type: api_record
            title: 中国历代人物传记资料库：王天祐（CBDB 101081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101081&o=json
            external_identifier: CBDB:101081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hq6CBrb3YZvQmfs2yBRYQh
        subject_person_id: p_2o3H2wNCvrjjLiLvCy7Rsx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天祐，元人物。籍贯上黨，曾任國子學博士、儒學提舉司提舉、太常禮儀院博士。（中国历代人物传记资料库 CBDB 101081）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Va2o2UU8Z44QiqllchVfu9
          claim_id: c_Hq6CBrb3YZvQmfs2yBRYQh
          source_id: s_VfVGL54V6wJP8f8yZcMeYc
          stance: supports
          locator: CBDB:101081
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

# 王天祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天祐 | accepted |
| bio.summary | 王天祐，元人物。籍贯上黨，曾任國子學博士、儒學提舉司提舉、太常禮儀院博士。（中国历代人物传记资料库 CBDB 101081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天祐（CBDB 101081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101081&o=json)
