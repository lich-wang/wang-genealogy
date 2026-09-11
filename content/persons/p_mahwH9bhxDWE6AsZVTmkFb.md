---
schema: wang-person/v1
id: p_mahwH9bhxDWE6AsZVTmkFb
status: active
merged_into: null
display_name: 王道行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_actby4vDAdRAFo4rqgxVZH
        subject_person_id: p_mahwH9bhxDWE6AsZVTmkFb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MsLSnzssc2FG73gPesznDD
          claim_id: c_actby4vDAdRAFo4rqgxVZH
          source_id: s_vriEuLidWYQiUscF7idHss
          stance: supports
          locator: CBDB:459279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459279）
          source: &a1
            id: s_vriEuLidWYQiUscF7idHss
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 459279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459279&o=json
            external_identifier: CBDB:459279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NbW2ABHc3m9KFHpLpSwTik
        subject_person_id: p_mahwH9bhxDWE6AsZVTmkFb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行，明人物。曾任知府。（中国历代人物传记资料库 CBDB 459279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G7-PfCZDVjTeGXGxeAqEO_
          claim_id: c_NbW2ABHc3m9KFHpLpSwTik
          source_id: s_vriEuLidWYQiUscF7idHss
          stance: supports
          locator: CBDB:459279
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

# 王道行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道行 | accepted |
| bio.summary | 王道行，明人物。曾任知府。（中国历代人物传记资料库 CBDB 459279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道行（CBDB 459279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459279&o=json)
