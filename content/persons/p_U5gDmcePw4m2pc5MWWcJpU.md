---
schema: wang-person/v1
id: p_U5gDmcePw4m2pc5MWWcJpU
status: active
merged_into: null
display_name: 王瓚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RcwQkuQFFSQ825yoLxQ2nC
        subject_person_id: p_U5gDmcePw4m2pc5MWWcJpU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6d6ujMRG3ZrULrXf1GVqBw
          claim_id: c_RcwQkuQFFSQ825yoLxQ2nC
          source_id: s_LUr2dCUUsTGK5LSBr13vFh
          stance: supports
          locator: CBDB:499660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499660）
          source: &a1
            id: s_LUr2dCUUsTGK5LSBr13vFh
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 499660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499660&o=json
            external_identifier: CBDB:499660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w6rEDFg5D8MHTNQwW5wTzH
        subject_person_id: p_U5gDmcePw4m2pc5MWWcJpU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。入仕監生，曾任訓導。（中国历代人物传记资料库 CBDB 499660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C0lfoPTF5k3Z1FN1lL-sMe
          claim_id: c_w6rEDFg5D8MHTNQwW5wTzH
          source_id: s_LUr2dCUUsTGK5LSBr13vFh
          stance: supports
          locator: CBDB:499660
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

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。入仕監生，曾任訓導。（中国历代人物传记资料库 CBDB 499660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 499660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499660&o=json)
