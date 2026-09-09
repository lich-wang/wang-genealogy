---
schema: wang-person/v1
id: p_qKvMRYd2R2V89GYCjNfqyq
status: active
merged_into: null
display_name: 王治隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t2RTrn7DKTK8VojvCeoC1H
        subject_person_id: p_qKvMRYd2R2V89GYCjNfqyq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5fatwwUqJnZrcPwu1AGLnB
          claim_id: c_t2RTrn7DKTK8VojvCeoC1H
          source_id: s_Vf6Vb6wFhdyK6JHpPNWoDu
          stance: supports
          locator: CBDB:639065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639065）
          source: &a1
            id: s_Vf6Vb6wFhdyK6JHpPNWoDu
            source_type: api_record
            title: 中国历代人物传记资料库：王治隆（CBDB 639065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639065&o=json
            external_identifier: CBDB:639065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Po1Cqx2HHE2z4NDxnT5TEa
        subject_person_id: p_qKvMRYd2R2V89GYCjNfqyq
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
        - id: cs_7D32JEuHfn8nLiwNw6aqKr
          claim_id: c_Po1Cqx2HHE2z4NDxnT5TEa
          source_id: s_Vf6Vb6wFhdyK6JHpPNWoDu
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

# 王治隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治隆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治隆（CBDB 639065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639065&o=json)
