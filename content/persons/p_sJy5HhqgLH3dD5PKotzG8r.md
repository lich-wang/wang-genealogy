---
schema: wang-person/v1
id: p_sJy5HhqgLH3dD5PKotzG8r
status: active
merged_into: null
display_name: 崔氏
cbdb_id: 154151
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1ueqn95PgRRNkbpHwurbta
        subject_person_id: p_sJy5HhqgLH3dD5PKotzG8r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔氏，王志悌妻。维基数据以独立条目 Q65805412 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_IVVpnQtOPUji6OcYkGdl0n
          claim_id: c_1ueqn95PgRRNkbpHwurbta
          source_id: s_4YxwPCNmu5fTGDpDscrk4p
          stance: supports
          locator: Q65805412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_4YxwPCNmu5fTGDpDscrk4p
            source_type: api_record
            title: 维基数据：崔氏（Q65805412）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805412
            external_identifier: Q65805412
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.917Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqGwN4VNNMmNLFR1n5eAx9
        subject_person_id: p_sJy5HhqgLH3dD5PKotzG8r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5UVJ4GKvPQx64cYx13NSmu
          claim_id: c_vqGwN4VNNMmNLFR1n5eAx9
          source_id: s_4YxwPCNmu5fTGDpDscrk4p
          stance: supports
          locator: Q65805412
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ZKYn12xDi6L3MGLjBPSSzr
          claim_id: c_vqGwN4VNNMmNLFR1n5eAx9
          source_id: s_g976X44Q93pkoABpTU6h3j
          stance: supports
          locator: Q65805412
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_g976X44Q93pkoABpTU6h3j
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：崔氏（154151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154151&o=json
            external_identifier: CBDB:154151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.084Z
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
        id: c_vam935wazFsT7aJbjDZTGb
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sJy5HhqgLH3dD5PKotzG8r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_381bNLPcQvefj4YG6bYZoC
          claim_id: c_vam935wazFsT7aJbjDZTGb
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_GReARQA6f7ZqPT7MLaJyS1
          claim_id: c_vam935wazFsT7aJbjDZTGb
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
        - id: cs_7eAWyMCGSCGHkrBQU392Xd
          claim_id: c_vam935wazFsT7aJbjDZTGb
          source_id: s_4YxwPCNmu5fTGDpDscrk4p
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4YxwPCNmu5fTGDpDscrk4p
            source_type: api_record
            title: 维基数据：崔氏（Q65805412）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805412
            external_identifier: Q65805412
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.917Z
            metadata_json: null
      object_person:
        id: p_KXD6a4zaL9E1N69hTNkTMP
        status: active
        display_name: 王志悌
        merged_into_person_id: null
    - claim:
        id: c_uA2mVQ1HPqiWBq_eQedofp
        subject_person_id: p_sJy5HhqgLH3dD5PKotzG8r
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXpccsQllI6ld_d4Q3TY1B
          claim_id: c_uA2mVQ1HPqiWBq_eQedofp
          source_id: s_g976X44Q93pkoABpTU6h3j
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 190：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_KXD6a4zaL9E1N69hTNkTMP
        status: active
        display_name: 王志悌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 崔氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 崔氏，王志悌妻。维基数据以独立条目 Q65805412 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 崔氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KXD6a4zaL9E1N69hTNkTMP | 王志悌 | accepted |
| spouses | p_KXD6a4zaL9E1N69hTNkTMP | 王志悌 | accepted |

## 外部来源

- [维基数据：崔氏（Q65805412）](https://www.wikidata.org/wiki/Q65805412)
- [维基数据：王志悌（Q45507893）](https://www.wikidata.org/wiki/Q45507893)
- [CBDB 中国历代人物传记资料库：崔氏（154151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154151&o=json)
- [CBDB 中国历代人物传记资料库：王志悌（140994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json)
