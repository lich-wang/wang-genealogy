---
schema: wang-person/v1
id: p_SJvN4BrFh4PvLcwBPGyYHk
status: active
merged_into: null
display_name: 王楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKgRYhciiYhoCg7E2Lce6o
        subject_person_id: p_SJvN4BrFh4PvLcwBPGyYHk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SjQz61pbS9y3SGeruohbdV
          claim_id: c_AKgRYhciiYhoCg7E2Lce6o
          source_id: s_w42xznP91ALfMS1k8D8MLE
          stance: supports
          locator: CBDB:271110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271110）
          source: &a1
            id: s_w42xznP91ALfMS1k8D8MLE
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 271110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271110&o=json
            external_identifier: CBDB:271110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HVdJtXASJ4Bv2mMKNSmuQm
        subject_person_id: p_SJvN4BrFh4PvLcwBPGyYHk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ap1vnl4xIYc93fctr_FgVq
          claim_id: c_HVdJtXASJ4Bv2mMKNSmuQm
          source_id: s_w42xznP91ALfMS1k8D8MLE
          stance: supports
          locator: CBDB:271110
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

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| bio.summary | 王楷，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 271110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271110&o=json)
