---
schema: wang-person/v1
id: p_C6DfbpX4HKjEgFCp9dU8Ab
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j9gd6KgCj7KJkPNpUEWW7n
        subject_person_id: p_C6DfbpX4HKjEgFCp9dU8Ab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZUnz31VDhymL5ihKN89SvY
          claim_id: c_j9gd6KgCj7KJkPNpUEWW7n
          source_id: s_c3GtP4RVZfdKB9GG6uvPxL
          stance: supports
          locator: CBDB:489345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489345）
          source: &a1
            id: s_c3GtP4RVZfdKB9GG6uvPxL
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 489345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489345&o=json
            external_identifier: CBDB:489345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2PDGL2ZUr6bM935fPwsAzj
        subject_person_id: p_C6DfbpX4HKjEgFCp9dU8Ab
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。曾任典史。（中国历代人物传记资料库 CBDB 489345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QC2WtFBxK0M7TEOjoipz5V
          claim_id: c_2PDGL2ZUr6bM935fPwsAzj
          source_id: s_c3GtP4RVZfdKB9GG6uvPxL
          stance: supports
          locator: CBDB:489345
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。曾任典史。（中国历代人物传记资料库 CBDB 489345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 489345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489345&o=json)
