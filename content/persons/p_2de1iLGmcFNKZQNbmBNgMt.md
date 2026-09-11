---
schema: wang-person/v1
id: p_2de1iLGmcFNKZQNbmBNgMt
status: active
merged_into: null
display_name: 王有道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bPGAFwdRk3CUx2iyXFrPuk
        subject_person_id: p_2de1iLGmcFNKZQNbmBNgMt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ndagsxq9hVNk3hfZNHf3M1
          claim_id: c_bPGAFwdRk3CUx2iyXFrPuk
          source_id: s_SG2prBKW9ALo4wS63FXeN9
          stance: supports
          locator: CBDB:510060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510060）
          source: &a1
            id: s_SG2prBKW9ALo4wS63FXeN9
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 510060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510060&o=json
            external_identifier: CBDB:510060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQdV1J49HSwvmPNSUmJcuh
        subject_person_id: p_2de1iLGmcFNKZQNbmBNgMt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有道，清人物。曾任守備。（中国历代人物传记资料库 CBDB 510060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DLmGloiSG4xU_OlyAv4F1w
          claim_id: c_mQdV1J49HSwvmPNSUmJcuh
          source_id: s_SG2prBKW9ALo4wS63FXeN9
          stance: supports
          locator: CBDB:510060
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

# 王有道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有道 | accepted |
| bio.summary | 王有道，清人物。曾任守備。（中国历代人物传记资料库 CBDB 510060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有道（CBDB 510060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510060&o=json)
