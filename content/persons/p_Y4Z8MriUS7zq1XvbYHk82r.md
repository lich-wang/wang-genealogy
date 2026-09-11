---
schema: wang-person/v1
id: p_Y4Z8MriUS7zq1XvbYHk82r
status: active
merged_into: null
display_name: 王慕蘭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tEv15MP3BThH8LeKkMV57s
        subject_person_id: p_Y4Z8MriUS7zq1XvbYHk82r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TKCKjP6SosdKbSKPBiCDNg
          claim_id: c_tEv15MP3BThH8LeKkMV57s
          source_id: s_D2h1RM8sVrchrDM2r8PduS
          stance: supports
          locator: CBDB:100147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100147）
          source: &a1
            id: s_D2h1RM8sVrchrDM2r8PduS
            source_type: api_record
            title: 中国历代人物传记资料库：王慕蘭（CBDB 100147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100147&o=json
            external_identifier: CBDB:100147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4n3GBkgFtEGxQq2LyFpJMn
        subject_person_id: p_Y4Z8MriUS7zq1XvbYHk82r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕蘭，史料所见人物。本项目依据《中国历代人物传记资料库：王慕蘭（CBDB 100147）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aZKucW_VEw-vCuxkkN8xqs
          claim_id: c_4n3GBkgFtEGxQq2LyFpJMn
          source_id: s_D2h1RM8sVrchrDM2r8PduS
          stance: supports
          locator: CBDB:100147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_8D4Tj5yH5cdhMwFH_KuGrk
        subject_person_id: p_Y4Z8MriUS7zq1XvbYHk82r
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mtWQEAFjewQMpd6UAX7ALk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGkkEuAITl6QZiy26W1K9z
          claim_id: c_8D4Tj5yH5cdhMwFH_KuGrk
          source_id: s_rmONanl6WU4en6-GoalKlZ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1836, HuWenKai #389：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rmONanl6WU4en6-GoalKlZ
            source_type: api_record
            title: 中国历代人物传记资料库：孟文輝（CBDB 100146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100146&o=json
            external_identifier: CBDB:100146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mtWQEAFjewQMpd6UAX7ALk
        status: active
        display_name: 孟文輝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王慕蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慕蘭 | accepted |
| bio.summary | 王慕蘭，史料所见人物。本项目依据《中国历代人物传记资料库：王慕蘭（CBDB 100147）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mtWQEAFjewQMpd6UAX7ALk | 孟文輝 | accepted |

## 外部来源

- [中国历代人物传记资料库：孟文輝（CBDB 100146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100146&o=json)
- [中国历代人物传记资料库：王慕蘭（CBDB 100147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100147&o=json)
