---
schema: wang-person/v1
id: p_Wh324NyeqK1obvTfApNoR8
status: active
merged_into: null
display_name: 王肇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dNmweri1LmQBFGo7ii98JY
        subject_person_id: p_Wh324NyeqK1obvTfApNoR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5qwBuGLF8Fb1TQS96FSKBU
          claim_id: c_dNmweri1LmQBFGo7ii98JY
          source_id: s_dahPsiAddwBstSE7bJ3Jbn
          stance: supports
          locator: CBDB:23405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23405）
          source: &a1
            id: s_dahPsiAddwBstSE7bJ3Jbn
            source_type: api_record
            title: 中国历代人物传记资料库：王肇（CBDB 23405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23405&o=json
            external_identifier: CBDB:23405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFHrv8HEqoMk71Cg9e7TwH
        subject_person_id: p_Wh324NyeqK1obvTfApNoR8
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
        - id: cs_3t6HqcBk9NDtzzkh8vvXWB
          claim_id: c_TFHrv8HEqoMk71Cg9e7TwH
          source_id: s_dahPsiAddwBstSE7bJ3Jbn
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

# 王肇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇（CBDB 23405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23405&o=json)
