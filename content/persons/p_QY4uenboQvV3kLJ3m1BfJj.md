---
schema: wang-person/v1
id: p_QY4uenboQvV3kLJ3m1BfJj
status: active
merged_into: null
display_name: 王登
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N1FoXFg5RVTXsAxxUNYNYM
        subject_person_id: p_QY4uenboQvV3kLJ3m1BfJj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ioQ1azg2BBQWH8qgQ8rFc5
          claim_id: c_N1FoXFg5RVTXsAxxUNYNYM
          source_id: s_MFSmL2uG3uGGCK69PhBr86
          stance: supports
          locator: CBDB:38375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38375）
          source: &a1
            id: s_MFSmL2uG3uGGCK69PhBr86
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 38375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38375&o=json
            external_identifier: CBDB:38375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LLcvFGj3kFvaeQjaa2EpJS
        subject_person_id: p_QY4uenboQvV3kLJ3m1BfJj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1259年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_avMQaJp3JvdRiCiMJvphX4
          claim_id: c_LLcvFGj3kFvaeQjaa2EpJS
          source_id: s_MFSmL2uG3uGGCK69PhBr86
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2R7Knn5yD8sX5hwHFi87Ku
        subject_person_id: p_QY4uenboQvV3kLJ3m1BfJj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登（卒于1259年），宋人物。籍贯德安，身份为熟諳兵法韜略、軍事家，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 38375）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fnYI-fdsc9zZLrP0Lb64eM
          claim_id: c_2R7Knn5yD8sX5hwHFi87Ku
          source_id: s_MFSmL2uG3uGGCK69PhBr86
          stance: supports
          locator: CBDB:38375
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
  descendants: []
  other: []
---

# 王登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登 | accepted |
| death.date | 1259年 | accepted |
| bio.summary | 王登（卒于1259年），宋人物。籍贯德安，身份为熟諳兵法韜略、軍事家，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 38375） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登（CBDB 38375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38375&o=json)
