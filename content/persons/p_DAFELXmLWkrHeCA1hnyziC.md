---
schema: wang-person/v1
id: p_DAFELXmLWkrHeCA1hnyziC
status: active
merged_into: null
display_name: 王宗陶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMTEaUKaWj1ibREqEMVWU7
        subject_person_id: p_DAFELXmLWkrHeCA1hnyziC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗陶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d6xJJDCKXoR44CaamnXK3k
          claim_id: c_wMTEaUKaWj1ibREqEMVWU7
          source_id: s_g8yc2V9z2SzxGVYJNUbKDr
          stance: supports
          locator: CBDB:637126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637126）
          source: &a1
            id: s_g8yc2V9z2SzxGVYJNUbKDr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗陶（CBDB 637126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637126&o=json
            external_identifier: CBDB:637126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UYQESL74tNwqvHfMJdq67t
        subject_person_id: p_DAFELXmLWkrHeCA1hnyziC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗陶，清人物。籍贯邛州直隸州直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637126）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KnxjY7Eg7zV19qOIRkRtNQ
          claim_id: c_UYQESL74tNwqvHfMJdq67t
          source_id: s_g8yc2V9z2SzxGVYJNUbKDr
          stance: supports
          locator: CBDB:637126
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

# 王宗陶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗陶 | accepted |
| bio.summary | 王宗陶，清人物。籍贯邛州直隸州直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗陶（CBDB 637126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637126&o=json)
