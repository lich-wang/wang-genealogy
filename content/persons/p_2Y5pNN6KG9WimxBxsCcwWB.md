---
schema: wang-person/v1
id: p_2Y5pNN6KG9WimxBxsCcwWB
status: active
merged_into: null
display_name: 王弘信
cbdb_id: 185066
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yo3NHMW4tYRkURGznoBa5D
        subject_person_id: p_2Y5pNN6KG9WimxBxsCcwWB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘信（卒于876年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185066 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_L7Capc9aVv9Ij0aX0AEpFh
          claim_id: c_yo3NHMW4tYRkURGznoBa5D
          source_id: s_uLQ2vzjTq47GTGuwPPaNpa
          stance: supports
          locator: CBDB:185066
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_uLQ2vzjTq47GTGuwPPaNpa
            source_type: api_record
            title: 中国历代人物传记资料库：王弘信（CBDB 185066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185066&o=json
            external_identifier: CBDB:185066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7hcBHA79y7ipXoUs9A9oUd
        subject_person_id: p_2Y5pNN6KG9WimxBxsCcwWB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 876年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0876-01-01
            latest: 0876-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QBTxvDVnvs7z97FzMFNCmr
          claim_id: c_7hcBHA79y7ipXoUs9A9oUd
          source_id: s_uLQ2vzjTq47GTGuwPPaNpa
          stance: supports
          locator: CBDB:185066
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 876
          source:
            id: s_uLQ2vzjTq47GTGuwPPaNpa
            source_type: api_record
            title: 中国历代人物传记资料库：王弘信（CBDB 185066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185066&o=json
            external_identifier: CBDB:185066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pePDvKEf2RZQXYyUrtFR1B
        subject_person_id: p_2Y5pNN6KG9WimxBxsCcwWB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZbRaEd2a5JQVuwG1kF6jbA
          claim_id: c_pePDvKEf2RZQXYyUrtFR1B
          source_id: s_uLQ2vzjTq47GTGuwPPaNpa
          stance: supports
          locator: CBDB:185066
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 876
          source:
            id: s_uLQ2vzjTq47GTGuwPPaNpa
            source_type: api_record
            title: 中国历代人物传记资料库：王弘信（CBDB 185066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185066&o=json
            external_identifier: CBDB:185066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2AAKWhq60JOdzkTdAL_g0e
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Y5pNN6KG9WimxBxsCcwWB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JVUmmqG7kqoVJ-84LR-Sm1
          claim_id: c_2AAKWhq60JOdzkTdAL_g0e
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CH5cyGnFWoErX6LHxt9G4U
            source_type: api_record
            title: 中国历代人物传记资料库：王公淑（CBDB 144996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json
            external_identifier: CBDB:144996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_65g8o6f3iNCjHS9Q5ojrP4
        status: active
        display_name: 王公淑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘信（卒于876年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185066 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 876年 | accepted |
| name.primary | 王弘信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_65g8o6f3iNCjHS9Q5ojrP4 | 王公淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公淑（CBDB 144996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json)
- [中国历代人物传记资料库：王弘信（CBDB 185066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185066&o=json)
