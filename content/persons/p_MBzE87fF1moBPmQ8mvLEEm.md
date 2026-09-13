---
schema: wang-person/v1
id: p_MBzE87fF1moBPmQ8mvLEEm
status: active
merged_into: null
display_name: 王豫立
cbdb_id: 342055
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_efbX4n7mpV5hP57w6M1zN5
        subject_person_id: p_MBzE87fF1moBPmQ8mvLEEm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫立，明人物。明清進士進士，籍贯涇陽，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 342055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jiuWWvDmD07dyZ8UqEyVYC
          claim_id: c_efbX4n7mpV5hP57w6M1zN5
          source_id: s_hBcf8Ha7FW26cg4LoyZ3ie
          stance: supports
          locator: CBDB:342055
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hBcf8Ha7FW26cg4LoyZ3ie
            source_type: api_record
            title: 中国历代人物传记资料库：王豫立（CBDB 342055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342055&o=json
            external_identifier: CBDB:342055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:09.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xE5vdqEukwNB9YMmBbfDLP
        subject_person_id: p_MBzE87fF1moBPmQ8mvLEEm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZnJb7SCRDAakaBuvPrY1TA
          claim_id: c_xE5vdqEukwNB9YMmBbfDLP
          source_id: s_hBcf8Ha7FW26cg4LoyZ3ie
          stance: supports
          locator: CBDB:342055
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4101-4200）｜历史性依据：CBDB 朝代 = 明
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

# 王豫立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王豫立，明人物。明清進士進士，籍贯涇陽，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 342055） | accepted |
| name.primary | 王豫立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豫立（CBDB 342055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342055&o=json)
