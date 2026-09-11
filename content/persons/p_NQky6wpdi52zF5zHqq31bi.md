---
schema: wang-person/v1
id: p_NQky6wpdi52zF5zHqq31bi
status: active
merged_into: null
display_name: 王象恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_irsfVQ5y5R5uyxkatEp5Gr
        subject_person_id: p_NQky6wpdi52zF5zHqq31bi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nNgrc54ndvF7914pFVnNY9
          claim_id: c_irsfVQ5y5R5uyxkatEp5Gr
          source_id: s_8ecuWxGDfv857JwE15nxCe
          stance: supports
          locator: CBDB:220279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220279）
          source: &a1
            id: s_8ecuWxGDfv857JwE15nxCe
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_McXJYeNhi8Y5Tz6kBiQ272
        subject_person_id: p_NQky6wpdi52zF5zHqq31bi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象恆，明人物。隆慶五年進士，籍贯新城，曾任監察御史。（中国历代人物传记资料库 CBDB 220279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c5Icxt9E4e8O2LbONwIk_M
          claim_id: c_McXJYeNhi8Y5Tz6kBiQ272
          source_id: s_8ecuWxGDfv857JwE15nxCe
          stance: supports
          locator: CBDB:220279
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

# 王象恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象恆 | accepted |
| bio.summary | 王象恆，明人物。隆慶五年進士，籍贯新城，曾任監察御史。（中国历代人物传记资料库 CBDB 220279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象恆（CBDB 220279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json)
