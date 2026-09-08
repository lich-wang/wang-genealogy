---
schema: wang-person/v1
id: p_uMPMUBWKq1jiRk6LFHTei1
status: active
merged_into: null
display_name: 陈仪春
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0HR7goY-LHKEKIXNpyNMEy
        subject_person_id: p_uMPMUBWKq1jiRk6LFHTei1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈仪春，明人物。中国历代人物传记资料库（CBDB）以人物编号 123038 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UUOPSAsXgfH0iADLAuE4DZ
          claim_id: c_0HR7goY-LHKEKIXNpyNMEy
          source_id: s_Qs6yzr7rS6e4RbxCcP4eRs
          stance: supports
          locator: CBDB:123038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Qs6yzr7rS6e4RbxCcP4eRs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳儀春（123038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123038&o=json
            external_identifier: CBDB:123038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:20.663Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_j4fC2ieNtQ7KzfdZJfSPFt
        subject_person_id: p_uMPMUBWKq1jiRk6LFHTei1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈仪春
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZoyQD8M5fdLm4q4LEUyn8W
          claim_id: c_j4fC2ieNtQ7KzfdZJfSPFt
          source_id: s_9X78QxJNPvr6JG9B2uhHfj
          stance: supports
          locator: Q45663286
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_9X78QxJNPvr6JG9B2uhHfj
            source_type: api_record
            title: 维基数据：陈仪春（Q45663286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663286
            external_identifier: Q45663286
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
        - id: cs_pDffcLkTNnqDB2Uv7GD5Ts
          claim_id: c_j4fC2ieNtQ7KzfdZJfSPFt
          source_id: s_Qs6yzr7rS6e4RbxCcP4eRs
          stance: supports
          locator: Q45663286
          quotation: null
          interpretation_note: null
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
        id: c_H49E6DVD6gTLKCi4zS6Z7i
        subject_person_id: p_H2nZeMmMCtwnjqap2CdN61
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uMPMUBWKq1jiRk6LFHTei1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qyAAjZqd5Qc1pqj2sbPLDE
          claim_id: c_H49E6DVD6gTLKCi4zS6Z7i
          source_id: s_GWy8NVeiDkvyLN5b6N5CTi
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_GWy8NVeiDkvyLN5b6N5CTi
            source_type: api_record
            title: 维基数据：王贞淑（Q45662658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662658
            external_identifier: Q45662658
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_XHw2TtnH4xpwJvAPgvSAqf
          claim_id: c_H49E6DVD6gTLKCi4zS6Z7i
          source_id: s_9X78QxJNPvr6JG9B2uhHfj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_cUqrSxpjDksyy8XdpxNWbh
          claim_id: c_H49E6DVD6gTLKCi4zS6Z7i
          source_id: s_4W7zpJ6YbUVPw2Mp3oSU2f
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_4W7zpJ6YbUVPw2Mp3oSU2f
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貞淑（123026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123026&o=json
            external_identifier: CBDB:123026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.336Z
            metadata_json: null
      object_person:
        id: p_H2nZeMmMCtwnjqap2CdN61
        status: active
        display_name: 王贞淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈仪春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈仪春，明人物。中国历代人物传记资料库（CBDB）以人物编号 123038 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈仪春 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_H2nZeMmMCtwnjqap2CdN61 | 王贞淑 | accepted |

## 外部来源

- [维基数据：陈仪春（Q45663286）](https://www.wikidata.org/wiki/Q45663286)
- [维基数据：王贞淑（Q45662658）](https://www.wikidata.org/wiki/Q45662658)
- [CBDB 中国历代人物传记资料库：陳儀春（123038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123038&o=json)
- [CBDB 中国历代人物传记资料库：王貞淑（123026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123026&o=json)
