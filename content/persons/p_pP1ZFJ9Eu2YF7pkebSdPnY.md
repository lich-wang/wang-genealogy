---
schema: wang-person/v1
id: p_pP1ZFJ9Eu2YF7pkebSdPnY
status: active
merged_into: null
display_name: 王家楨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rqNmsDwGoELwZsWgjoATFF
        subject_person_id: p_pP1ZFJ9Eu2YF7pkebSdPnY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nkct23doPih8NsZ1oMXZEG
          claim_id: c_rqNmsDwGoELwZsWgjoATFF
          source_id: s_SKi2RipEpsUJKmALmK1wdn
          stance: supports
          locator: CBDB:570981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570981）
          source: &a1
            id: s_SKi2RipEpsUJKmALmK1wdn
            source_type: api_record
            title: 中国历代人物传记资料库：王家楨（CBDB 570981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570981&o=json
            external_identifier: CBDB:570981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CTgnxa5M43Cs7sNyPSWXKV
        subject_person_id: p_pP1ZFJ9Eu2YF7pkebSdPnY
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
        - id: cs_qRS3Qrdh7urkg19duKxMQw
          claim_id: c_CTgnxa5M43Cs7sNyPSWXKV
          source_id: s_SKi2RipEpsUJKmALmK1wdn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p5bILWaiWAX3EURE8Zd8c5
        subject_person_id: p_pP1ZFJ9Eu2YF7pkebSdPnY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bqEoSPF37A64nsJ8LA87oR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybcM5LWCoKIpjLDSnXxg4o
          claim_id: c_p5bILWaiWAX3EURE8Zd8c5
          source_id: s_Ng32YVz7D2uzMtquofEcqw
          stance: supports
          locator: 紹興府志:八十卷，lgid=316871：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ng32YVz7D2uzMtquofEcqw
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 570986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570986&o=json
            external_identifier: CBDB:570986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bqEoSPF37A64nsJ8LA87oR
        status: active
        display_name: 王德新
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王家楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家楨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bqEoSPF37A64nsJ8LA87oR | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德新（CBDB 570986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570986&o=json)
- [中国历代人物传记资料库：王家楨（CBDB 570981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570981&o=json)
