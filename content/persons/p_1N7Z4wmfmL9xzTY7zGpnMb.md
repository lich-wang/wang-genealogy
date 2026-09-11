---
schema: wang-person/v1
id: p_1N7Z4wmfmL9xzTY7zGpnMb
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M2TVSVBy6DP6hss78ZS6gu
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7r4Q55cUooHHvNhLDijU9A
          claim_id: c_M2TVSVBy6DP6hss78ZS6gu
          source_id: s_Q18JHvwtCh7xyj63dHGaJZ
          stance: supports
          locator: CBDB:280170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280170）
          source: &a1
            id: s_Q18JHvwtCh7xyj63dHGaJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 280170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280170&o=json
            external_identifier: CBDB:280170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f6dRMQDSajy298uYbBs7fo
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。正德十二年進士，籍贯襄陽衛，曾任都督府都督同知。（中国历代人物传记资料库 CBDB 280170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s1PkBr_sTtiiwfAH8ld5Ty
          claim_id: c_f6dRMQDSajy298uYbBs7fo
          source_id: s_Q18JHvwtCh7xyj63dHGaJZ
          stance: supports
          locator: CBDB:280170
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fvMxn8UhoYsP62PqAtE2E4
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_691jukaqPqsQGsFHBsNzWD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_4FWWIoIuX1fI0JLMQ9P_
          claim_id: c_fvMxn8UhoYsP62PqAtE2E4
          source_id: s_Q18JHvwtCh7xyj63dHGaJZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_691jukaqPqsQGsFHBsNzWD
        status: active
        display_name: 王至善
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。正德十二年進士，籍贯襄陽衛，曾任都督府都督同知。（中国历代人物传记资料库 CBDB 280170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_691jukaqPqsQGsFHBsNzWD | 王至善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 280170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280170&o=json)
