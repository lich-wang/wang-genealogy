---
schema: wang-person/v1
id: p_hXbwdQso8DpKDNb6EbWu8f
status: active
merged_into: null
display_name: 王裕勤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rsm4gE83NiMdCKNHM414Wg
        subject_person_id: p_hXbwdQso8DpKDNb6EbWu8f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQ1ALA1Kcpe14n4dfLEozP
          claim_id: c_rsm4gE83NiMdCKNHM414Wg
          source_id: s_yqzzkN4jLWLehegxh6Af9m
          stance: supports
          locator: CBDB:640212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640212）
          source: &a1
            id: s_yqzzkN4jLWLehegxh6Af9m
            source_type: api_record
            title: 中国历代人物传记资料库：王裕勤（CBDB 640212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640212&o=json
            external_identifier: CBDB:640212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BxjHJ84ia8FXLXbeenTRfB
        subject_person_id: p_hXbwdQso8DpKDNb6EbWu8f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕勤，清人物。籍贯仁和，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t7wskEnnXufa7SEtqsbJhc
          claim_id: c_BxjHJ84ia8FXLXbeenTRfB
          source_id: s_yqzzkN4jLWLehegxh6Af9m
          stance: supports
          locator: CBDB:640212
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

# 王裕勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕勤 | accepted |
| bio.summary | 王裕勤，清人物。籍贯仁和，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕勤（CBDB 640212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640212&o=json)
