---
schema: wang-person/v1
id: p_JGy4qF22gyGfNoDDD18Cq3
status: active
merged_into: null
display_name: 王思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LzWd3dc48twR2AtT96NkW7
        subject_person_id: p_JGy4qF22gyGfNoDDD18Cq3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g3RaENFQcX7vg3vi2nT11S
          claim_id: c_LzWd3dc48twR2AtT96NkW7
          source_id: s_u8TxHVMCQAa2MoMK51AsGe
          stance: supports
          locator: CBDB:376328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（376328）
          source: &a1
            id: s_u8TxHVMCQAa2MoMK51AsGe
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 376328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376328&o=json
            external_identifier: CBDB:376328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZEZAHEhZ47KDk2wHwtBnHs
        subject_person_id: p_JGy4qF22gyGfNoDDD18Cq3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思，唐人物。曾任太僕少卿。（中国历代人物传记资料库 CBDB 376328）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DaXufvjeSzscPu-gMRnV52
          claim_id: c_ZEZAHEhZ47KDk2wHwtBnHs
          source_id: s_u8TxHVMCQAa2MoMK51AsGe
          stance: supports
          locator: CBDB:376328
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

# 王思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思 | accepted |
| bio.summary | 王思，唐人物。曾任太僕少卿。（中国历代人物传记资料库 CBDB 376328） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思（CBDB 376328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376328&o=json)
