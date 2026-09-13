---
schema: wang-person/v1
id: p_LkRMQCrcSdZNrQs8WZEFrB
status: active
merged_into: null
display_name: 王錫縉
cbdb_id: 438388
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5BnvrkfixXmjkgqRBQgkk
        subject_person_id: p_LkRMQCrcSdZNrQs8WZEFrB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫縉（生于1718年），清人物。籍贯榮縣，入仕廩生，曾任同知、縣知縣、府同知。（中国历代人物传记资料库 CBDB 438388）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VknLgfh4YCQyuKYxljWalb
          claim_id: c_n5BnvrkfixXmjkgqRBQgkk
          source_id: s_MSGcMi1GNdhCaoCSN3Zt5p
          stance: supports
          locator: CBDB:438388
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MSGcMi1GNdhCaoCSN3Zt5p
            source_type: api_record
            title: 中国历代人物传记资料库：王錫縉（CBDB 438388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438388&o=json
            external_identifier: CBDB:438388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rehjc32T7m7UroEusANf9f
        subject_person_id: p_LkRMQCrcSdZNrQs8WZEFrB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1718年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1718-01-01
            latest: 1718-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KSwAEqx9SijUQEc2L1mosk
          claim_id: c_rehjc32T7m7UroEusANf9f
          source_id: s_MSGcMi1GNdhCaoCSN3Zt5p
          stance: supports
          locator: CBDB:438388
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1718
          source:
            id: s_MSGcMi1GNdhCaoCSN3Zt5p
            source_type: api_record
            title: 中国历代人物传记资料库：王錫縉（CBDB 438388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438388&o=json
            external_identifier: CBDB:438388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oEGT6iRvYfhoMLF4jmoaXq
        subject_person_id: p_LkRMQCrcSdZNrQs8WZEFrB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uDkxX1PBwdgDF2Do8EtgLV
          claim_id: c_oEGT6iRvYfhoMLF4jmoaXq
          source_id: s_MSGcMi1GNdhCaoCSN3Zt5p
          stance: supports
          locator: CBDB:438388
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1718
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

# 王錫縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錫縉（生于1718年），清人物。籍贯榮縣，入仕廩生，曾任同知、縣知縣、府同知。（中国历代人物传记资料库 CBDB 438388） | accepted |
| birth.date | 1718年 | accepted |
| name.primary | 王錫縉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫縉（CBDB 438388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438388&o=json)
