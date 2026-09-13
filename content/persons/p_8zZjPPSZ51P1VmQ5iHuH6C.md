---
schema: wang-person/v1
id: p_8zZjPPSZ51P1VmQ5iHuH6C
status: active
merged_into: null
display_name: 王有正
cbdb_id: 414830
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vja63PuxAwa9fjsmWCV2VR
        subject_person_id: p_8zZjPPSZ51P1VmQ5iHuH6C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有正，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PlzE4HTbKzSLqCVkBFzbe6
          claim_id: c_vja63PuxAwa9fjsmWCV2VR
          source_id: s_ZV49N2FGP5qe4bSrkuvF3j
          stance: supports
          locator: CBDB:414830
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZV49N2FGP5qe4bSrkuvF3j
            source_type: api_record
            title: 中国历代人物传记资料库：王有正（CBDB 414830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414830&o=json
            external_identifier: CBDB:414830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:40.762Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LzYhDchyMQ1s8Kt2mYpDPZ
        subject_person_id: p_8zZjPPSZ51P1VmQ5iHuH6C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gZJmUsb6HeJu2fwWc9bZHp
          claim_id: c_LzYhDchyMQ1s8Kt2mYpDPZ
          source_id: s_ZV49N2FGP5qe4bSrkuvF3j
          stance: supports
          locator: CBDB:414830
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5801-5900）｜历史性依据：CBDB 朝代 = 明
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

# 王有正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有正，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414830） | accepted |
| name.primary | 王有正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有正（CBDB 414830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414830&o=json)
