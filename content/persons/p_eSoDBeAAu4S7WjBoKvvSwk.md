---
schema: wang-person/v1
id: p_eSoDBeAAu4S7WjBoKvvSwk
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 318104
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJwZj7orTiXHE06MgEdIMx
        subject_person_id: p_eSoDBeAAu4S7WjBoKvvSwk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cfIKH45BLEyq7tOvLQNmOe
          claim_id: c_AJwZj7orTiXHE06MgEdIMx
          source_id: s_tzeZLIi_KNw_lz8azi36dq
          stance: supports
          locator: CBDB:318104
          quotation: null
          interpretation_note: CBDB 明确记录的王漸配偶
          source: &a1
            id: s_tzeZLIi_KNw_lz8azi36dq
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王漸妻)（CBDB 318104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318104&o=json
            external_identifier: CBDB:318104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_O9sJ2JhvwbPIw3m3eJAu8P
        subject_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eSoDBeAAu4S7WjBoKvvSwk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WHXdcnOg7w-DVIalrabK2
          claim_id: c_O9sJ2JhvwbPIw3m3eJAu8P
          source_id: s_tzeZLIi_KNw_lz8azi36dq
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百零七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6GY2aGzgx7a1G29Cw6N2Jv
        status: active
        display_name: 王漸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6GY2aGzgx7a1G29Cw6N2Jv | 王漸 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王漸妻)（CBDB 318104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318104&o=json)
