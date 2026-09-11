---
schema: wang-person/v1
id: p_8WVJEdZ51ffa2JFnSSwFyK
status: active
merged_into: null
display_name: 王子某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KNy6HD5P8JNvWv6MWLZ1ns
        subject_person_id: p_8WVJEdZ51ffa2JFnSSwFyK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EgDLP2xJs7cdZLAAGH27f2
          claim_id: c_KNy6HD5P8JNvWv6MWLZ1ns
          source_id: s_ZtJoArxF6emwkrGPg5fEJS
          stance: supports
          locator: CBDB:329991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329991）
          source: &a1
            id: s_ZtJoArxF6emwkrGPg5fEJS
            source_type: api_record
            title: 中国历代人物传记资料库：王子某（CBDB 329991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329991&o=json
            external_identifier: CBDB:329991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_URttkdCe8TvukoC2xASZLr
        subject_person_id: p_8WVJEdZ51ffa2JFnSSwFyK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子某，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cEO2AXVyEaVA0lrXHweL4B
          claim_id: c_URttkdCe8TvukoC2xASZLr
          source_id: s_ZtJoArxF6emwkrGPg5fEJS
          stance: supports
          locator: CBDB:329991
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

# 王子某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子某 | accepted |
| bio.summary | 王子某，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子某（CBDB 329991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329991&o=json)
