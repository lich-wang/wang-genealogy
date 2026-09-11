---
schema: wang-person/v1
id: p_2omi1iD2DH3mmzWtSgzetd
status: active
merged_into: null
display_name: 王軫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hqp6mpvdMXGNeEfT8JDouK
        subject_person_id: p_2omi1iD2DH3mmzWtSgzetd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bhc4mkxZpDP6wwfPq2nxZ4
          claim_id: c_hqp6mpvdMXGNeEfT8JDouK
          source_id: s_8ZYY8NN36gJCz9749hJyzv
          stance: supports
          locator: CBDB:329352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329352）
          source: &a1
            id: s_8ZYY8NN36gJCz9749hJyzv
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 329352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329352&o=json
            external_identifier: CBDB:329352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9VHG2akzei7SsXDyQoLAg1
        subject_person_id: p_2omi1iD2DH3mmzWtSgzetd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軫，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329352）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v8tvqXnSnaC5cOc-RNKKqB
          claim_id: c_9VHG2akzei7SsXDyQoLAg1
          source_id: s_8ZYY8NN36gJCz9749hJyzv
          stance: supports
          locator: CBDB:329352
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

# 王軫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軫 | accepted |
| bio.summary | 王軫，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329352） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軫（CBDB 329352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329352&o=json)
