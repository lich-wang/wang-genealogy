---
schema: wang-person/v1
id: p_rkUjz21UvJjLgysg9zD5AM
status: active
merged_into: null
display_name: 王偕逵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1J9jV2kyB4X77YmqfpfvaL
        subject_person_id: p_rkUjz21UvJjLgysg9zD5AM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偕逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_td8i1SRESuE1VWFUMg7o5m
          claim_id: c_1J9jV2kyB4X77YmqfpfvaL
          source_id: s_mtgysTPXdAqAigtp6WCPBi
          stance: supports
          locator: CBDB:636086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636086）
          source: &a1
            id: s_mtgysTPXdAqAigtp6WCPBi
            source_type: api_record
            title: 中国历代人物传记资料库：王偕逵（CBDB 636086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636086&o=json
            external_identifier: CBDB:636086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_APTD5ADDaMEtBX6Nru36vU
        subject_person_id: p_rkUjz21UvJjLgysg9zD5AM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偕逵，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任教授、訓導。（中国历代人物传记资料库 CBDB 636086）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XzDLLu8StZ-blW1XJ6hXEH
          claim_id: c_APTD5ADDaMEtBX6Nru36vU
          source_id: s_mtgysTPXdAqAigtp6WCPBi
          stance: supports
          locator: CBDB:636086
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

# 王偕逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偕逵 | accepted |
| bio.summary | 王偕逵，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任教授、訓導。（中国历代人物传记资料库 CBDB 636086） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偕逵（CBDB 636086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636086&o=json)
