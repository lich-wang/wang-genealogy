---
schema: wang-person/v1
id: p_3LzjFw3hzkBCPgK2bCPt2t
status: active
merged_into: null
display_name: 王孝章
cbdb_id: 327160
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M7rS3vqj4Xw4L73E1q2F3y
        subject_person_id: p_3LzjFw3hzkBCPgK2bCPt2t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝章，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327160）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_62y__W2UN9v44s2JchE1zn
          claim_id: c_M7rS3vqj4Xw4L73E1q2F3y
          source_id: s_Ma1PUWJAJ6ihk58nYuZeZk
          stance: supports
          locator: CBDB:327160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ma1PUWJAJ6ihk58nYuZeZk
            source_type: api_record
            title: 中国历代人物传记资料库：王孝章（CBDB 327160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json
            external_identifier: CBDB:327160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fHkhRJpmPtLTXGDgdJd6YN
        subject_person_id: p_3LzjFw3hzkBCPgK2bCPt2t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cEFJFeQkFBo8j9fBJiJhoL
          claim_id: c_fHkhRJpmPtLTXGDgdJd6YN
          source_id: s_Ma1PUWJAJ6ihk58nYuZeZk
          stance: supports
          locator: CBDB:327160
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VNSb-32hqkWOA8C0APgJW1
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3LzjFw3hzkBCPgK2bCPt2t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_43z7wATdP1T8wDBMeedArl
          claim_id: c_VNSb-32hqkWOA8C0APgJW1
          source_id: s_kqNFqJgLlGmtMcXIwO0yiT
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王孝章 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王孝章 之父／母。
          source:
            id: s_kqNFqJgLlGmtMcXIwO0yiT
            source_type: api_record
            title: 中国历代人物传记资料库：王孝章（CBDB 327160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json
            external_identifier: CBDB:327160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KEoDBUQZkr54B6QhQtTe7V
        status: active
        display_name: 王寬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LhJoQhMqWhcnePCGrjUFhs
        subject_person_id: p_3LzjFw3hzkBCPgK2bCPt2t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvJZa8hh2XJ4THCEQiRtGC
          claim_id: c_LhJoQhMqWhcnePCGrjUFhs
          source_id: s_kqNFqJgLlGmtMcXIwO0yiT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kqNFqJgLlGmtMcXIwO0yiT
            source_type: api_record
            title: 中国历代人物传记资料库：王孝章（CBDB 327160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json
            external_identifier: CBDB:327160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BxK799vwCxhyA6JGbqpHzN
        status: active
        display_name: 王乾章
        merged_into_person_id: null
---

# 王孝章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝章，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327160） | accepted |
| name.primary | 王孝章 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KEoDBUQZkr54B6QhQtTe7V | 王寬 | accepted |
| other | p_BxK799vwCxhyA6JGbqpHzN | 王乾章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝章（CBDB 327160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json)
