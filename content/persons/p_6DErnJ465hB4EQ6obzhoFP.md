---
schema: wang-person/v1
id: p_6DErnJ465hB4EQ6obzhoFP
status: active
merged_into: null
display_name: 王言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rzeu9EPNdjZWDoGc1pnVFh
        subject_person_id: p_6DErnJ465hB4EQ6obzhoFP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kh1qqQ5Ns8181uhPVazpiL
          claim_id: c_Rzeu9EPNdjZWDoGc1pnVFh
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: CBDB:203298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203298）
          source: &a1
            id: s_5zcswoRuK7oFRUJUGyavEE
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 203298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json
            external_identifier: CBDB:203298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_25DMG3RzVNPvy5AdebBYN4
        subject_person_id: p_6DErnJ465hB4EQ6obzhoFP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HaSXGFvVtQPsa8uFDsPMid
          claim_id: c_25DMG3RzVNPvy5AdebBYN4
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YGmKyHQWBLb7X9nqK1nqEK
        subject_person_id: p_6DErnJ465hB4EQ6obzhoFP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言（生于1513年），明人物。明清進士進士，籍贯登州衛，入仕進士。（中国历代人物传记资料库 CBDB 203298）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0N7EMRwBxyKKqBuAuwTsJ7
          claim_id: c_YGmKyHQWBLb7X9nqK1nqEK
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: CBDB:203298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rFLzB1izre5hQnt3Iqe2NJ
        subject_person_id: p_Bhg3TbAuVgAYzQ5KGEKiHP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6DErnJ465hB4EQ6obzhoFP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zcQczRVUi-BLQlw4irqs5I
          claim_id: c_rFLzB1izre5hQnt3Iqe2NJ
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Bhg3TbAuVgAYzQ5KGEKiHP
        status: active
        display_name: 王鏊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BmlbX5a6ztbR-7g633x01f
        subject_person_id: p_6DErnJ465hB4EQ6obzhoFP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xBL5SdMFEFbvmJdH3fgDfu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zJ4szyQWC3lByzO6YgZGHw
          claim_id: c_BmlbX5a6ztbR-7g633x01f
          source_id: s_zVPusWBC8WbgS028hSJatK
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zVPusWBC8WbgS028hSJatK
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王言妻)（CBDB 302720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302720&o=json
            external_identifier: CBDB:302720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xBL5SdMFEFbvmJdH3fgDfu
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Ypc17nFnPNufgWHOnGmRnN
        subject_person_id: p_G7kZZDk33AXi5PJYjYnxWD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6DErnJ465hB4EQ6obzhoFP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5BpTo0vLOtWFT-zNnBvUfh
          claim_id: c_Ypc17nFnPNufgWHOnGmRnN
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G7kZZDk33AXi5PJYjYnxWD
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_oUDrKQbdGuRXMzngA-AN76
        subject_person_id: p_NjzXH9fFmDBUBL4MtDy5kZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6DErnJ465hB4EQ6obzhoFP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tUzzUYoY1yHQ-_EyG6lX4R
          claim_id: c_oUDrKQbdGuRXMzngA-AN76
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NjzXH9fFmDBUBL4MtDy5kZ
        status: active
        display_name: 王震
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| birth.date | 1513年 | accepted |
| bio.summary | 王言（生于1513年），明人物。明清進士進士，籍贯登州衛，入仕進士。（中国历代人物传记资料库 CBDB 203298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bhg3TbAuVgAYzQ5KGEKiHP | 王鏊 | accepted |
| spouses | p_xBL5SdMFEFbvmJdH3fgDfu | 孫氏 | accepted |
| ancestors | p_G7kZZDk33AXi5PJYjYnxWD | 王玉 | accepted |
| ancestors | p_NjzXH9fFmDBUBL4MtDy5kZ | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王言妻)（CBDB 302720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302720&o=json)
- [中国历代人物传记资料库：王言（CBDB 203298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json)
