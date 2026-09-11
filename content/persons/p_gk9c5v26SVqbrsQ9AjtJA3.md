---
schema: wang-person/v1
id: p_gk9c5v26SVqbrsQ9AjtJA3
status: active
merged_into: null
display_name: 王無瑕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_svQtSNvKiB9YjzwBKFtMof
        subject_person_id: p_gk9c5v26SVqbrsQ9AjtJA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無瑕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b9AEr4BCN3VV52gRNEPN3z
          claim_id: c_svQtSNvKiB9YjzwBKFtMof
          source_id: s_MtMr2d41mcLUsvXMSS5UT8
          stance: supports
          locator: CBDB:639303
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639303）
          source: &a1
            id: s_MtMr2d41mcLUsvXMSS5UT8
            source_type: api_record
            title: 中国历代人物传记资料库：王無瑕（CBDB 639303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639303&o=json
            external_identifier: CBDB:639303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Moc6L28sR2B66XPDdAMCL5
        subject_person_id: p_gk9c5v26SVqbrsQ9AjtJA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無瑕，清人物。籍贯萬全，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639303）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_txwKGV7rwC0pOKiIiXBend
          claim_id: c_Moc6L28sR2B66XPDdAMCL5
          source_id: s_MtMr2d41mcLUsvXMSS5UT8
          stance: supports
          locator: CBDB:639303
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

# 王無瑕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王無瑕 | accepted |
| bio.summary | 王無瑕，清人物。籍贯萬全，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639303） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王無瑕（CBDB 639303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639303&o=json)
