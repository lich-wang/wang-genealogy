---
schema: wang-person/v1
id: p_9kc49CbwZoMwFaDBECNPRG
status: active
merged_into: null
display_name: 王者聲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QExarRoxDNAhPFDUFCGKwH
        subject_person_id: p_9kc49CbwZoMwFaDBECNPRG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者聲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hHLHaVeCamNshU36JPdpTz
          claim_id: c_QExarRoxDNAhPFDUFCGKwH
          source_id: s_ypbTmQN4hhSbaypJyU72T2
          stance: supports
          locator: CBDB:639926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639926）
          source: &a1
            id: s_ypbTmQN4hhSbaypJyU72T2
            source_type: api_record
            title: 中国历代人物传记资料库：王者聲（CBDB 639926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639926&o=json
            external_identifier: CBDB:639926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vA4seGP4op6iy3Qg7Wc9s6
        subject_person_id: p_9kc49CbwZoMwFaDBECNPRG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_amHc3xF4FRVEckrzMHu3jC
          claim_id: c_vA4seGP4op6iy3Qg7Wc9s6
          source_id: s_ypbTmQN4hhSbaypJyU72T2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王者聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者聲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者聲（CBDB 639926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639926&o=json)
