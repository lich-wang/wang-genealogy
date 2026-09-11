---
schema: wang-person/v1
id: p_eQTph1AyQLCRGPwJS5yprV
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cCv9XES2Nw3ydGTHiGfjgA
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z3cW4vfwFgfhUWr5n4wQCE
          claim_id: c_cCv9XES2Nw3ydGTHiGfjgA
          source_id: s_qf5hsZqv3ZBiyVrRkjb7CZ
          stance: supports
          locator: CBDB:225993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225993）
          source: &a1
            id: s_qf5hsZqv3ZBiyVrRkjb7CZ
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 225993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225993&o=json
            external_identifier: CBDB:225993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qDyUJDDxtKEppxuF7in2z8
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。成化二年進士，籍贯束鹿。（中国历代人物传记资料库 CBDB 225993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gl2esvr8ItPQlk5QgUg61l
          claim_id: c_qDyUJDDxtKEppxuF7in2z8
          source_id: s_qf5hsZqv3ZBiyVrRkjb7CZ
          stance: supports
          locator: CBDB:225993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_m_w3FdsiRAEqkwe4-WT2Dl
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YS93bFMg2tXSWdgNRCjryF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdYFQU2E8Q0eRe-8emoLVi
          claim_id: c_m_w3FdsiRAEqkwe4-WT2Dl
          source_id: s_qf5hsZqv3ZBiyVrRkjb7CZ
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YS93bFMg2tXSWdgNRCjryF
        status: active
        display_name: 王宗彝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。成化二年進士，籍贯束鹿。（中国历代人物传记资料库 CBDB 225993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YS93bFMg2tXSWdgNRCjryF | 王宗彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 225993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225993&o=json)
