---
schema: wang-person/v1
id: p_fdXx9WXc5iDGBMMcVgHJxM
status: active
merged_into: null
display_name: 王元柄
cbdb_id: 221932
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1xo8BrnbzyyAMH6cY2oNup
        subject_person_id: p_fdXx9WXc5iDGBMMcVgHJxM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元柄，明人物。萬曆八年進士，籍贯蒲城，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 221932）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jm56pqc2xb8BJyeeRc-DqA
          claim_id: c_1xo8BrnbzyyAMH6cY2oNup
          source_id: s_sBYu5MyR6sMf52Wn2YXYWS
          stance: supports
          locator: CBDB:221932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sBYu5MyR6sMf52Wn2YXYWS
            source_type: api_record
            title: 中国历代人物传记资料库：王元柄（CBDB 221932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221932&o=json
            external_identifier: CBDB:221932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ra9FQE9vGigctKZbZxstGX
        subject_person_id: p_fdXx9WXc5iDGBMMcVgHJxM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元柄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FvzsEPNm55UyFUU4DUcgee
          claim_id: c_Ra9FQE9vGigctKZbZxstGX
          source_id: s_sBYu5MyR6sMf52Wn2YXYWS
          stance: supports
          locator: CBDB:221932
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7-28Y2_aPr3drsx4RiAdtj
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fdXx9WXc5iDGBMMcVgHJxM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zX8Ko2OEa4KxTwgHOC2UWi
          claim_id: c_7-28Y2_aPr3drsx4RiAdtj
          source_id: s_0KbSrudnCqpkkanuN2kS9k
          stance: supports
          locator: CBDB：兄弟 王元命（206711）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王元柄 与 王元命 为同胞（CBDB 记「弟」），王元命 之父／母即 王元柄 之父／母。
          source:
            id: s_0KbSrudnCqpkkanuN2kS9k
            source_type: api_record
            title: 中国历代人物传记资料库：王元柄（CBDB 221932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221932&o=json
            external_identifier: CBDB:221932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SS97xGcPYDqvhXCDmF9tN7
        status: active
        display_name: 王表
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pe-S4I81EJLdxQKRnOmick
        subject_person_id: p_3aMVouUh1i5LfdSb79YgNN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fdXx9WXc5iDGBMMcVgHJxM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_teBpp0OPa7hC4NTzcMFGaq
          claim_id: c_pe-S4I81EJLdxQKRnOmick
          source_id: s_0KbSrudnCqpkkanuN2kS9k
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206711 王元命）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0KbSrudnCqpkkanuN2kS9k
            source_type: api_record
            title: 中国历代人物传记资料库：王元柄（CBDB 221932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221932&o=json
            external_identifier: CBDB:221932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3aMVouUh1i5LfdSb79YgNN
        status: active
        display_name: 王元命
        merged_into_person_id: null
---

# 王元柄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元柄，明人物。萬曆八年進士，籍贯蒲城，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 221932） | accepted |
| name.primary | 王元柄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SS97xGcPYDqvhXCDmF9tN7 | 王表 | accepted |
| other | p_3aMVouUh1i5LfdSb79YgNN | 王元命 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元柄（CBDB 221932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221932&o=json)
