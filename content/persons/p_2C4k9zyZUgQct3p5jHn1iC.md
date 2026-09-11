---
schema: wang-person/v1
id: p_2C4k9zyZUgQct3p5jHn1iC
status: active
merged_into: null
display_name: 王濬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uEE3kX4dcN85LTFWETDCJV
        subject_person_id: p_2C4k9zyZUgQct3p5jHn1iC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7tgktSLuWsMCL7WzUMDsFg
          claim_id: c_uEE3kX4dcN85LTFWETDCJV
          source_id: s_MWFRdHD75aHR779emfcvYw
          stance: supports
          locator: CBDB:562264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562264）
          source: &a1
            id: s_MWFRdHD75aHR779emfcvYw
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 562264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562264&o=json
            external_identifier: CBDB:562264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CwWG3oif3yyZKp26DHzeAr
        subject_person_id: p_2C4k9zyZUgQct3p5jHn1iC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王濬，清人物。籍贯山陰，身份为孝子/孝女、工於文，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 562264）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rGUorIViChLMJJUao2j2Ms
          claim_id: c_CwWG3oif3yyZKp26DHzeAr
          source_id: s_MWFRdHD75aHR779emfcvYw
          stance: supports
          locator: CBDB:562264
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mY1GOvx1K0gL63bARPl-ey
        subject_person_id: p_2C4k9zyZUgQct3p5jHn1iC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J8y7PTaKdtkXoY8gZmzrXp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k71mfffYON3w2JQChiX2PE
          claim_id: c_mY1GOvx1K0gL63bARPl-ey
          source_id: s_MWFRdHD75aHR779emfcvYw
          stance: supports
          locator: 上虞縣志，lgid=325006：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J8y7PTaKdtkXoY8gZmzrXp
        status: active
        display_name: 王琖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| bio.summary | 王濬，清人物。籍贯山陰，身份为孝子/孝女、工於文，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 562264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J8y7PTaKdtkXoY8gZmzrXp | 王琖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 562264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562264&o=json)
