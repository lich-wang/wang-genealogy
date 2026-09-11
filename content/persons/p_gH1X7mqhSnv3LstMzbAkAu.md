---
schema: wang-person/v1
id: p_gH1X7mqhSnv3LstMzbAkAu
status: active
merged_into: null
display_name: 王质
cbdb_id: 250183
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3RUDrzAUmWKyi8ofuH9rdH
        subject_person_id: p_gH1X7mqhSnv3LstMzbAkAu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王质，明人物。中国历代人物传记资料库（CBDB）以人物编号 250183 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9Q9cVi23UoiALHxHVgcjB2
          claim_id: c_3RUDrzAUmWKyi8ofuH9rdH
          source_id: s_qaNLR8tVSPMvpW4G6jGPCv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qaNLR8tVSPMvpW4G6jGPCv
            source_type: api_record
            title: 维基数据：王质（Q45637209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637209
            external_identifier: Q45637209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_LcT2SqPMGOYhbF_ATNU9ku
          claim_id: c_3RUDrzAUmWKyi8ofuH9rdH
          source_id: s_6RCNMXXr55hspuxUMCTvw5
          stance: supports
          locator: CBDB:250183
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6RCNMXXr55hspuxUMCTvw5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王質（250183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250183&o=json
            external_identifier: CBDB:250183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.747Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARGQC1NMXQJKziApF5tvga
        subject_person_id: p_gH1X7mqhSnv3LstMzbAkAu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王质
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c1rmjLnMQhfD1QifZVBggg
          claim_id: c_ARGQC1NMXQJKziApF5tvga
          source_id: s_qaNLR8tVSPMvpW4G6jGPCv
          stance: supports
          locator: Q45637209
          quotation: null
          interpretation_note: null
          source:
            id: s_qaNLR8tVSPMvpW4G6jGPCv
            source_type: api_record
            title: 维基数据：王质（Q45637209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637209
            external_identifier: Q45637209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_hKvcKUADe8b1N7qCpmerEC
          claim_id: c_ARGQC1NMXQJKziApF5tvga
          source_id: s_6RCNMXXr55hspuxUMCTvw5
          stance: supports
          locator: Q45637209
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7S24uRepgy77bcFFG5mJDd
        subject_person_id: p_gH1X7mqhSnv3LstMzbAkAu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jFuufzfY72LPXJ1cXZRs83
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_M9UvhqMy1733jtW4NeVdd5
          claim_id: c_7S24uRepgy77bcFFG5mJDd
          source_id: s_H7oK5fFS5buGRQJqjruUQC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_H7oK5fFS5buGRQJqjruUQC
            source_type: api_record
            title: 维基数据：王琳（Q45637271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637271
            external_identifier: Q45637271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
        - id: cs_JVus2qV7PHan48oYZw2TrA
          claim_id: c_7S24uRepgy77bcFFG5mJDd
          source_id: s_qaNLR8tVSPMvpW4G6jGPCv
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaNLR8tVSPMvpW4G6jGPCv
            source_type: api_record
            title: 维基数据：王质（Q45637209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637209
            external_identifier: Q45637209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
      object_person:
        id: p_jFuufzfY72LPXJ1cXZRs83
        status: active
        display_name: 王琳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_HagACvArdUbMIcEStRSN5x
        subject_person_id: p_gH1X7mqhSnv3LstMzbAkAu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2CY82LiLunPZpBKWzpBz3S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rjjQCg_3ZSqcNRt8gsX_65
          claim_id: c_HagACvArdUbMIcEStRSN5x
          source_id: s_KiKcwY7ixByX4xMwNVCevX
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KiKcwY7ixByX4xMwNVCevX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倬（126663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json
            external_identifier: CBDB:126663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:55.585Z
            metadata_json: null
      object_person:
        id: p_2CY82LiLunPZpBKWzpBz3S
        status: active
        display_name: 王倬
        merged_into_person_id: null
  other: []
---

# 王质

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王质，明人物。中国历代人物传记资料库（CBDB）以人物编号 250183 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王质 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jFuufzfY72LPXJ1cXZRs83 | 王琳 | accepted |
| descendants | p_2CY82LiLunPZpBKWzpBz3S | 王倬 | accepted |

## 外部来源

- [维基数据：王琳（Q45637271）](https://www.wikidata.org/wiki/Q45637271)
- [维基数据：王质（Q45637209）](https://www.wikidata.org/wiki/Q45637209)
- [CBDB 中国历代人物传记资料库：王質（250183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250183&o=json)
- [CBDB 中国历代人物传记资料库：王倬（126663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json)
