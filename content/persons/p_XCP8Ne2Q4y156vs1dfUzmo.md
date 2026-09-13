---
schema: wang-person/v1
id: p_XCP8Ne2Q4y156vs1dfUzmo
status: active
merged_into: null
display_name: 王景芬
cbdb_id: 7080
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TUbtTEMDP3NA3aSoWckDVW
        subject_person_id: p_XCP8Ne2Q4y156vs1dfUzmo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景芬，宋人物。籍贯武進，入仕進士。（中国历代人物传记资料库 CBDB 7080）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__Yctfhknx9gyu_NbY5dchc
          claim_id: c_TUbtTEMDP3NA3aSoWckDVW
          source_id: s_89nJE2PPvx8SpcE55PJq1k
          stance: supports
          locator: CBDB:7080
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_89nJE2PPvx8SpcE55PJq1k
            source_type: api_record
            title: 中国历代人物传记资料库：王景芬（CBDB 7080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7080&o=json
            external_identifier: CBDB:7080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mBQSun1pWqsadMdGN21E2V
        subject_person_id: p_XCP8Ne2Q4y156vs1dfUzmo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_k2umUwFeRW9XYsMcgGhr34
          claim_id: c_mBQSun1pWqsadMdGN21E2V
          source_id: s_89nJE2PPvx8SpcE55PJq1k
          stance: supports
          locator: CBDB:7080
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
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

# 王景芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景芬，宋人物。籍贯武進，入仕進士。（中国历代人物传记资料库 CBDB 7080） | accepted |
| name.primary | 王景芬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景芬（CBDB 7080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7080&o=json)
