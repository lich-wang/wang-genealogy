---
schema: wang-person/v1
id: p_ccGhagoQKuL1FjGGpG5YRh
status: active
merged_into: null
display_name: 王度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u5raLVMN9QRNf1mY2oYCai
        subject_person_id: p_ccGhagoQKuL1FjGGpG5YRh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_acCxxDmPEfkEwzCjafPVT3
          claim_id: c_u5raLVMN9QRNf1mY2oYCai
          source_id: s_rpD7339HxmGm1DXA5CYj9F
          stance: supports
          locator: CBDB:341589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341589）
          source: &a1
            id: s_rpD7339HxmGm1DXA5CYj9F
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 341589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341589&o=json
            external_identifier: CBDB:341589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iRtWHKkCjGusxVVkiQmAeb
        subject_person_id: p_ccGhagoQKuL1FjGGpG5YRh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度，清人物。明清進士進士，籍贯宛平，入仕進士。（中国历代人物传记资料库 CBDB 341589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_clS7fDN8-C_wwcP4WWFdAr
          claim_id: c_iRtWHKkCjGusxVVkiQmAeb
          source_id: s_rpD7339HxmGm1DXA5CYj9F
          stance: supports
          locator: CBDB:341589
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

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| bio.summary | 王度，清人物。明清進士進士，籍贯宛平，入仕進士。（中国历代人物传记资料库 CBDB 341589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 341589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341589&o=json)
