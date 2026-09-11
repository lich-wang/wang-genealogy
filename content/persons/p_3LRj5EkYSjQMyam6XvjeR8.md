---
schema: wang-person/v1
id: p_3LRj5EkYSjQMyam6XvjeR8
status: active
merged_into: null
display_name: 王易
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xQ8eUovA1Qdt32BbjVHxxN
        subject_person_id: p_3LRj5EkYSjQMyam6XvjeR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KhMPeS25b4qdt7PQCGrkww
          claim_id: c_xQ8eUovA1Qdt32BbjVHxxN
          source_id: s_tD8qmCD6x3S1FfsSBb7NAE
          stance: supports
          locator: CBDB:311226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311226）
          source: &a1
            id: s_tD8qmCD6x3S1FfsSBb7NAE
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 311226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311226&o=json
            external_identifier: CBDB:311226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_758aunHQwfKvs3U8KKYobG
        subject_person_id: p_3LRj5EkYSjQMyam6XvjeR8
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
        - id: cs_wMfPJjJkUZoNa2CPC9kstr
          claim_id: c_758aunHQwfKvs3U8KKYobG
          source_id: s_tD8qmCD6x3S1FfsSBb7NAE
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
        id: c_4El0qWGdKymuJGrKPRTZe1
        subject_person_id: p_3LRj5EkYSjQMyam6XvjeR8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UZa7SsGRtxBt58y2K3aT16
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J72ODo2Tnd-X8e99xyVBnr
          claim_id: c_4El0qWGdKymuJGrKPRTZe1
          source_id: s_tD8qmCD6x3S1FfsSBb7NAE
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UZa7SsGRtxBt58y2K3aT16
        status: active
        display_name: 王宗茂
        merged_into_person_id: null
  other: []
---

# 王易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UZa7SsGRtxBt58y2K3aT16 | 王宗茂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王易（CBDB 311226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311226&o=json)
