---
schema: wang-person/v1
id: p_FYXgYaQ9GXDdcYokEoSMmM
status: active
merged_into: null
display_name: 王懌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XtCnFs2MsQozgqn21KU3Kh
        subject_person_id: p_FYXgYaQ9GXDdcYokEoSMmM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Y7qSRjt2MyqniXow1drN9
          claim_id: c_XtCnFs2MsQozgqn21KU3Kh
          source_id: s_HTLpbRNSdRTcZ8kRtdpvKR
          stance: supports
          locator: CBDB:150816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150816）
          source: &a1
            id: s_HTLpbRNSdRTcZ8kRtdpvKR
            source_type: api_record
            title: 中国历代人物传记资料库：王懌（CBDB 150816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150816&o=json
            external_identifier: CBDB:150816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TZxEqKXcvHBD7gDGBXoeUH
        subject_person_id: p_FYXgYaQ9GXDdcYokEoSMmM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懌，唐人物。籍贯高平。（中国历代人物传记资料库 CBDB 150816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KACkKGSjt30RY3bPNaWr14
          claim_id: c_TZxEqKXcvHBD7gDGBXoeUH
          source_id: s_HTLpbRNSdRTcZ8kRtdpvKR
          stance: supports
          locator: CBDB:150816
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__YkaHZZXsNNLU6xMji78XP
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FYXgYaQ9GXDdcYokEoSMmM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lmKZbyZTUSw6ZgGq9_ErEY
          claim_id: c__YkaHZZXsNNLU6xMji78XP
          source_id: s_HTLpbRNSdRTcZ8kRtdpvKR
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 28：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W8E9H72h3otQNNGaDnB1FU
        status: active
        display_name: 王景之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懌 | accepted |
| bio.summary | 王懌，唐人物。籍贯高平。（中国历代人物传记资料库 CBDB 150816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W8E9H72h3otQNNGaDnB1FU | 王景之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懌（CBDB 150816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150816&o=json)
