---
schema: wang-person/v1
id: p_jcMKDmCB17DkkGzGZ1Eoej
status: active
merged_into: null
display_name: 王彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MqLJz7Jy2uf4HzWZWnGLFz
        subject_person_id: p_jcMKDmCB17DkkGzGZ1Eoej
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2H2Z364CPAZ7peQ1cJrEi7
          claim_id: c_MqLJz7Jy2uf4HzWZWnGLFz
          source_id: s_TwuXuF5tC5nMJhmP8xfMY7
          stance: supports
          locator: CBDB:637626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637626）
          source: &a1
            id: s_TwuXuF5tC5nMJhmP8xfMY7
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 637626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637626&o=json
            external_identifier: CBDB:637626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n1nJG2xesUuLtVADTFANLs
        subject_person_id: p_jcMKDmCB17DkkGzGZ1Eoej
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥，清人物。籍贯寧波府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6gBDevaF33TjRmuY4BrgAG
          claim_id: c_n1nJG2xesUuLtVADTFANLs
          source_id: s_TwuXuF5tC5nMJhmP8xfMY7
          stance: supports
          locator: CBDB:637626
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

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | 王彥，清人物。籍贯寧波府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥（CBDB 637626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637626&o=json)
