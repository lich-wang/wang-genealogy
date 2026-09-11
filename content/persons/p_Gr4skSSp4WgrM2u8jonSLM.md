---
schema: wang-person/v1
id: p_Gr4skSSp4WgrM2u8jonSLM
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQrBAL5qx48VBvtpcUq4A5
        subject_person_id: p_Gr4skSSp4WgrM2u8jonSLM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNvL9yCragiuuh9jGHTka5
          claim_id: c_HQrBAL5qx48VBvtpcUq4A5
          source_id: s_uRFxefDQTSHsLheCZTiM3E
          stance: supports
          locator: CBDB:243171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243171）
          source: &a1
            id: s_uRFxefDQTSHsLheCZTiM3E
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 243171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243171&o=json
            external_identifier: CBDB:243171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wY6SjBQjGnftBv6aKaN4AQ
        subject_person_id: p_Gr4skSSp4WgrM2u8jonSLM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__CyoYuj9Yzn2VoDoUw8Eg2
          claim_id: c_wY6SjBQjGnftBv6aKaN4AQ
          source_id: s_uRFxefDQTSHsLheCZTiM3E
          stance: supports
          locator: CBDB:243171
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | 王冕，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243171） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 243171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243171&o=json)
