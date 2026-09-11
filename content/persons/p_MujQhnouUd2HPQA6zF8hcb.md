---
schema: wang-person/v1
id: p_MujQhnouUd2HPQA6zF8hcb
status: active
merged_into: null
display_name: 王景亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATTuBd3WSHj9bVz4F4Cr5J
        subject_person_id: p_MujQhnouUd2HPQA6zF8hcb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E2Lbw8WAricSCXd9548FSi
          claim_id: c_ATTuBd3WSHj9bVz4F4Cr5J
          source_id: s_2MqEGWAfFYtQF8KA8RxWfL
          stance: supports
          locator: CBDB:38211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38211）
          source: &a1
            id: s_2MqEGWAfFYtQF8KA8RxWfL
            source_type: api_record
            title: 中国历代人物传记资料库：王景亮（CBDB 38211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38211&o=json
            external_identifier: CBDB:38211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQsuTqC5arc5vo8ZEyj5wK
        subject_person_id: p_MujQhnouUd2HPQA6zF8hcb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景亮，宋人物。籍贯須城。（中国历代人物传记资料库 CBDB 38211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yCjO_1o5se9_BrNV-XvTiL
          claim_id: c_EQsuTqC5arc5vo8ZEyj5wK
          source_id: s_2MqEGWAfFYtQF8KA8RxWfL
          stance: supports
          locator: CBDB:38211
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

# 王景亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景亮 | accepted |
| bio.summary | 王景亮，宋人物。籍贯須城。（中国历代人物传记资料库 CBDB 38211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景亮（CBDB 38211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38211&o=json)
