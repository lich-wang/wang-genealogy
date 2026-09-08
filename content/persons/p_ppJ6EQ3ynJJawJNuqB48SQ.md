---
schema: wang-person/v1
id: p_ppJ6EQ3ynJJawJNuqB48SQ
status: active
merged_into: null
display_name: 王氏
cbdb_id: 267352
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t3qroJTLU66L9G1dEw6qGy
        subject_person_id: p_ppJ6EQ3ynJJawJNuqB48SQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，李珪母; 唐人﹐女﹐郿县人(今陕西眉县)。兰闺宝录有著录。维基数据以独立条目 Q65874579 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ohK0ZXdYzyTzOgdEBtqjBs
          claim_id: c_t3qroJTLU66L9G1dEw6qGy
          source_id: s_cKaGAqc6XaeHmPKaBA7UBg
          stance: supports
          locator: Q65874579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_cKaGAqc6XaeHmPKaBA7UBg
            source_type: api_record
            title: 维基数据：王氏（Q65874579）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65874579
            external_identifier: Q65874579
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:18.753Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3y38XMMuNSbMN2CHXNKo2
        subject_person_id: p_ppJ6EQ3ynJJawJNuqB48SQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3apd6SM1Bt1DqZNVsNCSx9
          claim_id: c_z3y38XMMuNSbMN2CHXNKo2
          source_id: s_cKaGAqc6XaeHmPKaBA7UBg
          stance: supports
          locator: Q65874579
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_RA5P9YKq53oQ4Lw2mbBDB2
          claim_id: c_z3y38XMMuNSbMN2CHXNKo2
          source_id: s_EBrT8AegnicB3wc6gq4C63
          stance: supports
          locator: Q65874579
          quotation: null
          interpretation_note: null
          source:
            id: s_EBrT8AegnicB3wc6gq4C63
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（267352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267352&o=json
            external_identifier: CBDB:267352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:18.928Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mx2HMv8Jbn4nfdtBSNXp9d
        subject_person_id: p_ppJ6EQ3ynJJawJNuqB48SQ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_dpxJ79yjeoZcbwCdkzQmv6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LxPykWYPqQY9S8cF4de1Bm
          claim_id: c_mx2HMv8Jbn4nfdtBSNXp9d
          source_id: s_cKaGAqc6XaeHmPKaBA7UBg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_dpxJ79yjeoZcbwCdkzQmv6
        status: active
        display_name: 王珪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，李珪母; 唐人﹐女﹐郿县人(今陕西眉县)。兰闺宝录有著录。维基数据以独立条目 Q65874579 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dpxJ79yjeoZcbwCdkzQmv6 | 王珪 | accepted |

## 外部来源

- [维基数据：王氏（Q65874579）](https://www.wikidata.org/wiki/Q65874579)
- [CBDB 中国历代人物传记资料库：王氏（267352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267352&o=json)
