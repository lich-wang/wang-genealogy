---
schema: wang-person/v1
id: p_46XipnUnHFjdtuwtK8Mp3F
status: active
merged_into: null
display_name: 王蕙貞
cbdb_id: 121811
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AuvMJ9V6R1ndrqDduzN911
        subject_person_id: p_46XipnUnHFjdtuwtK8Mp3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙貞，清人物。中国历代人物传记资料库（CBDB）以人物编号 121811 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Pk11SpAVFKonHnSFtg92xm
          claim_id: c_AuvMJ9V6R1ndrqDduzN911
          source_id: s_fsjGCZ2rKkMN7xm3S6BCSG
          stance: supports
          locator: CBDB:121811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fsjGCZ2rKkMN7xm3S6BCSG
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙貞（CBDB 121811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121811&o=json
            external_identifier: CBDB:121811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gq1BdRLNPHukGV2zpWdm7X
        subject_person_id: p_46XipnUnHFjdtuwtK8Mp3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Yn9HQSf8cYEDaSPQsjxk3w
          claim_id: c_gq1BdRLNPHukGV2zpWdm7X
          source_id: s_fsjGCZ2rKkMN7xm3S6BCSG
          stance: supports
          locator: CBDB:121811
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_fsjGCZ2rKkMN7xm3S6BCSG
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙貞（CBDB 121811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121811&o=json
            external_identifier: CBDB:121811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_McVg5hReZntGfZy_22PeBb
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_46XipnUnHFjdtuwtK8Mp3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ik-GA4K2F_REoK_atka-T8
          claim_id: c_McVg5hReZntGfZy_22PeBb
          source_id: s_fsjGCZ2rKkMN7xm3S6BCSG
          stance: supports
          locator: 明清婦女著作數據庫，4257：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHru16jGHKcfWy9wEAhHfF
        status: active
        display_name: 王之麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GQAEpL5c491KN6UN-YKnVZ
        subject_person_id: p_46XipnUnHFjdtuwtK8Mp3F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gZhKH2RJZBdXXVo3zswKCk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ndwu6bpWjERvkIRF3Ymnxe
          claim_id: c_GQAEpL5c491KN6UN-YKnVZ
          source_id: s_3V7GnQcyzSFNSzg6ldF2xk
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4257, HuWenKai #254：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3V7GnQcyzSFNSzg6ldF2xk
            source_type: api_record
            title: 中国历代人物传记资料库：宮澄（CBDB 121814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121814&o=json
            external_identifier: CBDB:121814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gZhKH2RJZBdXXVo3zswKCk
        status: active
        display_name: 宮澄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蕙貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蕙貞，清人物。中国历代人物传记资料库（CBDB）以人物编号 121811 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王蕙貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DHru16jGHKcfWy9wEAhHfF | 王之麟 | accepted |
| spouses | p_gZhKH2RJZBdXXVo3zswKCk | 宮澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：宮澄（CBDB 121814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121814&o=json)
- [中国历代人物传记资料库：王蕙貞（CBDB 121811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121811&o=json)
