---
schema: wang-person/v1
id: p_34CgPhFDiBpUqCGvM3efKn
status: active
merged_into: null
display_name: 王承先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7gFVF2CKLG1PwdbrFd2mGk
        subject_person_id: p_34CgPhFDiBpUqCGvM3efKn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j9tsQD4vR4iytGQWFhAGAi
          claim_id: c_7gFVF2CKLG1PwdbrFd2mGk
          source_id: s_EfdKYgvJF34Mq76N6m61Cf
          stance: supports
          locator: CBDB:638066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638066）
          source: &a1
            id: s_EfdKYgvJF34Mq76N6m61Cf
            source_type: api_record
            title: 中国历代人物传记资料库：王承先（CBDB 638066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638066&o=json
            external_identifier: CBDB:638066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mD2NazksoE2G2syxV7WFhp
        subject_person_id: p_34CgPhFDiBpUqCGvM3efKn
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
        - id: cs_gTaBMALjKN6LJVSPdwi4h4
          claim_id: c_mD2NazksoE2G2syxV7WFhp
          source_id: s_EfdKYgvJF34Mq76N6m61Cf
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

# 王承先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承先 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承先（CBDB 638066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638066&o=json)
