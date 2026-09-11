---
schema: wang-person/v1
id: p_cgPk9tURDxvERzcMd1E7oR
status: active
merged_into: null
display_name: 王一翥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KVXWxWkQUZA8XyrauJ1Gvo
        subject_person_id: p_cgPk9tURDxvERzcMd1E7oR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一翥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9wfdf9ar78cABNN2tkhQD9
          claim_id: c_KVXWxWkQUZA8XyrauJ1Gvo
          source_id: s_DoKRWt9DYJsJQHDZG7FXQy
          stance: supports
          locator: CBDB:71309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71309）
          source: &a1
            id: s_DoKRWt9DYJsJQHDZG7FXQy
            source_type: api_record
            title: 中国历代人物传记资料库：王一翥（CBDB 71309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71309&o=json
            external_identifier: CBDB:71309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KPiCTcYfcBivDnrZpJ439i
        subject_person_id: p_cgPk9tURDxvERzcMd1E7oR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1592年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFRCg9YVq8HcU8wb1tipK2
          claim_id: c_KPiCTcYfcBivDnrZpJ439i
          source_id: s_DoKRWt9DYJsJQHDZG7FXQy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gXbCUyT4VkHKAsVMuuq2mT
        subject_person_id: p_cgPk9tURDxvERzcMd1E7oR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fWrMgioQRgY94X5BwMz9dW
          claim_id: c_gXbCUyT4VkHKAsVMuuq2mT
          source_id: s_DoKRWt9DYJsJQHDZG7FXQy
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
        id: c_L78DH7b4b8s3dDw89XKPEJ
        subject_person_id: p_cgPk9tURDxvERzcMd1E7oR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一翥（1592年—1668年），清人物。籍贯黃岡，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 71309）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Pfljo81hN0iM8u2XLl7rb
          claim_id: c_L78DH7b4b8s3dDw89XKPEJ
          source_id: s_DoKRWt9DYJsJQHDZG7FXQy
          stance: supports
          locator: CBDB:71309
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

# 王一翥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一翥 | accepted |
| birth.date | 1592年 | accepted |
| death.date | 1668年 | accepted |
| bio.summary | 王一翥（1592年—1668年），清人物。籍贯黃岡，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 71309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一翥（CBDB 71309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71309&o=json)
