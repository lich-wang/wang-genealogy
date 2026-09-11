---
schema: wang-person/v1
id: p_eDTSkK1WJ6AUjunFVagviJ
status: active
merged_into: null
display_name: 王爚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kp9UbM7gcG5SndN6NruQ2w
        subject_person_id: p_eDTSkK1WJ6AUjunFVagviJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9u1TtuTTsGQyFWT6KmWhg3
          claim_id: c_kp9UbM7gcG5SndN6NruQ2w
          source_id: s_v3a1bsVMGnBrAvBjRvx1QQ
          stance: supports
          locator: CBDB:126881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126881）
          source: &a1
            id: s_v3a1bsVMGnBrAvBjRvx1QQ
            source_type: api_record
            title: 中国历代人物传记资料库：王爚（CBDB 126881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126881&o=json
            external_identifier: CBDB:126881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MHaJUMqcaQb2VozQai1nkF
        subject_person_id: p_eDTSkK1WJ6AUjunFVagviJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爚，明人物。籍贯崑山。（中国历代人物传记资料库 CBDB 126881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PFMVFwkrfwi1Qx9kohAQGv
          claim_id: c_MHaJUMqcaQb2VozQai1nkF
          source_id: s_v3a1bsVMGnBrAvBjRvx1QQ
          stance: supports
          locator: CBDB:126881
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

# 王爚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爚 | accepted |
| bio.summary | 王爚，明人物。籍贯崑山。（中国历代人物传记资料库 CBDB 126881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爚（CBDB 126881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126881&o=json)
