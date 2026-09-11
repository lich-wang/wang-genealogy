---
schema: wang-person/v1
id: p_y3HLdDQuYmubKhEwf9BQPH
status: active
merged_into: null
display_name: 王繼周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JmTwCz8gNuoqBD5PDrUY9K
        subject_person_id: p_y3HLdDQuYmubKhEwf9BQPH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HkA7fM8XhTA7h6kz2CmstD
          claim_id: c_JmTwCz8gNuoqBD5PDrUY9K
          source_id: s_B85j9eQ6gvjf2Zxawmf3Mb
          stance: supports
          locator: CBDB:101456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101456）
          source: &a1
            id: s_B85j9eQ6gvjf2Zxawmf3Mb
            source_type: api_record
            title: 中国历代人物传记资料库：王繼周（CBDB 101456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101456&o=json
            external_identifier: CBDB:101456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AVmoCHqrSsAdc1YXrmaGx9
        subject_person_id: p_y3HLdDQuYmubKhEwf9BQPH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼周，元人物。籍贯處州路，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101456）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c5Z-17V8uyWScB4Ru5XoMY
          claim_id: c_AVmoCHqrSsAdc1YXrmaGx9
          source_id: s_B85j9eQ6gvjf2Zxawmf3Mb
          stance: supports
          locator: CBDB:101456
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

# 王繼周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼周 | accepted |
| bio.summary | 王繼周，元人物。籍贯處州路，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼周（CBDB 101456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101456&o=json)
