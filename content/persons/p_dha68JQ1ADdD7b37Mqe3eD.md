---
schema: wang-person/v1
id: p_dha68JQ1ADdD7b37Mqe3eD
status: active
merged_into: null
display_name: 王訢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WzaidHKhiW2zjLDmfC9udE
        subject_person_id: p_dha68JQ1ADdD7b37Mqe3eD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N9AC1WHNj58xLAY2vXf4hr
          claim_id: c_WzaidHKhiW2zjLDmfC9udE
          source_id: s_S64QBZ33ToUTHitjPwD9UX
          stance: supports
          locator: CBDB:478680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478680）
          source: &a1
            id: s_S64QBZ33ToUTHitjPwD9UX
            source_type: api_record
            title: 中国历代人物传记资料库：王訢（CBDB 478680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478680&o=json
            external_identifier: CBDB:478680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bn8DwWLSKe45745QUKvbsW
        subject_person_id: p_dha68JQ1ADdD7b37Mqe3eD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訢，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 478680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BuImtjkVzzi3Ojd54nmQKY
          claim_id: c_Bn8DwWLSKe45745QUKvbsW
          source_id: s_S64QBZ33ToUTHitjPwD9UX
          stance: supports
          locator: CBDB:478680
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

# 王訢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訢 | accepted |
| bio.summary | 王訢，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 478680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訢（CBDB 478680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478680&o=json)
