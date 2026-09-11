---
schema: wang-person/v1
id: p_EVLq7xAUTLGpaeFfQpgjH5
status: active
merged_into: null
display_name: 周氏
cbdb_id: 264941
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3cpx8_rLclgTy5oJZhnDO8
        subject_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏，王縝妻。维基数据以独立条目 Q65871784 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pvIrPorG0HBsr386jcjvRO
          claim_id: c_3cpx8_rLclgTy5oJZhnDO8
          source_id: s_t9kLVnFzko1iwLCXTWsMKo
          stance: supports
          locator: Q65871784
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_t9kLVnFzko1iwLCXTWsMKo
            source_type: api_record
            title: 维基数据：周氏（Q65871784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65871784
            external_identifier: Q65871784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1eBNSrEsdbJNpjSu173ExV
        subject_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KSCAbhP3Y3tfmW3TvtxUND
          claim_id: c_1eBNSrEsdbJNpjSu173ExV
          source_id: s_t9kLVnFzko1iwLCXTWsMKo
          stance: supports
          locator: Q65871784
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_mPQpemeDgut2sX9dMhWRrE
          claim_id: c_1eBNSrEsdbJNpjSu173ExV
          source_id: s_DXADjq46Wg2BZwimXWUefF
          stance: supports
          locator: Q65871784
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_DXADjq46Wg2BZwimXWUefF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周氏（264941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264941&o=json
            external_identifier: CBDB:264941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:05.935Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1Qj2BNYmry47bFWBf47Zv2
        subject_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2h91qn6KAZS7hcZaF4jz3J
          claim_id: c_1Qj2BNYmry47bFWBf47Zv2
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_DGqX2z7eUrTc3YJYNBHfba
          claim_id: c_1Qj2BNYmry47bFWBf47Zv2
          source_id: s_2fjb2fbXnpDjQAFJ1d75s2
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治六年進士登科錄:一卷
          source:
            id: s_2fjb2fbXnpDjQAFJ1d75s2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縝（68275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json
            external_identifier: CBDB:68275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:56.682Z
            metadata_json: null
        - id: cs_wRaoJg3EGP4AhiJwLWdqZN
          claim_id: c_1Qj2BNYmry47bFWBf47Zv2
          source_id: s_t9kLVnFzko1iwLCXTWsMKo
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_t9kLVnFzko1iwLCXTWsMKo
            source_type: api_record
            title: 维基数据：周氏（Q65871784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65871784
            external_identifier: Q65871784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
      object_person:
        id: p_GYXTdGzZ8zRdfAxpgeUm9N
        status: active
        display_name: 王缜
        merged_into_person_id: null
    - claim:
        id: c_8khpCQpwaRNPt7lDmB7_U5
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iTVhtWv0oZdLH5PbuQBAy
          claim_id: c_8khpCQpwaRNPt7lDmB7_U5
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8nUwjmnF5xTmqZCNqzBRAK
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 68275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json
            external_identifier: CBDB:68275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9esUYZvNqsWNd3UXAh8qx5
        status: active
        display_name: 王縝
        merged_into_person_id: null
    - claim:
        id: c_gRWEM67A9ap50BYDZZFp8b
        subject_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gAM9U5JCbHO7zfWemJpsg9
          claim_id: c_gRWEM67A9ap50BYDZZFp8b
          source_id: s_DXADjq46Wg2BZwimXWUefF
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_9esUYZvNqsWNd3UXAh8qx5
        status: active
        display_name: 王縝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周氏，王縝妻。维基数据以独立条目 Q65871784 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GYXTdGzZ8zRdfAxpgeUm9N | 王缜 | accepted |
| spouses | p_9esUYZvNqsWNd3UXAh8qx5 | 王縝 | accepted |
| spouses | p_9esUYZvNqsWNd3UXAh8qx5 | 王縝 | accepted |

## 外部来源

- [维基数据：王缜（Q15933343）](https://www.wikidata.org/wiki/Q15933343)
- [维基数据：周氏（Q65871784）](https://www.wikidata.org/wiki/Q65871784)
- [中国历代人物传记资料库：王縝（CBDB 68275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json)
- [CBDB 中国历代人物传记资料库：周氏（264941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264941&o=json)
