---
schema: wang-person/v1
id: p_mhv2745cG2mWonF5H2ZCdq
status: active
merged_into: null
display_name: 王古平
cbdb_id: 286917
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wBifR9vBQiSYqS2GjeUJnH
        subject_person_id: p_mhv2745cG2mWonF5H2ZCdq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王古平，明人物。永樂十年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 286917）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_coZYnn76Zw4BPjLvx8th-j
          claim_id: c_wBifR9vBQiSYqS2GjeUJnH
          source_id: s_dMf85nhS1Ka74Xis6swYsk
          stance: supports
          locator: CBDB:286917
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dMf85nhS1Ka74Xis6swYsk
            source_type: api_record
            title: 中国历代人物传记资料库：王古平（CBDB 286917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286917&o=json
            external_identifier: CBDB:286917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PqLG7SHtm1ouG3QxMR78GD
        subject_person_id: p_mhv2745cG2mWonF5H2ZCdq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王古平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B5CfjBamfXgWwjBzsAsdu3
          claim_id: c_PqLG7SHtm1ouG3QxMR78GD
          source_id: s_dMf85nhS1Ka74Xis6swYsk
          stance: supports
          locator: CBDB:286917
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1uYc2unG7LczVjQ8J0hP3h
        subject_person_id: p_mhv2745cG2mWonF5H2ZCdq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_51C8Kh4aNymAeDywG3epKL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4MMce5aglD2mPk5Am29SsO
          claim_id: c_1uYc2unG7LczVjQ8J0hP3h
          source_id: s_dMf85nhS1Ka74Xis6swYsk
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dMf85nhS1Ka74Xis6swYsk
            source_type: api_record
            title: 中国历代人物传记资料库：王古平（CBDB 286917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286917&o=json
            external_identifier: CBDB:286917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_51C8Kh4aNymAeDywG3epKL
        status: active
        display_name: 王嗣先
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王古平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王古平，明人物。永樂十年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 286917） | accepted |
| name.primary | 王古平 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_51C8Kh4aNymAeDywG3epKL | 王嗣先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王古平（CBDB 286917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286917&o=json)
