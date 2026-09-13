---
schema: wang-person/v1
id: p_Rh1K2iP8xhRWnRgvAy7R1F
status: active
merged_into: null
display_name: 王時庸
cbdb_id: 304774
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ded3L9NMbAd1LFNnWT9H99
        subject_person_id: p_Rh1K2iP8xhRWnRgvAy7R1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時庸，明人物。嘉靖二十年進士，籍贯鈞州，曾任知縣。（中国历代人物传记资料库 CBDB 304774）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hSwyi0pCRQsloG1Kd2j-Kn
          claim_id: c_Ded3L9NMbAd1LFNnWT9H99
          source_id: s_1PyPsCZHhFBQNjrtcqnnKA
          stance: supports
          locator: CBDB:304774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1PyPsCZHhFBQNjrtcqnnKA
            source_type: api_record
            title: 中国历代人物传记资料库：王時庸（CBDB 304774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304774&o=json
            external_identifier: CBDB:304774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ngq1s3Dd2L5cxsn59qYSSM
        subject_person_id: p_Rh1K2iP8xhRWnRgvAy7R1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時庸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ymbT1Yjswc1CJQrtzrAtTH
          claim_id: c_Ngq1s3Dd2L5cxsn59qYSSM
          source_id: s_1PyPsCZHhFBQNjrtcqnnKA
          stance: supports
          locator: CBDB:304774
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6bcKq9oC73_RHwhxRffeGW
        subject_person_id: p_Rh1K2iP8xhRWnRgvAy7R1F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vcvIa-Y283Gxcm29_gIuTV
          claim_id: c_6bcKq9oC73_RHwhxRffeGW
          source_id: s_1PyPsCZHhFBQNjrtcqnnKA
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1PyPsCZHhFBQNjrtcqnnKA
            source_type: api_record
            title: 中国历代人物传记资料库：王時庸（CBDB 304774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304774&o=json
            external_identifier: CBDB:304774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_W4Uw5tx84WkFrLAeBu8JGu
        status: active
        display_name: 王嘉孝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時庸，明人物。嘉靖二十年進士，籍贯鈞州，曾任知縣。（中国历代人物传记资料库 CBDB 304774） | accepted |
| name.primary | 王時庸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_W4Uw5tx84WkFrLAeBu8JGu | 王嘉孝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時庸（CBDB 304774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304774&o=json)
