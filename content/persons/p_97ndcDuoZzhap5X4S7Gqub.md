---
schema: wang-person/v1
id: p_97ndcDuoZzhap5X4S7Gqub
status: active
merged_into: null
display_name: 王筠貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qX5UzjBQ2hRyTC7MYxA95R
        subject_person_id: p_97ndcDuoZzhap5X4S7Gqub
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hC2JFDQv5c8emzyjN6vDoG
          claim_id: c_qX5UzjBQ2hRyTC7MYxA95R
          source_id: s_RCtSDsMQWZTJKCQ9p4W4Hk
          stance: supports
          locator: CBDB:568770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568770）
          source: &a1
            id: s_RCtSDsMQWZTJKCQ9p4W4Hk
            source_type: api_record
            title: 中国历代人物传记资料库：王筠貞（CBDB 568770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568770&o=json
            external_identifier: CBDB:568770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DfNudQgFcmZt7gRs6URouM
        subject_person_id: p_97ndcDuoZzhap5X4S7Gqub
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠貞，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 568770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ODEIADvYgz-cFzHzfnqqDu
          claim_id: c_DfNudQgFcmZt7gRs6URouM
          source_id: s_RCtSDsMQWZTJKCQ9p4W4Hk
          stance: supports
          locator: CBDB:568770
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

# 王筠貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筠貞 | accepted |
| bio.summary | 王筠貞，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 568770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筠貞（CBDB 568770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568770&o=json)
