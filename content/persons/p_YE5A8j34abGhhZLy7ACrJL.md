---
schema: wang-person/v1
id: p_YE5A8j34abGhhZLy7ACrJL
status: active
merged_into: null
display_name: 王葆元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gJM53LMW8aLZwqj92HBKNV
        subject_person_id: p_YE5A8j34abGhhZLy7ACrJL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pZSGEk74WCDXg7x33ZcUJF
          claim_id: c_gJM53LMW8aLZwqj92HBKNV
          source_id: s_HwgBXXokza6H7TEm6FCGyV
          stance: supports
          locator: CBDB:640130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640130）
          source: &a1
            id: s_HwgBXXokza6H7TEm6FCGyV
            source_type: api_record
            title: 中国历代人物传记资料库：王葆元（CBDB 640130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640130&o=json
            external_identifier: CBDB:640130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KzPHAmpbo3fXA5JGSnBq3N
        subject_person_id: p_YE5A8j34abGhhZLy7ACrJL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆元，清人物。籍贯鳳陽，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 640130）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7KLvK-4DLBHVudWC02u2cA
          claim_id: c_KzPHAmpbo3fXA5JGSnBq3N
          source_id: s_HwgBXXokza6H7TEm6FCGyV
          stance: supports
          locator: CBDB:640130
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

# 王葆元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆元 | accepted |
| bio.summary | 王葆元，清人物。籍贯鳳陽，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 640130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葆元（CBDB 640130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640130&o=json)
