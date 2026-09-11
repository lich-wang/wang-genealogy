---
schema: wang-person/v1
id: p_Mf2cCNPP13nfvHrxcNv96C
status: active
merged_into: null
display_name: 王仁美
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gbm2q3841Xev2KL7MUXbv8
        subject_person_id: p_Mf2cCNPP13nfvHrxcNv96C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9aNDGzLGTPXDCxyPZoPEXr
          claim_id: c_Gbm2q3841Xev2KL7MUXbv8
          source_id: s_fqisWyj3jSQfT9RTdRSV6B
          stance: supports
          locator: CBDB:263780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263780）
          source: &a1
            id: s_fqisWyj3jSQfT9RTdRSV6B
            source_type: api_record
            title: 中国历代人物传记资料库：王仁美（CBDB 263780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263780&o=json
            external_identifier: CBDB:263780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6boMdUEGtK38TKpNnMhmRg
        subject_person_id: p_Mf2cCNPP13nfvHrxcNv96C
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
        - id: cs_dJZsjSLf5RRKJPVmxeD37q
          claim_id: c_6boMdUEGtK38TKpNnMhmRg
          source_id: s_fqisWyj3jSQfT9RTdRSV6B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_1ZxumKXSqY-j1174C3HQiG
        subject_person_id: p_Mf2cCNPP13nfvHrxcNv96C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XeoDcuzyMB_VhBP3OIQPRA
          claim_id: c_1ZxumKXSqY-j1174C3HQiG
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nUcJwoZm9zoYm8ziRTQn3w
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 200871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json
            external_identifier: CBDB:200871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5MQS7xTZ7xaRFjWYKoXEEG
        status: active
        display_name: 王序
        merged_into_person_id: null
    - claim:
        id: c_5rm_1jurD1FHKQBZDf-7gl
        subject_person_id: p_Mf2cCNPP13nfvHrxcNv96C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dJj6NuaLRaohrqoTudZvBt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3lxfYeJmXGJkUfBF_42ER
          claim_id: c_5rm_1jurD1FHKQBZDf-7gl
          source_id: s_fqisWyj3jSQfT9RTdRSV6B
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dJj6NuaLRaohrqoTudZvBt
        status: active
        display_name: 王慶
        merged_into_person_id: null
  other: []
---

# 王仁美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁美 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5MQS7xTZ7xaRFjWYKoXEEG | 王序 | accepted |
| descendants | p_dJj6NuaLRaohrqoTudZvBt | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁美（CBDB 263780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263780&o=json)
- [中国历代人物传记资料库：王序（CBDB 200871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json)
