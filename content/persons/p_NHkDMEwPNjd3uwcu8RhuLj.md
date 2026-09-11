---
schema: wang-person/v1
id: p_NHkDMEwPNjd3uwcu8RhuLj
status: active
merged_into: null
display_name: 王芬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y3uvjHGD21kh8Y3P8wAEoJ
        subject_person_id: p_NHkDMEwPNjd3uwcu8RhuLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_paompiC1hpgd1m3JfVLWss
          claim_id: c_y3uvjHGD21kh8Y3P8wAEoJ
          source_id: s_KixvULgZfR7RjpyrSPcYyS
          stance: supports
          locator: CBDB:568640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568640）
          source: &a1
            id: s_KixvULgZfR7RjpyrSPcYyS
            source_type: api_record
            title: 中国历代人物传记资料库：王芬（CBDB 568640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568640&o=json
            external_identifier: CBDB:568640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eZwpfMHaGJ7nVN9x4vAmSG
        subject_person_id: p_NHkDMEwPNjd3uwcu8RhuLj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芬，清人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 568640）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4oGoJZegEr1rLfU5mQmIr6
          claim_id: c_eZwpfMHaGJ7nVN9x4vAmSG
          source_id: s_KixvULgZfR7RjpyrSPcYyS
          stance: supports
          locator: CBDB:568640
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

# 王芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芬 | accepted |
| bio.summary | 王芬，清人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 568640） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芬（CBDB 568640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568640&o=json)
