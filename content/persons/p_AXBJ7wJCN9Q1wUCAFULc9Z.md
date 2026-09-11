---
schema: wang-person/v1
id: p_AXBJ7wJCN9Q1wUCAFULc9Z
status: active
merged_into: null
display_name: 王宗合
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKq4ToYCaheLHJhcdgYKC2
        subject_person_id: p_AXBJ7wJCN9Q1wUCAFULc9Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗合
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aEaE3BS3dLFPMNL57sBcab
          claim_id: c_HKq4ToYCaheLHJhcdgYKC2
          source_id: s_g8WSLJQ4fEmXuzAu55UoP1
          stance: supports
          locator: CBDB:531196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531196）
          source: &a1
            id: s_g8WSLJQ4fEmXuzAu55UoP1
            source_type: api_record
            title: 中国历代人物传记资料库：王宗合（CBDB 531196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531196&o=json
            external_identifier: CBDB:531196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bghB1Gbm7XTJQJjWK1crMW
        subject_person_id: p_AXBJ7wJCN9Q1wUCAFULc9Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗合，宋人物。籍贯福清，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 531196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yNKy0FX3m8eWRITArKT59g
          claim_id: c_bghB1Gbm7XTJQJjWK1crMW
          source_id: s_g8WSLJQ4fEmXuzAu55UoP1
          stance: supports
          locator: CBDB:531196
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

# 王宗合

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗合 | accepted |
| bio.summary | 王宗合，宋人物。籍贯福清，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 531196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗合（CBDB 531196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531196&o=json)
