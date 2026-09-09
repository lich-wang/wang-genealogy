---
schema: wang-person/v1
id: p_oVNec56gH8tWivCLKAckvC
status: active
merged_into: null
display_name: 王鰲永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uX8oR18yMt6p3neQwmicXM
        subject_person_id: p_oVNec56gH8tWivCLKAckvC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鰲永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdM6AKMfsgPhim1VTBNFKR
          claim_id: c_uX8oR18yMt6p3neQwmicXM
          source_id: s_tVY8ZFb6z4wbDDK4Fbcxsw
          stance: supports
          locator: CBDB:56976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56976）
          source: &a1
            id: s_tVY8ZFb6z4wbDDK4Fbcxsw
            source_type: api_record
            title: 中国历代人物传记资料库：王鰲永（CBDB 56976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56976&o=json
            external_identifier: CBDB:56976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oDh8vARhxmDkGntCUEUzB3
        subject_person_id: p_oVNec56gH8tWivCLKAckvC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQJZCtAdzfekGF9WAxvQxT
          claim_id: c_oDh8vARhxmDkGntCUEUzB3
          source_id: s_tVY8ZFb6z4wbDDK4Fbcxsw
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
        id: c_8xaxyK2ARTJFmp3hpHyuxX
        subject_person_id: p_oVNec56gH8tWivCLKAckvC
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
        - id: cs_zUsEfG9CRp4SVVrERbnujL
          claim_id: c_8xaxyK2ARTJFmp3hpHyuxX
          source_id: s_tVY8ZFb6z4wbDDK4Fbcxsw
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

# 王鰲永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鰲永 | accepted |
| death.date | 1644年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鰲永（CBDB 56976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56976&o=json)
