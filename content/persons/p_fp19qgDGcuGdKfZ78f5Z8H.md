---
schema: wang-person/v1
id: p_fp19qgDGcuGdKfZ78f5Z8H
status: active
merged_into: null
display_name: 王之楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pLVDWz4dAkPcB4RtSKPgLv
        subject_person_id: p_fp19qgDGcuGdKfZ78f5Z8H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CjKFAUNaZSFWG7QRGYtNeZ
          claim_id: c_pLVDWz4dAkPcB4RtSKPgLv
          source_id: s_SU6SaLx7vhyHMb3DjKbHAA
          stance: supports
          locator: CBDB:124991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124991）
          source: &a1
            id: s_SU6SaLx7vhyHMb3DjKbHAA
            source_type: api_record
            title: 中国历代人物传记资料库：王之楨（CBDB 124991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124991&o=json
            external_identifier: CBDB:124991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mdEt2RNzDppiZ5yuy6oejk
        subject_person_id: p_fp19qgDGcuGdKfZ78f5Z8H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之楨，明人物。籍贯蒲州。（中国历代人物传记资料库 CBDB 124991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xi9hZ0vGOu0yX9RhahX268
          claim_id: c_mdEt2RNzDppiZ5yuy6oejk
          source_id: s_SU6SaLx7vhyHMb3DjKbHAA
          stance: supports
          locator: CBDB:124991
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

# 王之楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之楨 | accepted |
| bio.summary | 王之楨，明人物。籍贯蒲州。（中国历代人物传记资料库 CBDB 124991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之楨（CBDB 124991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124991&o=json)
