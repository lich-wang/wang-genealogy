---
schema: wang-person/v1
id: p_vhZhEsHnnpAf5fLh3NYY5b
status: active
merged_into: null
display_name: 王澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4gN4pfQ22CGzzLAPLian9V
        subject_person_id: p_vhZhEsHnnpAf5fLh3NYY5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zvz21jgg46mmA6WFMcjdrG
          claim_id: c_4gN4pfQ22CGzzLAPLian9V
          source_id: s_xMNLppULNUPtY2H1GAjWrZ
          stance: supports
          locator: CBDB:1900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1900）
          source: &a1
            id: s_xMNLppULNUPtY2H1GAjWrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 1900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1900&o=json
            external_identifier: CBDB:1900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oAAEsCJ5BT98wRowvGP81A
        subject_person_id: p_vhZhEsHnnpAf5fLh3NYY5b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnCp9N2y7TqRTEZTTy5sLv
          claim_id: c_oAAEsCJ5BT98wRowvGP81A
          source_id: s_xMNLppULNUPtY2H1GAjWrZ
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

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 1900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1900&o=json)
