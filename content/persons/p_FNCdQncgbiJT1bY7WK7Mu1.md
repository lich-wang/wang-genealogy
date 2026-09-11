---
schema: wang-person/v1
id: p_FNCdQncgbiJT1bY7WK7Mu1
status: active
merged_into: null
display_name: 王煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aqjJD3YCuCNM5pyxGSeMUS
        subject_person_id: p_FNCdQncgbiJT1bY7WK7Mu1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oNesj9NuXBZaRtzyGAE3WQ
          claim_id: c_aqjJD3YCuCNM5pyxGSeMUS
          source_id: s_Aw6fbE8q1au4PCTcXnzosA
          stance: supports
          locator: CBDB:574726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574726）
          source: &a1
            id: s_Aw6fbE8q1au4PCTcXnzosA
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 574726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574726&o=json
            external_identifier: CBDB:574726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EAqjSg9cBUQu81pXZ3N2h3
        subject_person_id: p_FNCdQncgbiJT1bY7WK7Mu1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒，清人物。籍贯京山。（中国历代人物传记资料库 CBDB 574726）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-e72jDNBTcHI44dp_WZG_s
          claim_id: c_EAqjSg9cBUQu81pXZ3N2h3
          source_id: s_Aw6fbE8q1au4PCTcXnzosA
          stance: supports
          locator: CBDB:574726
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

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| bio.summary | 王煒，清人物。籍贯京山。（中国历代人物传记资料库 CBDB 574726） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煒（CBDB 574726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574726&o=json)
