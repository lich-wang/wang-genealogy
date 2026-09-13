---
schema: wang-person/v1
id: p_Ewe4MYMQjhjcrLdkTU3BmX
status: active
merged_into: null
display_name: 王運亨
cbdb_id: 526788
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3J7SLso8PCEnGiRRdCwAx2
        subject_person_id: p_Ewe4MYMQjhjcrLdkTU3BmX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運亨，史料所见人物。本项目依据《中国历代人物传记资料库：王運亨（CBDB 526788）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_AwbPFZ-HtFUYOxGfpGBVS4
          claim_id: c_3J7SLso8PCEnGiRRdCwAx2
          source_id: s_BcExYFVxdQpuu4udr3WgD7
          stance: supports
          locator: CBDB:526788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BcExYFVxdQpuu4udr3WgD7
            source_type: api_record
            title: 中国历代人物传记资料库：王運亨（CBDB 526788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526788&o=json
            external_identifier: CBDB:526788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SYJ8PHeWd3nP8HLwLf97ik
        subject_person_id: p_Ewe4MYMQjhjcrLdkTU3BmX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EPA1tFEHMSqiAKhfER4cKF
          claim_id: c_SYJ8PHeWd3nP8HLwLf97ik
          source_id: s_BcExYFVxdQpuu4udr3WgD7
          stance: supports
          locator: CBDB:526788
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
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
        id: c_U-tP-Kn4xGVzh8i_Quu47g
        subject_person_id: p_Ewe4MYMQjhjcrLdkTU3BmX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tRbjMW4CxHPPZyxjo8xaiK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brRjvWXO6FiaJxSNBvBLjK
          claim_id: c_U-tP-Kn4xGVzh8i_Quu47g
          source_id: s_BcExYFVxdQpuu4udr3WgD7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12947：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BcExYFVxdQpuu4udr3WgD7
            source_type: api_record
            title: 中国历代人物传记资料库：王運亨（CBDB 526788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526788&o=json
            external_identifier: CBDB:526788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tRbjMW4CxHPPZyxjo8xaiK
        status: active
        display_name: 王承澤
        merged_into_person_id: null
  other: []
---

# 王運亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王運亨，史料所见人物。本项目依据《中国历代人物传记资料库：王運亨（CBDB 526788）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王運亨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tRbjMW4CxHPPZyxjo8xaiK | 王承澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王運亨（CBDB 526788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526788&o=json)
