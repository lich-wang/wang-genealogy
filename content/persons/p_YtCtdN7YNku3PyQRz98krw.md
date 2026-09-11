---
schema: wang-person/v1
id: p_YtCtdN7YNku3PyQRz98krw
status: active
merged_into: null
display_name: 顧氏
revision: 1
cbdb_id: 326926
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oSF19nZsXyl4OcFillm95b
        subject_person_id: p_YtCtdN7YNku3PyQRz98krw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 顧氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326926）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bo83O_g62AiVUE5NFMo5Ey
          claim_id: c_oSF19nZsXyl4OcFillm95b
          source_id: s_1boo89w4uh_zPWwvfVOUBe
          stance: supports
          locator: CBDB:326926
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1boo89w4uh_zPWwvfVOUBe
            source_type: api_record
            title: 中国历代人物传记资料库：顧氏(王俸妻)（CBDB 326926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326926&o=json
            external_identifier: CBDB:326926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SdYh6J5yH48prJy56flr3k
        subject_person_id: p_YtCtdN7YNku3PyQRz98krw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 顧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbdJVBb371m3iQpFdDuPpg
          claim_id: c_SdYh6J5yH48prJy56flr3k
          source_id: s_1boo89w4uh_zPWwvfVOUBe
          stance: supports
          locator: CBDB:326926
          quotation: null
          interpretation_note: CBDB 明确记录的王俸配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_89hA-Y8vHXTMRedV5iNw_0
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YtCtdN7YNku3PyQRz98krw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmSWWDZ1ZmgZXDVM3BQO4P
          claim_id: c_89hA-Y8vHXTMRedV5iNw_0
          source_id: s_1boo89w4uh_zPWwvfVOUBe
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第六十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4j28cTB4FbkC46frs3J8PW
        status: active
        display_name: 王俸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 顧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 顧氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326926） | accepted |
| name.primary | 顧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4j28cTB4FbkC46frs3J8PW | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧氏(王俸妻)（CBDB 326926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326926&o=json)
