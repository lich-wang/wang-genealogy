---
schema: wang-person/v1
id: p_qSdWuotWy1sXybU1vB7bqH
status: active
merged_into: null
display_name: 王機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KR7NRkf1YEGuUSaqEQHDq8
        subject_person_id: p_qSdWuotWy1sXybU1vB7bqH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69i48yqggcXKkmLHHhcvp7
          claim_id: c_KR7NRkf1YEGuUSaqEQHDq8
          source_id: s_NJbBH8DoLsCedneXHnJrRj
          stance: supports
          locator: CBDB:501185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501185）
          source: &a1
            id: s_NJbBH8DoLsCedneXHnJrRj
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 501185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501185&o=json
            external_identifier: CBDB:501185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nH4HmXeenwqfE738F8vaqG
        subject_person_id: p_qSdWuotWy1sXybU1vB7bqH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王機，清人物。入仕貢生: 納貢(例貢,增貢,捐貢)，曾任訓導。（中国历代人物传记资料库 CBDB 501185）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_neL16M68mp26b_J7McrFrB
          claim_id: c_nH4HmXeenwqfE738F8vaqG
          source_id: s_NJbBH8DoLsCedneXHnJrRj
          stance: supports
          locator: CBDB:501185
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

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| bio.summary | 王機，清人物。入仕貢生: 納貢(例貢,增貢,捐貢)，曾任訓導。（中国历代人物传记资料库 CBDB 501185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 501185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501185&o=json)
