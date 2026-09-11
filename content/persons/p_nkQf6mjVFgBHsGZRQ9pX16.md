---
schema: wang-person/v1
id: p_nkQf6mjVFgBHsGZRQ9pX16
status: active
merged_into: null
display_name: 王式
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XsPNKdaBUSuVT8jAxhSqLh
        subject_person_id: p_nkQf6mjVFgBHsGZRQ9pX16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LNNtxzBkfpy4DgreA7E6Kx
          claim_id: c_XsPNKdaBUSuVT8jAxhSqLh
          source_id: s_mLw5EuTGde6UDfQvQiDVJL
          stance: supports
          locator: CBDB:185869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185869）
          source: &a1
            id: s_mLw5EuTGde6UDfQvQiDVJL
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 185869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185869&o=json
            external_identifier: CBDB:185869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_12kNoaurRUcLoPaRA7GmGL
        subject_person_id: p_nkQf6mjVFgBHsGZRQ9pX16
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_atUns6bMxHVFTow1CxJxMF
          claim_id: c_12kNoaurRUcLoPaRA7GmGL
          source_id: s_mLw5EuTGde6UDfQvQiDVJL
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
        id: c_8Ak5Jo24dTQNyogw7dGqzp
        subject_person_id: p_nkQf6mjVFgBHsGZRQ9pX16
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式（卒于842年），唐人物。曾任縣尉。（中国历代人物传记资料库 CBDB 185869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_smtsROCbKg1wTcDzzvc3hQ
          claim_id: c_8Ak5Jo24dTQNyogw7dGqzp
          source_id: s_mLw5EuTGde6UDfQvQiDVJL
          stance: supports
          locator: CBDB:185869
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
  spouses:
    - claim:
        id: c_zdZTk40FToERP8njS_eOnR
        subject_person_id: p_nkQf6mjVFgBHsGZRQ9pX16
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VN31uWhY9QBmtG4fRRJCLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96nsv0vjdqrUIRNzOzdBPC
          claim_id: c_zdZTk40FToERP8njS_eOnR
          source_id: s_d-fd-_tAw2Lmwu0i6z7M1E
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d-fd-_tAw2Lmwu0i6z7M1E
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(曹萬女)（CBDB 141558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141558&o=json
            external_identifier: CBDB:141558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VN31uWhY9QBmtG4fRRJCLD
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式 | accepted |
| death.date | 842年 | accepted |
| bio.summary | 王式（卒于842年），唐人物。曾任縣尉。（中国历代人物传记资料库 CBDB 185869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VN31uWhY9QBmtG4fRRJCLD | 曹氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(曹萬女)（CBDB 141558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141558&o=json)
- [中国历代人物传记资料库：王式（CBDB 185869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185869&o=json)
