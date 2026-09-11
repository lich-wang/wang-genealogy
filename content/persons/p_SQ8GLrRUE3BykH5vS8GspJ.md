---
schema: wang-person/v1
id: p_SQ8GLrRUE3BykH5vS8GspJ
status: active
merged_into: null
display_name: 王瓘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKdWfeq3FcpgWDDR6ox27W
        subject_person_id: p_SQ8GLrRUE3BykH5vS8GspJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GBHiVK3UdVi4sLQWZr8ET1
          claim_id: c_cKdWfeq3FcpgWDDR6ox27W
          source_id: s_X4yts42ii9qa99TG3cBank
          stance: supports
          locator: CBDB:481496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481496）
          source: &a1
            id: s_X4yts42ii9qa99TG3cBank
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 481496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481496&o=json
            external_identifier: CBDB:481496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ev2h3g6b6HzM4Fy1yvJRJR
        subject_person_id: p_SQ8GLrRUE3BykH5vS8GspJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 481496）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cnYqMVyX3ztoRtRQ5TcN8o
          claim_id: c_Ev2h3g6b6HzM4Fy1yvJRJR
          source_id: s_X4yts42ii9qa99TG3cBank
          stance: supports
          locator: CBDB:481496
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

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓘 | accepted |
| bio.summary | 王瓘，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 481496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓘（CBDB 481496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481496&o=json)
