---
schema: wang-person/v1
id: p_AdKipHPpgb7LqWLAgDN3XB
status: active
merged_into: null
display_name: 王績
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2bPYbSmArbBgny2WejNaM8
        subject_person_id: p_AdKipHPpgb7LqWLAgDN3XB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KzJq9aw2xPT9DrjLvMr3mC
          claim_id: c_2bPYbSmArbBgny2WejNaM8
          source_id: s_pWJ5nvGTJKQ6fwJmS9QA6i
          stance: supports
          locator: CBDB:288739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288739）
          source: &a1
            id: s_pWJ5nvGTJKQ6fwJmS9QA6i
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 288739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288739&o=json
            external_identifier: CBDB:288739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E6QZB6UrntpNJaBpoFAt8f
        subject_person_id: p_AdKipHPpgb7LqWLAgDN3XB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288739）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nND50_wPPu3nDjlywPQRzq
          claim_id: c_E6QZB6UrntpNJaBpoFAt8f
          source_id: s_pWJ5nvGTJKQ6fwJmS9QA6i
          stance: supports
          locator: CBDB:288739
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

# 王績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績 | accepted |
| bio.summary | 王績，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王績（CBDB 288739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288739&o=json)
