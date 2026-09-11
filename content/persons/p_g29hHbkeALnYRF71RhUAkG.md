---
schema: wang-person/v1
id: p_g29hHbkeALnYRF71RhUAkG
status: active
merged_into: null
display_name: 王慥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nQBMPryJxZb6XgPz4iFDmW
        subject_person_id: p_g29hHbkeALnYRF71RhUAkG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3yfGPz9Mj1WeZRkf8LggkB
          claim_id: c_nQBMPryJxZb6XgPz4iFDmW
          source_id: s_6Aiy13zn86Q6p7C3PpoE1e
          stance: supports
          locator: CBDB:381397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381397）
          source: &a1
            id: s_6Aiy13zn86Q6p7C3PpoE1e
            source_type: api_record
            title: 中国历代人物传记资料库：王慥（CBDB 381397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381397&o=json
            external_identifier: CBDB:381397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_igyZjYJbDCkkuxsBrxB6uC
        subject_person_id: p_g29hHbkeALnYRF71RhUAkG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慥，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381397）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4jkslnePjtAbme67UA-vj9
          claim_id: c_igyZjYJbDCkkuxsBrxB6uC
          source_id: s_6Aiy13zn86Q6p7C3PpoE1e
          stance: supports
          locator: CBDB:381397
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

# 王慥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慥 | accepted |
| bio.summary | 王慥，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381397） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慥（CBDB 381397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381397&o=json)
