---
schema: wang-person/v1
id: p_KKPrQEVPjmzFqhKMBqGFDy
status: active
merged_into: null
display_name: 王錫之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dowX254V85yruWi6QoiZPH
        subject_person_id: p_KKPrQEVPjmzFqhKMBqGFDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2MunLzS6dT181XZ85hZ5wq
          claim_id: c_dowX254V85yruWi6QoiZPH
          source_id: s_sZ3QGDCPM8UFGfpWrXMThC
          stance: supports
          locator: CBDB:640589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640589）
          source: &a1
            id: s_sZ3QGDCPM8UFGfpWrXMThC
            source_type: api_record
            title: 中国历代人物传记资料库：王錫之（CBDB 640589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640589&o=json
            external_identifier: CBDB:640589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MddBPPaEQwkBpHkkihHcf3
        subject_person_id: p_KKPrQEVPjmzFqhKMBqGFDy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫之，清人物。籍贯恭城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ebcBm4gtj1CAh48q0AyVHD
          claim_id: c_MddBPPaEQwkBpHkkihHcf3
          source_id: s_sZ3QGDCPM8UFGfpWrXMThC
          stance: supports
          locator: CBDB:640589
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

# 王錫之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫之 | accepted |
| bio.summary | 王錫之，清人物。籍贯恭城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫之（CBDB 640589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640589&o=json)
