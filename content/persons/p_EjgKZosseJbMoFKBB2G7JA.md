---
schema: wang-person/v1
id: p_EjgKZosseJbMoFKBB2G7JA
status: active
merged_into: null
display_name: 王嗣中
cbdb_id: 219544
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aQMoMKiWTmfoXm62yrwzre
        subject_person_id: p_EjgKZosseJbMoFKBB2G7JA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣中，明人物。萬曆八年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 219544）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GvHrpLhrpd9NJtkxgVIoYa
          claim_id: c_aQMoMKiWTmfoXm62yrwzre
          source_id: s_JQ3ncxeg7uow9i961FCCCB
          stance: supports
          locator: CBDB:219544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JQ3ncxeg7uow9i961FCCCB
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣中（CBDB 219544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219544&o=json
            external_identifier: CBDB:219544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_heA6v2vEkmEM7WnVw1Qews
        subject_person_id: p_EjgKZosseJbMoFKBB2G7JA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_41WEa42abqs4QZSCZVF4Mk
          claim_id: c_heA6v2vEkmEM7WnVw1Qews
          source_id: s_JQ3ncxeg7uow9i961FCCCB
          stance: supports
          locator: CBDB:219544
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qwzWZvSISWS1-7cd0Nsys3
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EjgKZosseJbMoFKBB2G7JA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QR0Xs3FnSvftpfDl4qR-Fs
          claim_id: c_qwzWZvSISWS1-7cd0Nsys3
          source_id: s_Goo0QP4ZBRmiv1PoHvV01p
          stance: supports
          locator: CBDB：兄弟 王嗣美（206544）之父／母 王傳
          quotation: null
          interpretation_note: 由兄弟关系推断：王嗣中 与 王嗣美 为同胞（CBDB 记「弟」），王嗣美 之父／母即 王嗣中 之父／母。
          source:
            id: s_Goo0QP4ZBRmiv1PoHvV01p
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣中（CBDB 219544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219544&o=json
            external_identifier: CBDB:219544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NF9HbHTtZ8ow78qFYfTJ3z
        status: active
        display_name: 王傳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZH7kvlSwOPu54laV6WPaTR
        subject_person_id: p_EjgKZosseJbMoFKBB2G7JA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y0COjbvMTc39sEF7bhZmvu
          claim_id: c_ZH7kvlSwOPu54laV6WPaTR
          source_id: s_Goo0QP4ZBRmiv1PoHvV01p
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206544 王嗣美）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Goo0QP4ZBRmiv1PoHvV01p
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣中（CBDB 219544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219544&o=json
            external_identifier: CBDB:219544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tEHS6YSuyxSKL9JTr26FoR
        status: active
        display_name: 王嗣美
        merged_into_person_id: null
---

# 王嗣中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣中，明人物。萬曆八年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 219544） | accepted |
| name.primary | 王嗣中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NF9HbHTtZ8ow78qFYfTJ3z | 王傳 | accepted |
| other | p_tEHS6YSuyxSKL9JTr26FoR | 王嗣美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣中（CBDB 219544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219544&o=json)
