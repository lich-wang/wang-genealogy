---
schema: wang-person/v1
id: p_XHyvJtE4AFhgXPWDApbS3G
status: active
merged_into: null
display_name: 王恮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V6bjNBaiZryKLE3xmAZs6r
        subject_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1gEuuhQdcjpdNv7ujjaMK4
          claim_id: c_V6bjNBaiZryKLE3xmAZs6r
          source_id: s_Y7jgU7obp3joiQTiG7RX7A
          stance: supports
          locator: CBDB:190093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190093）
          source: &a1
            id: s_Y7jgU7obp3joiQTiG7RX7A
            source_type: api_record
            title: 中国历代人物传记资料库：王恮（CBDB 190093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190093&o=json
            external_identifier: CBDB:190093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8awNFfM9zoDyQF4acVLHm6
        subject_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 757年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLH7U9PGBAsw7w2hFwiut1
          claim_id: c_8awNFfM9zoDyQF4acVLHm6
          source_id: s_Y7jgU7obp3joiQTiG7RX7A
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
        id: c_x6WKTtBsv2XRVs4JseH6uV
        subject_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恮（卒于757年），唐人物。籍贯洛陽，曾任縣尉。（中国历代人物传记资料库 CBDB 190093）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8a0A-rX9SgsKX8jF_MtEIy
          claim_id: c_x6WKTtBsv2XRVs4JseH6uV
          source_id: s_Y7jgU7obp3joiQTiG7RX7A
          stance: supports
          locator: CBDB:190093
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HPxd_X-jWLSo1DNu5m6osn
        subject_person_id: p_myRnGzqa4fWXQzfQ29jzyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1yV0wR4QHQX-wFhbvhQx-y
          claim_id: c_HPxd_X-jWLSo1DNu5m6osn
          source_id: s_8opmz4VDSirXQ13d1RPhyw
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8opmz4VDSirXQ13d1RPhyw
            source_type: api_record
            title: 中国历代人物传记资料库：王劇（CBDB 190094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190094&o=json
            external_identifier: CBDB:190094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_myRnGzqa4fWXQzfQ29jzyH
        status: active
        display_name: 王劇
        merged_into_person_id: null
  children:
    - claim:
        id: c_mRZ1zL0Evx4YaWOYF5Y1l1
        subject_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_11iWb9gejmcDFDWm3HpHGM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5CX7Viz5HAqTZ1-qgtgnPc
          claim_id: c_mRZ1zL0Evx4YaWOYF5Y1l1
          source_id: s_JwJg4KSdMxVaso6UMnYtH5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 27873：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JwJg4KSdMxVaso6UMnYtH5
            source_type: api_record
            title: 中国历代人物传记资料库：王彪（CBDB 190092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190092&o=json
            external_identifier: CBDB:190092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11iWb9gejmcDFDWm3HpHGM
        status: active
        display_name: 王彪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恮 | accepted |
| death.date | 757年 | accepted |
| bio.summary | 王恮（卒于757年），唐人物。籍贯洛陽，曾任縣尉。（中国历代人物传记资料库 CBDB 190093） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_myRnGzqa4fWXQzfQ29jzyH | 王劇 | accepted |
| children | p_11iWb9gejmcDFDWm3HpHGM | 王彪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彪（CBDB 190092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190092&o=json)
- [中国历代人物传记资料库：王劇（CBDB 190094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190094&o=json)
- [中国历代人物传记资料库：王恮（CBDB 190093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190093&o=json)
