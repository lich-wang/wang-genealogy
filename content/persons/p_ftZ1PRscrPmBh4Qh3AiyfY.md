---
schema: wang-person/v1
id: p_ftZ1PRscrPmBh4Qh3AiyfY
status: active
merged_into: null
display_name: 王思任
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNdHemXyF93bmpuAFQsYhC
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ADd23p3nCM9c1J57v42A6
          claim_id: c_yNdHemXyF93bmpuAFQsYhC
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
          stance: supports
          locator: CBDB:71875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71875）
          source: &a1
            id: s_wzB8H1VeEUUxxH32LdLqx3
            source_type: api_record
            title: 中国历代人物传记资料库：王思任（CBDB 71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B9beMvsmZdiQCugCWdHQzY
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1575年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGGCMtbQdRNwTYZq9shi4f
          claim_id: c_B9beMvsmZdiQCugCWdHQzY
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1MxL7J2jkrgftT5pEJJx1d
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1646年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1SpVdiH2SGo9C58yJ76JuL
          claim_id: c_1MxL7J2jkrgftT5pEJJx1d
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Q3wD5LcBabvBDaazWyv1q
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCojBMsTknyS8RgStT2Tcb
          claim_id: c_9Q3wD5LcBabvBDaazWyv1q
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_359RqzKI2JpKSTKI1-9Za2
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Pusq65KpMmMVKf8JdS8fy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tOQEef2-HrO3C0lfC1slsk
          claim_id: c_359RqzKI2JpKSTKI1-9Za2
          source_id: s_z7BvCdLZ235WQMc9AduJfC
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #684, HuWenKai #255：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z7BvCdLZ235WQMc9AduJfC
            source_type: api_record
            title: 中国历代人物传记资料库：王端淑（CBDB 55720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55720&o=json
            external_identifier: CBDB:55720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9Pusq65KpMmMVKf8JdS8fy
        status: active
        display_name: 王端淑
        merged_into_person_id: null
    - claim:
        id: c_6ll1CkN1mC7D_BnLsHS506
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DqeZRrh1AHPNm4EUNSCfwn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NBVzZ2Z8RYPmufbeLqS0ab
          claim_id: c_6ll1CkN1mC7D_BnLsHS506
          source_id: s_AWnMRqxy1dBMHjB9QeiJRy
          stance: supports
          locator: 紹興府志:八十卷，lgid=316796：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AWnMRqxy1dBMHjB9QeiJRy
            source_type: api_record
            title: 中国历代人物传记资料库：王玉映（CBDB 570150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570150&o=json
            external_identifier: CBDB:570150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DqeZRrh1AHPNm4EUNSCfwn
        status: active
        display_name: 王玉映
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_M5ZiKJTPsEHi-8d_s2U2PX
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9nMQd6ceMAGfnhGs6TTb7s
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MZWFxTDJop9sRjrhDbJAJs
          claim_id: c_M5ZiKJTPsEHi-8d_s2U2PX
          source_id: s_dSJCzs2ekrJDZHTqbsR9qZ
          stance: supports
          locator: 紹興府志:八十卷，Igid=316302：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dSJCzs2ekrJDZHTqbsR9qZ
            source_type: api_record
            title: 中国历代人物传记资料库：王袞錫（CBDB 556726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556726&o=json
            external_identifier: CBDB:556726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9nMQd6ceMAGfnhGs6TTb7s
        status: active
        display_name: 王袞錫
        merged_into_person_id: null
  other: []
---

# 王思任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思任 | accepted |
| birth.date | 1575年 | accepted |
| death.date | 1646年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9Pusq65KpMmMVKf8JdS8fy | 王端淑 | accepted |
| children | p_DqeZRrh1AHPNm4EUNSCfwn | 王玉映 | accepted |
| descendants | p_9nMQd6ceMAGfnhGs6TTb7s | 王袞錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端淑（CBDB 55720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55720&o=json)
- [中国历代人物传记资料库：王袞錫（CBDB 556726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556726&o=json)
- [中国历代人物传记资料库：王思任（CBDB 71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
- [中国历代人物传记资料库：王玉映（CBDB 570150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570150&o=json)
