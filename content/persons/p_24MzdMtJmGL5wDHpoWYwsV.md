---
schema: wang-person/v1
id: p_24MzdMtJmGL5wDHpoWYwsV
status: active
merged_into: null
display_name: 王佐之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oGrdeu6Q4jPnnqvFnRW1x9
        subject_person_id: p_24MzdMtJmGL5wDHpoWYwsV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FGpG7MD7P325mPcN2ACxoC
          claim_id: c_oGrdeu6Q4jPnnqvFnRW1x9
          source_id: s_WoVDp8ArESNdDXTVHeBSF3
          stance: supports
          locator: CBDB:532080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532080）
          source: &a1
            id: s_WoVDp8ArESNdDXTVHeBSF3
            source_type: api_record
            title: 中国历代人物传记资料库：王佐之（CBDB 532080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532080&o=json
            external_identifier: CBDB:532080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2K1DJ72v317zkpPmqVBRtR
        subject_person_id: p_24MzdMtJmGL5wDHpoWYwsV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oamtjWeHdA1UtokL35JLv
          claim_id: c_2K1DJ72v317zkpPmqVBRtR
          source_id: s_WoVDp8ArESNdDXTVHeBSF3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王佐之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐之（CBDB 532080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532080&o=json)
