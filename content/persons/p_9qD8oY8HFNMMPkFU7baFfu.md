---
schema: wang-person/v1
id: p_9qD8oY8HFNMMPkFU7baFfu
status: active
merged_into: null
display_name: 王好問
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GQbP8LRSDctFFFLjyMh8z1
        subject_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tFALPmJoEor3SHmsD1hGae
          claim_id: c_GQbP8LRSDctFFFLjyMh8z1
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
          stance: supports
          locator: CBDB:126519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126519）
          source: &a1
            id: s_QiMNfcwzqPvvJ5n4NeW8JC
            source_type: api_record
            title: 中国历代人物传记资料库：王好問（CBDB 126519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126519&o=json
            external_identifier: CBDB:126519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gNYKUEQvxBh7kMD4RvReCk
        subject_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eaLt9mYA3F4AP2o5bk7nCP
          claim_id: c_gNYKUEQvxBh7kMD4RvReCk
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
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
        id: c_StYrSS1qLdNiZXbJb5oPJ3
        subject_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1582年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_isuEGjsWUXQnGQbYiFvkYR
          claim_id: c_StYrSS1qLdNiZXbJb5oPJ3
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
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
        id: c_rP5Q31fQamA9as55iUZXC4
        subject_person_id: p_9qD8oY8HFNMMPkFU7baFfu
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
        - id: cs_55f5FubVmz9j7BArJRZkVx
          claim_id: c_rP5Q31fQamA9as55iUZXC4
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
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
        id: c_MQf-LlgBf3Te4Na3Gp9HTs
        subject_person_id: p_EYN9zgKtLzMkS4hMCxe1K9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IrC7z2zbPMvfp2IRQndJgz
          claim_id: c_MQf-LlgBf3Te4Na3Gp9HTs
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EYN9zgKtLzMkS4hMCxe1K9
        status: active
        display_name: 王臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_swZxrkObMGBC9v0-6jm_V8
        subject_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BWsq8QANchL7g2spfZKYP9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WCWfa6Wmub3Xs1ygd2ZQoq
          claim_id: c_swZxrkObMGBC9v0-6jm_V8
          source_id: s_fwXCLiy5SaMqqXbJaIuJkw
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fwXCLiy5SaMqqXbJaIuJkw
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王好問妻)（CBDB 314779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314779&o=json
            external_identifier: CBDB:314779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BWsq8QANchL7g2spfZKYP9
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_S7vd2e3SwNXVlw_muQPqu5
        subject_person_id: p_rMD7fcdsHtcbRUCp343sZb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hF6A39v3Avh3nveVqg9t_6
          claim_id: c_S7vd2e3SwNXVlw_muQPqu5
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rMD7fcdsHtcbRUCp343sZb
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_9g6DtjYTgMKcC2W-e8n4-O
        subject_person_id: p_J7eseMnAax6jNSf3U33SW2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cwcEUOX08BE7BOzUnqpJ34
          claim_id: c_9g6DtjYTgMKcC2W-e8n4-O
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J7eseMnAax6jNSf3U33SW2
        status: active
        display_name: 王茂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王好問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好問 | accepted |
| birth.date | 1517年 | accepted |
| death.date | 1582年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EYN9zgKtLzMkS4hMCxe1K9 | 王臣 | accepted |
| spouses | p_BWsq8QANchL7g2spfZKYP9 | 李氏 | accepted |
| ancestors | p_rMD7fcdsHtcbRUCp343sZb | 王欽 | accepted |
| ancestors | p_J7eseMnAax6jNSf3U33SW2 | 王茂 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王好問妻)（CBDB 314779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314779&o=json)
- [中国历代人物传记资料库：王好問（CBDB 126519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126519&o=json)
