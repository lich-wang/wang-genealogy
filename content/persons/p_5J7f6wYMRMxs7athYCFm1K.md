---
schema: wang-person/v1
id: p_5J7f6wYMRMxs7athYCFm1K
status: active
merged_into: null
display_name: 王永臣
cbdb_id: 213407
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JJHKLJ4gLoETdsN4JMyW18
        subject_person_id: p_5J7f6wYMRMxs7athYCFm1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永臣，明人物。萬曆二年進士，籍贯洛陽，曾任遊擊將軍、壽官。（中国历代人物传记资料库 CBDB 213407）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YrIrN2OHmUKqGdVX_eh1l1
          claim_id: c_JJHKLJ4gLoETdsN4JMyW18
          source_id: s_q3DAjceohaS2PMGBemxMMs
          stance: supports
          locator: CBDB:213407
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_q3DAjceohaS2PMGBemxMMs
            source_type: api_record
            title: 中国历代人物传记资料库：王永臣（CBDB 213407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213407&o=json
            external_identifier: CBDB:213407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TbsdGHEPapZdCusNuPF8DG
        subject_person_id: p_5J7f6wYMRMxs7athYCFm1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_q4p7FpZst4Dan4Cpb4Mezh
          claim_id: c_TbsdGHEPapZdCusNuPF8DG
          source_id: s_q3DAjceohaS2PMGBemxMMs
          stance: supports
          locator: CBDB:213407
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LJHkXuQG63_PkDCDGAVZGz
        subject_person_id: p_5J7f6wYMRMxs7athYCFm1K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RdSW0RafR7ao0P7xaquv1R
          claim_id: c_LJHkXuQG63_PkDCDGAVZGz
          source_id: s_q3DAjceohaS2PMGBemxMMs
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q3DAjceohaS2PMGBemxMMs
            source_type: api_record
            title: 中国历代人物传记资料库：王永臣（CBDB 213407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213407&o=json
            external_identifier: CBDB:213407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_UuFL1gAwG68QUD39E4M5Wh
        status: active
        display_name: 王職
        merged_into_person_id: null
    - claim:
        id: c_xftA34cxadci5-DW10JVeq
        subject_person_id: p_5J7f6wYMRMxs7athYCFm1K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PjdxRKZX4FRuWpDcu9UUDV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_114WTQMQmePYytIIAde23q
          claim_id: c_xftA34cxadci5-DW10JVeq
          source_id: s_tBEAPfSSafOFvKBrv1PDAm
          stance: supports
          locator: CBDB：兄弟 王職（206108）之父／母 王永臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王聆 与 王職 为同胞（CBDB 记「弟」），王職 之父／母即 王聆 之父／母。
          source:
            id: s_tBEAPfSSafOFvKBrv1PDAm
            source_type: api_record
            title: 中国历代人物传记资料库：王聆（CBDB 213413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213413&o=json
            external_identifier: CBDB:213413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PjdxRKZX4FRuWpDcu9UUDV
        status: active
        display_name: 王聆
        merged_into_person_id: null
    - claim:
        id: c_23Ml6Ud-4D-5USEa07uOGy
        subject_person_id: p_5J7f6wYMRMxs7athYCFm1K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eoQ2Pe39un8i36axBmqEvr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lgCWrNTgCssUBdk8ZM3bp1
          claim_id: c_23Ml6Ud-4D-5USEa07uOGy
          source_id: s_Z-b3oNFgCfYZslErJDczeO
          stance: supports
          locator: CBDB：兄弟 王職（206108）之父／母 王永臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王聘 与 王職 为同胞（CBDB 记「弟」），王職 之父／母即 王聘 之父／母。
          source:
            id: s_Z-b3oNFgCfYZslErJDczeO
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 213412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213412&o=json
            external_identifier: CBDB:213412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eoQ2Pe39un8i36axBmqEvr
        status: active
        display_name: 王聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王永臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永臣，明人物。萬曆二年進士，籍贯洛陽，曾任遊擊將軍、壽官。（中国历代人物传记资料库 CBDB 213407） | accepted |
| name.primary | 王永臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UuFL1gAwG68QUD39E4M5Wh | 王職 | accepted |
| children | p_PjdxRKZX4FRuWpDcu9UUDV | 王聆 | accepted |
| children | p_eoQ2Pe39un8i36axBmqEvr | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聆（CBDB 213413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213413&o=json)
- [中国历代人物传记资料库：王聘（CBDB 213412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213412&o=json)
- [中国历代人物传记资料库：王永臣（CBDB 213407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213407&o=json)
