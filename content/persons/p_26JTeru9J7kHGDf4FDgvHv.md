---
schema: wang-person/v1
id: p_26JTeru9J7kHGDf4FDgvHv
status: active
merged_into: null
display_name: 王萬象
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCM2Qca3duyQzj9PpzE6yF
        subject_person_id: p_26JTeru9J7kHGDf4FDgvHv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fE6vwMfjNjvabHNn1MSzP5
          claim_id: c_iCM2Qca3duyQzj9PpzE6yF
          source_id: s_iJycmJ4EhzjXZ664eRiarA
          stance: supports
          locator: CBDB:343147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343147）
          source: &a1
            id: s_iJycmJ4EhzjXZ664eRiarA
            source_type: api_record
            title: 中国历代人物传记资料库：王萬象（CBDB 343147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343147&o=json
            external_identifier: CBDB:343147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AjBFHcZAkE82E5MYue7rwN
        subject_person_id: p_26JTeru9J7kHGDf4FDgvHv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬象，明人物。明清進士進士，籍贯掖縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 343147）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4QgVKtvSbq_51CzWJmkiF1
          claim_id: c_AjBFHcZAkE82E5MYue7rwN
          source_id: s_iJycmJ4EhzjXZ664eRiarA
          stance: supports
          locator: CBDB:343147
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

# 王萬象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬象 | accepted |
| bio.summary | 王萬象，明人物。明清進士進士，籍贯掖縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 343147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬象（CBDB 343147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343147&o=json)
