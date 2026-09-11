---
schema: wang-person/v1
id: p_QHCCGVeb94PEkQ5kEGxKfz
status: active
merged_into: null
display_name: 任氏
revision: 1
cbdb_id: 302953
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R_ogLnJSPTwe7nrgAYdblW
        subject_person_id: p_QHCCGVeb94PEkQ5kEGxKfz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGjDq12Skfp4n7lsUwxMY5
          claim_id: c_R_ogLnJSPTwe7nrgAYdblW
          source_id: s_RuHzgFc47PJ_blfHlD6q7X
          stance: supports
          locator: CBDB:302953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RuHzgFc47PJ_blfHlD6q7X
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王撫民妻)（CBDB 302953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302953&o=json
            external_identifier: CBDB:302953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qFRNFqsW7gGZcl92ov1Tdu
        subject_person_id: p_QHCCGVeb94PEkQ5kEGxKfz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZGxTn6Ta_2PD7VSU3SarL
          claim_id: c_qFRNFqsW7gGZcl92ov1Tdu
          source_id: s_RuHzgFc47PJ_blfHlD6q7X
          stance: supports
          locator: CBDB:302953
          quotation: null
          interpretation_note: CBDB 明确记录的王撫民配偶
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
        id: c_iIoC1BHa6rHnybGq-OuB8d
        subject_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QHCCGVeb94PEkQ5kEGxKfz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JYWKRsxo01yN3HKMVNIgwS
          claim_id: c_iIoC1BHa6rHnybGq-OuB8d
          source_id: s_RuHzgFc47PJ_blfHlD6q7X
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hYn35dM9vxJfRx8fWZf7jx
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 任氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 任氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302953） | accepted |
| name.primary | 任氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hYn35dM9vxJfRx8fWZf7jx | 王撫民 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王撫民妻)（CBDB 302953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302953&o=json)
