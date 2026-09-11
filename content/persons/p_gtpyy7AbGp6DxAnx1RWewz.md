---
schema: wang-person/v1
id: p_gtpyy7AbGp6DxAnx1RWewz
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4wX31fgrZFsMeNnopMEXDU
        subject_person_id: p_gtpyy7AbGp6DxAnx1RWewz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PAaxNjmybwpy8FJyLEnAEA
          claim_id: c_4wX31fgrZFsMeNnopMEXDU
          source_id: s_6ZJHYAHsq6R96wwPuaMwqA
          stance: supports
          locator: CBDB:255128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255128）
          source: &a1
            id: s_6ZJHYAHsq6R96wwPuaMwqA
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 255128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255128&o=json
            external_identifier: CBDB:255128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T39RLk6H9M6KpKEVVQ4EAk
        subject_person_id: p_gtpyy7AbGp6DxAnx1RWewz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。成化十七年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 255128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yBH5ggTiuBwJdpcn2XFolo
          claim_id: c_T39RLk6H9M6KpKEVVQ4EAk
          source_id: s_6ZJHYAHsq6R96wwPuaMwqA
          stance: supports
          locator: CBDB:255128
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。成化十七年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 255128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 255128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255128&o=json)
