---
schema: wang-person/v1
id: p_1XAxD14ZFWcp4wGTVz9vV6
status: active
merged_into: null
display_name: 王冕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jB2nHYAKGCD2Ndb4DJPBWQ
        subject_person_id: p_1XAxD14ZFWcp4wGTVz9vV6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t3XNS3AufL6tFQGyjV7Q5z
          claim_id: c_jB2nHYAKGCD2Ndb4DJPBWQ
          source_id: s_igU545Y5mjXzMcQzBRuKGL
          stance: supports
          locator: CBDB:247213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247213）
          source: &a1
            id: s_igU545Y5mjXzMcQzBRuKGL
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 247213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json
            external_identifier: CBDB:247213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jWDMW3SNH1Yayk5zHjxDz4
        subject_person_id: p_1XAxD14ZFWcp4wGTVz9vV6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HUL4BMFuEW_YDU2sMYVQHY
          claim_id: c_jWDMW3SNH1Yayk5zHjxDz4
          source_id: s_igU545Y5mjXzMcQzBRuKGL
          stance: supports
          locator: CBDB:247213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vZGWylLxpfT8AF82HbFHaK
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1XAxD14ZFWcp4wGTVz9vV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lhKiy9pwgqN-xvKjGnz7P5
          claim_id: c_vZGWylLxpfT8AF82HbFHaK
          source_id: s_r2b-Dvrpg1n964Lbkw-RS9
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王冕 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王冕 之父／母。
          source:
            id: s_r2b-Dvrpg1n964Lbkw-RS9
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 247213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json
            external_identifier: CBDB:247213
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
        id: c_IefGqe6RcaL-cmIq1Vj4pc
        subject_person_id: p_1XAxD14ZFWcp4wGTVz9vV6
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
        - id: cs_OSivANVNEL30RN1NxRn9y6
          claim_id: c_IefGqe6RcaL-cmIq1Vj4pc
          source_id: s_r2b-Dvrpg1n964Lbkw-RS9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r2b-Dvrpg1n964Lbkw-RS9
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 247213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json
            external_identifier: CBDB:247213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
---

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | 王冕，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PASiCHQs3ZcH2e9PXEScwH | 王效 | accepted |
| other | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 247213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json)
