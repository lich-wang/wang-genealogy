---
schema: wang-person/v1
id: p_PrrjhrZpBVsz6HGGMuLRNP
status: active
merged_into: null
display_name: 王佩瑲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pUYAEhVsxPEVzyYGqQQByc
        subject_person_id: p_PrrjhrZpBVsz6HGGMuLRNP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩瑲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4taYVtJUfijkwNM4b8p8FY
          claim_id: c_pUYAEhVsxPEVzyYGqQQByc
          source_id: s_VNAB3YoKCfnMUaw26NzbRE
          stance: supports
          locator: CBDB:636015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636015）
          source: &a1
            id: s_VNAB3YoKCfnMUaw26NzbRE
            source_type: api_record
            title: 中国历代人物传记资料库：王佩瑲（CBDB 636015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636015&o=json
            external_identifier: CBDB:636015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a3SHeNzCYf2166DsVgb9eC
        subject_person_id: p_PrrjhrZpBVsz6HGGMuLRNP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩瑲，清人物。籍贯臨安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 636015）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CMz8OYv__P4lM7Ufv2wQ31
          claim_id: c_a3SHeNzCYf2166DsVgb9eC
          source_id: s_VNAB3YoKCfnMUaw26NzbRE
          stance: supports
          locator: CBDB:636015
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

# 王佩瑲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩瑲 | accepted |
| bio.summary | 王佩瑲，清人物。籍贯臨安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 636015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩瑲（CBDB 636015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636015&o=json)
