---
schema: wang-person/v1
id: p_NDWv4CNzuntgkizFKYGS3V
status: active
merged_into: null
display_name: 王禎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D545DL6HpyNdF3mCsMyC7D
        subject_person_id: p_NDWv4CNzuntgkizFKYGS3V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sp8FfjPBuPc9Ge2siMPRsu
          claim_id: c_D545DL6HpyNdF3mCsMyC7D
          source_id: s_itG3YPxTwj7jRBQtav6a1r
          stance: supports
          locator: CBDB:67861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67861）
          source: &a1
            id: s_itG3YPxTwj7jRBQtav6a1r
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 67861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67861&o=json
            external_identifier: CBDB:67861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oJBh49fwvir9UFW25PgsN5
        subject_person_id: p_NDWv4CNzuntgkizFKYGS3V
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1466年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fj5MD7iLHsndqES1mYEyJT
          claim_id: c_oJBh49fwvir9UFW25PgsN5
          source_id: s_itG3YPxTwj7jRBQtav6a1r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ML8C1b1MkWja5wd2ED18m4
        subject_person_id: p_NDWv4CNzuntgkizFKYGS3V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8eA3QtFnE9xmid6FnV2r7Q
          claim_id: c_ML8C1b1MkWja5wd2ED18m4
          source_id: s_itG3YPxTwj7jRBQtav6a1r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tk7a8MbaymLik9ol0E4mYP
        subject_person_id: p_fta5EM3uS3cyQ2thrRrgCB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NDWv4CNzuntgkizFKYGS3V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VSkYDmIWRqonhD311wsygX
          claim_id: c_Tk7a8MbaymLik9ol0E4mYP
          source_id: s_NaWrvScCa2X99MQmjZefPd
          stance: supports
          locator: 江西通志，Igid=1197537：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NaWrvScCa2X99MQmjZefPd
            source_type: api_record
            title: 中国历代人物传记资料库：王省（CBDB 66612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66612&o=json
            external_identifier: CBDB:66612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fta5EM3uS3cyQ2thrRrgCB
        status: active
        display_name: 王省
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| death.date | 1466年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fta5EM3uS3cyQ2thrRrgCB | 王省 | accepted |

## 外部来源

- [中国历代人物传记资料库：王省（CBDB 66612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66612&o=json)
- [中国历代人物传记资料库：王禎（CBDB 67861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67861&o=json)
