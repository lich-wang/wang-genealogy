---
schema: wang-person/v1
id: p_3L5w2bTPWHnDA5iWF6vDE5
status: active
merged_into: null
display_name: 王暉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZtmLU37ixmuttWL548hMWK
        subject_person_id: p_3L5w2bTPWHnDA5iWF6vDE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9hEPm9rRmhPfbUY73pL81y
          claim_id: c_ZtmLU37ixmuttWL548hMWK
          source_id: s_oo8hU5Z25fA5F8awucPLdU
          stance: supports
          locator: CBDB:383162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383162）
          source: &a1
            id: s_oo8hU5Z25fA5F8awucPLdU
            source_type: api_record
            title: 中国历代人物传记资料库：王暉（CBDB 383162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383162&o=json
            external_identifier: CBDB:383162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jN1GMw5r6zgQVL3u2LckkD
        subject_person_id: p_3L5w2bTPWHnDA5iWF6vDE5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QAA8evLUiecuiwA45HgdN
          claim_id: c_jN1GMw5r6zgQVL3u2LckkD
          source_id: s_oo8hU5Z25fA5F8awucPLdU
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

# 王暉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暉 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暉（CBDB 383162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383162&o=json)
