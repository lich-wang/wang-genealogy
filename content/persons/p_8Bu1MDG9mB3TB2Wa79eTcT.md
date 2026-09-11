---
schema: wang-person/v1
id: p_8Bu1MDG9mB3TB2Wa79eTcT
status: active
merged_into: null
display_name: 王縝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KiEhKHXtLCkfHFBEqQEt2x
        subject_person_id: p_8Bu1MDG9mB3TB2Wa79eTcT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zk1N9mdwZWHWRW8TfUZWZA
          claim_id: c_KiEhKHXtLCkfHFBEqQEt2x
          source_id: s_J74AdQ7XvQVw8EwnD9VU1Q
          stance: supports
          locator: CBDB:539578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539578）
          source: &a1
            id: s_J74AdQ7XvQVw8EwnD9VU1Q
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 539578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539578&o=json
            external_identifier: CBDB:539578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKg3HUHGmaYJiPBBfKMgQX
        subject_person_id: p_8Bu1MDG9mB3TB2Wa79eTcT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王縝，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 539578）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2ihICJfxLtoeZ2LsLWQeDS
          claim_id: c_EKg3HUHGmaYJiPBBfKMgQX
          source_id: s_J74AdQ7XvQVw8EwnD9VU1Q
          stance: supports
          locator: CBDB:539578
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

# 王縝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縝 | accepted |
| bio.summary | 王縝，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 539578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縝（CBDB 539578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539578&o=json)
