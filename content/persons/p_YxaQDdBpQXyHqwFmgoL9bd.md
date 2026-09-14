---
schema: wang-person/v1
id: p_YxaQDdBpQXyHqwFmgoL9bd
status: active
merged_into: null
display_name: 王證
cbdb_id: 247218
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VtxDeHjSrfH2koJrarKrqB
        subject_person_id: p_YxaQDdBpQXyHqwFmgoL9bd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王證，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_o1OV6L2RJVPjuHKosdvgLq
          claim_id: c_VtxDeHjSrfH2koJrarKrqB
          source_id: s_uqPgK4QiQjGJbHWXUNVgk3
          stance: supports
          locator: CBDB:247218
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uqPgK4QiQjGJbHWXUNVgk3
            source_type: api_record
            title: 中国历代人物传记资料库：王證（CBDB 247218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json
            external_identifier: CBDB:247218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xoP1JYZhdGkaDrEzzYX3G9
        subject_person_id: p_YxaQDdBpQXyHqwFmgoL9bd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王證
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A5saguMSG9FBbjLxj6ydED
          claim_id: c_xoP1JYZhdGkaDrEzzYX3G9
          source_id: s_uqPgK4QiQjGJbHWXUNVgk3
          stance: supports
          locator: CBDB:247218
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1dvwxKYDXjsmGMaRGN98sd
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YxaQDdBpQXyHqwFmgoL9bd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gf6OtRJ8fZVlp7VdXxSXBx
          claim_id: c_1dvwxKYDXjsmGMaRGN98sd
          source_id: s_wO8vRwwyZXsIa8rjUtZRLJ
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王證 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王證 之父／母。
          source:
            id: s_wO8vRwwyZXsIa8rjUtZRLJ
            source_type: api_record
            title: 中国历代人物传记资料库：王證（CBDB 247218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json
            external_identifier: CBDB:247218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PASiCHQs3ZcH2e9PXEScwH
        status: active
        display_name: 王效
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_loQNsTjjkcZNFtqgdPNO2X
        subject_person_id: p_YxaQDdBpQXyHqwFmgoL9bd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZKWSiaTo7s9bZD-1r6V7v
          claim_id: c_loQNsTjjkcZNFtqgdPNO2X
          source_id: s_wO8vRwwyZXsIa8rjUtZRLJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wO8vRwwyZXsIa8rjUtZRLJ
            source_type: api_record
            title: 中国历代人物传记资料库：王證（CBDB 247218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json
            external_identifier: CBDB:247218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
---

# 王證

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王證，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247218） | accepted |
| name.primary | 王證 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PASiCHQs3ZcH2e9PXEScwH | 王效 | accepted |
| other | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王證（CBDB 247218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json)
