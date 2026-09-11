---
schema: wang-person/v1
id: p_rw3SZ4WX6NQUFQKsyEHVZ4
status: active
merged_into: null
display_name: 王希德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KeoFD99wEqDtAg9mE41BLn
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YQV6B6U7WsryxR9HKm53Yn
          claim_id: c_KeoFD99wEqDtAg9mE41BLn
          source_id: s_gxXazWFAEVKLNVao9MANo2
          stance: supports
          locator: CBDB:296389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296389）
          source: &a1
            id: s_gxXazWFAEVKLNVao9MANo2
            source_type: api_record
            title: 中国历代人物传记资料库：王希德（CBDB 296389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296389&o=json
            external_identifier: CBDB:296389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Nug2AGKRekPS7wMeLY1PS
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希德，明人物。嘉靖十四年進士，籍贯南充，曾任訓導。（中国历代人物传记资料库 CBDB 296389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bXpkaHOODOLlEAMRlrF__w
          claim_id: c_4Nug2AGKRekPS7wMeLY1PS
          source_id: s_gxXazWFAEVKLNVao9MANo2
          stance: supports
          locator: CBDB:296389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_K2nHjZDhdgi6A29tsRlF4N
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bznlL0p90sW9k05hN8yKY
          claim_id: c_K2nHjZDhdgi6A29tsRlF4N
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hSdTPDWiNR5wL1nkYF2yMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 202897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json
            external_identifier: CBDB:202897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希德 | accepted |
| bio.summary | 王希德，明人物。嘉靖十四年進士，籍贯南充，曾任訓導。（中国历代人物传记资料库 CBDB 296389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希德（CBDB 296389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296389&o=json)
- [中国历代人物传记资料库：王遵（CBDB 202897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json)
