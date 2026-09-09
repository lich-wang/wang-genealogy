---
schema: wang-person/v1
id: p_qU3fcjh21pkJDCx3Q6HwB4
status: active
merged_into: null
display_name: 王升珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n4WsqmpP4VPCQB1H9xNhNi
        subject_person_id: p_qU3fcjh21pkJDCx3Q6HwB4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ttf2ABX8BxHST2HPUQmRNW
          claim_id: c_n4WsqmpP4VPCQB1H9xNhNi
          source_id: s_A95cSGzS4KN2TjYk2S837A
          stance: supports
          locator: CBDB:636422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636422）
          source: &a1
            id: s_A95cSGzS4KN2TjYk2S837A
            source_type: api_record
            title: 中国历代人物传记资料库：王升珠（CBDB 636422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636422&o=json
            external_identifier: CBDB:636422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AXCLEGZU8c5rJG5DLJKPWW
        subject_person_id: p_qU3fcjh21pkJDCx3Q6HwB4
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
        - id: cs_udMkUcisakEiqiCmcrrupf
          claim_id: c_AXCLEGZU8c5rJG5DLJKPWW
          source_id: s_A95cSGzS4KN2TjYk2S837A
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

# 王升珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王升珠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王升珠（CBDB 636422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636422&o=json)
