---
schema: wang-person/v1
id: p_zcZQE45qtDxi6Hi55HJstt
status: active
merged_into: null
display_name: 王士毅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WdvGeTF2vcFHKEzNoQGce3
        subject_person_id: p_zcZQE45qtDxi6Hi55HJstt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hD7BnT1xMLcEwEBoH8vu62
          claim_id: c_WdvGeTF2vcFHKEzNoQGce3
          source_id: s_VSCSH6vc9zLV3EXtXQ7Be3
          stance: supports
          locator: CBDB:513207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（513207）
          source: &a1
            id: s_VSCSH6vc9zLV3EXtXQ7Be3
            source_type: api_record
            title: 中国历代人物传记资料库：王士毅（CBDB 513207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513207&o=json
            external_identifier: CBDB:513207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VBBNX4htM2WQziZ9wB89xM
        subject_person_id: p_zcZQE45qtDxi6Hi55HJstt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士毅，明人物。籍贯平定州，入仕進士。（中国历代人物传记资料库 CBDB 513207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RjQ3IunOXayfxL0w4N9Xm3
          claim_id: c_VBBNX4htM2WQziZ9wB89xM
          source_id: s_VSCSH6vc9zLV3EXtXQ7Be3
          stance: supports
          locator: CBDB:513207
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

# 王士毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士毅 | accepted |
| bio.summary | 王士毅，明人物。籍贯平定州，入仕進士。（中国历代人物传记资料库 CBDB 513207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士毅（CBDB 513207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513207&o=json)
