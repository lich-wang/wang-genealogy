---
schema: wang-person/v1
id: p_zDTc9bKmkz18U1SKVRc2v1
status: active
merged_into: null
display_name: 王光重
cbdb_id: 308697
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2bWPsU5D2KbKZfww8Bb6w
        subject_person_id: p_zDTc9bKmkz18U1SKVRc2v1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光重，明人物。中国历代人物传记资料库（CBDB）以人物编号 308697 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_EIGBh3wNyh_hvc3WBC5zVE
          claim_id: c_i2bWPsU5D2KbKZfww8Bb6w
          source_id: s_cU98BqvHPZ85UXyVbLN5zu
          stance: supports
          locator: CBDB:308697
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cU98BqvHPZ85UXyVbLN5zu
            source_type: api_record
            title: 中国历代人物传记资料库：王光重（CBDB 308697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308697&o=json
            external_identifier: CBDB:308697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6g2W6YHfhTrJsqHC9yBr26
        subject_person_id: p_zDTc9bKmkz18U1SKVRc2v1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yigjF652685ZXD6MasHm9a
          claim_id: c_6g2W6YHfhTrJsqHC9yBr26
          source_id: s_cU98BqvHPZ85UXyVbLN5zu
          stance: supports
          locator: CBDB:308697
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_cU98BqvHPZ85UXyVbLN5zu
            source_type: api_record
            title: 中国历代人物传记资料库：王光重（CBDB 308697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308697&o=json
            external_identifier: CBDB:308697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_QgbOdgvyHWClO2IBTmoGlt
        subject_person_id: p_zDTc9bKmkz18U1SKVRc2v1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Oz-tBcSyOnxaIna_eIFbCb
          claim_id: c_QgbOdgvyHWClO2IBTmoGlt
          source_id: s_cU98BqvHPZ85UXyVbLN5zu
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xXSR8uBFHqUzBi2gqK2tw2
        status: active
        display_name: 王惟恕
        merged_into_person_id: null
  other: []
---

# 王光重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光重，明人物。中国历代人物传记资料库（CBDB）以人物编号 308697 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王光重 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xXSR8uBFHqUzBi2gqK2tw2 | 王惟恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光重（CBDB 308697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308697&o=json)
