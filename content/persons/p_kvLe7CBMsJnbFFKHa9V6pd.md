---
schema: wang-person/v1
id: p_kvLe7CBMsJnbFFKHa9V6pd
status: active
merged_into: null
display_name: 王家福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LzMe1g6x9SoMphFMDvmKA9
        subject_person_id: p_kvLe7CBMsJnbFFKHa9V6pd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W9YyUNzB7mdDm2B3kqb2QJ
          claim_id: c_LzMe1g6x9SoMphFMDvmKA9
          source_id: s_6KUuNHDyA49GAUFQKK7vXi
          stance: supports
          locator: CBDB:637212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637212）
          source: &a1
            id: s_6KUuNHDyA49GAUFQKK7vXi
            source_type: api_record
            title: 中国历代人物传记资料库：王家福（CBDB 637212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637212&o=json
            external_identifier: CBDB:637212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zp19zso3rEWtob9SCk6yX1
        subject_person_id: p_kvLe7CBMsJnbFFKHa9V6pd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家福，清人物。籍贯廣東省，入仕鄉貢舉人，曾任郎中。（中国历代人物传记资料库 CBDB 637212）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qdBUP0Fo8RZq2KEqK0htoK
          claim_id: c_Zp19zso3rEWtob9SCk6yX1
          source_id: s_6KUuNHDyA49GAUFQKK7vXi
          stance: supports
          locator: CBDB:637212
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

# 王家福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家福 | accepted |
| bio.summary | 王家福，清人物。籍贯廣東省，入仕鄉貢舉人，曾任郎中。（中国历代人物传记资料库 CBDB 637212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家福（CBDB 637212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637212&o=json)
