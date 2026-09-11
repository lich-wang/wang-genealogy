---
schema: wang-person/v1
id: p_ziy9ABVVuhK7qvMg7sm9J4
status: active
merged_into: null
display_name: 王璉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNCuTBCtJLUFHU9TKCHB4P
        subject_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xaZdz2e1Gma8CgyRqfZHUL
          claim_id: c_kNCuTBCtJLUFHU9TKCHB4P
          source_id: s_mG4hpz4XcQjkkUBLyzAAwd
          stance: supports
          locator: CBDB:242771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242771）
          source: &a1
            id: s_mG4hpz4XcQjkkUBLyzAAwd
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PqygQNCFYd8vvgYPqQK3gn
        subject_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BZ3pLcVRah2hPdayOA3sJm
          claim_id: c_PqygQNCFYd8vvgYPqQK3gn
          source_id: s_mG4hpz4XcQjkkUBLyzAAwd
          stance: supports
          locator: CBDB:242771
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

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 242771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json)
