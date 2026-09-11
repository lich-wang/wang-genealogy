---
schema: wang-person/v1
id: p_CfAz2neDMAFFa4GMRAduBm
status: active
merged_into: null
display_name: 王定
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ADvsnGNt3tyoxQ7r3Ewu5e
        subject_person_id: p_CfAz2neDMAFFa4GMRAduBm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uCdivKE66WQCzXcAa5HmTV
          claim_id: c_ADvsnGNt3tyoxQ7r3Ewu5e
          source_id: s_cMtz7BG4ik6yR44AEPQ2P3
          stance: supports
          locator: CBDB:240498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240498）
          source: &a1
            id: s_cMtz7BG4ik6yR44AEPQ2P3
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 240498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240498&o=json
            external_identifier: CBDB:240498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MBCAgBnW5gBV9Jc5DyTNFC
        subject_person_id: p_CfAz2neDMAFFa4GMRAduBm
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
        - id: cs_CBR2E89jFJ8fQGqEZerZU3
          claim_id: c_MBCAgBnW5gBV9Jc5DyTNFC
          source_id: s_cMtz7BG4ik6yR44AEPQ2P3
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
        id: c_cebjFdoKHdgTPekUOorzfs
        subject_person_id: p_CfAz2neDMAFFa4GMRAduBm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kPeA425yX1vHGJ6NED9rRs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p8kVcfa6SckL2dDEUlOabe
          claim_id: c_cebjFdoKHdgTPekUOorzfs
          source_id: s_cMtz7BG4ik6yR44AEPQ2P3
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kPeA425yX1vHGJ6NED9rRs
        status: active
        display_name: 王俊
        merged_into_person_id: null
  other: []
---

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kPeA425yX1vHGJ6NED9rRs | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 240498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240498&o=json)
