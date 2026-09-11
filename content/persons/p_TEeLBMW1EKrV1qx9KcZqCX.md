---
schema: wang-person/v1
id: p_TEeLBMW1EKrV1qx9KcZqCX
status: active
merged_into: null
display_name: 黃氏
revision: 1
cbdb_id: 386278
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kU4W0dPfEcVrSluk2wpP5n
        subject_person_id: p_TEeLBMW1EKrV1qx9KcZqCX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FfPz7cMvLlycF8YaXTY51Y
          claim_id: c_kU4W0dPfEcVrSluk2wpP5n
          source_id: s_7gMHRZUxN8aQDgzsDol1hP
          stance: supports
          locator: CBDB:386278
          quotation: null
          interpretation_note: CBDB 明确记录的王囦金配偶
          source: &a1
            id: s_7gMHRZUxN8aQDgzsDol1hP
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(黃伯信女)（CBDB 386278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386278&o=json
            external_identifier: CBDB:386278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_N1kY7Qc4qAqL1rQj_C7rH3
        subject_person_id: p_yPaZGPPMfNV1vZCbGnNijM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TEeLBMW1EKrV1qx9KcZqCX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yexs1n3FqOccDpuFZ66OO0
          claim_id: c_N1kY7Qc4qAqL1rQj_C7rH3
          source_id: s_7gMHRZUxN8aQDgzsDol1hP
          stance: supports
          locator: CBDB 双向互证（妻子 黃氏(黃伯信女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yPaZGPPMfNV1vZCbGnNijM
        status: active
        display_name: 王囦金
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黃氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 黃氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yPaZGPPMfNV1vZCbGnNijM | 王囦金 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(黃伯信女)（CBDB 386278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386278&o=json)
