---
schema: wang-person/v1
id: p_8mWC3Ei8pVYwAqDq7qoacC
status: active
merged_into: null
display_name: 王正仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6ds8AHGCm9DuBw3mpw6zE
        subject_person_id: p_8mWC3Ei8pVYwAqDq7qoacC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G68Xp8jPEo1qfu6aybnsNf
          claim_id: c_U6ds8AHGCm9DuBw3mpw6zE
          source_id: s_cPBKrXKqx1neLYBD3fDUpD
          stance: supports
          locator: CBDB:327254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327254）
          source: &a1
            id: s_cPBKrXKqx1neLYBD3fDUpD
            source_type: api_record
            title: 中国历代人物传记资料库：王正仁（CBDB 327254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327254&o=json
            external_identifier: CBDB:327254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wdaQBP197z8Fiy45zsmtb5
        subject_person_id: p_8mWC3Ei8pVYwAqDq7qoacC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正仁，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zug61AIitl3nJ2Kj-GvhmN
          claim_id: c_wdaQBP197z8Fiy45zsmtb5
          source_id: s_cPBKrXKqx1neLYBD3fDUpD
          stance: supports
          locator: CBDB:327254
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
  descendants:
    - claim:
        id: c_EHi1hI1cdWz6sB9URiDUkM
        subject_person_id: p_8mWC3Ei8pVYwAqDq7qoacC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tdH923W47W8dKqdDiYNAZ8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LAzYvqb6sbgBP73p_zkta3
          claim_id: c_EHi1hI1cdWz6sB9URiDUkM
          source_id: s_cPBKrXKqx1neLYBD3fDUpD
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tdH923W47W8dKqdDiYNAZ8
        status: active
        display_name: 王楨
        merged_into_person_id: null
  other: []
---

# 王正仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正仁 | accepted |
| bio.summary | 王正仁，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327254） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tdH923W47W8dKqdDiYNAZ8 | 王楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正仁（CBDB 327254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327254&o=json)
