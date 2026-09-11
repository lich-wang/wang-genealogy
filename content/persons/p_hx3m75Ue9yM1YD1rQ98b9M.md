---
schema: wang-person/v1
id: p_hx3m75Ue9yM1YD1rQ98b9M
status: active
merged_into: null
display_name: 王森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A2MptFnFWbRbozZfbNiNUC
        subject_person_id: p_hx3m75Ue9yM1YD1rQ98b9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vtYaHMnarQtjCMh7b3QA3j
          claim_id: c_A2MptFnFWbRbozZfbNiNUC
          source_id: s_f6MTR24qCNicvSgxLkZoGg
          stance: supports
          locator: CBDB:100833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100833）
          source: &a1
            id: s_f6MTR24qCNicvSgxLkZoGg
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 100833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100833&o=json
            external_identifier: CBDB:100833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Si4ZXEhGPS7iuP38XVmfs5
        subject_person_id: p_hx3m75Ue9yM1YD1rQ98b9M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1276年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LiTBuugq117kpJBVHsp5g
          claim_id: c_Si4ZXEhGPS7iuP38XVmfs5
          source_id: s_f6MTR24qCNicvSgxLkZoGg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NGxn8y7c9grpoYQzgwfXVv
        subject_person_id: p_hx3m75Ue9yM1YD1rQ98b9M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1342年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r9kcNrvCgU6KmZumQXgJM3
          claim_id: c_NGxn8y7c9grpoYQzgwfXVv
          source_id: s_f6MTR24qCNicvSgxLkZoGg
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
        id: c_YVJZ7Jtgmmy8dj77bQ8fGe
        subject_person_id: p_hx3m75Ue9yM1YD1rQ98b9M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森（1276年—1342年），元人物。籍贯分水，身份为經學家—易經。（中国历代人物传记资料库 CBDB 100833）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-JSkbFVfXeSIAm1GtV0PQA
          claim_id: c_YVJZ7Jtgmmy8dj77bQ8fGe
          source_id: s_f6MTR24qCNicvSgxLkZoGg
          stance: supports
          locator: CBDB:100833
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

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| birth.date | 1276年 | accepted |
| death.date | 1342年 | accepted |
| bio.summary | 王森（1276年—1342年），元人物。籍贯分水，身份为經學家—易經。（中国历代人物传记资料库 CBDB 100833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 100833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100833&o=json)
