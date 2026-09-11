---
schema: wang-person/v1
id: p_ab4X6JMquciDShdbWud5tM
status: active
merged_into: null
display_name: 王中元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sTf4p5GT34uvWjB22mHAaz
        subject_person_id: p_ab4X6JMquciDShdbWud5tM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5fL7kerU62Lzkz7EckS4fR
          claim_id: c_sTf4p5GT34uvWjB22mHAaz
          source_id: s_4gv2hCqZXMRbvneYvGwP3u
          stance: supports
          locator: CBDB:703964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703964）
          source: &a1
            id: s_4gv2hCqZXMRbvneYvGwP3u
            source_type: api_record
            title: 中国历代人物传记资料库：王中元（CBDB 703964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703964&o=json
            external_identifier: CBDB:703964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_49iEaigvdjU3PtBwKr6ECQ
        subject_person_id: p_ab4X6JMquciDShdbWud5tM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中元，元人物。籍贯山陰。（中国历代人物传记资料库 CBDB 703964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kSEiYBEoMvn7s83x1MMmMO
          claim_id: c_49iEaigvdjU3PtBwKr6ECQ
          source_id: s_4gv2hCqZXMRbvneYvGwP3u
          stance: supports
          locator: CBDB:703964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GbAcfrK9WJKtA_7KDxLTof
        subject_person_id: p_ab4X6JMquciDShdbWud5tM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Pe1XkKTkL3fcxwNbY3CDnt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_glc8z3UPxbxJ49dNIUBZWL
          claim_id: c_GbAcfrK9WJKtA_7KDxLTof
          source_id: s_XLtp4fwpXHPNdERNaB6cwa
          stance: supports
          locator: 上虞縣志，lgid=325018：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XLtp4fwpXHPNdERNaB6cwa
            source_type: api_record
            title: 中国历代人物传记资料库：王孚（CBDB 703963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703963&o=json
            external_identifier: CBDB:703963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Pe1XkKTkL3fcxwNbY3CDnt
        status: active
        display_name: 王孚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王中元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中元 | accepted |
| bio.summary | 王中元，元人物。籍贯山陰。（中国历代人物传记资料库 CBDB 703964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Pe1XkKTkL3fcxwNbY3CDnt | 王孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孚（CBDB 703963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703963&o=json)
- [中国历代人物传记资料库：王中元（CBDB 703964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703964&o=json)
