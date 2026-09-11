---
schema: wang-person/v1
id: p_t7ZwKSF3BtuwRK4ev8TkAP
status: active
merged_into: null
display_name: 王學敏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YN2PeADEjkaFdzdivTpot1
        subject_person_id: p_t7ZwKSF3BtuwRK4ev8TkAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SUiH87DrHe17Pmj2gB54Cf
          claim_id: c_YN2PeADEjkaFdzdivTpot1
          source_id: s_YMmTvhPbHuWcbGmtnT3o4C
          stance: supports
          locator: CBDB:260397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260397）
          source: &a1
            id: s_YMmTvhPbHuWcbGmtnT3o4C
            source_type: api_record
            title: 中国历代人物传记资料库：王學敏（CBDB 260397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260397&o=json
            external_identifier: CBDB:260397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SdXHb6d3dm4suHzdsB7RSL
        subject_person_id: p_t7ZwKSF3BtuwRK4ev8TkAP
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
        - id: cs_GYLTGCM2HMCrBxig8gdnJn
          claim_id: c_SdXHb6d3dm4suHzdsB7RSL
          source_id: s_YMmTvhPbHuWcbGmtnT3o4C
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
        id: c_pSm4m_AYrZs1suQZCyTAHT
        subject_person_id: p_t7ZwKSF3BtuwRK4ev8TkAP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YgHcfnfWD8olqMLDiNs5NO
          claim_id: c_pSm4m_AYrZs1suQZCyTAHT
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9tEBUreHpbdKWNi5b9umHP
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 126619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json
            external_identifier: CBDB:126619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
  other: []
---

# 王學敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學敏 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學敏（CBDB 260397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260397&o=json)
- [中国历代人物传记资料库：王約（CBDB 126619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json)
