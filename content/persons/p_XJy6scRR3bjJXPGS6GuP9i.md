---
schema: wang-person/v1
id: p_XJy6scRR3bjJXPGS6GuP9i
status: active
merged_into: null
display_name: 王選
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ywj5gUE4CtU4Mjjm3Hw3yQ
        subject_person_id: p_XJy6scRR3bjJXPGS6GuP9i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X3eG9cVhANVbNkPyXfFKm9
          claim_id: c_Ywj5gUE4CtU4Mjjm3Hw3yQ
          source_id: s_mANGGF5cbDNsiSZfdc12yv
          stance: supports
          locator: CBDB:577582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577582）
          source: &a1
            id: s_mANGGF5cbDNsiSZfdc12yv
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 577582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577582&o=json
            external_identifier: CBDB:577582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ek83gsSJ4GXc2i2NN7qc7y
        subject_person_id: p_XJy6scRR3bjJXPGS6GuP9i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h2QXHJUsi5YwBv6uKZtE3P
          claim_id: c_ek83gsSJ4GXc2i2NN7qc7y
          source_id: s_mANGGF5cbDNsiSZfdc12yv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zmsJmSwiuV11RT50qNwcyH
        subject_person_id: p_XJy6scRR3bjJXPGS6GuP9i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9nzcf6KiAntauz51zM1n9k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tgm09npwB-Y1XJC5EOit7p
          claim_id: c_zmsJmSwiuV11RT50qNwcyH
          source_id: s_cxZaR1Gsc145RC75mszCgM
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163769：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cxZaR1Gsc145RC75mszCgM
            source_type: api_record
            title: 中国历代人物传记资料库：王洪烈（CBDB 577581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577581&o=json
            external_identifier: CBDB:577581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9nzcf6KiAntauz51zM1n9k
        status: active
        display_name: 王洪烈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9nzcf6KiAntauz51zM1n9k | 王洪烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪烈（CBDB 577581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577581&o=json)
- [中国历代人物传记资料库：王選（CBDB 577582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577582&o=json)
