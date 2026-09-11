---
schema: wang-person/v1
id: p_U1s98XVN7fk14ATdRBVYZw
status: active
merged_into: null
display_name: 王希曾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DUPb379zNewPCaAfLbFm2T
        subject_person_id: p_U1s98XVN7fk14ATdRBVYZw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wMT4JJSFcmF5PL4PheZE3v
          claim_id: c_DUPb379zNewPCaAfLbFm2T
          source_id: s_4H4fCRijxKeBwWFKAXGxTz
          stance: supports
          locator: CBDB:206553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206553）
          source: &a1
            id: s_4H4fCRijxKeBwWFKAXGxTz
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 206553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206553&o=json
            external_identifier: CBDB:206553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_i2GnoC1EB8AmfL4xniwgUD
        subject_person_id: p_U1s98XVN7fk14ATdRBVYZw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oaWJbnBUEP77HzDQDKydE7
          claim_id: c_i2GnoC1EB8AmfL4xniwgUD
          source_id: s_4H4fCRijxKeBwWFKAXGxTz
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
        id: c_wUkaHfYDsPdkT6HAaCCxHQ
        subject_person_id: p_U1s98XVN7fk14ATdRBVYZw
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
        - id: cs_TDGUQ3o2tw1PVBomFkXz6t
          claim_id: c_wUkaHfYDsPdkT6HAaCCxHQ
          source_id: s_4H4fCRijxKeBwWFKAXGxTz
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
        id: c_L1GWOMFZ7OBWvmoOeDbge6
        subject_person_id: p_etSE86sG6ZfUr8xtbrfMo4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U1s98XVN7fk14ATdRBVYZw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ILYGKLPd0S721VZJn5Daz
          claim_id: c_L1GWOMFZ7OBWvmoOeDbge6
          source_id: s_TGPEzDsCyxHyEwFbfgtGAK
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TGPEzDsCyxHyEwFbfgtGAK
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑞（CBDB 219646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219646&o=json
            external_identifier: CBDB:219646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_etSE86sG6ZfUr8xtbrfMo4
        status: active
        display_name: 王國瑞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王希曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希曾 | accepted |
| birth.date | 1548年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_etSE86sG6ZfUr8xtbrfMo4 | 王國瑞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國瑞（CBDB 219646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219646&o=json)
- [中国历代人物传记资料库：王希曾（CBDB 206553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206553&o=json)
