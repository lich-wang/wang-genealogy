---
schema: wang-person/v1
id: p_o8a2xb1NaoHmv169uvto5o
status: active
merged_into: null
display_name: 某氏
cbdb_id: 38684
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g9ptL3ueX2xnb8zwKcxF8m
        subject_person_id: p_o8a2xb1NaoHmv169uvto5o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 某氏，王安禮妻。维基数据以独立条目 Q45431694 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4qWsPHa_tox3S_K01W7W0L
          claim_id: c_g9ptL3ueX2xnb8zwKcxF8m
          source_id: s_Z9W9UnhbASPNU6Vwok1vCQ
          stance: supports
          locator: Q45431694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_Z9W9UnhbASPNU6Vwok1vCQ
            source_type: api_record
            title: 维基数据：某氏（Q45431694）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431694
            external_identifier: Q45431694
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.886Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CY5TJBYhnCVBd49RvgSXVP
        subject_person_id: p_o8a2xb1NaoHmv169uvto5o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 某氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_88C4vWQfQ2SJuwut7XbDkP
          claim_id: c_CY5TJBYhnCVBd49RvgSXVP
          source_id: s_Z9W9UnhbASPNU6Vwok1vCQ
          stance: supports
          locator: Q45431694
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_nHoC7HHwBJyLJaHJe3Z79s
          claim_id: c_CY5TJBYhnCVBd49RvgSXVP
          source_id: s_D56b7BYeReTGfEgGs9vS7C
          stance: supports
          locator: Q45431694
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_D56b7BYeReTGfEgGs9vS7C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：某氏（38684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38684&o=json
            external_identifier: CBDB:38684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:59.040Z
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
        id: c_2Cmijr8TEoP8zQqYe5cpyc
        subject_person_id: p_KTTATWUQ3F1m45Pemb3S7n
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_o8a2xb1NaoHmv169uvto5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wgh1rdZbENvrHg5nt2aA1m
          claim_id: c_2Cmijr8TEoP8zQqYe5cpyc
          source_id: s_pMq6gCCXJVj3QXhW3E3N1w
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_pMq6gCCXJVj3QXhW3E3N1w
            source_type: api_record
            title: 维基数据：王安礼（Q18905331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905331
            external_identifier: Q18905331
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:03.122Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%A4%BC
        - id: cs_qSwkiZNboQzmd8Gx25Pam9
          claim_id: c_2Cmijr8TEoP8zQqYe5cpyc
          source_id: s_Z9W9UnhbASPNU6Vwok1vCQ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z9W9UnhbASPNU6Vwok1vCQ
            source_type: api_record
            title: 维基数据：某氏（Q45431694）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431694
            external_identifier: Q45431694
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.886Z
            metadata_json: null
        - id: cs_RFS8MQa3ZTSA9LJA6TZyuH
          claim_id: c_2Cmijr8TEoP8zQqYe5cpyc
          source_id: s_D56b7BYeReTGfEgGs9vS7C
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_D56b7BYeReTGfEgGs9vS7C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：某氏（38684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38684&o=json
            external_identifier: CBDB:38684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:59.040Z
            metadata_json: null
      object_person:
        id: p_KTTATWUQ3F1m45Pemb3S7n
        status: active
        display_name: 王安礼
        merged_into_person_id: null
    - claim:
        id: c_LgYFfMZ9LkZVtR3DZ8I1pD
        subject_person_id: p_o8a2xb1NaoHmv169uvto5o
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KTTATWUQ3F1m45Pemb3S7n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r4tqdGWffw3igEQ0_Xty-R
          claim_id: c_LgYFfMZ9LkZVtR3DZ8I1pD
          source_id: s_D56b7BYeReTGfEgGs9vS7C
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1543;1544：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_KTTATWUQ3F1m45Pemb3S7n
        status: active
        display_name: 王安礼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 某氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 某氏，王安禮妻。维基数据以独立条目 Q45431694 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 某氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KTTATWUQ3F1m45Pemb3S7n | 王安礼 | accepted |
| spouses | p_KTTATWUQ3F1m45Pemb3S7n | 王安礼 | accepted |

## 外部来源

- [维基数据：某氏（Q45431694）](https://www.wikidata.org/wiki/Q45431694)
- [维基数据：王安礼（Q18905331）](https://www.wikidata.org/wiki/Q18905331)
- [CBDB 中国历代人物传记资料库：某氏（38684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38684&o=json)
