---
schema: wang-person/v1
id: p_M8NdJHXUPW1397z8794m2G
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cdgCLn7M9LC8NN8EhRb3cv
        subject_person_id: p_M8NdJHXUPW1397z8794m2G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YDrZDByj9kX8C9YqmE7LKM
          claim_id: c_cdgCLn7M9LC8NN8EhRb3cv
          source_id: s_bNJEMicYs3B5LB9V7ucQ63
          stance: supports
          locator: CBDB:100685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100685）
          source: &a1
            id: s_bNJEMicYs3B5LB9V7ucQ63
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 100685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100685&o=json
            external_identifier: CBDB:100685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SvWtgd8LoY3uFD5m9SBZ62
        subject_person_id: p_M8NdJHXUPW1397z8794m2G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇，元人物。籍贯潞州。（中国历代人物传记资料库 CBDB 100685）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ILNteH3M02eVw0RaAC1i_d
          claim_id: c_SvWtgd8LoY3uFD5m9SBZ62
          source_id: s_bNJEMicYs3B5LB9V7ucQ63
          stance: supports
          locator: CBDB:100685
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

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | 王奇，元人物。籍贯潞州。（中国历代人物传记资料库 CBDB 100685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 100685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100685&o=json)
