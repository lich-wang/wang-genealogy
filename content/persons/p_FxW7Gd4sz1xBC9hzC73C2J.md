---
schema: wang-person/v1
id: p_FxW7Gd4sz1xBC9hzC73C2J
status: active
merged_into: null
display_name: 王言從
cbdb_id: 175959
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_28JCBk9Ux7NVte4QcDYRGB
        subject_person_id: p_FxW7Gd4sz1xBC9hzC73C2J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言從（卒于738年），唐人物。籍贯杜陵，曾任未詳。（中国历代人物传记资料库 CBDB 175959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_z5Gt26lM5KV-5f1UWs2f9k
          claim_id: c_28JCBk9Ux7NVte4QcDYRGB
          source_id: s_EoNWW8rChDtsT34ZMDFPzF
          stance: supports
          locator: CBDB:175959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EoNWW8rChDtsT34ZMDFPzF
            source_type: api_record
            title: 中国历代人物传记资料库：王言從（CBDB 175959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175959&o=json
            external_identifier: CBDB:175959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RhNNA57JxKK66CYZVPaUSA
        subject_person_id: p_FxW7Gd4sz1xBC9hzC73C2J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 738年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0738-01-01
            latest: 0738-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hXAm3awSpjJt2zydPD1E1J
          claim_id: c_RhNNA57JxKK66CYZVPaUSA
          source_id: s_EoNWW8rChDtsT34ZMDFPzF
          stance: supports
          locator: CBDB:175959
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 738
          source:
            id: s_EoNWW8rChDtsT34ZMDFPzF
            source_type: api_record
            title: 中国历代人物传记资料库：王言從（CBDB 175959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175959&o=json
            external_identifier: CBDB:175959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPv5zvGhCvMV3H5Dcz4BD8
        subject_person_id: p_FxW7Gd4sz1xBC9hzC73C2J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言從
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KBFMxGJC91xRhEEUUMKaXT
          claim_id: c_UPv5zvGhCvMV3H5Dcz4BD8
          source_id: s_EoNWW8rChDtsT34ZMDFPzF
          stance: supports
          locator: CBDB:175959
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 738
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wI9s1UWiFTcT5Msm_NYMY2
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FxW7Gd4sz1xBC9hzC73C2J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dp1L7uJOQ1Joir_C3ojucI
          claim_id: c_wI9s1UWiFTcT5Msm_NYMY2
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9wQqFz1g9NPy4Aq7kAejE
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 175940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json
            external_identifier: CBDB:175940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WG4LcJdg2iBTqvpZQpDp9o
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言從

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王言從（卒于738年），唐人物。籍贯杜陵，曾任未詳。（中国历代人物传记资料库 CBDB 175959） | accepted |
| death.date | 738年 | accepted |
| name.primary | 王言從 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WG4LcJdg2iBTqvpZQpDp9o | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 175940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json)
- [中国历代人物传记资料库：王言從（CBDB 175959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175959&o=json)
