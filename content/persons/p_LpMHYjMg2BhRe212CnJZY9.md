---
schema: wang-person/v1
id: p_LpMHYjMg2BhRe212CnJZY9
status: active
merged_into: null
display_name: 王凱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cCCw8q5gDyqswFN9iTNBqG
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ephpS5iJFggmWS8EUMwK5
          claim_id: c_cCCw8q5gDyqswFN9iTNBqG
          source_id: s_4z4EpS12C1HVjAtms92zps
          stance: supports
          locator: CBDB:207962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207962）
          source: &a1
            id: s_4z4EpS12C1HVjAtms92zps
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 207962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207962&o=json
            external_identifier: CBDB:207962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1awXLXLohpwQ6jk58mgR5y
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1414年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5JWnwFLJrdhAJbF2WSDRe
          claim_id: c_1awXLXLohpwQ6jk58mgR5y
          source_id: s_4z4EpS12C1HVjAtms92zps
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
        id: c_wEozxjQkfQPdcyHLsaoZEG
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
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
        - id: cs_CPPAKn9jLNWakbDNmTgJ9m
          claim_id: c_wEozxjQkfQPdcyHLsaoZEG
          source_id: s_4z4EpS12C1HVjAtms92zps
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
        id: c_Dp76EOQFHEp1oJ8jNPSbR9
        subject_person_id: p_bRutZZe45GNMmTrfNCtLZZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LpMHYjMg2BhRe212CnJZY9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tJ6l7-DCqqT4AwfsF_vUWX
          claim_id: c_Dp76EOQFHEp1oJ8jNPSbR9
          source_id: s_JiC5RUAx61DF933g9jTTD5
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JiC5RUAx61DF933g9jTTD5
            source_type: api_record
            title: 中国历代人物传记资料库：王士安（CBDB 238507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238507&o=json
            external_identifier: CBDB:238507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bRutZZe45GNMmTrfNCtLZZ
        status: active
        display_name: 王士安
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| birth.date | 1414年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bRutZZe45GNMmTrfNCtLZZ | 王士安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 207962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207962&o=json)
- [中国历代人物传记资料库：王士安（CBDB 238507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238507&o=json)
