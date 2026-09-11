---
schema: wang-person/v1
id: p_vqKUuRREndXGprHUag2Exj
status: active
merged_into: null
display_name: 潘孟齊
revision: 1
cbdb_id: 526851
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7gxkWGe_0qUtC0vRXSFjL
        subject_person_id: p_vqKUuRREndXGprHUag2Exj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 潘孟齊
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fYyHvTXP6QamAabR5frIas
          claim_id: c_F7gxkWGe_0qUtC0vRXSFjL
          source_id: s__GLvTyixNbHb0qXEDChDyv
          stance: supports
          locator: CBDB:526851
          quotation: null
          interpretation_note: CBDB 明确记录的王隼配偶
          source: &a1
            id: s__GLvTyixNbHb0qXEDChDyv
            source_type: api_record
            title: 中国历代人物传记资料库：潘孟齊（CBDB 526851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526851&o=json
            external_identifier: CBDB:526851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zaADMHsnve-xjDOyhW-AxV
        subject_person_id: p_LgQtW5shAEhPgBf4yEPryW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vqKUuRREndXGprHUag2Exj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fd7tJNvuMfvHpZ0oGlMsM_
          claim_id: c_zaADMHsnve-xjDOyhW-AxV
          source_id: s__GLvTyixNbHb0qXEDChDyv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13033：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LgQtW5shAEhPgBf4yEPryW
        status: active
        display_name: 王隼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 潘孟齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 潘孟齊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_LgQtW5shAEhPgBf4yEPryW | 王隼 | accepted |

## 外部来源

- [中国历代人物传记资料库：潘孟齊（CBDB 526851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526851&o=json)
