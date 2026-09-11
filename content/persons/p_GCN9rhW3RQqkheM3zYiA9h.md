---
schema: wang-person/v1
id: p_GCN9rhW3RQqkheM3zYiA9h
status: active
merged_into: null
display_name: 王繼曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x76RSuMqqAc69nb5aQpUSn
        subject_person_id: p_GCN9rhW3RQqkheM3zYiA9h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kuNRzJ25pm2QLL8VawzaNE
          claim_id: c_x76RSuMqqAc69nb5aQpUSn
          source_id: s_1sJD9iAcFRfZ4ciGUVFU4R
          stance: supports
          locator: CBDB:233447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233447）
          source: &a1
            id: s_1sJD9iAcFRfZ4ciGUVFU4R
            source_type: api_record
            title: 中国历代人物传记资料库：王繼曾（CBDB 233447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233447&o=json
            external_identifier: CBDB:233447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5TFfiqk2hTDBQDzx8Hrzz
        subject_person_id: p_GCN9rhW3RQqkheM3zYiA9h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼曾，明人物。籍贯海鹽，入仕庠生。（中国历代人物传记资料库 CBDB 233447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2v6jZWgib5VJdmXT2TQDZg
          claim_id: c_Q5TFfiqk2hTDBQDzx8Hrzz
          source_id: s_1sJD9iAcFRfZ4ciGUVFU4R
          stance: supports
          locator: CBDB:233447
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

# 王繼曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼曾 | accepted |
| bio.summary | 王繼曾，明人物。籍贯海鹽，入仕庠生。（中国历代人物传记资料库 CBDB 233447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼曾（CBDB 233447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233447&o=json)
