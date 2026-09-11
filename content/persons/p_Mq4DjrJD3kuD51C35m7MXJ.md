---
schema: wang-person/v1
id: p_Mq4DjrJD3kuD51C35m7MXJ
status: active
merged_into: null
display_name: 王塤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNNgMjeUXTaw5nGBXv6RLu
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAYJiPFourF8HL4Yk7pmbm
          claim_id: c_GNNgMjeUXTaw5nGBXv6RLu
          source_id: s_gNqH7p9mt33cEsoSQ6nuGN
          stance: supports
          locator: CBDB:198806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198806）
          source: &a1
            id: s_gNqH7p9mt33cEsoSQ6nuGN
            source_type: api_record
            title: 中国历代人物传记资料库：王塤（CBDB 198806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198806&o=json
            external_identifier: CBDB:198806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_19zTsrgUGGJCvmP94XHmam
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CBQQkAk6AQcDVzBV4uZ2sB
          claim_id: c_19zTsrgUGGJCvmP94XHmam
          source_id: s_gNqH7p9mt33cEsoSQ6nuGN
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
        id: c_LQJ7S1NsyQvvJqJyLfDDqX
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
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
        - id: cs_FYZYtFnSnwCC5JsPMyDx3c
          claim_id: c_LQJ7S1NsyQvvJqJyLfDDqX
          source_id: s_gNqH7p9mt33cEsoSQ6nuGN
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
        id: c_18hRAip3Y8F8A0UHJfDL54
        subject_person_id: p_bZt4AajrjJuA5KbB2ngKB6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6dxOUQ99SRRY2h-HWc9wf
          claim_id: c_18hRAip3Y8F8A0UHJfDL54
          source_id: s_sfmm5Y9sH44ZFHBfgi5LSL
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第四十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sfmm5Y9sH44ZFHBfgi5LSL
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 318829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318829&o=json
            external_identifier: CBDB:318829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bZt4AajrjJuA5KbB2ngKB6
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王塤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塤 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bZt4AajrjJuA5KbB2ngKB6 | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 318829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318829&o=json)
- [中国历代人物传记资料库：王塤（CBDB 198806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198806&o=json)
