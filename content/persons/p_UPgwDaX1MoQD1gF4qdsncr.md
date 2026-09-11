---
schema: wang-person/v1
id: p_UPgwDaX1MoQD1gF4qdsncr
status: active
merged_into: null
display_name: 王楊五
cbdb_id: 160467
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hXHT1YcVDNz5vAN2PFEQJJ
        subject_person_id: p_UPgwDaX1MoQD1gF4qdsncr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊五，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160467 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_z8FGTSUdhNCSOmyyRtJH2N
          claim_id: c_hXHT1YcVDNz5vAN2PFEQJJ
          source_id: s_RCJn9cNJ3u48p9A1N1aENj
          stance: supports
          locator: CBDB:160467
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RCJn9cNJ3u48p9A1N1aENj
            source_type: api_record
            title: 中国历代人物传记资料库：王楊五（CBDB 160467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160467&o=json
            external_identifier: CBDB:160467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1SPTBPEA1uVXxEwaCgLFSo
        subject_person_id: p_UPgwDaX1MoQD1gF4qdsncr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊五
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_raezmtphu9rBdZq6R7Q6ac
          claim_id: c_1SPTBPEA1uVXxEwaCgLFSo
          source_id: s_RCJn9cNJ3u48p9A1N1aENj
          stance: supports
          locator: CBDB:160467
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_RCJn9cNJ3u48p9A1N1aENj
            source_type: api_record
            title: 中国历代人物传记资料库：王楊五（CBDB 160467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160467&o=json
            external_identifier: CBDB:160467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aw0ePlXzNc-i8o6D1Fz0dv
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UPgwDaX1MoQD1gF4qdsncr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bwpsYnewIUnLDWqS9CyRPj
          claim_id: c_aw0ePlXzNc-i8o6D1Fz0dv
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cUBuvMo9eRXEUn6UkP3FHH
            source_type: api_record
            title: 中国历代人物传记资料库：王誕（CBDB 141997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json
            external_identifier: CBDB:141997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uLwVmgMC518Yd4ehoNd1de
        status: active
        display_name: 王誕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楊五

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王楊五，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160467 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王楊五 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uLwVmgMC518Yd4ehoNd1de | 王誕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誕（CBDB 141997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json)
- [中国历代人物传记资料库：王楊五（CBDB 160467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160467&o=json)
