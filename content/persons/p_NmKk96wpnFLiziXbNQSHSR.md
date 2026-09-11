---
schema: wang-person/v1
id: p_NmKk96wpnFLiziXbNQSHSR
status: active
merged_into: null
display_name: 王允保
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iN5EtV2FKvuD4K3a7gfh46
        subject_person_id: p_NmKk96wpnFLiziXbNQSHSR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hNySXc65d37MfA9Rp28Q4J
          claim_id: c_iN5EtV2FKvuD4K3a7gfh46
          source_id: s_aY1eSfWSoUD1yecFhYfkTK
          stance: supports
          locator: CBDB:636117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636117）
          source: &a1
            id: s_aY1eSfWSoUD1yecFhYfkTK
            source_type: api_record
            title: 中国历代人物传记资料库：王允保（CBDB 636117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636117&o=json
            external_identifier: CBDB:636117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dTmoQqPeLTUvVBvPNxPFtW
        subject_person_id: p_NmKk96wpnFLiziXbNQSHSR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允保，清人物。籍贯綏德直隸州直轄地方，入仕副榜，曾任復設訓導。（中国历代人物传记资料库 CBDB 636117）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k53uCWhhOagMWfhjSEVnWH
          claim_id: c_dTmoQqPeLTUvVBvPNxPFtW
          source_id: s_aY1eSfWSoUD1yecFhYfkTK
          stance: supports
          locator: CBDB:636117
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王允保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允保 | accepted |
| bio.summary | 王允保，清人物。籍贯綏德直隸州直轄地方，入仕副榜，曾任復設訓導。（中国历代人物传记资料库 CBDB 636117） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允保（CBDB 636117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636117&o=json)
