---
schema: wang-person/v1
id: p_JPAESna4EE9p8VuH1GHtxr
status: active
merged_into: null
display_name: 王端
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LqQRn6vw4EKh6ZKSRM2cjK
        subject_person_id: p_JPAESna4EE9p8VuH1GHtxr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p41VQ9CM6cgQW2js9NMsXT
          claim_id: c_LqQRn6vw4EKh6ZKSRM2cjK
          source_id: s_TWZEZfgfGcHBDAgWV8zJf7
          stance: supports
          locator: CBDB:141562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141562）
          source: &a1
            id: s_TWZEZfgfGcHBDAgWV8zJf7
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 141562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141562&o=json
            external_identifier: CBDB:141562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RxLNBRFZNPGkxuPtT3FhTE
        subject_person_id: p_JPAESna4EE9p8VuH1GHtxr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLv5g1w9YBp8fL2rzqcwrf
          claim_id: c_RxLNBRFZNPGkxuPtT3FhTE
          source_id: s_TWZEZfgfGcHBDAgWV8zJf7
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
        id: c_b7pLH9ALtAVcNB8dWt1Act
        subject_person_id: p_JPAESna4EE9p8VuH1GHtxr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端（卒于824年），唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 141562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d7lNemNaGHnyOmi8wXfu-W
          claim_id: c_b7pLH9ALtAVcNB8dWt1Act
          source_id: s_TWZEZfgfGcHBDAgWV8zJf7
          stance: supports
          locator: CBDB:141562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dw664uslV51snO0_fcPNiS
        subject_person_id: p_JPAESna4EE9p8VuH1GHtxr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZS699DWbmtcbekd4QN9VM8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3cJRGk-lYdgwhKu2_nYNX
          claim_id: c_dw664uslV51snO0_fcPNiS
          source_id: s_TWZEZfgfGcHBDAgWV8zJf7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZS699DWbmtcbekd4QN9VM8
        status: active
        display_name: 王慶元
        merged_into_person_id: null
    - claim:
        id: c_6ektbX4R_EKGEJn7BsfZyP
        subject_person_id: p_JPAESna4EE9p8VuH1GHtxr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2JGKheEYqb6ZL2PvqfuVXH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUHSHmfFgeQZqqpLFcGG2U
          claim_id: c_6ektbX4R_EKGEJn7BsfZyP
          source_id: s_m6UQQT8PPhRgVZkJQeyW5P
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m6UQQT8PPhRgVZkJQeyW5P
            source_type: api_record
            title: 中国历代人物传记资料库：王五四子（CBDB 157448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157448&o=json
            external_identifier: CBDB:157448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2JGKheEYqb6ZL2PvqfuVXH
        status: active
        display_name: 王五四子
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_p4urXju-ctICIt13V2C3ac
        subject_person_id: p_JPAESna4EE9p8VuH1GHtxr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UncMzzpjWKz2GSiZGV6B7w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBlPmJ_fIhXocKp8-KRtih
          claim_id: c_p4urXju-ctICIt13V2C3ac
          source_id: s_d-KoSytue7doG-oHbNmVzH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d-KoSytue7doG-oHbNmVzH
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王端妻)（CBDB 157447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157447&o=json
            external_identifier: CBDB:157447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UncMzzpjWKz2GSiZGV6B7w
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| death.date | 824年 | accepted |
| bio.summary | 王端（卒于824年），唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 141562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZS699DWbmtcbekd4QN9VM8 | 王慶元 | accepted |
| children | p_2JGKheEYqb6ZL2PvqfuVXH | 王五四子 | accepted |
| spouses | p_UncMzzpjWKz2GSiZGV6B7w | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王端妻)（CBDB 157447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157447&o=json)
- [中国历代人物传记资料库：王端（CBDB 141562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141562&o=json)
- [中国历代人物传记资料库：王五四子（CBDB 157448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157448&o=json)
