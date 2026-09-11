---
schema: wang-person/v1
id: p_ZArPWmPeidCB2sgitoPtXQ
status: active
merged_into: null
display_name: 王大呂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JtH6cF8VvtrEYSgFSE92tP
        subject_person_id: p_ZArPWmPeidCB2sgitoPtXQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大呂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BY4njWBpxE7fzcdPv1ghJJ
          claim_id: c_JtH6cF8VvtrEYSgFSE92tP
          source_id: s_iCDX5v4E2Nzu4m9M2uoMA8
          stance: supports
          locator: CBDB:71330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71330）
          source: &a1
            id: s_iCDX5v4E2Nzu4m9M2uoMA8
            source_type: api_record
            title: 中国历代人物传记资料库：王大呂（CBDB 71330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71330&o=json
            external_identifier: CBDB:71330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DpQRhju7FiNqxHd3vZLNV3
        subject_person_id: p_ZArPWmPeidCB2sgitoPtXQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1693年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_33D92tRJDVe27amsX4yvBj
          claim_id: c_DpQRhju7FiNqxHd3vZLNV3
          source_id: s_iCDX5v4E2Nzu4m9M2uoMA8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MP2PftQST7P3LhtG5HCxBv
        subject_person_id: p_ZArPWmPeidCB2sgitoPtXQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1770年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DshGL4it4s3ko4ULMJxCFZ
          claim_id: c_MP2PftQST7P3LhtG5HCxBv
          source_id: s_iCDX5v4E2Nzu4m9M2uoMA8
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
        id: c_pdodMaot7MdfVHYGX655zZ
        subject_person_id: p_ZArPWmPeidCB2sgitoPtXQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大呂（1693年—1770年），清人物。籍贯澧州直隸州。（中国历代人物传记资料库 CBDB 71330）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mS9oaZobgLivOhe5xFSoCn
          claim_id: c_pdodMaot7MdfVHYGX655zZ
          source_id: s_iCDX5v4E2Nzu4m9M2uoMA8
          stance: supports
          locator: CBDB:71330
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

# 王大呂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大呂 | accepted |
| birth.date | 1693年 | accepted |
| death.date | 1770年 | accepted |
| bio.summary | 王大呂（1693年—1770年），清人物。籍贯澧州直隸州。（中国历代人物传记资料库 CBDB 71330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大呂（CBDB 71330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71330&o=json)
