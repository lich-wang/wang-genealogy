---
schema: wang-person/v1
id: p_xcVzHUbQ98aV3P7LG3irvN
status: active
merged_into: null
display_name: 王巖英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AcXpqj6dPFeQyTzBN6Cy75
        subject_person_id: p_xcVzHUbQ98aV3P7LG3irvN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巖英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xC1b5bKtT7rKMyGNbk5NUF
          claim_id: c_AcXpqj6dPFeQyTzBN6Cy75
          source_id: s_GFxPKqjrquz3EYYyBPr3FX
          stance: supports
          locator: CBDB:690948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690948）
          source: &a1
            id: s_GFxPKqjrquz3EYYyBPr3FX
            source_type: api_record
            title: 中国历代人物传记资料库：王巖英（CBDB 690948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690948&o=json
            external_identifier: CBDB:690948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2cCv3hLtAN5BBQhSzuHk1a
        subject_person_id: p_xcVzHUbQ98aV3P7LG3irvN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巖英，清人物。籍贯黟縣，身份为商人。（中国历代人物传记资料库 CBDB 690948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kpjkfgIKOdRaGQMDfIkh_8
          claim_id: c_2cCv3hLtAN5BBQhSzuHk1a
          source_id: s_GFxPKqjrquz3EYYyBPr3FX
          stance: supports
          locator: CBDB:690948
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

# 王巖英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巖英 | accepted |
| bio.summary | 王巖英，清人物。籍贯黟縣，身份为商人。（中国历代人物传记资料库 CBDB 690948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巖英（CBDB 690948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690948&o=json)
