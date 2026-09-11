---
schema: wang-person/v1
id: p_JuG7rj7LupTMf9qir8KQTc
status: active
merged_into: null
display_name: 查氏
revision: 1
cbdb_id: 223502
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L_OqLfPExy-r9Kkfc-nJFr
        subject_person_id: p_JuG7rj7LupTMf9qir8KQTc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 查氏，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 223502）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AbVSs2_n81Q0VUMICz1A8D
          claim_id: c_L_OqLfPExy-r9Kkfc-nJFr
          source_id: s_Py6vfnZ_8NaOSuOnTvesat
          stance: supports
          locator: CBDB:223502
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Py6vfnZ_8NaOSuOnTvesat
            source_type: api_record
            title: 中国历代人物传记资料库：查氏(王有功妻)（CBDB 223502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223502&o=json
            external_identifier: CBDB:223502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RptxaT4xPk2v-V8lLzLddj
        subject_person_id: p_JuG7rj7LupTMf9qir8KQTc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 查氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0QDn3l9OzqF2NADmivWEe5
          claim_id: c_RptxaT4xPk2v-V8lLzLddj
          source_id: s_Py6vfnZ_8NaOSuOnTvesat
          stance: supports
          locator: CBDB:223502
          quotation: null
          interpretation_note: CBDB 明确记录的王有功配偶
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
        id: c_e6pfsNMXpgE3akl_iL1Na1
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JuG7rj7LupTMf9qir8KQTc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f-rYB5XDZDZnq4PNhJWwXn
          claim_id: c_e6pfsNMXpgE3akl_iL1Na1
          source_id: s_Py6vfnZ_8NaOSuOnTvesat
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BYJfPhEZfG99snxow17KHG
        status: active
        display_name: 王有功
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 查氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 查氏，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 223502） | accepted |
| name.primary | 查氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BYJfPhEZfG99snxow17KHG | 王有功 | accepted |

## 外部来源

- [中国历代人物传记资料库：查氏(王有功妻)（CBDB 223502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223502&o=json)
