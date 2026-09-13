---
schema: wang-person/v1
id: p_zK991JnPgoDLt2L6zBXFf9
status: active
merged_into: null
display_name: 王禹都
cbdb_id: 209578
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AeFEgDp4BaNFDkDN2t42QQ
        subject_person_id: p_zK991JnPgoDLt2L6zBXFf9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹都，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 209578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fJfoTqU-WM33QF4uSu_Qqz
          claim_id: c_AeFEgDp4BaNFDkDN2t42QQ
          source_id: s_Cb6fr35uGuz93tP6YDtt2W
          stance: supports
          locator: CBDB:209578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Cb6fr35uGuz93tP6YDtt2W
            source_type: api_record
            title: 中国历代人物传记资料库：王禹都（CBDB 209578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209578&o=json
            external_identifier: CBDB:209578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hjLwxjAb3BiHA2aW3kfM4Q
        subject_person_id: p_zK991JnPgoDLt2L6zBXFf9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZeYKBfGt9iPJRPez3BYBbY
          claim_id: c_hjLwxjAb3BiHA2aW3kfM4Q
          source_id: s_Cb6fr35uGuz93tP6YDtt2W
          stance: supports
          locator: CBDB:209578
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_TkI8vnnsaY69GOxRFUml0J
        subject_person_id: p_zK991JnPgoDLt2L6zBXFf9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1R4Sy7XkFzLmp9iTYbCMPK
          claim_id: c_TkI8vnnsaY69GOxRFUml0J
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第六十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E4zKM9ogFspN587Znn1wuq
            source_type: api_record
            title: 中国历代人物传记资料库：王許之（CBDB 205842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json
            external_identifier: CBDB:205842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fR2N3ddMBUUG3UGxzAGX1L
        status: active
        display_name: 王許之
        merged_into_person_id: null
  other: []
---

# 王禹都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禹都，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 209578） | accepted |
| name.primary | 王禹都 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fR2N3ddMBUUG3UGxzAGX1L | 王許之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王許之（CBDB 205842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json)
- [中国历代人物传记资料库：王禹都（CBDB 209578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209578&o=json)
