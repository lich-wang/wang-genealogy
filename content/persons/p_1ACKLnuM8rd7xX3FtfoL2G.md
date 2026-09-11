---
schema: wang-person/v1
id: p_1ACKLnuM8rd7xX3FtfoL2G
status: active
merged_into: null
display_name: 王源
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_61g6bcAnagb6bDkBMpKhCQ
        subject_person_id: p_1ACKLnuM8rd7xX3FtfoL2G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M5BFxHgK7B6i8VhJ2mFtkw
          claim_id: c_61g6bcAnagb6bDkBMpKhCQ
          source_id: s_tNDproXMSfVB1nCM9DLLmB
          stance: supports
          locator: CBDB:297162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297162）
          source: &a1
            id: s_tNDproXMSfVB1nCM9DLLmB
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 297162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297162&o=json
            external_identifier: CBDB:297162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f6odyeCKnCND4zY3ortKbB
        subject_person_id: p_1ACKLnuM8rd7xX3FtfoL2G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297162）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pnh7gsXpM-Z294G6kX78w_
          claim_id: c_f6odyeCKnCND4zY3ortKbB
          source_id: s_tNDproXMSfVB1nCM9DLLmB
          stance: supports
          locator: CBDB:297162
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
  descendants:
    - claim:
        id: c_ldW1NwY_3q4YpJDzUbcGgL
        subject_person_id: p_1ACKLnuM8rd7xX3FtfoL2G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VDmbh9wKKpW1lgOhW48bXC
          claim_id: c_ldW1NwY_3q4YpJDzUbcGgL
          source_id: s_tNDproXMSfVB1nCM9DLLmB
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LrwY5tXkYCUNXA8ZrdXwSb
        status: active
        display_name: 王維楨
        merged_into_person_id: null
  other: []
---

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| bio.summary | 王源，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LrwY5tXkYCUNXA8ZrdXwSb | 王維楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王源（CBDB 297162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297162&o=json)
