---
schema: wang-person/v1
id: p_JHYkG4D5bDS11ywRtQogJy
status: active
merged_into: null
display_name: 王進宗
cbdb_id: 221818
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hCXPHoQK6588fKTA2sFShd
        subject_person_id: p_JHYkG4D5bDS11ywRtQogJy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進宗，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 221818）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LP7TOPqiJWXmlly773C_BI
          claim_id: c_hCXPHoQK6588fKTA2sFShd
          source_id: s_B3CBdpsrRwN76oF7SL2JQb
          stance: supports
          locator: CBDB:221818
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B3CBdpsrRwN76oF7SL2JQb
            source_type: api_record
            title: 中国历代人物传记资料库：王進宗（CBDB 221818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221818&o=json
            external_identifier: CBDB:221818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4mG9y9JXJmdQK8idh6HYMy
        subject_person_id: p_JHYkG4D5bDS11ywRtQogJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yYksioyJpR6G4EuQJkj71f
          claim_id: c_4mG9y9JXJmdQK8idh6HYMy
          source_id: s_B3CBdpsrRwN76oF7SL2JQb
          stance: supports
          locator: CBDB:221818
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
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
        id: c_k9anDmd7jKGRaMfkTopxYT
        subject_person_id: p_JHYkG4D5bDS11ywRtQogJy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SqHqgKlc18VT_q37oekVyu
          claim_id: c_k9anDmd7jKGRaMfkTopxYT
          source_id: s_B3CBdpsrRwN76oF7SL2JQb
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B3CBdpsrRwN76oF7SL2JQb
            source_type: api_record
            title: 中国历代人物传记资料库：王進宗（CBDB 221818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221818&o=json
            external_identifier: CBDB:221818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qMg6Q8CEPodQMPp2EgjAAi
        status: active
        display_name: 王以通
        merged_into_person_id: null
  other: []
---

# 王進宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王進宗，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 221818） | accepted |
| name.primary | 王進宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qMg6Q8CEPodQMPp2EgjAAi | 王以通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進宗（CBDB 221818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221818&o=json)
