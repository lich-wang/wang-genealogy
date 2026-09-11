---
schema: wang-person/v1
id: p_4GyYKwf5EWNG2nEu1nQNTX
status: active
merged_into: null
display_name: 王士玜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZpoNPk3wrmR9xL1pYYxn6u
        subject_person_id: p_4GyYKwf5EWNG2nEu1nQNTX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士玜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cQ9kppPNBeC3gFHZWdJN2M
          claim_id: c_ZpoNPk3wrmR9xL1pYYxn6u
          source_id: s_N9vEsQ19KKyHkrTvtSAm69
          stance: supports
          locator: CBDB:636806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636806）
          source: &a1
            id: s_N9vEsQ19KKyHkrTvtSAm69
            source_type: api_record
            title: 中国历代人物传记资料库：王士玜（CBDB 636806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636806&o=json
            external_identifier: CBDB:636806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YJDa1Y54ffxfB4X6VPZ3sF
        subject_person_id: p_4GyYKwf5EWNG2nEu1nQNTX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士玜，清人物。籍贯通海，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 636806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XnDxYoSjibij7a6v7ThUpP
          claim_id: c_YJDa1Y54ffxfB4X6VPZ3sF
          source_id: s_N9vEsQ19KKyHkrTvtSAm69
          stance: supports
          locator: CBDB:636806
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

# 王士玜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士玜 | accepted |
| bio.summary | 王士玜，清人物。籍贯通海，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 636806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士玜（CBDB 636806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636806&o=json)
