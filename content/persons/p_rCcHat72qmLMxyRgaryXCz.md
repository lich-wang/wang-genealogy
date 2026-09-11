---
schema: wang-person/v1
id: p_rCcHat72qmLMxyRgaryXCz
status: active
merged_into: null
display_name: 王塾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jHbaJzvC1yUUMpgL5PDJ7g
        subject_person_id: p_rCcHat72qmLMxyRgaryXCz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C414ecpvb967UDS7HX1vhi
          claim_id: c_jHbaJzvC1yUUMpgL5PDJ7g
          source_id: s_SdpczTg1f6aAHikGzsW3hL
          stance: supports
          locator: CBDB:489294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489294）
          source: &a1
            id: s_SdpczTg1f6aAHikGzsW3hL
            source_type: api_record
            title: 中国历代人物传记资料库：王塾（CBDB 489294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489294&o=json
            external_identifier: CBDB:489294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rvj5NDJATGJQSKX2DucBPi
        subject_person_id: p_rCcHat72qmLMxyRgaryXCz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塾，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 489294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J5vRjn7bERflpnbZt46xIw
          claim_id: c_rvj5NDJATGJQSKX2DucBPi
          source_id: s_SdpczTg1f6aAHikGzsW3hL
          stance: supports
          locator: CBDB:489294
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

# 王塾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塾 | accepted |
| bio.summary | 王塾，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 489294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王塾（CBDB 489294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489294&o=json)
