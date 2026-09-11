---
schema: wang-person/v1
id: p_tH38cTm3D6rSMFpeieP9E7
status: active
merged_into: null
display_name: 王嘉信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DBp16BKfkYAHkWzDadoecd
        subject_person_id: p_tH38cTm3D6rSMFpeieP9E7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Etd177BCH1TtXK57dJ5DSh
          claim_id: c_DBp16BKfkYAHkWzDadoecd
          source_id: s_FLQr4ENhehgNVVgT6SwACG
          stance: supports
          locator: CBDB:698385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698385）
          source: &a1
            id: s_FLQr4ENhehgNVVgT6SwACG
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉信（CBDB 698385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698385&o=json
            external_identifier: CBDB:698385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cz4PD1HYQhZ53c21XiWrPQ
        subject_person_id: p_tH38cTm3D6rSMFpeieP9E7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉信，明人物。籍贯曹州，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698385）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gTTWhkwRkqVdvMRWay_92Y
          claim_id: c_cz4PD1HYQhZ53c21XiWrPQ
          source_id: s_FLQr4ENhehgNVVgT6SwACG
          stance: supports
          locator: CBDB:698385
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

# 王嘉信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉信 | accepted |
| bio.summary | 王嘉信，明人物。籍贯曹州，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698385） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉信（CBDB 698385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698385&o=json)
