---
schema: wang-person/v1
id: p_hmTpA85PrqjnHjTecd3hGY
status: active
merged_into: null
display_name: 王牧謙
cbdb_id: 252935
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DmBKESyuZ93FVyp98zFBQ9
        subject_person_id: p_hmTpA85PrqjnHjTecd3hGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧謙，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 252935）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sB2KBz9JwbWi7TG4qR6hdq
          claim_id: c_DmBKESyuZ93FVyp98zFBQ9
          source_id: s_UVB38yCC3N4xNj86jvZ6X6
          stance: supports
          locator: CBDB:252935
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UVB38yCC3N4xNj86jvZ6X6
            source_type: api_record
            title: 中国历代人物传记资料库：王牧謙（CBDB 252935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252935&o=json
            external_identifier: CBDB:252935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XzqpKiU1YGd1GAzu1mwA9V
        subject_person_id: p_hmTpA85PrqjnHjTecd3hGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kEdCf48HLg7oiognMLdWjH
          claim_id: c_XzqpKiU1YGd1GAzu1mwA9V
          source_id: s_UVB38yCC3N4xNj86jvZ6X6
          stance: supports
          locator: CBDB:252935
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_6c9wxsN_Ei99frkvmj48OX
        subject_person_id: p_hmTpA85PrqjnHjTecd3hGY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3sCXvZnf2K3JGPtkmiPk7P
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hTHMXTk5G0LDu1vxWxw2KK
          claim_id: c_6c9wxsN_Ei99frkvmj48OX
          source_id: s_UbMDK3watKgmMGbKALPCAi
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UbMDK3watKgmMGbKALPCAi
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 198292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json
            external_identifier: CBDB:198292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3sCXvZnf2K3JGPtkmiPk7P
        status: active
        display_name: 王齊
        merged_into_person_id: null
  other: []
---

# 王牧謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王牧謙，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 252935） | accepted |
| name.primary | 王牧謙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3sCXvZnf2K3JGPtkmiPk7P | 王齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王牧謙（CBDB 252935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252935&o=json)
- [中国历代人物传记资料库：王齊（CBDB 198292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json)
