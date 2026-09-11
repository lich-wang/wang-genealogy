---
schema: wang-person/v1
id: p_FcJWF1aCkL7dDK2BP1iTmK
status: active
merged_into: null
display_name: 王禕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SWHdpLbPCzGp3k4kG3pvBz
        subject_person_id: p_FcJWF1aCkL7dDK2BP1iTmK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oizrFH5wuJ1Ma9fpqheZ5M
          claim_id: c_SWHdpLbPCzGp3k4kG3pvBz
          source_id: s_VvLAa9Znz7PEiQzEAuP3za
          stance: supports
          locator: CBDB:512440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（512440）
          source: &a1
            id: s_VvLAa9Znz7PEiQzEAuP3za
            source_type: api_record
            title: 中国历代人物传记资料库：王禕（CBDB 512440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512440&o=json
            external_identifier: CBDB:512440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6SKou5uC6AwNhk6TAmF5FL
        subject_person_id: p_FcJWF1aCkL7dDK2BP1iTmK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禕，宋人物。身份为思想家。（中国历代人物传记资料库 CBDB 512440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BDMtMunEri20YEJ7gKCyzt
          claim_id: c_6SKou5uC6AwNhk6TAmF5FL
          source_id: s_VvLAa9Znz7PEiQzEAuP3za
          stance: supports
          locator: CBDB:512440
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

# 王禕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禕 | accepted |
| bio.summary | 王禕，宋人物。身份为思想家。（中国历代人物传记资料库 CBDB 512440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禕（CBDB 512440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512440&o=json)
