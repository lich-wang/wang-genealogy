---
schema: wang-person/v1
id: p_9yhsbk8smFEK1EstLS7Wbr
status: active
merged_into: null
display_name: 王䤴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82SxhXpg5mpb6jB6TmgCuK
        subject_person_id: p_9yhsbk8smFEK1EstLS7Wbr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䤴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M6ZjgjCL1bwGSUjgLbKs7A
          claim_id: c_82SxhXpg5mpb6jB6TmgCuK
          source_id: s_fUSeTz2yi1yKGfmR5UXy1J
          stance: supports
          locator: CBDB:71253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71253）
          source: &a1
            id: s_fUSeTz2yi1yKGfmR5UXy1J
            source_type: api_record
            title: 中国历代人物传记资料库：王䤴（CBDB 71253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71253&o=json
            external_identifier: CBDB:71253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oeFgiKhmN4LKtdkHD2WEF5
        subject_person_id: p_9yhsbk8smFEK1EstLS7Wbr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpvUzRdHU5KB4U5b7eEKFm
          claim_id: c_oeFgiKhmN4LKtdkHD2WEF5
          source_id: s_fUSeTz2yi1yKGfmR5UXy1J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Db9zFLRZ3MWKtbNeVs3gEE
        subject_person_id: p_9yhsbk8smFEK1EstLS7Wbr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHPDfeQcxCcTsFHqL1wZbR
          claim_id: c_Db9zFLRZ3MWKtbNeVs3gEE
          source_id: s_fUSeTz2yi1yKGfmR5UXy1J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王䤴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王䤴 | accepted |
| birth.date | 1626年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王䤴（CBDB 71253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71253&o=json)
