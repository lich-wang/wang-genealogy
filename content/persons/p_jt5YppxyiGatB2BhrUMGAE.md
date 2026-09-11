---
schema: wang-person/v1
id: p_jt5YppxyiGatB2BhrUMGAE
status: active
merged_into: null
display_name: 王瞳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1JkJgiXaM4SBdKtK1CGGp1
        subject_person_id: p_jt5YppxyiGatB2BhrUMGAE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瞳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5vMCs1QvN4iNdWQjCQVXK1
          claim_id: c_1JkJgiXaM4SBdKtK1CGGp1
          source_id: s_gY4DQrZ5YT7FcHAJPBbdiA
          stance: supports
          locator: CBDB:572762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572762）
          source: &a1
            id: s_gY4DQrZ5YT7FcHAJPBbdiA
            source_type: api_record
            title: 中国历代人物传记资料库：王瞳（CBDB 572762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572762&o=json
            external_identifier: CBDB:572762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_otTtxHc6GpuDMem6z4pD5c
        subject_person_id: p_jt5YppxyiGatB2BhrUMGAE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瞳，宋人物。曾任東頭供奉官、監酒。（中国历代人物传记资料库 CBDB 572762）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4r1dJUSkmneMv0dUMSw2a4
          claim_id: c_otTtxHc6GpuDMem6z4pD5c
          source_id: s_gY4DQrZ5YT7FcHAJPBbdiA
          stance: supports
          locator: CBDB:572762
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a77fewhKaOq1zVNU0qTdZw
        subject_person_id: p_F6MGX9AM41o32x7Ua37zoL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jt5YppxyiGatB2BhrUMGAE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-hF5-SbX5jXLODpH5oMC8j
          claim_id: c_a77fewhKaOq1zVNU0qTdZw
          source_id: s_QHcTVDFF18xEJhK6F5gREL
          stance: supports
          locator: 范太史集，卷四六《右監門衛大將軍妻王氏墓志銘》：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QHcTVDFF18xEJhK6F5gREL
            source_type: api_record
            title: 中国历代人物传记资料库：王諤（CBDB 572760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572760&o=json
            external_identifier: CBDB:572760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F6MGX9AM41o32x7Ua37zoL
        status: active
        display_name: 王諤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瞳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瞳 | accepted |
| bio.summary | 王瞳，宋人物。曾任東頭供奉官、監酒。（中国历代人物传记资料库 CBDB 572762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F6MGX9AM41o32x7Ua37zoL | 王諤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諤（CBDB 572760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572760&o=json)
- [中国历代人物传记资料库：王瞳（CBDB 572762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572762&o=json)
