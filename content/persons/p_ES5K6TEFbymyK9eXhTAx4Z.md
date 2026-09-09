---
schema: wang-person/v1
id: p_ES5K6TEFbymyK9eXhTAx4Z
status: active
merged_into: null
display_name: 王同心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mt52uiF8Zu8oNhVXTsd4nj
        subject_person_id: p_ES5K6TEFbymyK9eXhTAx4Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QWuSCzd3MS4Qg3Gvrhdk4E
          claim_id: c_mt52uiF8Zu8oNhVXTsd4nj
          source_id: s_BcTL7a2wDYgDtx4r4VJtDv
          stance: supports
          locator: CBDB:636503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636503）
          source: &a1
            id: s_BcTL7a2wDYgDtx4r4VJtDv
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 636503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636503&o=json
            external_identifier: CBDB:636503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r4bn3uDqo3TDQFdA3wQNVk
        subject_person_id: p_ES5K6TEFbymyK9eXhTAx4Z
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
        - id: cs_kKmw9SymMw9cwgfrev2sfq
          claim_id: c_r4bn3uDqo3TDQFdA3wQNVk
          source_id: s_BcTL7a2wDYgDtx4r4VJtDv
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

# 王同心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同心 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同心（CBDB 636503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636503&o=json)
