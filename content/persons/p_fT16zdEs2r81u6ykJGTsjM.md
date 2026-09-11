---
schema: wang-person/v1
id: p_fT16zdEs2r81u6ykJGTsjM
status: active
merged_into: null
display_name: 王坤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f9J3tYYsUuyG1S2erhkCv6
        subject_person_id: p_fT16zdEs2r81u6ykJGTsjM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TMGjMNsaJL34i4vSHd1Ezn
          claim_id: c_f9J3tYYsUuyG1S2erhkCv6
          source_id: s_5zh9HgfWDQgyzthpN3iAMK
          stance: supports
          locator: CBDB:272412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272412）
          source: &a1
            id: s_5zh9HgfWDQgyzthpN3iAMK
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 272412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272412&o=json
            external_identifier: CBDB:272412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFwgSDQKpi4rwhQP5m5bcs
        subject_person_id: p_fT16zdEs2r81u6ykJGTsjM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤，明人物。弘治十五年進士，籍贯武進。（中国历代人物传记资料库 CBDB 272412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_337xM6o-_SWPXRTF8UB9mC
          claim_id: c_TFwgSDQKpi4rwhQP5m5bcs
          source_id: s_5zh9HgfWDQgyzthpN3iAMK
          stance: supports
          locator: CBDB:272412
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

# 王坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤 | accepted |
| bio.summary | 王坤，明人物。弘治十五年進士，籍贯武進。（中国历代人物传记资料库 CBDB 272412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坤（CBDB 272412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272412&o=json)
