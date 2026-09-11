---
schema: wang-person/v1
id: p_9nzcf6KiAntauz51zM1n9k
status: active
merged_into: null
display_name: 王洪烈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tB9QUvJd6cPyNDzHAYQ1CX
        subject_person_id: p_9nzcf6KiAntauz51zM1n9k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mPTMwHmVVjhj1mBD3i4WLx
          claim_id: c_tB9QUvJd6cPyNDzHAYQ1CX
          source_id: s_cxZaR1Gsc145RC75mszCgM
          stance: supports
          locator: CBDB:577581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577581）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K5jmB98MyfaSjFZxmJojML
        subject_person_id: p_9nzcf6KiAntauz51zM1n9k
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
        - id: cs_xG1sGQguLMPcojxu4sCv2m
          claim_id: c_K5jmB98MyfaSjFZxmJojML
          source_id: s_cxZaR1Gsc145RC75mszCgM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_XJy6scRR3bjJXPGS6GuP9i
        status: active
        display_name: 王選
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洪烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪烈 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XJy6scRR3bjJXPGS6GuP9i | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪烈（CBDB 577581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577581&o=json)
