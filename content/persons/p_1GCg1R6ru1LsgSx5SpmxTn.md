---
schema: wang-person/v1
id: p_1GCg1R6ru1LsgSx5SpmxTn
status: active
merged_into: null
display_name: 王文思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZiQN9KjyJzF5s8o6sAw3oh
        subject_person_id: p_1GCg1R6ru1LsgSx5SpmxTn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tfA8EkEWWz2XnxX2jPDEoD
          claim_id: c_ZiQN9KjyJzF5s8o6sAw3oh
          source_id: s_LvxJR85dcXq4n2safAPESU
          stance: supports
          locator: CBDB:37973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37973）
          source: &a1
            id: s_LvxJR85dcXq4n2safAPESU
            source_type: api_record
            title: 中国历代人物传记资料库：王文思（CBDB 37973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37973&o=json
            external_identifier: CBDB:37973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SFBXHEa4dHefQSSwKWrbfs
        subject_person_id: p_1GCg1R6ru1LsgSx5SpmxTn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文思，宋人物。曾任尚書左僕射。（中国历代人物传记资料库 CBDB 37973）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uTB6UV6E5zMuBV9AAldm_H
          claim_id: c_SFBXHEa4dHefQSSwKWrbfs
          source_id: s_LvxJR85dcXq4n2safAPESU
          stance: supports
          locator: CBDB:37973
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

# 王文思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文思 | accepted |
| bio.summary | 王文思，宋人物。曾任尚書左僕射。（中国历代人物传记资料库 CBDB 37973） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文思（CBDB 37973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37973&o=json)
