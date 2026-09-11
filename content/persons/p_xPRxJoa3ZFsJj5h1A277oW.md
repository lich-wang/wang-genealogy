---
schema: wang-person/v1
id: p_xPRxJoa3ZFsJj5h1A277oW
status: active
merged_into: null
display_name: 黃氏
revision: 1
cbdb_id: 315776
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vrcSYBazHXXniH4gkV7UC7
        subject_person_id: p_xPRxJoa3ZFsJj5h1A277oW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 315776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_9C_jRSmBL5VOHvQ-GEN1
          claim_id: c_vrcSYBazHXXniH4gkV7UC7
          source_id: s_fKlNz3Jb64Z-kn3-8NIgQ-
          stance: supports
          locator: CBDB:315776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fKlNz3Jb64Z-kn3-8NIgQ-
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(楊一鶚妻)（CBDB 315776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315776&o=json
            external_identifier: CBDB:315776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v9NzSj0cLY7RtzZLu-gYXg
        subject_person_id: p_xPRxJoa3ZFsJj5h1A277oW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VcVERJwJGxcIOJB9MdU_2a
          claim_id: c_v9NzSj0cLY7RtzZLu-gYXg
          source_id: s_fKlNz3Jb64Z-kn3-8NIgQ-
          stance: supports
          locator: CBDB:315776
          quotation: null
          interpretation_note: CBDB 明确记录的王一鶚配偶
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
        id: c_wWvI9AU_XVRm_dui2ebBAN
        subject_person_id: p_kvkuDUVw4cdQYN9MmsCViL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xPRxJoa3ZFsJj5h1A277oW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FMT1yGHJqPH-bOnjSqzkGx
          claim_id: c_wWvI9AU_XVRm_dui2ebBAN
          source_id: s_fKlNz3Jb64Z-kn3-8NIgQ-
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kvkuDUVw4cdQYN9MmsCViL
        status: active
        display_name: 王一鶚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黃氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 黃氏，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 315776） | accepted |
| name.primary | 黃氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kvkuDUVw4cdQYN9MmsCViL | 王一鶚 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(楊一鶚妻)（CBDB 315776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315776&o=json)
