---
schema: wang-person/v1
id: p_MHCcfb2tpun6NGoEUrV8JV
status: active
merged_into: null
display_name: 王大平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nk4sPJA93XE95wHheZ7xwg
        subject_person_id: p_MHCcfb2tpun6NGoEUrV8JV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SwpsSErwSQn6qK5wj2wGub
          claim_id: c_Nk4sPJA93XE95wHheZ7xwg
          source_id: s_rLfa4BcoGjXPoMqfGEY91m
          stance: supports
          locator: CBDB:499029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499029）
          source: &a1
            id: s_rLfa4BcoGjXPoMqfGEY91m
            source_type: api_record
            title: 中国历代人物传记资料库：王大平（CBDB 499029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499029&o=json
            external_identifier: CBDB:499029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6iFzKx6UJSX1S3Emq8XBq8
        subject_person_id: p_MHCcfb2tpun6NGoEUrV8JV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大平，明人物。入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 499029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-AxSt-WP72EaL6Jh91FTeI
          claim_id: c_6iFzKx6UJSX1S3Emq8XBq8
          source_id: s_rLfa4BcoGjXPoMqfGEY91m
          stance: supports
          locator: CBDB:499029
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

# 王大平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大平 | accepted |
| bio.summary | 王大平，明人物。入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 499029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大平（CBDB 499029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499029&o=json)
