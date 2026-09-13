---
schema: wang-person/v1
id: p_jbTXpPD77FiYZ2EWKgrPMv
status: active
merged_into: null
display_name: 王徼
cbdb_id: 237584
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GiDEAAW2wwpsAKs9hZxWam
        subject_person_id: p_jbTXpPD77FiYZ2EWKgrPMv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徼，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4nLbLEpBhdQ3RX12Vzt_kq
          claim_id: c_GiDEAAW2wwpsAKs9hZxWam
          source_id: s_h93CgyAtHPRL7hQi158dPF
          stance: supports
          locator: CBDB:237584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_h93CgyAtHPRL7hQi158dPF
            source_type: api_record
            title: 中国历代人物传记资料库：王徼（CBDB 237584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237584&o=json
            external_identifier: CBDB:237584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wZJGfjqPFToK5pjxv8vsBP
        subject_person_id: p_jbTXpPD77FiYZ2EWKgrPMv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dpgM9cq3tgejoaAKoMYvot
          claim_id: c_wZJGfjqPFToK5pjxv8vsBP
          source_id: s_h93CgyAtHPRL7hQi158dPF
          stance: supports
          locator: CBDB:237584
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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

# 王徼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徼，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237584） | accepted |
| name.primary | 王徼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徼（CBDB 237584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237584&o=json)
