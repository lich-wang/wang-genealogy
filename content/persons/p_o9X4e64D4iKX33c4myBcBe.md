---
schema: wang-person/v1
id: p_o9X4e64D4iKX33c4myBcBe
status: active
merged_into: null
display_name: 王繼禮
cbdb_id: 202226
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4sp363k1krF9LNtXRy6oX5
        subject_person_id: p_o9X4e64D4iKX33c4myBcBe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼禮（生于1480年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202226 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_0ANRuWwbn5-_YX_cidEoXW
          claim_id: c_4sp363k1krF9LNtXRy6oX5
          source_id: s_H6v7ecirNSt9PshND7WT82
          stance: supports
          locator: CBDB:202226
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_H6v7ecirNSt9PshND7WT82
            source_type: api_record
            title: 中国历代人物传记资料库：王繼禮（CBDB 202226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202226&o=json
            external_identifier: CBDB:202226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aDExK17j4UyP84kFAkk9Fp
        subject_person_id: p_o9X4e64D4iKX33c4myBcBe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1480年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1480-01-01
            latest: 1480-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uy6AL9vkzBDBKxFAs7tNnj
          claim_id: c_aDExK17j4UyP84kFAkk9Fp
          source_id: s_H6v7ecirNSt9PshND7WT82
          stance: supports
          locator: CBDB:202226
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1480
          source:
            id: s_H6v7ecirNSt9PshND7WT82
            source_type: api_record
            title: 中国历代人物传记资料库：王繼禮（CBDB 202226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202226&o=json
            external_identifier: CBDB:202226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CYti5QLpiFb83NuErfLT84
        subject_person_id: p_o9X4e64D4iKX33c4myBcBe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V5dpmBXv1c8HhXfQsawWAL
          claim_id: c_CYti5QLpiFb83NuErfLT84
          source_id: s_H6v7ecirNSt9PshND7WT82
          stance: supports
          locator: CBDB:202226
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1480
          source:
            id: s_H6v7ecirNSt9PshND7WT82
            source_type: api_record
            title: 中国历代人物传记资料库：王繼禮（CBDB 202226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202226&o=json
            external_identifier: CBDB:202226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FgXHtqwHhit64ooI3LUg_r
        subject_person_id: p_DvsaKspxRerxZLHeLLb8JP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o9X4e64D4iKX33c4myBcBe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SbSOKE0bKgbCD4c6jmIkyR
          claim_id: c_FgXHtqwHhit64ooI3LUg_r
          source_id: s_VrU1a1CRdwaPsTAvoLd5fP
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百一十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VrU1a1CRdwaPsTAvoLd5fP
            source_type: api_record
            title: 中国历代人物传记资料库：王景惠（CBDB 285304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285304&o=json
            external_identifier: CBDB:285304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DvsaKspxRerxZLHeLLb8JP
        status: active
        display_name: 王景惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o-3igfWnx-xDL6rlaQmRQl
        subject_person_id: p_7LTXKnc7tgbyWn2kq2c1gJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o9X4e64D4iKX33c4myBcBe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iab5Z17MrmQDyxha3trxA3
          claim_id: c_o-3igfWnx-xDL6rlaQmRQl
          source_id: s_1W8kE8oJ4E9W3JKdLy74oz
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1W8kE8oJ4E9W3JKdLy74oz
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 285302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285302&o=json
            external_identifier: CBDB:285302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7LTXKnc7tgbyWn2kq2c1gJ
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_KRZU4EIhUWXdAf6zHSOzW9
        subject_person_id: p_duEYPd8tk8kscAB9VHYH8y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o9X4e64D4iKX33c4myBcBe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_osj6j_w8cqZl1Lu6N7tw0v
          claim_id: c_KRZU4EIhUWXdAf6zHSOzW9
          source_id: s_R3o9yuhqRyVmvfq5osugXV
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R3o9yuhqRyVmvfq5osugXV
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 285303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285303&o=json
            external_identifier: CBDB:285303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_duEYPd8tk8kscAB9VHYH8y
        status: active
        display_name: 王雄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼禮（生于1480年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202226 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1480年 | accepted |
| name.primary | 王繼禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DvsaKspxRerxZLHeLLb8JP | 王景惠 | accepted |
| ancestors | p_7LTXKnc7tgbyWn2kq2c1gJ | 王貴 | accepted |
| ancestors | p_duEYPd8tk8kscAB9VHYH8y | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 285302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285302&o=json)
- [中国历代人物传记资料库：王繼禮（CBDB 202226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202226&o=json)
- [中国历代人物传记资料库：王景惠（CBDB 285304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285304&o=json)
- [中国历代人物传记资料库：王雄（CBDB 285303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285303&o=json)
