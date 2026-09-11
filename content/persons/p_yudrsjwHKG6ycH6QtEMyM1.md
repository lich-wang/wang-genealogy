---
schema: wang-person/v1
id: p_yudrsjwHKG6ycH6QtEMyM1
status: active
merged_into: null
display_name: 王望之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v7wWDLpVNxVB9MCdAg19QJ
        subject_person_id: p_yudrsjwHKG6ycH6QtEMyM1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王望之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9BdjMRGJoVkLumeRcPkMsM
          claim_id: c_v7wWDLpVNxVB9MCdAg19QJ
          source_id: s_SgkkCamgNqhCTX8C4b2ESg
          stance: supports
          locator: CBDB:384870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384870）
          source: &a1
            id: s_SgkkCamgNqhCTX8C4b2ESg
            source_type: api_record
            title: 中国历代人物传记资料库：王望之（CBDB 384870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384870&o=json
            external_identifier: CBDB:384870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rA93JNR89FbnstoBegcxMU
        subject_person_id: p_yudrsjwHKG6ycH6QtEMyM1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王望之，宋人物。籍贯浦江，入仕進士。（中国历代人物传记资料库 CBDB 384870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pMDHkJC_ax_6A9Mr6s5DKB
          claim_id: c_rA93JNR89FbnstoBegcxMU
          source_id: s_SgkkCamgNqhCTX8C4b2ESg
          stance: supports
          locator: CBDB:384870
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

# 王望之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王望之 | accepted |
| bio.summary | 王望之，宋人物。籍贯浦江，入仕進士。（中国历代人物传记资料库 CBDB 384870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王望之（CBDB 384870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384870&o=json)
