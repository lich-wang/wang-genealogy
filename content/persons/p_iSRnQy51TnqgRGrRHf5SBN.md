---
schema: wang-person/v1
id: p_iSRnQy51TnqgRGrRHf5SBN
status: active
merged_into: null
display_name: 王適
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7sc9mw6oAWDxUBjh7fGmmr
        subject_person_id: p_iSRnQy51TnqgRGrRHf5SBN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6JvHVJ9Asb2bs73PsPuGzK
          claim_id: c_7sc9mw6oAWDxUBjh7fGmmr
          source_id: s_Dn3EpgRkE1wR31QTBQYm9K
          stance: supports
          locator: CBDB:92055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92055）
          source: &a1
            id: s_Dn3EpgRkE1wR31QTBQYm9K
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 92055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92055&o=json
            external_identifier: CBDB:92055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7ZXH9S9diwAQFtywRgD68
        subject_person_id: p_iSRnQy51TnqgRGrRHf5SBN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適，唐人物。籍贯幽州，身份为工於文，曾任州司功参軍。（中国历代人物传记资料库 CBDB 92055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_87TkNglqiVGQQItQSaLcur
          claim_id: c_N7ZXH9S9diwAQFtywRgD68
          source_id: s_Dn3EpgRkE1wR31QTBQYm9K
          stance: supports
          locator: CBDB:92055
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

# 王適

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王適 | accepted |
| bio.summary | 王適，唐人物。籍贯幽州，身份为工於文，曾任州司功参軍。（中国历代人物传记资料库 CBDB 92055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王適（CBDB 92055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92055&o=json)
