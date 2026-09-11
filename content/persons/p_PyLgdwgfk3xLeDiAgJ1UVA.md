---
schema: wang-person/v1
id: p_PyLgdwgfk3xLeDiAgJ1UVA
status: active
merged_into: null
display_name: 王德顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8u65Ac6tSLxFBU2jHbQ8QT
        subject_person_id: p_PyLgdwgfk3xLeDiAgJ1UVA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rJMp3G3BHSX3fMhafjqxjM
          claim_id: c_8u65Ac6tSLxFBU2jHbQ8QT
          source_id: s_wjuTCfnESQJye1Ced7qkD1
          stance: supports
          locator: CBDB:342318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342318）
          source: &a1
            id: s_wjuTCfnESQJye1Ced7qkD1
            source_type: api_record
            title: 中国历代人物传记资料库：王德顯（CBDB 342318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342318&o=json
            external_identifier: CBDB:342318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e78c67iERLz6mhKHL7tPzM
        subject_person_id: p_PyLgdwgfk3xLeDiAgJ1UVA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德顯，清人物。明清進士進士，籍贯偃師，入仕進士。（中国历代人物传记资料库 CBDB 342318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M_nd4otkGtkuyemkwc_OEl
          claim_id: c_e78c67iERLz6mhKHL7tPzM
          source_id: s_wjuTCfnESQJye1Ced7qkD1
          stance: supports
          locator: CBDB:342318
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

# 王德顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德顯 | accepted |
| bio.summary | 王德顯，清人物。明清進士進士，籍贯偃師，入仕進士。（中国历代人物传记资料库 CBDB 342318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德顯（CBDB 342318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342318&o=json)
