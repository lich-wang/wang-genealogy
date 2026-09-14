---
schema: wang-person/v1
id: p_JHd1dbRRqH3Th43iGZ7ZnX
status: active
merged_into: null
display_name: 王世繩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jg2oPJKcUJ2oMKLiKcuC65
        subject_person_id: p_JHd1dbRRqH3Th43iGZ7ZnX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世繩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CYB5g8ABAQAXnb3q1yQ2GM
          claim_id: c_Jg2oPJKcUJ2oMKLiKcuC65
          source_id: s_BGAGtJTNHMwAaQzLYxBgJY
          stance: supports
          locator: CBDB:695107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695107）
          source: &a1
            id: s_BGAGtJTNHMwAaQzLYxBgJY
            source_type: api_record
            title: 中国历代人物传记资料库：王世繩（CBDB 695107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695107&o=json
            external_identifier: CBDB:695107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TbH5ihuPsfeMvqb5oNBgW5
        subject_person_id: p_JHd1dbRRqH3Th43iGZ7ZnX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世繩，清人物。籍贯蘇州府，曾任道員。（中国历代人物传记资料库 CBDB 695107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O_7DIeBRSYXVt1iFzyRX-3
          claim_id: c_TbH5ihuPsfeMvqb5oNBgW5
          source_id: s_BGAGtJTNHMwAaQzLYxBgJY
          stance: supports
          locator: CBDB:695107
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
  other:
    - claim:
        id: c_PYm9bdsV-vVKUXPNm57iPu
        subject_person_id: p_JHd1dbRRqH3Th43iGZ7ZnX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bBTDCYyEN7QNJKtoHHvtgC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xfkW3ObmsHrKntXZyrOYzx
          claim_id: c_PYm9bdsV-vVKUXPNm57iPu
          source_id: s_9Nve5Q6QoEQGSYCWctQQev
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67711 王世琛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9Nve5Q6QoEQGSYCWctQQev
            source_type: api_record
            title: 中国历代人物传记资料库：王世繩（CBDB 695107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695107&o=json
            external_identifier: CBDB:695107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bBTDCYyEN7QNJKtoHHvtgC
        status: active
        display_name: 王世琛
        merged_into_person_id: null
---

# 王世繩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世繩 | accepted |
| bio.summary | 王世繩，清人物。籍贯蘇州府，曾任道員。（中国历代人物传记资料库 CBDB 695107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_bBTDCYyEN7QNJKtoHHvtgC | 王世琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世繩（CBDB 695107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695107&o=json)
