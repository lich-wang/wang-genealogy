---
schema: wang-person/v1
id: p_q4wGEAEmDHH5ySAcQLX6fB
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H2vaLdsvf6K4ciYh6fzP24
        subject_person_id: p_q4wGEAEmDHH5ySAcQLX6fB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NNTca8YSF6Es6ha8SfDEWu
          claim_id: c_H2vaLdsvf6K4ciYh6fzP24
          source_id: s_2AzNi6ht5P1DqQDm7nh9VF
          stance: supports
          locator: CBDB:257019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257019）
          source: &a1
            id: s_2AzNi6ht5P1DqQDm7nh9VF
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 257019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json
            external_identifier: CBDB:257019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qmLQyrEH4hW2iNk6mv5j1q
        subject_person_id: p_q4wGEAEmDHH5ySAcQLX6fB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257019）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_REcstOI_h1YVV3VzGp9848
          claim_id: c_qmLQyrEH4hW2iNk6mv5j1q
          source_id: s_2AzNi6ht5P1DqQDm7nh9VF
          stance: supports
          locator: CBDB:257019
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257019） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 257019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json)
