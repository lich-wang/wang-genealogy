---
schema: wang-person/v1
id: p_33BSYkqP7pcy66S1E7ccPx
status: active
merged_into: null
display_name: 王衷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qumafR279Miq56kjP7LSP5
        subject_person_id: p_33BSYkqP7pcy66S1E7ccPx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Jnu2j1JHDKkm99xmsNKEM
          claim_id: c_qumafR279Miq56kjP7LSP5
          source_id: s_zCnvQLnoEbCCehb88QANFD
          stance: supports
          locator: CBDB:38032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38032）
          source: &a1
            id: s_zCnvQLnoEbCCehb88QANFD
            source_type: api_record
            title: 中国历代人物传记资料库：王衷（CBDB 38032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38032&o=json
            external_identifier: CBDB:38032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6wjM3TnpxmW7NDjVMjjvC5
        subject_person_id: p_33BSYkqP7pcy66S1E7ccPx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1135年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KNkKiXZ5MZXNkQTEF5oihd
          claim_id: c_6wjM3TnpxmW7NDjVMjjvC5
          source_id: s_zCnvQLnoEbCCehb88QANFD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sph81AMJLaQM2c7qAECoBa
        subject_person_id: p_33BSYkqP7pcy66S1E7ccPx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衷（卒于1135年），宋人物。籍贯崇德。（中国历代人物传记资料库 CBDB 38032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zd2Z7IxF9BYDqnlbjIFF7j
          claim_id: c_Sph81AMJLaQM2c7qAECoBa
          source_id: s_zCnvQLnoEbCCehb88QANFD
          stance: supports
          locator: CBDB:38032
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

# 王衷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衷 | accepted |
| death.date | 1135年 | accepted |
| bio.summary | 王衷（卒于1135年），宋人物。籍贯崇德。（中国历代人物传记资料库 CBDB 38032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衷（CBDB 38032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38032&o=json)
