---
schema: wang-person/v1
id: p_HLTuF7QMYKfpQS2VwEgXyc
status: active
merged_into: null
display_name: 王國旺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Styv1wnXfGEDM4W5E4Nzbd
        subject_person_id: p_HLTuF7QMYKfpQS2VwEgXyc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國旺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E8kPEqf8GJA8xgbay4xK8L
          claim_id: c_Styv1wnXfGEDM4W5E4Nzbd
          source_id: s_5CNF9VXKQnD1iQMD8S6Tyr
          stance: supports
          locator: CBDB:557867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557867）
          source: &a1
            id: s_5CNF9VXKQnD1iQMD8S6Tyr
            source_type: api_record
            title: 中国历代人物传记资料库：王國旺（CBDB 557867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557867&o=json
            external_identifier: CBDB:557867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Rot7wHfWAn1ojPdjHPBZK
        subject_person_id: p_HLTuF7QMYKfpQS2VwEgXyc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國旺，清人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557867）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lR56LsPqai_SLgch61K35C
          claim_id: c_3Rot7wHfWAn1ojPdjHPBZK
          source_id: s_5CNF9VXKQnD1iQMD8S6Tyr
          stance: supports
          locator: CBDB:557867
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

# 王國旺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國旺 | accepted |
| bio.summary | 王國旺，清人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國旺（CBDB 557867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557867&o=json)
