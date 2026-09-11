---
schema: wang-person/v1
id: p_BwQaG7WeSm76uNGCHzEGie
status: active
merged_into: null
display_name: 王錫楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_43Hdj3BNkA9ffT7W6pegED
        subject_person_id: p_BwQaG7WeSm76uNGCHzEGie
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9bsu21CWDs6cPSg3Y2hKG
          claim_id: c_43Hdj3BNkA9ffT7W6pegED
          source_id: s_eMaMPp6r3jKFJZemzqJAWC
          stance: supports
          locator: CBDB:640610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640610）
          source: &a1
            id: s_eMaMPp6r3jKFJZemzqJAWC
            source_type: api_record
            title: 中国历代人物传记资料库：王錫楷（CBDB 640610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640610&o=json
            external_identifier: CBDB:640610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbDcNZLHQ8b3vcJf2DJQ82
        subject_person_id: p_BwQaG7WeSm76uNGCHzEGie
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫楷，清人物。籍贯遵義，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KCBgrL3NVwH9n6TNt_tUdO
          claim_id: c_DbDcNZLHQ8b3vcJf2DJQ82
          source_id: s_eMaMPp6r3jKFJZemzqJAWC
          stance: supports
          locator: CBDB:640610
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

# 王錫楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫楷 | accepted |
| bio.summary | 王錫楷，清人物。籍贯遵義，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫楷（CBDB 640610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640610&o=json)
