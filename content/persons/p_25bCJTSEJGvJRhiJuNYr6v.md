---
schema: wang-person/v1
id: p_25bCJTSEJGvJRhiJuNYr6v
status: active
merged_into: null
display_name: 王賁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7e3EyYNBhp4RWhoNcvDFMs
        subject_person_id: p_25bCJTSEJGvJRhiJuNYr6v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9BkMmB1Tmi576UhWTG2tAn
          claim_id: c_7e3EyYNBhp4RWhoNcvDFMs
          source_id: s_vADDLrY5zyK2H1CAC5ZKUj
          stance: supports
          locator: CBDB:215873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215873）
          source: &a1
            id: s_vADDLrY5zyK2H1CAC5ZKUj
            source_type: api_record
            title: 中国历代人物传记资料库：王賁（CBDB 215873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215873&o=json
            external_identifier: CBDB:215873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lt93HT6ji133sCHG5ZhrSV
        subject_person_id: p_25bCJTSEJGvJRhiJuNYr6v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215873）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Pk9_n_JNgJ4vB3n_vBFRa
          claim_id: c_Lt93HT6ji133sCHG5ZhrSV
          source_id: s_vADDLrY5zyK2H1CAC5ZKUj
          stance: supports
          locator: CBDB:215873
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

# 王賁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賁 | accepted |
| bio.summary | 王賁，明人物。萬曆五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 215873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賁（CBDB 215873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215873&o=json)
