---
schema: wang-person/v1
id: p_VT8a4dGzV3YZgqDrEEd9JE
status: active
merged_into: null
display_name: 王應官
cbdb_id: 219867
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oAsDib8uSAQ3svZwrDFwyC
        subject_person_id: p_VT8a4dGzV3YZgqDrEEd9JE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應官，明人物。萬曆八年進士，籍贯忻州，曾任壽官。（中国历代人物传记资料库 CBDB 219867）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FcCiKYAnpRXh2TySnhHcpN
          claim_id: c_oAsDib8uSAQ3svZwrDFwyC
          source_id: s_ZN2FrUbHsywg5Kw3XvP3je
          stance: supports
          locator: CBDB:219867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZN2FrUbHsywg5Kw3XvP3je
            source_type: api_record
            title: 中国历代人物传记资料库：王應官（CBDB 219867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219867&o=json
            external_identifier: CBDB:219867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGKASp6c626LETDN4iMbNo
        subject_person_id: p_VT8a4dGzV3YZgqDrEEd9JE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tiWPpoM3AG43x72EnAAN2U
          claim_id: c_PGKASp6c626LETDN4iMbNo
          source_id: s_ZN2FrUbHsywg5Kw3XvP3je
          stance: supports
          locator: CBDB:219867
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZO-XYpGs2npguBRqZ-FNwq
        subject_person_id: p_VT8a4dGzV3YZgqDrEEd9JE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hq41nXPS6acQQdhAZabmC1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u1mpH0yCJpN5qrsR4m2uuF
          claim_id: c_ZO-XYpGs2npguBRqZ-FNwq
          source_id: s_ZN2FrUbHsywg5Kw3XvP3je
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZN2FrUbHsywg5Kw3XvP3je
            source_type: api_record
            title: 中国历代人物传记资料库：王應官（CBDB 219867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219867&o=json
            external_identifier: CBDB:219867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Hq41nXPS6acQQdhAZabmC1
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應官，明人物。萬曆八年進士，籍贯忻州，曾任壽官。（中国历代人物传记资料库 CBDB 219867） | accepted |
| name.primary | 王應官 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Hq41nXPS6acQQdhAZabmC1 | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應官（CBDB 219867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219867&o=json)
