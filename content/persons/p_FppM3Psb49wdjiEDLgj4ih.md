---
schema: wang-person/v1
id: p_FppM3Psb49wdjiEDLgj4ih
status: active
merged_into: null
display_name: 王子學
cbdb_id: 292313
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hHD97mvmUSCgtdCdcFxMy5
        subject_person_id: p_FppM3Psb49wdjiEDLgj4ih
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子學，明人物。嘉靖十一年進士，籍贯上海，入仕監生。（中国历代人物传记资料库 CBDB 292313）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WlhGWZlB5bXt5B_bj25dUA
          claim_id: c_hHD97mvmUSCgtdCdcFxMy5
          source_id: s_kHmywbA8UQqpSaMFEB4x9N
          stance: supports
          locator: CBDB:292313
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kHmywbA8UQqpSaMFEB4x9N
            source_type: api_record
            title: 中国历代人物传记资料库：王子學（CBDB 292313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292313&o=json
            external_identifier: CBDB:292313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YSqQ9AZ2UG4fmEbzwLmeFq
        subject_person_id: p_FppM3Psb49wdjiEDLgj4ih
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4bH7tSr3GiLV7bSMK1z8Mz
          claim_id: c_YSqQ9AZ2UG4fmEbzwLmeFq
          source_id: s_kHmywbA8UQqpSaMFEB4x9N
          stance: supports
          locator: CBDB:292313
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pVVYU5DnRYRt9JmHSh88oE
        subject_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FppM3Psb49wdjiEDLgj4ih
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OgeD531PlbTFVFaVG8j-OF
          claim_id: c_pVVYU5DnRYRt9JmHSh88oE
          source_id: s_kHmywbA8UQqpSaMFEB4x9N
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kHmywbA8UQqpSaMFEB4x9N
            source_type: api_record
            title: 中国历代人物传记资料库：王子學（CBDB 292313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292313&o=json
            external_identifier: CBDB:292313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XKApWYJnmMgLZmZqtzznxJ
        status: active
        display_name: 王教
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子學，明人物。嘉靖十一年進士，籍贯上海，入仕監生。（中国历代人物传记资料库 CBDB 292313） | accepted |
| name.primary | 王子學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XKApWYJnmMgLZmZqtzznxJ | 王教 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子學（CBDB 292313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292313&o=json)
