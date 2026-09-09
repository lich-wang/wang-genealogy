---
schema: wang-person/v1
id: p_HCUhw1va3eUaMpYaMtDMJA
status: active
merged_into: null
display_name: 王鼎遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H57zFKDSmp2JVSpaFf5w43
        subject_person_id: p_HCUhw1va3eUaMpYaMtDMJA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Z4hNAxK831pb1FmF7sXpm
          claim_id: c_H57zFKDSmp2JVSpaFf5w43
          source_id: s_S6tKP81SaNLDyz7Z27mAi4
          stance: supports
          locator: CBDB:641052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641052）
          source: &a1
            id: s_S6tKP81SaNLDyz7Z27mAi4
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎遠（CBDB 641052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641052&o=json
            external_identifier: CBDB:641052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w2qE2oLEXz7yoKLkr52Thg
        subject_person_id: p_HCUhw1va3eUaMpYaMtDMJA
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
        - id: cs_n9DuDQV2NFdVJWPqECtKeq
          claim_id: c_w2qE2oLEXz7yoKLkr52Thg
          source_id: s_S6tKP81SaNLDyz7Z27mAi4
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

# 王鼎遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎遠（CBDB 641052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641052&o=json)
