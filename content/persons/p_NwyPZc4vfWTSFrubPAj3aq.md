---
schema: wang-person/v1
id: p_NwyPZc4vfWTSFrubPAj3aq
status: active
merged_into: null
display_name: 鄭鄭氏
revision: 1
cbdb_id: 385325
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__6am5sAE0xBvYqSJPDgnn8
        subject_person_id: p_NwyPZc4vfWTSFrubPAj3aq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭鄭氏，史料所见人物。本项目依据《中国历代人物传记资料库：鄭鄭氏(王?妻)（CBDB 385325）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdPeCGSkM2Blc_K-UtaHGX
          claim_id: c__6am5sAE0xBvYqSJPDgnn8
          source_id: s_V0zDfM4KVI2ntBCaiZQnkh
          stance: supports
          locator: CBDB:385325
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_V0zDfM4KVI2ntBCaiZQnkh
            source_type: api_record
            title: 中国历代人物传记资料库：鄭鄭氏(王?妻)（CBDB 385325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385325&o=json
            external_identifier: CBDB:385325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pG1CI69z4zVRmCuUlDHDvS
        subject_person_id: p_NwyPZc4vfWTSFrubPAj3aq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭鄭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_88vFyQDse6kZXl8r0hqZG3
          claim_id: c_pG1CI69z4zVRmCuUlDHDvS
          source_id: s_V0zDfM4KVI2ntBCaiZQnkh
          stance: supports
          locator: CBDB:385325
          quotation: null
          interpretation_note: CBDB 明确记录的王㬇配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KCEXqq7Y5MDCcRTppapeYz
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NwyPZc4vfWTSFrubPAj3aq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rfy4WIjW1PzQlefNmtQIKP
          claim_id: c_KCEXqq7Y5MDCcRTppapeYz
          source_id: s_V0zDfM4KVI2ntBCaiZQnkh
          stance: supports
          locator: 建炎以來繫年要錄，830-831：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4cye1JFWBJQv2VQjyoi17i
        status: active
        display_name: 王㬇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄭鄭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鄭鄭氏，史料所见人物。本项目依据《中国历代人物传记资料库：鄭鄭氏(王?妻)（CBDB 385325）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 鄭鄭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4cye1JFWBJQv2VQjyoi17i | 王㬇 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄭鄭氏(王?妻)（CBDB 385325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385325&o=json)
