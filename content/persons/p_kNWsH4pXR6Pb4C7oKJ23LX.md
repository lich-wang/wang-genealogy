---
schema: wang-person/v1
id: p_kNWsH4pXR6Pb4C7oKJ23LX
status: active
merged_into: null
display_name: 王淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n7SQBTpggxQo8thYFKFqcH
        subject_person_id: p_kNWsH4pXR6Pb4C7oKJ23LX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ppR3GJUG4Ujy85zmTRy2Wz
          claim_id: c_n7SQBTpggxQo8thYFKFqcH
          source_id: s_Qq5Z7wTPxdpHhgN7foPvWw
          stance: supports
          locator: CBDB:126666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126666）
          source: &a1
            id: s_Qq5Z7wTPxdpHhgN7foPvWw
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 126666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126666&o=json
            external_identifier: CBDB:126666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tu71mT2G195zA3iSPsXXBp
        subject_person_id: p_kNWsH4pXR6Pb4C7oKJ23LX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮，明人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 126666）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M2ei8HuC5iXTNvZ3jnXYPW
          claim_id: c_Tu71mT2G195zA3iSPsXXBp
          source_id: s_Qq5Z7wTPxdpHhgN7foPvWw
          stance: supports
          locator: CBDB:126666
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

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | 王淮，明人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 126666） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 126666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126666&o=json)
