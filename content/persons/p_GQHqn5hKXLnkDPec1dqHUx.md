---
schema: wang-person/v1
id: p_GQHqn5hKXLnkDPec1dqHUx
status: active
merged_into: null
display_name: 陳池安
revision: 1
cbdb_id: 39173
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bHLxbsLQKoO6R_FuCmj9Qv
        subject_person_id: p_GQHqn5hKXLnkDPec1dqHUx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳池安，史料所见人物。本项目依据《中国历代人物传记资料库：陳池安（CBDB 39173）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XOYF1yDcVBfp9v_Sk6dXaN
          claim_id: c_bHLxbsLQKoO6R_FuCmj9Qv
          source_id: s_Jm8Nt6i6Rr07tur9IL9SYp
          stance: supports
          locator: CBDB:39173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Jm8Nt6i6Rr07tur9IL9SYp
            source_type: api_record
            title: 中国历代人物传记资料库：陳池安（CBDB 39173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39173&o=json
            external_identifier: CBDB:39173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gmI4mdUTOSGq3keT1s7-rM
        subject_person_id: p_GQHqn5hKXLnkDPec1dqHUx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳池安
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UhyfteMFntcQMD1B7ueO4f
          claim_id: c_gmI4mdUTOSGq3keT1s7-rM
          source_id: s_Jm8Nt6i6Rr07tur9IL9SYp
          stance: supports
          locator: CBDB:39173
          quotation: null
          interpretation_note: CBDB 明确记录的王碩配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_v_UFJQxrSW3yNRr8Cf2Bpn
        subject_person_id: p_QDAyt5tetv6kL3vNSki5nj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GQHqn5hKXLnkDPec1dqHUx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nyE7yDt9S0Xp5mNUh9yNjb
          claim_id: c_v_UFJQxrSW3yNRr8Cf2Bpn
          source_id: s_Jm8Nt6i6Rr07tur9IL9SYp
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QDAyt5tetv6kL3vNSki5nj
        status: active
        display_name: 王碩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳池安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳池安，史料所见人物。本项目依据《中国历代人物传记资料库：陳池安（CBDB 39173）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陳池安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QDAyt5tetv6kL3vNSki5nj | 王碩 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳池安（CBDB 39173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39173&o=json)
