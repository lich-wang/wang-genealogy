---
schema: wang-person/v1
id: p_yiCBExH3DTLm2arPBKGYQA
status: active
merged_into: null
display_name: 王遜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KQuxnyDy5DPnQj2Y8kH6p
        subject_person_id: p_yiCBExH3DTLm2arPBKGYQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ynktmt8ByzbkJfNF2hHYry
          claim_id: c_8KQuxnyDy5DPnQj2Y8kH6p
          source_id: s_yJBHbcDaJWuiHHVBzwYvvB
          stance: supports
          locator: CBDB:283886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283886）
          source: &a1
            id: s_yJBHbcDaJWuiHHVBzwYvvB
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 283886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json
            external_identifier: CBDB:283886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XWA4SK4UeGAdm7hMLwBsAD
        subject_person_id: p_yiCBExH3DTLm2arPBKGYQA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pSF9qV37w48B8FiMn-o7UM
          claim_id: c_XWA4SK4UeGAdm7hMLwBsAD
          source_id: s_yJBHbcDaJWuiHHVBzwYvvB
          stance: supports
          locator: CBDB:283886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V2-7p3wP99kynXXp3daNWo
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yiCBExH3DTLm2arPBKGYQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZKRTOhI6GugvEzNBUTUgY
          claim_id: c_V2-7p3wP99kynXXp3daNWo
          source_id: s_IUtuJbHdy3F9HeqMg_6aFu
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王遜 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王遜 之父／母。
          source:
            id: s_IUtuJbHdy3F9HeqMg_6aFu
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 283886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json
            external_identifier: CBDB:283886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oKkzy3873cWFyj79szDYmN
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZK7TN-5qPG6-E5so6QrYBj
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yiCBExH3DTLm2arPBKGYQA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meoCpW_pWtKBI8-zjGDqIe
          claim_id: c_ZK7TN-5qPG6-E5so6QrYBj
          source_id: s_IUtuJbHdy3F9HeqMg_6aFu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IUtuJbHdy3F9HeqMg_6aFu
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 283886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json
            external_identifier: CBDB:283886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | 王遜，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oKkzy3873cWFyj79szDYmN | 王廉 | accepted |
| other | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 283886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json)
