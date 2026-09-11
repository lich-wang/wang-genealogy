---
schema: wang-person/v1
id: p_QfJB6kHdWiEPHQYHnuHvBt
status: active
merged_into: null
display_name: 錢氏
revision: 1
cbdb_id: 311209
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DuUq87Rx9sfx8geTVH1O4N
        subject_person_id: p_QfJB6kHdWiEPHQYHnuHvBt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 錢氏，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 311209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0QUk_Nda1EqRJVFh6Bco5A
          claim_id: c_DuUq87Rx9sfx8geTVH1O4N
          source_id: s_-aD0YnfCFu7PYsa-lAGE2k
          stance: supports
          locator: CBDB:311209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_-aD0YnfCFu7PYsa-lAGE2k
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王任用妻)（CBDB 311209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311209&o=json
            external_identifier: CBDB:311209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_epxphrEW2aameiWDowmJNu
        subject_person_id: p_QfJB6kHdWiEPHQYHnuHvBt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 錢氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nj-kibDe5jdjfS8LFjMYtR
          claim_id: c_epxphrEW2aameiWDowmJNu
          source_id: s_-aD0YnfCFu7PYsa-lAGE2k
          stance: supports
          locator: CBDB:311209
          quotation: null
          interpretation_note: CBDB 明确记录的王任用配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yvTy9gJD776bN4qQI5i_84
        subject_person_id: p_QfJB6kHdWiEPHQYHnuHvBt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpeLnTW7Ul4nRaodw2JXFF
          claim_id: c_yvTy9gJD776bN4qQI5i_84
          source_id: s_-aD0YnfCFu7PYsa-lAGE2k
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：丈夫
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_18GnPkpUEcGNgbFCDg5gah
        status: active
        display_name: 王任用
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 錢氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 錢氏，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 311209） | accepted |
| name.primary | 錢氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_18GnPkpUEcGNgbFCDg5gah | 王任用 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王任用妻)（CBDB 311209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311209&o=json)
