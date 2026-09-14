---
schema: wang-person/v1
id: p_H76fs6uLqxFrEubNeMJwTt
status: active
merged_into: null
display_name: 王鶴翔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8zxm69sXejHZ1M6Vai2Qui
        subject_person_id: p_H76fs6uLqxFrEubNeMJwTt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cTZj4D8tAnw52MgVd7vSVo
          claim_id: c_8zxm69sXejHZ1M6Vai2Qui
          source_id: s_GgpYCcuKLSqJnqDjKh8Pqx
          stance: supports
          locator: CBDB:694260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694260）
          source: &a1
            id: s_GgpYCcuKLSqJnqDjKh8Pqx
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴翔（CBDB 694260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694260&o=json
            external_identifier: CBDB:694260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9dGq9zkdQh9mJp4xeNMi5g
        subject_person_id: p_H76fs6uLqxFrEubNeMJwTt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鶴翔，清人物。籍贯鄞縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 694260）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qn4aR7LI96LQAb0r3JvDG3
          claim_id: c_9dGq9zkdQh9mJp4xeNMi5g
          source_id: s_GgpYCcuKLSqJnqDjKh8Pqx
          stance: supports
          locator: CBDB:694260
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
  other:
    - claim:
        id: c_mc6A-uEHiyVD1uDnM07BP4
        subject_person_id: p_H76fs6uLqxFrEubNeMJwTt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v69Td9WgQsQEiis6TK34mC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pkb7B22QRHeFSPeTfHlf1x
          claim_id: c_mc6A-uEHiyVD1uDnM07BP4
          source_id: s_AL4vFX8yxjyLNpjdaVPFnn
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 694261 王孝感）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AL4vFX8yxjyLNpjdaVPFnn
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴翔（CBDB 694260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694260&o=json
            external_identifier: CBDB:694260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v69Td9WgQsQEiis6TK34mC
        status: active
        display_name: 王孝感
        merged_into_person_id: null
---

# 王鶴翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴翔 | accepted |
| bio.summary | 王鶴翔，清人物。籍贯鄞縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 694260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_v69Td9WgQsQEiis6TK34mC | 王孝感 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶴翔（CBDB 694260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694260&o=json)
