---
schema: wang-person/v1
id: p_8g5ATbUKiNLAjow9bvkPgB
status: active
merged_into: null
display_name: 王珂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qJG6N895mtMS87ExeGKG3W
        subject_person_id: p_8g5ATbUKiNLAjow9bvkPgB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42PP4M86ErsbfBxFFDoVhC
          claim_id: c_qJG6N895mtMS87ExeGKG3W
          source_id: s_xexNDSiYFn21J3m7USZ9Ua
          stance: supports
          locator: CBDB:379457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379457）
          source: &a1
            id: s_xexNDSiYFn21J3m7USZ9Ua
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 379457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379457&o=json
            external_identifier: CBDB:379457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_djxbb6hvHjn2imDijWVHas
        subject_person_id: p_8g5ATbUKiNLAjow9bvkPgB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ye_Te7DlKtKwf4yZrBHYqH
          claim_id: c_djxbb6hvHjn2imDijWVHas
          source_id: s_xexNDSiYFn21J3m7USZ9Ua
          stance: supports
          locator: CBDB:379457
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

# 王珂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珂 | accepted |
| bio.summary | 王珂，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379457） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珂（CBDB 379457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379457&o=json)
