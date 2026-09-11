---
schema: wang-person/v1
id: p_nB8K3pn9j5dJy1VoGDE9sS
status: active
merged_into: null
display_name: 王潛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CSrD9vgT77ptkndE461FBK
        subject_person_id: p_nB8K3pn9j5dJy1VoGDE9sS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i2FZX2FDsCbLcyv9kmw1po
          claim_id: c_CSrD9vgT77ptkndE461FBK
          source_id: s_TxCFU6423iaWoN3DA4oNCT
          stance: supports
          locator: CBDB:134186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134186）
          source: &a1
            id: s_TxCFU6423iaWoN3DA4oNCT
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 134186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134186&o=json
            external_identifier: CBDB:134186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKLFuh1oBd4hPP5LxR1s7U
        subject_person_id: p_nB8K3pn9j5dJy1VoGDE9sS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fqnMNrEVeCT342wjXuJ5NV
          claim_id: c_pKLFuh1oBd4hPP5LxR1s7U
          source_id: s_TxCFU6423iaWoN3DA4oNCT
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
  ancestors:
    - claim:
        id: c_5PHiOLTzzKgpTlnHv8qLFx
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nB8K3pn9j5dJy1VoGDE9sS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0KnumtBoKauJnMpuYDF64w
          claim_id: c_5PHiOLTzzKgpTlnHv8qLFx
          source_id: s_TxCFU6423iaWoN3DA4oNCT
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王潛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潛（CBDB 134186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134186&o=json)
