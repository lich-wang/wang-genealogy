---
schema: wang-person/v1
id: p_DRzHHRmvf68TWLhTaaCUtC
status: active
merged_into: null
display_name: 王政信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cdgfLrbXyqfpAtJFnm5w6g
        subject_person_id: p_DRzHHRmvf68TWLhTaaCUtC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eJd3WbPy9puzConLPaPoba
          claim_id: c_cdgfLrbXyqfpAtJFnm5w6g
          source_id: s_9VawLVK8n5s31G2umC3HzX
          stance: supports
          locator: CBDB:638164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638164）
          source: &a1
            id: s_9VawLVK8n5s31G2umC3HzX
            source_type: api_record
            title: 中国历代人物传记资料库：王政信（CBDB 638164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638164&o=json
            external_identifier: CBDB:638164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UAvWJw24NE5uGHxMkhSZ6c
        subject_person_id: p_DRzHHRmvf68TWLhTaaCUtC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政信，清人物。籍贯貴定，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 638164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K_dcS8FiIE8FKGN_K6V7QL
          claim_id: c_UAvWJw24NE5uGHxMkhSZ6c
          source_id: s_9VawLVK8n5s31G2umC3HzX
          stance: supports
          locator: CBDB:638164
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

# 王政信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政信 | accepted |
| bio.summary | 王政信，清人物。籍贯貴定，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 638164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政信（CBDB 638164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638164&o=json)
