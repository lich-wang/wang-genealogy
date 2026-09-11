---
schema: wang-person/v1
id: p_zcKTEwgz5YVMVT2MShosmN
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MWawKGynK5bqW6Le2oF8PS
        subject_person_id: p_zcKTEwgz5YVMVT2MShosmN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P8QzNtFGgxaT6rE66zKGSq
          claim_id: c_MWawKGynK5bqW6Le2oF8PS
          source_id: s_24J88C1dYQ7zuAEYFK4z6w
          stance: supports
          locator: CBDB:248689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248689）
          source: &a1
            id: s_24J88C1dYQ7zuAEYFK4z6w
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 248689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248689&o=json
            external_identifier: CBDB:248689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MvHqTyJXHi3FAQRYEYKDMQ
        subject_person_id: p_zcKTEwgz5YVMVT2MShosmN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248689）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fl-epnLVDBtsOm8vr9C--F
          claim_id: c_MvHqTyJXHi3FAQRYEYKDMQ
          source_id: s_24J88C1dYQ7zuAEYFK4z6w
          stance: supports
          locator: CBDB:248689
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
  descendants:
    - claim:
        id: c_3ptZNihxMq1ueTecGk1E5E
        subject_person_id: p_zcKTEwgz5YVMVT2MShosmN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kFZiEqywAjsmvEgPwPcR_f
          claim_id: c_3ptZNihxMq1ueTecGk1E5E
          source_id: s_24J88C1dYQ7zuAEYFK4z6w
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zp2AZ2hRUut6GtZ8fNkjjs
        status: active
        display_name: 王皋
        merged_into_person_id: null
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zp2AZ2hRUut6GtZ8fNkjjs | 王皋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 248689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248689&o=json)
