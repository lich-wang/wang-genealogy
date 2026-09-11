---
schema: wang-person/v1
id: p_eHyzJBqcyhwoGpyfX6vbpr
status: active
merged_into: null
display_name: 王時亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Em2VGbyDDqBTBikMwFpHv
        subject_person_id: p_eHyzJBqcyhwoGpyfX6vbpr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r2or6P1CwvgmKaHQANzHbZ
          claim_id: c_3Em2VGbyDDqBTBikMwFpHv
          source_id: s_8AifTMkVGf1ge5ABuKxvE2
          stance: supports
          locator: CBDB:638440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638440）
          source: &a1
            id: s_8AifTMkVGf1ge5ABuKxvE2
            source_type: api_record
            title: 中国历代人物传记资料库：王時亮（CBDB 638440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638440&o=json
            external_identifier: CBDB:638440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PCPe8GvG3b6vKYcChHUMrv
        subject_person_id: p_eHyzJBqcyhwoGpyfX6vbpr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時亮，清人物。籍贯臨淄，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 638440）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KwEp8FSQJLzeMxtRRbFnZ_
          claim_id: c_PCPe8GvG3b6vKYcChHUMrv
          source_id: s_8AifTMkVGf1ge5ABuKxvE2
          stance: supports
          locator: CBDB:638440
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

# 王時亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時亮 | accepted |
| bio.summary | 王時亮，清人物。籍贯臨淄，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 638440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時亮（CBDB 638440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638440&o=json)
