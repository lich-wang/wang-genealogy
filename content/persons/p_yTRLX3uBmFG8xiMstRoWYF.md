---
schema: wang-person/v1
id: p_yTRLX3uBmFG8xiMstRoWYF
status: active
merged_into: null
display_name: 王智
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n1kS4rLR4wVQc1fr3roF6N
        subject_person_id: p_yTRLX3uBmFG8xiMstRoWYF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3gBex115mjvEezABXsm6X
          claim_id: c_n1kS4rLR4wVQc1fr3roF6N
          source_id: s_oLpGEqrxMy2Vo15XQSCwCW
          stance: supports
          locator: CBDB:214677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214677）
          source: &a1
            id: s_oLpGEqrxMy2Vo15XQSCwCW
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 214677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214677&o=json
            external_identifier: CBDB:214677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nEbAbQZB7B9rV7oHopas62
        subject_person_id: p_yTRLX3uBmFG8xiMstRoWYF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214677）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8LlCIRRPgmtzCvIgVd5kPT
          claim_id: c_nEbAbQZB7B9rV7oHopas62
          source_id: s_oLpGEqrxMy2Vo15XQSCwCW
          stance: supports
          locator: CBDB:214677
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_7gC2HpAbSdbKHajSvWRT_i
        subject_person_id: p_yTRLX3uBmFG8xiMstRoWYF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGzexBWNuowQCCcZPqHo19
          claim_id: c_7gC2HpAbSdbKHajSvWRT_i
          source_id: s_oLpGEqrxMy2Vo15XQSCwCW
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y879UiTRBKZaXHHY531ywf
        status: active
        display_name: 王价
        merged_into_person_id: null
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | 王智，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_y879UiTRBKZaXHHY531ywf | 王价 | accepted |

## 外部来源

- [中国历代人物传记资料库：王智（CBDB 214677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214677&o=json)
