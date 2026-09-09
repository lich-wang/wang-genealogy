---
schema: wang-person/v1
id: p_G5XZTGp3A73cVnQtTBjVpP
status: active
merged_into: null
display_name: 王惠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dc2pPtKk2a7CxLXK5hdhjc
        subject_person_id: p_G5XZTGp3A73cVnQtTBjVpP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iakPVRsCUBngpUNM79eopD
          claim_id: c_Dc2pPtKk2a7CxLXK5hdhjc
          source_id: s_6jJLMtLSb4tXGkEeUMvKMT
          stance: supports
          locator: CBDB:139060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139060）
          source: &a1
            id: s_6jJLMtLSb4tXGkEeUMvKMT
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 139060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139060&o=json
            external_identifier: CBDB:139060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_da78qwFMLsCzmHkadG5ARr
        subject_person_id: p_G5XZTGp3A73cVnQtTBjVpP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 553年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KP3Q9fJKgmZdehMvs7CYC8
          claim_id: c_da78qwFMLsCzmHkadG5ARr
          source_id: s_6jJLMtLSb4tXGkEeUMvKMT
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
        id: c_Ve54e8KX5GRhRuMyNyUoVU
        subject_person_id: p_G5XZTGp3A73cVnQtTBjVpP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 607年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZV6DJ6kmxRohEh8Ry6rNX
          claim_id: c_Ve54e8KX5GRhRuMyNyUoVU
          source_id: s_6jJLMtLSb4tXGkEeUMvKMT
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
        id: c_jzB1A38Qx8J7xq9FEKH13W
        subject_person_id: p_G5XZTGp3A73cVnQtTBjVpP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CiEJzzCcPJmsskcttMG1Ur
          claim_id: c_jzB1A38Qx8J7xq9FEKH13W
          source_id: s_6jJLMtLSb4tXGkEeUMvKMT
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

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| birth.date | 553年 | accepted |
| death.date | 607年 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 139060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139060&o=json)
