---
schema: wang-person/v1
id: p_hEBYmv8KCyokMEZBF5LznT
status: active
merged_into: null
display_name: 王詩舫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yY9qe4CWzKzqSrCc7sdgCw
        subject_person_id: p_hEBYmv8KCyokMEZBF5LznT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩舫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4G7ty9W56hPCpzjpUiBQpM
          claim_id: c_yY9qe4CWzKzqSrCc7sdgCw
          source_id: s_bABqRfH71fWEivskPnGDj3
          stance: supports
          locator: CBDB:640273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640273）
          source: &a1
            id: s_bABqRfH71fWEivskPnGDj3
            source_type: api_record
            title: 中国历代人物传记资料库：王詩舫（CBDB 640273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640273&o=json
            external_identifier: CBDB:640273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iVHCq2KtBwsaKqW5aB4Sgs
        subject_person_id: p_hEBYmv8KCyokMEZBF5LznT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩舫，清人物。籍贯長沙，入仕軍功補授(軍功)，曾任守備。（中国历代人物传记资料库 CBDB 640273）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9AgEjGdf6vgmxUlJN72KZu
          claim_id: c_iVHCq2KtBwsaKqW5aB4Sgs
          source_id: s_bABqRfH71fWEivskPnGDj3
          stance: supports
          locator: CBDB:640273
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

# 王詩舫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詩舫 | accepted |
| bio.summary | 王詩舫，清人物。籍贯長沙，入仕軍功補授(軍功)，曾任守備。（中国历代人物传记资料库 CBDB 640273） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詩舫（CBDB 640273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640273&o=json)
