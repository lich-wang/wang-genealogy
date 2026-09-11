---
schema: wang-person/v1
id: p_p6a6PegDLKhh6e58pdYza1
status: active
merged_into: null
display_name: 王稷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EVkJ3NyzHy29dKrvYfGrGB
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DCJ4APAs34VNim8ZKfMhhF
          claim_id: c_EVkJ3NyzHy29dKrvYfGrGB
          source_id: s_XfwDNprGL5qCa8v6BLE3vX
          stance: supports
          locator: CBDB:332959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332959）
          source: &a1
            id: s_XfwDNprGL5qCa8v6BLE3vX
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 332959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332959&o=json
            external_identifier: CBDB:332959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Te344DpwKqzjuX5rN2brWN
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
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
        - id: cs_ZEiXdC41eivFoi3i6NBWbH
          claim_id: c_Te344DpwKqzjuX5rN2brWN
          source_id: s_XfwDNprGL5qCa8v6BLE3vX
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
        id: c_HJ_sl-X__tttTVeyxV1Eo5
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jnsSkjQnmvVJpBdYSGGXuA
          claim_id: c_HJ_sl-X__tttTVeyxV1Eo5
          source_id: s_XfwDNprGL5qCa8v6BLE3vX
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wfvFAbMeeGg2JCRsQFqRMn
        status: active
        display_name: 王家卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wfvFAbMeeGg2JCRsQFqRMn | 王家卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷（CBDB 332959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332959&o=json)
