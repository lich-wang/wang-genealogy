---
schema: wang-person/v1
id: p_pTZB8fs7H6HDdDBGYmoZTE
status: active
merged_into: null
display_name: 王有恬
cbdb_id: 199727
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BbHWN3rrZJGSwRR5h2Fohy
        subject_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有恬（生于1448年），明人物。中国历代人物传记资料库（CBDB）以人物编号 199727 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_meS91JGd92l4aJsrMDBi2q
          claim_id: c_BbHWN3rrZJGSwRR5h2Fohy
          source_id: s_nLrJrNsJko4eRuUfswmx5K
          stance: supports
          locator: CBDB:199727
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_nLrJrNsJko4eRuUfswmx5K
            source_type: api_record
            title: 中国历代人物传记资料库：王有恬（CBDB 199727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199727&o=json
            external_identifier: CBDB:199727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6mKRh7b2zYyZzREHWBiHge
        subject_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1448年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1448-01-01
            latest: 1448-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B89fCJE8MuSP3UF13eZWEv
          claim_id: c_6mKRh7b2zYyZzREHWBiHge
          source_id: s_nLrJrNsJko4eRuUfswmx5K
          stance: supports
          locator: CBDB:199727
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1448
          source:
            id: s_nLrJrNsJko4eRuUfswmx5K
            source_type: api_record
            title: 中国历代人物传记资料库：王有恬（CBDB 199727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199727&o=json
            external_identifier: CBDB:199727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zLeutz4txTC1d1C8GGS8Go
        subject_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有恬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hPvyAHbbqoJL9yaJH1GyYw
          claim_id: c_zLeutz4txTC1d1C8GGS8Go
          source_id: s_nLrJrNsJko4eRuUfswmx5K
          stance: supports
          locator: CBDB:199727
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1448
          source:
            id: s_nLrJrNsJko4eRuUfswmx5K
            source_type: api_record
            title: 中国历代人物传记资料库：王有恬（CBDB 199727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199727&o=json
            external_identifier: CBDB:199727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fGoV2koOSYMvWbOJiIwzku
        subject_person_id: p_pEywX39NWKUq9nsDk1FUH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxG6mmOHrdmxosnp0RAxuR
          claim_id: c_fGoV2koOSYMvWbOJiIwzku
          source_id: s_9idBDsJ4YTcBai7gUxyEnL
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9idBDsJ4YTcBai7gUxyEnL
            source_type: api_record
            title: 中国历代人物传记资料库：王明哲（CBDB 249005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249005&o=json
            external_identifier: CBDB:249005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pEywX39NWKUq9nsDk1FUH7
        status: active
        display_name: 王明哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Ui9ps080uRdN_Jf2u436ti
        subject_person_id: p_Vb12uqmowHEWMP3JHAwPyx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axej6RfLbkCgtHqaY9rEQ_
          claim_id: c_Ui9ps080uRdN_Jf2u436ti
          source_id: s_v5QpwsyG5QnvPLRuH5do9P
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v5QpwsyG5QnvPLRuH5do9P
            source_type: api_record
            title: 中国历代人物传记资料库：王桉（CBDB 249004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249004&o=json
            external_identifier: CBDB:249004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Vb12uqmowHEWMP3JHAwPyx
        status: active
        display_name: 王桉
        merged_into_person_id: null
    - claim:
        id: c_mjFEItAbMyXZNU7U30Jxhn
        subject_person_id: p_XM5n69CHhrqWi7GwAYadqj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cAp308OppfBTkyGwdifYOz
          claim_id: c_mjFEItAbMyXZNU7U30Jxhn
          source_id: s_gyxvYKJS1c7XUCe5VnxWSg
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gyxvYKJS1c7XUCe5VnxWSg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲奎（CBDB 249003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249003&o=json
            external_identifier: CBDB:249003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XM5n69CHhrqWi7GwAYadqj
        status: active
        display_name: 王仲奎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王有恬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有恬（生于1448年），明人物。中国历代人物传记资料库（CBDB）以人物编号 199727 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1448年 | accepted |
| name.primary | 王有恬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pEywX39NWKUq9nsDk1FUH7 | 王明哲 | accepted |
| ancestors | p_Vb12uqmowHEWMP3JHAwPyx | 王桉 | accepted |
| ancestors | p_XM5n69CHhrqWi7GwAYadqj | 王仲奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桉（CBDB 249004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249004&o=json)
- [中国历代人物传记资料库：王明哲（CBDB 249005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249005&o=json)
- [中国历代人物传记资料库：王有恬（CBDB 199727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199727&o=json)
- [中国历代人物传记资料库：王仲奎（CBDB 249003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249003&o=json)
