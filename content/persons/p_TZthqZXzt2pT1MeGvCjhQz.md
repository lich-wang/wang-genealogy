---
schema: wang-person/v1
id: p_TZthqZXzt2pT1MeGvCjhQz
status: active
merged_into: null
display_name: 王贇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujihEtXCxpU8CCQbss74Wt
        subject_person_id: p_TZthqZXzt2pT1MeGvCjhQz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TCd3pDoSP2JihUwnNWNB62
          claim_id: c_ujihEtXCxpU8CCQbss74Wt
          source_id: s_pAarNc1uiNvbgzex2uutmh
          stance: supports
          locator: CBDB:579097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（579097）
          source: &a1
            id: s_pAarNc1uiNvbgzex2uutmh
            source_type: api_record
            title: 中国历代人物传记资料库：王贇（CBDB 579097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579097&o=json
            external_identifier: CBDB:579097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ErSuWFx9BV5ET1Xr1rVFSp
        subject_person_id: p_TZthqZXzt2pT1MeGvCjhQz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇，明人物。籍贯固始，入仕監生。（中国历代人物传记资料库 CBDB 579097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tMacEtqtcjz8-BM9okLlqC
          claim_id: c_ErSuWFx9BV5ET1Xr1rVFSp
          source_id: s_pAarNc1uiNvbgzex2uutmh
          stance: supports
          locator: CBDB:579097
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

# 王贇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贇 | accepted |
| bio.summary | 王贇，明人物。籍贯固始，入仕監生。（中国历代人物传记资料库 CBDB 579097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贇（CBDB 579097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579097&o=json)
