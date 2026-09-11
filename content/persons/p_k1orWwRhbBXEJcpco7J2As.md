---
schema: wang-person/v1
id: p_k1orWwRhbBXEJcpco7J2As
status: active
merged_into: null
display_name: 王一治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ivqjxwpQP35PMsx74Bzinj
        subject_person_id: p_k1orWwRhbBXEJcpco7J2As
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2iKZ7JKo8WAhY9iEbEV24G
          claim_id: c_ivqjxwpQP35PMsx74Bzinj
          source_id: s_QaFDwHg6DPd9XhmMKCrWMF
          stance: supports
          locator: CBDB:230479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230479）
          source: &a1
            id: s_QaFDwHg6DPd9XhmMKCrWMF
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 230479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230479&o=json
            external_identifier: CBDB:230479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6V5FsaWcG5vqcPENTLCoGL
        subject_person_id: p_k1orWwRhbBXEJcpco7J2As
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王一治，明人物。萬曆丙戌科進士進士，籍贯黃岡，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 230479）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FkP3M9rGdRTWJ0Tf8cutXf
          claim_id: c_6V5FsaWcG5vqcPENTLCoGL
          source_id: s_QaFDwHg6DPd9XhmMKCrWMF
          stance: supports
          locator: CBDB:230479
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

# 王一治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一治 | accepted |
| bio.summary | 王一治，明人物。萬曆丙戌科進士進士，籍贯黃岡，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 230479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一治（CBDB 230479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230479&o=json)
