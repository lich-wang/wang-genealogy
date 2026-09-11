---
schema: wang-person/v1
id: p_9Fgr6pEPFJcEU8H3bnydeU
status: active
merged_into: null
display_name: 王勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qerp1VhoTk32Z6MKwyqjgQ
        subject_person_id: p_9Fgr6pEPFJcEU8H3bnydeU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1pAoBKkChUJJHwsfBVezFm
          claim_id: c_Qerp1VhoTk32Z6MKwyqjgQ
          source_id: s_FgQLJqZGb6txB6Af42BC7G
          stance: supports
          locator: CBDB:473534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473534）
          source: &a1
            id: s_FgQLJqZGb6txB6Af42BC7G
            source_type: api_record
            title: 中国历代人物传记资料库：王勝（CBDB 473534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473534&o=json
            external_identifier: CBDB:473534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4NVrXeEHw4KS16mwJFJKZk
        subject_person_id: p_9Fgr6pEPFJcEU8H3bnydeU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝，明人物。入仕世襲(替)，曾任百戶、副千戶。（中国历代人物传记资料库 CBDB 473534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ixIDKuro8VCCp1te3Jqgzv
          claim_id: c_4NVrXeEHw4KS16mwJFJKZk
          source_id: s_FgQLJqZGb6txB6Af42BC7G
          stance: supports
          locator: CBDB:473534
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

# 王勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勝 | accepted |
| bio.summary | 王勝，明人物。入仕世襲(替)，曾任百戶、副千戶。（中国历代人物传记资料库 CBDB 473534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勝（CBDB 473534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473534&o=json)
