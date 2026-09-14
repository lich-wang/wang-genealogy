---
schema: wang-person/v1
id: p_6Yn1HjpWop229REQ9NGBi2
status: active
merged_into: null
display_name: 王承光
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pxP8tdWQj1oKfnZyCBQ2FN
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dUaPR8qLfcL4xsXDe1txEk
          claim_id: c_pxP8tdWQj1oKfnZyCBQ2FN
          source_id: s_8E5TNk5RBn555WSQkebp2d
          stance: supports
          locator: CBDB:230377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230377）
          source: &a1
            id: s_8E5TNk5RBn555WSQkebp2d
            source_type: api_record
            title: 中国历代人物传记资料库：王承光（CBDB 230377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230377&o=json
            external_identifier: CBDB:230377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XEznQFJUZSKbwrGLwfiQDz
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承光，明人物。萬曆丙戌科進士進士，籍贯洋縣，入仕廩生。（中国历代人物传记资料库 CBDB 230377）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gSC2-qLgMY5Ab0-iBzKs24
          claim_id: c_XEznQFJUZSKbwrGLwfiQDz
          source_id: s_8E5TNk5RBn555WSQkebp2d
          stance: supports
          locator: CBDB:230377
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_w-Sw4gbmn9_dVeJwnb5IY2
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0Gl44RcQXWlzbgZ0Th3Hy
          claim_id: c_w-Sw4gbmn9_dVeJwnb5IY2
          source_id: s_8E5TNk5RBn555WSQkebp2d
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DVJuaQ4fqcXMz2HJX35bCQ
        status: active
        display_name: 王一魁
        merged_into_person_id: null
    - claim:
        id: c_3fAQbNbiiOGGbIGLuKbx2J
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7f9fyw1wKNTk9ED8RJPTC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btZuBuy-y9_4dn1nci7zyq
          claim_id: c_3fAQbNbiiOGGbIGLuKbx2J
          source_id: s_5PETxxKCO7Txs-80-gp6gC
          stance: supports
          locator: CBDB：兄弟 王一魁（207258）之父／母 王承光
          quotation: null
          interpretation_note: 由兄弟关系推断：王一鶚 与 王一魁 为同胞（CBDB 记「兄」），王一魁 之父／母即 王一鶚 之父／母。
          source:
            id: s_5PETxxKCO7Txs-80-gp6gC
            source_type: api_record
            title: 中国历代人物传记资料库：王一鶚（CBDB 230382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230382&o=json
            external_identifier: CBDB:230382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E7f9fyw1wKNTk9ED8RJPTC
        status: active
        display_name: 王一鶚
        merged_into_person_id: null
    - claim:
        id: c_0nraA8GLC7q1q5hEv2qBIf
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xws41BjhrnYNnnH6T3mqXy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_clGep9czqm7EpafhQnVj8e
          claim_id: c_0nraA8GLC7q1q5hEv2qBIf
          source_id: s_3WHT-LB_xakUwVfQtlt7Tk
          stance: supports
          locator: CBDB：兄弟 王一魁（207258）之父／母 王承光
          quotation: null
          interpretation_note: 由兄弟关系推断：王一麟 与 王一魁 为同胞（CBDB 记「兄」），王一魁 之父／母即 王一麟 之父／母。
          source:
            id: s_3WHT-LB_xakUwVfQtlt7Tk
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 230383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230383&o=json
            external_identifier: CBDB:230383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xws41BjhrnYNnnH6T3mqXy
        status: active
        display_name: 王一麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承光 | accepted |
| bio.summary | 王承光，明人物。萬曆丙戌科進士進士，籍贯洋縣，入仕廩生。（中国历代人物传记资料库 CBDB 230377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DVJuaQ4fqcXMz2HJX35bCQ | 王一魁 | accepted |
| children | p_E7f9fyw1wKNTk9ED8RJPTC | 王一鶚 | accepted |
| children | p_Xws41BjhrnYNnnH6T3mqXy | 王一麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承光（CBDB 230377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230377&o=json)
- [中国历代人物传记资料库：王一鶚（CBDB 230382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230382&o=json)
- [中国历代人物传记资料库：王一麟（CBDB 230383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230383&o=json)
