---
schema: wang-person/v1
id: p_r24pTWyoZU1qxj9CbrZ7f6
status: active
merged_into: null
display_name: 王亢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6mfWNFHCkSyKYPNgVgX3D1
        subject_person_id: p_r24pTWyoZU1qxj9CbrZ7f6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GAtWt3Ev92qJw5XrparcgC
          claim_id: c_6mfWNFHCkSyKYPNgVgX3D1
          source_id: s_DL6sh7b6vKkmjq87tXUrWi
          stance: supports
          locator: CBDB:687149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687149）
          source: &a1
            id: s_DL6sh7b6vKkmjq87tXUrWi
            source_type: api_record
            title: 中国历代人物传记资料库：王亢（CBDB 687149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687149&o=json
            external_identifier: CBDB:687149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7uY6zFnDuZAA4JuKRckz9j
        subject_person_id: p_r24pTWyoZU1qxj9CbrZ7f6
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
        - id: cs_r5B2wM21BDyQtHSjQCpB73
          claim_id: c_7uY6zFnDuZAA4JuKRckz9j
          source_id: s_DL6sh7b6vKkmjq87tXUrWi
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

# 王亢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亢 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亢（CBDB 687149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687149&o=json)
