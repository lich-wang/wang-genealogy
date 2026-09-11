---
schema: wang-person/v1
id: p_FGzxnyy6AzAGgNhRhSW4Gz
status: active
merged_into: null
display_name: 何道凈
revision: 1
cbdb_id: 376048
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dRYjeNbtrJjNgNsZjGOx03
        subject_person_id: p_FGzxnyy6AzAGgNhRhSW4Gz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何道凈（1178—1217），宋人物。籍贯麗水，曾任孺人。（中国历代人物传记资料库 CBDB 376048）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FeK8FoMTGy50VW4lkAxqS9
          claim_id: c_dRYjeNbtrJjNgNsZjGOx03
          source_id: s_pOH7y_9_HG1i__OdA8MEa1
          stance: supports
          locator: CBDB:376048
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pOH7y_9_HG1i__OdA8MEa1
            source_type: api_record
            title: 中国历代人物传记资料库：何道凈(王騊妻)（CBDB 376048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376048&o=json
            external_identifier: CBDB:376048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yJpkzScfAfZOWrAne5sZHX
        subject_person_id: p_FGzxnyy6AzAGgNhRhSW4Gz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何道凈
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9DqjSupRtlXIReWhjvgv1E
          claim_id: c_yJpkzScfAfZOWrAne5sZHX
          source_id: s_pOH7y_9_HG1i__OdA8MEa1
          stance: supports
          locator: CBDB:376048
          quotation: null
          interpretation_note: CBDB 明确记录的王騊配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QfXkr9VsHOmcKVUcZttWEI
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FGzxnyy6AzAGgNhRhSW4Gz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6PBwvyj12fl_b-32KKeZ37
          claim_id: c_QfXkr9VsHOmcKVUcZttWEI
          source_id: s_pOH7y_9_HG1i__OdA8MEa1
          stance: supports
          locator: CBDB 双向互证（妻子 何道凈(王騊妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v2aXxqS4dS7Mb5HadzZaWo
        status: active
        display_name: 王騊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何道凈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 何道凈（1178—1217），宋人物。籍贯麗水，曾任孺人。（中国历代人物传记资料库 CBDB 376048） | accepted |
| name.primary | 何道凈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_v2aXxqS4dS7Mb5HadzZaWo | 王騊 | accepted |

## 外部来源

- [中国历代人物传记资料库：何道凈(王騊妻)（CBDB 376048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376048&o=json)
