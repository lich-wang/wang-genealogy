---
schema: wang-person/v1
id: p_HKwPdRYERavGaMysLoH1k1
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 119416
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gBXqUCqG0uqJcE6MfCE_3D
        subject_person_id: p_HKwPdRYERavGaMysLoH1k1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王友直妻)（CBDB 119416）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KyW699_n360ctxO6RSgjBE
          claim_id: c_gBXqUCqG0uqJcE6MfCE_3D
          source_id: s_fLp5NJl0K25JBu5wsIgSIv
          stance: supports
          locator: CBDB:119416
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_fLp5NJl0K25JBu5wsIgSIv
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王友直妻)（CBDB 119416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119416&o=json
            external_identifier: CBDB:119416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_11UotW6eGhxciQheDKHuOZ
        subject_person_id: p_HKwPdRYERavGaMysLoH1k1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHoAOJz6CypZnCDWDMEDan
          claim_id: c_11UotW6eGhxciQheDKHuOZ
          source_id: s_fLp5NJl0K25JBu5wsIgSIv
          stance: supports
          locator: CBDB:119416
          quotation: null
          interpretation_note: CBDB 明确记录的王友直配偶
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
        id: c_qceo7GwT_7H0SN9R28zvJD
        subject_person_id: p_f22dopnC6mdCD5W9LhzLJ2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HKwPdRYERavGaMysLoH1k1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N-mUtvl5Uz32u1dIrJqqsX
          claim_id: c_qceo7GwT_7H0SN9R28zvJD
          source_id: s_fLp5NJl0K25JBu5wsIgSIv
          stance: supports
          locator: 宋史：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f22dopnC6mdCD5W9LhzLJ2
        status: active
        display_name: 王友直
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王友直妻)（CBDB 119416）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_f22dopnC6mdCD5W9LhzLJ2 | 王友直 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王友直妻)（CBDB 119416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119416&o=json)
