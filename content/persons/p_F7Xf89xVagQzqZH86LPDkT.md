---
schema: wang-person/v1
id: p_F7Xf89xVagQzqZH86LPDkT
status: active
merged_into: null
display_name: 王奉先
cbdb_id: 270235
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Tq29jTyMp1ztWYLPr5a6r
        subject_person_id: p_F7Xf89xVagQzqZH86LPDkT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉先，明人物。弘治十五年進士，曾任主簿。（中国历代人物传记资料库 CBDB 270235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mpnA1JaPPk5t7o-d_8ZLiI
          claim_id: c_7Tq29jTyMp1ztWYLPr5a6r
          source_id: s_24DEE4cXNhMiXvxvi2LDZP
          stance: supports
          locator: CBDB:270235
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_24DEE4cXNhMiXvxvi2LDZP
            source_type: api_record
            title: 中国历代人物传记资料库：王奉先（CBDB 270235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270235&o=json
            external_identifier: CBDB:270235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YSgWk3PDGDXNkeQJzJToxK
        subject_person_id: p_F7Xf89xVagQzqZH86LPDkT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UeS6gYEFvzEQ666djDi7yH
          claim_id: c_YSgWk3PDGDXNkeQJzJToxK
          source_id: s_24DEE4cXNhMiXvxvi2LDZP
          stance: supports
          locator: CBDB:270235
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_3peR7UbAiTVYi1xU3ypp-c
        subject_person_id: p_F7Xf89xVagQzqZH86LPDkT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zaaQS8nevoJx8ScoakVYqd
          claim_id: c_3peR7UbAiTVYi1xU3ypp-c
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z5C1Z7dXiFUhSuKwZiKM9C
            source_type: api_record
            title: 中国历代人物传记资料库：王納誨（CBDB 126660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json
            external_identifier: CBDB:126660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1Z5UnhG19fXLy7n6F1UwHg
        status: active
        display_name: 王納誨
        merged_into_person_id: null
  other: []
---

# 王奉先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奉先，明人物。弘治十五年進士，曾任主簿。（中国历代人物传记资料库 CBDB 270235） | accepted |
| name.primary | 王奉先 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1Z5UnhG19fXLy7n6F1UwHg | 王納誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奉先（CBDB 270235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270235&o=json)
- [中国历代人物传记资料库：王納誨（CBDB 126660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json)
