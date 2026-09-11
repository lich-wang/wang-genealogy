---
schema: wang-person/v1
id: p_N2U9djG3uDbtejoR1EKSH1
status: active
merged_into: null
display_name: 梅氏
revision: 1
cbdb_id: 237443
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p0_TRxl8IWGrlRaDw5D9vF
        subject_person_id: p_N2U9djG3uDbtejoR1EKSH1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 梅氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j9S91jviZjnLG2eCrhLlQW
          claim_id: c_p0_TRxl8IWGrlRaDw5D9vF
          source_id: s_-AcDum9h1TZLWC_OpTZ4JB
          stance: supports
          locator: CBDB:237443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_-AcDum9h1TZLWC_OpTZ4JB
            source_type: api_record
            title: 中国历代人物传记资料库：梅氏(王信妻)（CBDB 237443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237443&o=json
            external_identifier: CBDB:237443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c__20NqgfupLfz_qYrYljrqQ
        subject_person_id: p_N2U9djG3uDbtejoR1EKSH1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 梅氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fx5rmiQs2smZOUfHsfw9fz
          claim_id: c__20NqgfupLfz_qYrYljrqQ
          source_id: s_-AcDum9h1TZLWC_OpTZ4JB
          stance: supports
          locator: CBDB:237443
          quotation: null
          interpretation_note: CBDB 明确记录的王信配偶
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
        id: c__zfXkDsovF5UR7x9Rpu9Pb
        subject_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N2U9djG3uDbtejoR1EKSH1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZBsWpDVMZ3fbBfmcqc6zU3
          claim_id: c__zfXkDsovF5UR7x9Rpu9Pb
          source_id: s_-AcDum9h1TZLWC_OpTZ4JB
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dHV6AgtpcgRLpJFycLHnbd
        status: active
        display_name: 王信
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 梅氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 梅氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237443） | accepted |
| name.primary | 梅氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dHV6AgtpcgRLpJFycLHnbd | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：梅氏(王信妻)（CBDB 237443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237443&o=json)
