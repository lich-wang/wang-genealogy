---
schema: wang-person/v1
id: p_PniLSQqk4uQCpfhJ7uVBPo
status: active
merged_into: null
display_name: 王殿魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6sWDqY5keJQFeomgHKiC4G
        subject_person_id: p_PniLSQqk4uQCpfhJ7uVBPo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PYJZvBA5T2xMJ1CvMKeE9Z
          claim_id: c_6sWDqY5keJQFeomgHKiC4G
          source_id: s_jTczmHGEof32CPHAJHSEvR
          stance: supports
          locator: CBDB:638941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638941）
          source: &a1
            id: s_jTczmHGEof32CPHAJHSEvR
            source_type: api_record
            title: 中国历代人物传记资料库：王殿魁（CBDB 638941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638941&o=json
            external_identifier: CBDB:638941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tsv41fQuAvH8nUdHeHZPEK
        subject_person_id: p_PniLSQqk4uQCpfhJ7uVBPo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WeP4CHhwuha1cA8Y6GRwCG
          claim_id: c_tsv41fQuAvH8nUdHeHZPEK
          source_id: s_jTczmHGEof32CPHAJHSEvR
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

# 王殿魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿魁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿魁（CBDB 638941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638941&o=json)
