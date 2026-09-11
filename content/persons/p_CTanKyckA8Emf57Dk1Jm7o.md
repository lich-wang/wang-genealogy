---
schema: wang-person/v1
id: p_CTanKyckA8Emf57Dk1Jm7o
status: active
merged_into: null
display_name: 王世卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qTHyH4yhePCfkfB3G65Nx2
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HuEJT5gXGvQCAmKcVDtiXW
          claim_id: c_qTHyH4yhePCfkfB3G65Nx2
          source_id: s_htcTWEbRxiKntM1va2ty9n
          stance: supports
          locator: CBDB:316256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316256）
          source: &a1
            id: s_htcTWEbRxiKntM1va2ty9n
            source_type: api_record
            title: 中国历代人物传记资料库：王世卿（CBDB 316256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316256&o=json
            external_identifier: CBDB:316256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CoxdPiarzru8tFQaeUFA6G
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世卿，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TH7iPwJtooB44fQahwNnS5
          claim_id: c_CoxdPiarzru8tFQaeUFA6G
          source_id: s_htcTWEbRxiKntM1va2ty9n
          stance: supports
          locator: CBDB:316256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__1ely_7UJqYtlcL0_--gNa
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kDYZXlZhd4RNn9cMZb9Ddb
          claim_id: c__1ely_7UJqYtlcL0_--gNa
          source_id: s_htcTWEbRxiKntM1va2ty9n
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世卿 | accepted |
| bio.summary | 王世卿，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世卿（CBDB 316256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316256&o=json)
