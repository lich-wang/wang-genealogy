---
schema: wang-person/v1
id: p_EvVrQG78QKsrK6h4Ni53GB
status: active
merged_into: null
display_name: 王錀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qh35fXfSybn7SLHJb6toXN
        subject_person_id: p_EvVrQG78QKsrK6h4Ni53GB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZmM3BChxff47pvjkne2Vy8
          claim_id: c_Qh35fXfSybn7SLHJb6toXN
          source_id: s_7U8yJUF8BXYPwejFo9hhBb
          stance: supports
          locator: CBDB:271359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271359）
          source: &a1
            id: s_7U8yJUF8BXYPwejFo9hhBb
            source_type: api_record
            title: 中国历代人物传记资料库：王錀（CBDB 271359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271359&o=json
            external_identifier: CBDB:271359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WLwZNgLDQtxXv6h2EWZ6ma
        subject_person_id: p_EvVrQG78QKsrK6h4Ni53GB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錀，明人物。弘治十五年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 271359）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1BFa6J79jZIgMkrYQoSqiZ
          claim_id: c_WLwZNgLDQtxXv6h2EWZ6ma
          source_id: s_7U8yJUF8BXYPwejFo9hhBb
          stance: supports
          locator: CBDB:271359
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

# 王錀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錀 | accepted |
| bio.summary | 王錀，明人物。弘治十五年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 271359） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錀（CBDB 271359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271359&o=json)
