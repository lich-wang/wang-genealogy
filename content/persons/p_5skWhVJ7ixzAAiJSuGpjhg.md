---
schema: wang-person/v1
id: p_5skWhVJ7ixzAAiJSuGpjhg
status: active
merged_into: null
display_name: 王隆祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WRhwKY9MABN6i5jbZdQZK7
        subject_person_id: p_5skWhVJ7ixzAAiJSuGpjhg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ScVUv5HPZPFyhB1cCWcYin
          claim_id: c_WRhwKY9MABN6i5jbZdQZK7
          source_id: s_RBXKxnor42iqDJ8Aj4TLXT
          stance: supports
          locator: CBDB:694668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694668）
          source: &a1
            id: s_RBXKxnor42iqDJ8Aj4TLXT
            source_type: api_record
            title: 中国历代人物传记资料库：王隆祥（CBDB 694668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694668&o=json
            external_identifier: CBDB:694668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkmJhTH1EyWujcgFMg4kVC
        subject_person_id: p_5skWhVJ7ixzAAiJSuGpjhg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆祥，清人物。籍贯黟縣，身份为行醫。（中国历代人物传记资料库 CBDB 694668）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zmI8zkBNTcf-nnnRuB1DoI
          claim_id: c_EkmJhTH1EyWujcgFMg4kVC
          source_id: s_RBXKxnor42iqDJ8Aj4TLXT
          stance: supports
          locator: CBDB:694668
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-60Op2TYBsKAFJTx8rGfTE
        subject_person_id: p_Z17yb6tuEAxfxyF2Che2He
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5skWhVJ7ixzAAiJSuGpjhg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_42NrbFVNFSLS0qFl5T1blh
          claim_id: c_-60Op2TYBsKAFJTx8rGfTE
          source_id: s_RBXKxnor42iqDJ8Aj4TLXT
          stance: supports
          locator: "(民國)黟縣四志: 十六卷卷首一卷卷末一卷，lgid=1167287：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z17yb6tuEAxfxyF2Che2He
        status: active
        display_name: 王興昱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王隆祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆祥 | accepted |
| bio.summary | 王隆祥，清人物。籍贯黟縣，身份为行醫。（中国历代人物传记资料库 CBDB 694668） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z17yb6tuEAxfxyF2Che2He | 王興昱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隆祥（CBDB 694668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694668&o=json)
