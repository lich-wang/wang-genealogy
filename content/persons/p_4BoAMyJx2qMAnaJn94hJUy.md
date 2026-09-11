---
schema: wang-person/v1
id: p_4BoAMyJx2qMAnaJn94hJUy
status: active
merged_into: null
display_name: 王嚮榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJCHRAj9kcCwbgfPS625pr
        subject_person_id: p_4BoAMyJx2qMAnaJn94hJUy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚮榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hQHchoC4ms8th8xRi5y4uB
          claim_id: c_AJCHRAj9kcCwbgfPS625pr
          source_id: s_yZg9yxbuUBD91fkf9EDcLW
          stance: supports
          locator: CBDB:636633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636633）
          source: &a1
            id: s_yZg9yxbuUBD91fkf9EDcLW
            source_type: api_record
            title: 中国历代人物传记资料库：王嚮榮（CBDB 636633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636633&o=json
            external_identifier: CBDB:636633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1a6NAw96r246n9aFdgAbU5
        subject_person_id: p_4BoAMyJx2qMAnaJn94hJUy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚮榮，清人物。籍贯同州府，曾任訓導。（中国历代人物传记资料库 CBDB 636633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ScKvPWoGKN1aVgOCq0UJLR
          claim_id: c_1a6NAw96r246n9aFdgAbU5
          source_id: s_yZg9yxbuUBD91fkf9EDcLW
          stance: supports
          locator: CBDB:636633
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

# 王嚮榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嚮榮 | accepted |
| bio.summary | 王嚮榮，清人物。籍贯同州府，曾任訓導。（中国历代人物传记资料库 CBDB 636633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嚮榮（CBDB 636633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636633&o=json)
