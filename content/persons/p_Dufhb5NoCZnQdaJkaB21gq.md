---
schema: wang-person/v1
id: p_Dufhb5NoCZnQdaJkaB21gq
status: active
merged_into: null
display_name: 王璘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5GojosTfFhQnNwpX898vyJ
        subject_person_id: p_Dufhb5NoCZnQdaJkaB21gq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_koCKnLs31cfWpiuPfK2Qgv
          claim_id: c_5GojosTfFhQnNwpX898vyJ
          source_id: s_rnBUmXnkUN5eKJh6vXXPas
          stance: supports
          locator: CBDB:248853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248853）
          source: &a1
            id: s_rnBUmXnkUN5eKJh6vXXPas
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 248853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248853&o=json
            external_identifier: CBDB:248853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p7TUUoDbmsJET9GB3BVN5f
        subject_person_id: p_Dufhb5NoCZnQdaJkaB21gq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘，明人物。景泰二年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PN3wo-kdZh4GAW5SGh_-xp
          claim_id: c_p7TUUoDbmsJET9GB3BVN5f
          source_id: s_rnBUmXnkUN5eKJh6vXXPas
          stance: supports
          locator: CBDB:248853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WIcnzjCt9FN4nHnkKiQihq
        subject_person_id: p_Dufhb5NoCZnQdaJkaB21gq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xG6Uatb4hvJpHFBwk8TY1u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zVxVShY8aAHUowvDP4Cw7l
          claim_id: c_WIcnzjCt9FN4nHnkKiQihq
          source_id: s_rnBUmXnkUN5eKJh6vXXPas
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xG6Uatb4hvJpHFBwk8TY1u
        status: active
        display_name: 王祐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_EIeW9U_vnLSUXaN61GpRRf
        subject_person_id: p_Dufhb5NoCZnQdaJkaB21gq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3BqLdv5ornEQLqdPoknpXE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7tNptHXdorI7F3qkPPTRhu
          claim_id: c_EIeW9U_vnLSUXaN61GpRRf
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7w1N5HRLcjZW1QnPCRLxtB
            source_type: api_record
            title: 中国历代人物传记资料库：王屏（CBDB 199995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json
            external_identifier: CBDB:199995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3BqLdv5ornEQLqdPoknpXE
        status: active
        display_name: 王屏
        merged_into_person_id: null
  other: []
---

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| bio.summary | 王璘，明人物。景泰二年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xG6Uatb4hvJpHFBwk8TY1u | 王祐 | accepted |
| descendants | p_3BqLdv5ornEQLqdPoknpXE | 王屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璘（CBDB 248853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248853&o=json)
- [中国历代人物传记资料库：王屏（CBDB 199995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json)
