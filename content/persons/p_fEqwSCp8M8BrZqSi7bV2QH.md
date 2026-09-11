---
schema: wang-person/v1
id: p_fEqwSCp8M8BrZqSi7bV2QH
status: active
merged_into: null
display_name: 王卣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3q6mJ9oBvPCKtAxwT7SKsj
        subject_person_id: p_fEqwSCp8M8BrZqSi7bV2QH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7nDjNUHF5NBJh6Y55du6mP
          claim_id: c_3q6mJ9oBvPCKtAxwT7SKsj
          source_id: s_JqiU5j6bQ1F1HTDMzyhPsc
          stance: supports
          locator: CBDB:535619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535619）
          source: &a1
            id: s_JqiU5j6bQ1F1HTDMzyhPsc
            source_type: api_record
            title: 中国历代人物传记资料库：王卣（CBDB 535619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535619&o=json
            external_identifier: CBDB:535619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fNyHJD9XHAAy5iGQmNdmSQ
        subject_person_id: p_fEqwSCp8M8BrZqSi7bV2QH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卣，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 535619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CGFjGm0vv4adEnK_NO5KA5
          claim_id: c_fNyHJD9XHAAy5iGQmNdmSQ
          source_id: s_JqiU5j6bQ1F1HTDMzyhPsc
          stance: supports
          locator: CBDB:535619
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

# 王卣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卣 | accepted |
| bio.summary | 王卣，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 535619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卣（CBDB 535619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535619&o=json)
