---
schema: wang-person/v1
id: p_c9V6T5wLtnNzTURpkjPVm9
status: active
merged_into: null
display_name: 王擬少
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ridHGCc9U5KgE69W7uvYZk
        subject_person_id: p_c9V6T5wLtnNzTURpkjPVm9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擬少
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R4EhKVJ6n8WtMNX8VBUgJn
          claim_id: c_ridHGCc9U5KgE69W7uvYZk
          source_id: s_xAxtX3AeXs3B4AJ18Q6CD2
          stance: supports
          locator: CBDB:638161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638161）
          source: &a1
            id: s_xAxtX3AeXs3B4AJ18Q6CD2
            source_type: api_record
            title: 中国历代人物传记资料库：王擬少（CBDB 638161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638161&o=json
            external_identifier: CBDB:638161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HZQg64gduktUKm99djXA6q
        subject_person_id: p_c9V6T5wLtnNzTURpkjPVm9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擬少，清人物。籍贯曹州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 638161）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sRKCDlGpFE7IUkwamrx8aw
          claim_id: c_HZQg64gduktUKm99djXA6q
          source_id: s_xAxtX3AeXs3B4AJ18Q6CD2
          stance: supports
          locator: CBDB:638161
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

# 王擬少

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王擬少 | accepted |
| bio.summary | 王擬少，清人物。籍贯曹州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 638161） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王擬少（CBDB 638161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638161&o=json)
