---
schema: wang-person/v1
id: p_dzxvzNJMAw7GJTW9nQWrWM
status: active
merged_into: null
display_name: 王嵩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DRdX4ekJCZdu4rgruCcMQ8
        subject_person_id: p_dzxvzNJMAw7GJTW9nQWrWM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w97n3tGWFejuEVpLV5QDDd
          claim_id: c_DRdX4ekJCZdu4rgruCcMQ8
          source_id: s_h9ApzZF1DN1iys9ymFpitE
          stance: supports
          locator: CBDB:38920
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38920）
          source: &a1
            id: s_h9ApzZF1DN1iys9ymFpitE
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 38920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38920&o=json
            external_identifier: CBDB:38920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dbG7JY6UXqEwGmoLb5KJiq
        subject_person_id: p_dzxvzNJMAw7GJTW9nQWrWM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩，宋人物。曾任尚書左僕射、閤門祗候、禮賓副使。（中国历代人物传记资料库 CBDB 38920）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qm5v4IsjsKe1PRUAt5dVSc
          claim_id: c_dbG7JY6UXqEwGmoLb5KJiq
          source_id: s_h9ApzZF1DN1iys9ymFpitE
          stance: supports
          locator: CBDB:38920
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | 王嵩，宋人物。曾任尚書左僕射、閤門祗候、禮賓副使。（中国历代人物传记资料库 CBDB 38920） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 38920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38920&o=json)
