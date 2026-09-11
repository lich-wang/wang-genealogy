---
schema: wang-person/v1
id: p_Ewn83ivk7rEJq9gScxNHis
status: active
merged_into: null
display_name: 王宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3twuT73pBk2jibpGPEZ4q
        subject_person_id: p_Ewn83ivk7rEJq9gScxNHis
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KGqv17gH7dizPAEg8TAjTM
          claim_id: c_z3twuT73pBk2jibpGPEZ4q
          source_id: s_xuzVtfT36pv13ToywMQywR
          stance: supports
          locator: CBDB:270457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270457）
          source: &a1
            id: s_xuzVtfT36pv13ToywMQywR
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 270457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json
            external_identifier: CBDB:270457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5tF64W8v9Jcn99usGubNXQ
        subject_person_id: p_Ewn83ivk7rEJq9gScxNHis
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t1Slm2JwfRkAkJ6vV_Nuj-
          claim_id: c_5tF64W8v9Jcn99usGubNXQ
          source_id: s_xuzVtfT36pv13ToywMQywR
          stance: supports
          locator: CBDB:270457
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

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| bio.summary | 王宇，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270457） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 270457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json)
