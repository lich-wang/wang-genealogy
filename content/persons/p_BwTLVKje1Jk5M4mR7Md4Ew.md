---
schema: wang-person/v1
id: p_BwTLVKje1Jk5M4mR7Md4Ew
status: active
merged_into: null
display_name: 王模
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_au1k6G3EUWg5aFyP7kgAEA
        subject_person_id: p_BwTLVKje1Jk5M4mR7Md4Ew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mJ55RdtynJfZGwxHoqug4B
          claim_id: c_au1k6G3EUWg5aFyP7kgAEA
          source_id: s_9z4YcxzGDmm4VCgR3MMpwD
          stance: supports
          locator: CBDB:97936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97936）
          source: &a1
            id: s_9z4YcxzGDmm4VCgR3MMpwD
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 97936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97936&o=json
            external_identifier: CBDB:97936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jK4yD1XiJD7dBGbwKvsJz7
        subject_person_id: p_BwTLVKje1Jk5M4mR7Md4Ew
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模，宋人物。曾任右奉直大夫。（中国历代人物传记资料库 CBDB 97936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uCo5IjgI1JfrCHChv5SUi_
          claim_id: c_jK4yD1XiJD7dBGbwKvsJz7
          source_id: s_9z4YcxzGDmm4VCgR3MMpwD
          stance: supports
          locator: CBDB:97936
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

# 王模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王模 | accepted |
| bio.summary | 王模，宋人物。曾任右奉直大夫。（中国历代人物传记资料库 CBDB 97936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王模（CBDB 97936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97936&o=json)
