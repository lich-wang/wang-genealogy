---
schema: wang-person/v1
id: p_eWckGMswBQsiBQ1DS64n4h
status: active
merged_into: null
display_name: 王熙震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2TEbZa9e5aMUwSZ3LNNfC6
        subject_person_id: p_eWckGMswBQsiBQ1DS64n4h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FR63yWayxWGtTNxH9erDh8
          claim_id: c_2TEbZa9e5aMUwSZ3LNNfC6
          source_id: s_2GwF6T3Tae8C9o1Ft5Gme4
          stance: supports
          locator: CBDB:639316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639316）
          source: &a1
            id: s_2GwF6T3Tae8C9o1Ft5Gme4
            source_type: api_record
            title: 中国历代人物传记资料库：王熙震（CBDB 639316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639316&o=json
            external_identifier: CBDB:639316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9TqA3iNw7gocRP3DPACU8
        subject_person_id: p_eWckGMswBQsiBQ1DS64n4h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王熙震，清人物。籍贯閬中，入仕貢生: 拔貢，曾任郎中、知府。（中国历代人物传记资料库 CBDB 639316）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SqEC7YlJUe-hEv0eBuuXAJ
          claim_id: c_j9TqA3iNw7gocRP3DPACU8
          source_id: s_2GwF6T3Tae8C9o1Ft5Gme4
          stance: supports
          locator: CBDB:639316
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

# 王熙震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙震 | accepted |
| bio.summary | 王熙震，清人物。籍贯閬中，入仕貢生: 拔貢，曾任郎中、知府。（中国历代人物传记资料库 CBDB 639316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙震（CBDB 639316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639316&o=json)
