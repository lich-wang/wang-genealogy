---
schema: wang-person/v1
id: p_3XnXd85VStVCmY7ujxhcGR
status: active
merged_into: null
display_name: 王化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KBu9CMGvLpNwbyeJfS7CE5
        subject_person_id: p_3XnXd85VStVCmY7ujxhcGR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vaxAyAS2nXQ1AzXc1LP5QU
          claim_id: c_KBu9CMGvLpNwbyeJfS7CE5
          source_id: s_wzh1R9szQ4hgM3Q1h9ssTA
          stance: supports
          locator: CBDB:214684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214684）
          source: &a1
            id: s_wzh1R9szQ4hgM3Q1h9ssTA
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 214684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214684&o=json
            external_identifier: CBDB:214684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_csm1QWtypFkMPM3HGZkNFX
        subject_person_id: p_3XnXd85VStVCmY7ujxhcGR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214684）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vScMrF8kwy8fdLhFVBYDOe
          claim_id: c_csm1QWtypFkMPM3HGZkNFX
          source_id: s_wzh1R9szQ4hgM3Q1h9ssTA
          stance: supports
          locator: CBDB:214684
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

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | 王化，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214684） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 214684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214684&o=json)
