---
schema: wang-person/v1
id: p_eonrrfCkN2hA5o48Aafwfz
status: active
merged_into: null
display_name: 王勉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v9MmWyZapJ9jjJTcJ39tUs
        subject_person_id: p_eonrrfCkN2hA5o48Aafwfz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wFNWZNkjwSWG8PwJLSBpkM
          claim_id: c_v9MmWyZapJ9jjJTcJ39tUs
          source_id: s_csTmoGBzJXH8K4pDoksV65
          stance: supports
          locator: CBDB:199604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199604）
          source: &a1
            id: s_csTmoGBzJXH8K4pDoksV65
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 199604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199604&o=json
            external_identifier: CBDB:199604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_krJQPhr8ABFg3ens18BWAf
        subject_person_id: p_eonrrfCkN2hA5o48Aafwfz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1438年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_buyHSXkigaUfL1LRfDgLut
          claim_id: c_krJQPhr8ABFg3ens18BWAf
          source_id: s_csTmoGBzJXH8K4pDoksV65
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QyLnU7z9S5bz6Nm6VXk74P
        subject_person_id: p_eonrrfCkN2hA5o48Aafwfz
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
        - id: cs_XQGG9VpwLJ2na3WsQ4K8L2
          claim_id: c_QyLnU7z9S5bz6Nm6VXk74P
          source_id: s_csTmoGBzJXH8K4pDoksV65
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
  ancestors:
    - claim:
        id: c_LAXOJB5wNFUkrTcm2e48qG
        subject_person_id: p_3t2k2RqpEMgyeEqsF12rQr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ4X4MwSC9nLArw_jqVnwV
          claim_id: c_LAXOJB5wNFUkrTcm2e48qG
          source_id: s_5PYdHQUN7Eo7tG1nRnkgi1
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5PYdHQUN7Eo7tG1nRnkgi1
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 247167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247167&o=json
            external_identifier: CBDB:247167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3t2k2RqpEMgyeEqsF12rQr
        status: active
        display_name: 王志道
        merged_into_person_id: null
    - claim:
        id: c_DGkaOj2Hdq2GOkQqEoJsWf
        subject_person_id: p_KtR8siJmH1dcjxDiMLEA9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sabvDfvXOLdBTtsWF5MCT
          claim_id: c_DGkaOj2Hdq2GOkQqEoJsWf
          source_id: s_JLeLhzLmFF36M5YtLkAKQa
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JLeLhzLmFF36M5YtLkAKQa
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 247168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247168&o=json
            external_identifier: CBDB:247168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KtR8siJmH1dcjxDiMLEA9S
        status: active
        display_name: 王日新
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| birth.date | 1438年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3t2k2RqpEMgyeEqsF12rQr | 王志道 | accepted |
| ancestors | p_KtR8siJmH1dcjxDiMLEA9S | 王日新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 199604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199604&o=json)
- [中国历代人物传记资料库：王日新（CBDB 247168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247168&o=json)
- [中国历代人物传记资料库：王志道（CBDB 247167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247167&o=json)
