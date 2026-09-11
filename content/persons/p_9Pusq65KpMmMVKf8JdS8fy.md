---
schema: wang-person/v1
id: p_9Pusq65KpMmMVKf8JdS8fy
status: active
merged_into: null
display_name: 王端淑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XMNWMvnrjkPRsdkaPAzFZU
        subject_person_id: p_9Pusq65KpMmMVKf8JdS8fy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CcRf6csQ6YkqM2As2QUcm7
          claim_id: c_XMNWMvnrjkPRsdkaPAzFZU
          source_id: s_z7BvCdLZ235WQMc9AduJfC
          stance: supports
          locator: CBDB:55720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55720）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DsGSsrs5oJK5Gh5LB4rE3V
        subject_person_id: p_9Pusq65KpMmMVKf8JdS8fy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1iU3sj5DuU4fPmA5JKa6q6
          claim_id: c_DsGSsrs5oJK5Gh5LB4rE3V
          source_id: s_z7BvCdLZ235WQMc9AduJfC
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
        id: c_vx2raub6wByW1keAwbrfMr
        subject_person_id: p_9Pusq65KpMmMVKf8JdS8fy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h9qx8oKPHV664Ux1PLou4G
          claim_id: c_vx2raub6wByW1keAwbrfMr
          source_id: s_z7BvCdLZ235WQMc9AduJfC
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
        id: c_Etz1VSVWaVcm2YKj99GaQ9
        subject_person_id: p_9Pusq65KpMmMVKf8JdS8fy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXL4ixiK8HjE1UHuLqAFqK
          claim_id: c_Etz1VSVWaVcm2YKj99GaQ9
          source_id: s_z7BvCdLZ235WQMc9AduJfC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_ftZ1PRscrPmBh4Qh3AiyfY
        status: active
        display_name: 王思任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yAOHKuE4Smd-SKAJIlBiDn
        subject_person_id: p_9Pusq65KpMmMVKf8JdS8fy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aiZ62BS2EQTso11n9YhdVB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MM9sehuVO6YhXqy3oXWjn6
          claim_id: c_yAOHKuE4Smd-SKAJIlBiDn
          source_id: s_z7BvCdLZ235WQMc9AduJfC
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #685, HuWenKai #248：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aiZ62BS2EQTso11n9YhdVB
        status: active
        display_name: 丁肇圣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王端淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端淑 | accepted |
| birth.date | 1621年 | accepted |
| death.date | 1706年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftZ1PRscrPmBh4Qh3AiyfY | 王思任 | accepted |
| spouses | p_aiZ62BS2EQTso11n9YhdVB | 丁肇圣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端淑（CBDB 55720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55720&o=json)
