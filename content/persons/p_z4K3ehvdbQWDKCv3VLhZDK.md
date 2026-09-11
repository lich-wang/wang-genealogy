---
schema: wang-person/v1
id: p_z4K3ehvdbQWDKCv3VLhZDK
status: active
merged_into: null
display_name: 王可學
cbdb_id: 201954
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GnvkXhQxog6ouD1o5vPWN3
        subject_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可學（生于1491年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201954 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IO38dOtQEr2AtVWjVHIeUp
          claim_id: c_GnvkXhQxog6ouD1o5vPWN3
          source_id: s_GmakP7ND6HuTDW3JeiWBoe
          stance: supports
          locator: CBDB:201954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_GmakP7ND6HuTDW3JeiWBoe
            source_type: api_record
            title: 中国历代人物传记资料库：王可學（CBDB 201954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201954&o=json
            external_identifier: CBDB:201954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QMPNt6VbLZehMCooEM88LC
        subject_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1491年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1491-01-01
            latest: 1491-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EyGbqveYtCLSdfTeN1cmMZ
          claim_id: c_QMPNt6VbLZehMCooEM88LC
          source_id: s_GmakP7ND6HuTDW3JeiWBoe
          stance: supports
          locator: CBDB:201954
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1491
          source:
            id: s_GmakP7ND6HuTDW3JeiWBoe
            source_type: api_record
            title: 中国历代人物传记资料库：王可學（CBDB 201954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201954&o=json
            external_identifier: CBDB:201954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cdGJgCuHWj6KrDvPx7txYm
        subject_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zYnFf68euz6tnrDd3AYh6E
          claim_id: c_cdGJgCuHWj6KrDvPx7txYm
          source_id: s_GmakP7ND6HuTDW3JeiWBoe
          stance: supports
          locator: CBDB:201954
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1491
          source:
            id: s_GmakP7ND6HuTDW3JeiWBoe
            source_type: api_record
            title: 中国历代人物传记资料库：王可學（CBDB 201954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201954&o=json
            external_identifier: CBDB:201954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fCXx5WHWrZvASxbVU390Aq
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qf-Cw1X-zF0F7_FHWOvZdz
          claim_id: c_fCXx5WHWrZvASxbVU390Aq
          source_id: s_fbw3VK1Qeo2FHNjFcLGBsS
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fbw3VK1Qeo2FHNjFcLGBsS
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 281042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281042&o=json
            external_identifier: CBDB:281042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XaytARoatp4GyyU4wEdtEn
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JRut48l-gesE3c1taDJX5_
        subject_person_id: p_hAf8XNe8GTuZpftrWFJFwP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtcL_eF1Uu-TBWRFdJKtnh
          claim_id: c_JRut48l-gesE3c1taDJX5_
          source_id: s_8EKL9BcwS5rAPxQ67YFdJ4
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8EKL9BcwS5rAPxQ67YFdJ4
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 281040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281040&o=json
            external_identifier: CBDB:281040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hAf8XNe8GTuZpftrWFJFwP
        status: active
        display_name: 王海
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王可學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可學（生于1491年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201954 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1491年 | accepted |
| name.primary | 王可學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XaytARoatp4GyyU4wEdtEn | 王鑑 | accepted |
| ancestors | p_hAf8XNe8GTuZpftrWFJFwP | 王海 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海（CBDB 281040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281040&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 281042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281042&o=json)
- [中国历代人物传记资料库：王可學（CBDB 201954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201954&o=json)
