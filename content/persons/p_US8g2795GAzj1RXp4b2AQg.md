---
schema: wang-person/v1
id: p_US8g2795GAzj1RXp4b2AQg
status: active
merged_into: null
display_name: 王甘棠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9vQqUBkHGbarxz8RU6MGj
        subject_person_id: p_US8g2795GAzj1RXp4b2AQg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甘棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZvCiYaAmYKuTSG5KD4fpSM
          claim_id: c_R9vQqUBkHGbarxz8RU6MGj
          source_id: s_NU7vGHpNuHjm6yjpqfsyPy
          stance: supports
          locator: CBDB:639461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639461）
          source: &a1
            id: s_NU7vGHpNuHjm6yjpqfsyPy
            source_type: api_record
            title: 中国历代人物传记资料库：王甘棠（CBDB 639461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639461&o=json
            external_identifier: CBDB:639461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_poDzpzAnXrophgGqzB2UPT
        subject_person_id: p_US8g2795GAzj1RXp4b2AQg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甘棠，清人物。籍贯河間，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639461）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wc_U5J_2Xfqx7aqEFRLkvw
          claim_id: c_poDzpzAnXrophgGqzB2UPT
          source_id: s_NU7vGHpNuHjm6yjpqfsyPy
          stance: supports
          locator: CBDB:639461
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

# 王甘棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甘棠 | accepted |
| bio.summary | 王甘棠，清人物。籍贯河間，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639461） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王甘棠（CBDB 639461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639461&o=json)
