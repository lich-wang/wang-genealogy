---
schema: wang-person/v1
id: p_RCQhQuX7PGCpAotpnDmWLC
status: active
merged_into: null
display_name: 王湘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4UEUKeRNh3vYQ6AHZgjRbu
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UD8Yu1AE4P4LB61zhBvLkD
          claim_id: c_4UEUKeRNh3vYQ6AHZgjRbu
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
          stance: supports
          locator: CBDB:126704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126704）
          source: &a1
            id: s_tgMjMSG5tSMGCFmBHRGq9x
            source_type: api_record
            title: 中国历代人物传记资料库：王湘（CBDB 126704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126704&o=json
            external_identifier: CBDB:126704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZjAw9omzDkeR5ZTGvjG9ZM
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ctz1GnuUASNDVrCGHKH8sC
          claim_id: c_ZjAw9omzDkeR5ZTGvjG9ZM
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
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
        id: c_Nei2oE3L9AFhMY9ML7rmXr
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDBUQ8ykLK4PRAX8myhsbW
          claim_id: c_Nei2oE3L9AFhMY9ML7rmXr
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
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
        id: c_ZJqThTrU4oSpPtGZkSWNpA
        subject_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1x68c7Qp6SCpEbW1uuAEHB
          claim_id: c_ZJqThTrU4oSpPtGZkSWNpA
          source_id: s_tgMjMSG5tSMGCFmBHRGq9x
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
  ancestors:
    - claim:
        id: c_YTuwchK7Um_IE-wF89kJpt
        subject_person_id: p_4gLPUPHoYUNV5YPHPEmiwx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKYjWGunERrPHyzSqYs8nX
          claim_id: c_YTuwchK7Um_IE-wF89kJpt
          source_id: s_6FihFwgL24JFfPdCRm1o5y
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6FihFwgL24JFfPdCRm1o5y
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 331406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331406&o=json
            external_identifier: CBDB:331406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gLPUPHoYUNV5YPHPEmiwx
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_mRTj6s8jewULB9NZ4bpDKy
        subject_person_id: p_GstLTQBoJmwXHptc7U9XE8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCQhQuX7PGCpAotpnDmWLC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f7Ph-rZe8INk9uTef6bQSr
          claim_id: c_mRTj6s8jewULB9NZ4bpDKy
          source_id: s_nmjPWSgfQNBEu1Kw7299rc
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nmjPWSgfQNBEu1Kw7299rc
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 331405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331405&o=json
            external_identifier: CBDB:331405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GstLTQBoJmwXHptc7U9XE8
        status: active
        display_name: 王寧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湘 | accepted |
| birth.date | 1528年 | accepted |
| death.date | 1593年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4gLPUPHoYUNV5YPHPEmiwx | 王宣 | accepted |
| ancestors | p_GstLTQBoJmwXHptc7U9XE8 | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 331405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331405&o=json)
- [中国历代人物传记资料库：王湘（CBDB 126704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126704&o=json)
- [中国历代人物传记资料库：王宣（CBDB 331406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331406&o=json)
