---
schema: wang-person/v1
id: p_U7FRJcUGG85ngsevW6Z1fD
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 5368
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q0Ns76rcL3eLYv-ZULD6-4
        subject_person_id: p_U7FRJcUGG85ngsevW6Z1fD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏（1019—1079），宋人物。籍贯聊城，入仕封贈。（中国历代人物传记资料库 CBDB 5368）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bvw3qbO_AJbW3wZTm7xLU3
          claim_id: c_Q0Ns76rcL3eLYv-ZULD6-4
          source_id: s_8UC-_UJQrWYGR6NhNatEDo
          stance: supports
          locator: CBDB:5368
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8UC-_UJQrWYGR6NhNatEDo
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王荀龍妻)（CBDB 5368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5368&o=json
            external_identifier: CBDB:5368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TfrRtl_SzhCZn1V-dBJISZ
        subject_person_id: p_U7FRJcUGG85ngsevW6Z1fD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ki6Kgm-SS8oKuqR4PwpxDI
          claim_id: c_TfrRtl_SzhCZn1V-dBJISZ
          source_id: s_8UC-_UJQrWYGR6NhNatEDo
          stance: supports
          locator: CBDB:5368
          quotation: null
          interpretation_note: CBDB 明确记录的王荀龍配偶
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
        id: c_pAWbb40EeMOkNvBtECMb7v
        subject_person_id: p_1KK9DvJk9t52KDW7tdEx3R
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_U7FRJcUGG85ngsevW6Z1fD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xps_LStzouozbtVHUUp5fX
          claim_id: c_pAWbb40EeMOkNvBtECMb7v
          source_id: s_8UC-_UJQrWYGR6NhNatEDo
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1843;1844：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1KK9DvJk9t52KDW7tdEx3R
        status: active
        display_name: 王荀龍
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏（1019—1079），宋人物。籍贯聊城，入仕封贈。（中国历代人物传记资料库 CBDB 5368） | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1KK9DvJk9t52KDW7tdEx3R | 王荀龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王荀龍妻)（CBDB 5368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5368&o=json)
