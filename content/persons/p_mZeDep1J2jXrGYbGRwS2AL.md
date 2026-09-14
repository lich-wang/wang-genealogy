---
schema: wang-person/v1
id: p_mZeDep1J2jXrGYbGRwS2AL
status: active
merged_into: null
display_name: 王縉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S94682ng5Btg5tDE9PJS2f
        subject_person_id: p_mZeDep1J2jXrGYbGRwS2AL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qybXqzjhTG5fzRJJ1394z7
          claim_id: c_S94682ng5Btg5tDE9PJS2f
          source_id: s_SK6JfPHi8HPk4A3katewG7
          stance: supports
          locator: CBDB:327953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327953）
          source: &a1
            id: s_SK6JfPHi8HPk4A3katewG7
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 327953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json
            external_identifier: CBDB:327953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TYq4CTt9SQ91bKvRFgMbv2
        subject_person_id: p_mZeDep1J2jXrGYbGRwS2AL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yiC1MiUJB3Y5VmHeLLFk-L
          claim_id: c_TYq4CTt9SQ91bKvRFgMbv2
          source_id: s_SK6JfPHi8HPk4A3katewG7
          stance: supports
          locator: CBDB:327953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MFUp7E3k60Z4zlxQlDRBm8
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mZeDep1J2jXrGYbGRwS2AL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1oBMuJp-c-No5N1gTRysk-
          claim_id: c_MFUp7E3k60Z4zlxQlDRBm8
          source_id: s_dHg17AUvcla8llL-DQVlcb
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王縉 之父／母。
          source:
            id: s_dHg17AUvcla8llL-DQVlcb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 327953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json
            external_identifier: CBDB:327953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJyiQsStHWbHq3jTTvu2vD
        status: active
        display_name: 王楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bBCLQogmWUfgTAXnGUwRLq
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mZeDep1J2jXrGYbGRwS2AL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ha84I93bVET3bhdzQUoaq
          claim_id: c_bBCLQogmWUfgTAXnGUwRLq
          source_id: s_dHg17AUvcla8llL-DQVlcb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dHg17AUvcla8llL-DQVlcb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 327953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json
            external_identifier: CBDB:327953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
---

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJyiQsStHWbHq3jTTvu2vD | 王楫 | accepted |
| other | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 327953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json)
