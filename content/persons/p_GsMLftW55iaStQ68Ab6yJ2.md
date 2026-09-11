---
schema: wang-person/v1
id: p_GsMLftW55iaStQ68Ab6yJ2
status: active
merged_into: null
display_name: 王同節
cbdb_id: 22170
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kSSLARcMYoY5K63dERiu2M
        subject_person_id: p_GsMLftW55iaStQ68Ab6yJ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同節，唐人物。中国历代人物传记资料库（CBDB）以人物编号 22170 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ex5-1BEuO_GBSJg_xGb6ha
          claim_id: c_kSSLARcMYoY5K63dERiu2M
          source_id: s_V5uRehD5yKrAiRQGbTE1aG
          stance: supports
          locator: CBDB:22170
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_V5uRehD5yKrAiRQGbTE1aG
            source_type: api_record
            title: 中国历代人物传记资料库：王同節（CBDB 22170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22170&o=json
            external_identifier: CBDB:22170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y9rK3yqPSg41JibGNf2Snh
        subject_person_id: p_GsMLftW55iaStQ68Ab6yJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qb5vPdhAepSyZRXHGi3aqL
          claim_id: c_y9rK3yqPSg41JibGNf2Snh
          source_id: s_V5uRehD5yKrAiRQGbTE1aG
          stance: supports
          locator: CBDB:22170
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_V5uRehD5yKrAiRQGbTE1aG
            source_type: api_record
            title: 中国历代人物传记资料库：王同節（CBDB 22170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22170&o=json
            external_identifier: CBDB:22170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_jxL44uJTwCcDe2S_Pr9UGI
        subject_person_id: p_GsMLftW55iaStQ68Ab6yJ2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aOsWZjTsbGqAjpUHO5PlSk
          claim_id: c_jxL44uJTwCcDe2S_Pr9UGI
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: 宋史：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_42M1RyqHPGFYMpZ9FeVqji
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 1880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json
            external_identifier: CBDB:1880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DFWuMPWUstBm3Tr8KacmZf
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
  other: []
---

# 王同節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同節，唐人物。中国历代人物传记资料库（CBDB）以人物编号 22170 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王同節 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DFWuMPWUstBm3Tr8KacmZf | 王嗣宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣宗（CBDB 1880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json)
- [中国历代人物传记资料库：王同節（CBDB 22170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22170&o=json)
