---
schema: wang-person/v1
id: p_CJn6D2DyxMbJfnHaCwEmxm
status: active
merged_into: null
display_name: 陳鉦
revision: 1
cbdb_id: 81401
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iPVeUAx8EgqGLbk78AbkuM
        subject_person_id: p_CJn6D2DyxMbJfnHaCwEmxm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳鉦（1851—1873），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 81401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LLbzjwiay9WZjxR6AUELRO
          claim_id: c_iPVeUAx8EgqGLbk78AbkuM
          source_id: s_ARbKEI-Ye3toQF8dPTlVe_
          stance: supports
          locator: CBDB:81401
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ARbKEI-Ye3toQF8dPTlVe_
            source_type: api_record
            title: 中国历代人物传记资料库：陳鉦（CBDB 81401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=81401&o=json
            external_identifier: CBDB:81401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FpM3zmGdHeHT3cv6nZAXEA
        subject_person_id: p_CJn6D2DyxMbJfnHaCwEmxm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳鉦
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WN5GpzM18i08Pnav2QKrX1
          claim_id: c_FpM3zmGdHeHT3cv6nZAXEA
          source_id: s_ARbKEI-Ye3toQF8dPTlVe_
          stance: supports
          locator: CBDB:81401
          quotation: null
          interpretation_note: CBDB 明确记录的王鐘齡配偶
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
        id: c_QtovaTVH12ewUFyLFVOl57
        subject_person_id: p_eRKMW8ejBDpf6b4JF1yMww
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CJn6D2DyxMbJfnHaCwEmxm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KI4eITH6jpe5smsdrDSPHx
          claim_id: c_QtovaTVH12ewUFyLFVOl57
          source_id: s_ARbKEI-Ye3toQF8dPTlVe_
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3857, HuWenKai #597：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eRKMW8ejBDpf6b4JF1yMww
        status: active
        display_name: 王鐘齡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳鉦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳鉦（1851—1873），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 81401） | accepted |
| name.primary | 陳鉦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_eRKMW8ejBDpf6b4JF1yMww | 王鐘齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳鉦（CBDB 81401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=81401&o=json)
