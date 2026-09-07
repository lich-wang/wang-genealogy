---
schema: wang-person/v1
id: p_PrWK41ukxCufULdQG38iQM
status: active
merged_into: null
display_name: 王府君
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1t15pZcp6b_yFPBbibVXx2
        subject_person_id: p_PrWK41ukxCufULdQG38iQM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府君，薛氏夫。维基数据以独立条目 Q65804745 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WkMCimkseu5DZyX0JFENLg
          claim_id: c_1t15pZcp6b_yFPBbibVXx2
          source_id: s_8q2xSPaM4vbd9mPFhUTiWm
          stance: supports
          locator: Q65804745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_8q2xSPaM4vbd9mPFhUTiWm
            source_type: api_record
            title: 维基数据：王府君（Q65804745）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65804745
            external_identifier: Q65804745
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CBCwsVKbJaJu5E2xwuKj4Z
        subject_person_id: p_PrWK41ukxCufULdQG38iQM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府君
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xgzy6qLVFo157QVvj38PSm
          claim_id: c_CBCwsVKbJaJu5E2xwuKj4Z
          source_id: s_8q2xSPaM4vbd9mPFhUTiWm
          stance: supports
          locator: Q65804745
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ducuKQTZ1Kf83JD5Mbsq2r
          claim_id: c_CBCwsVKbJaJu5E2xwuKj4Z
          source_id: s_ijC2hVHJ61Rf6z4Bdcv8Yn
          stance: supports
          locator: Q65804745
          quotation: null
          interpretation_note: null
          source:
            id: s_ijC2hVHJ61Rf6z4Bdcv8Yn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王府君（149909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149909&o=json
            external_identifier: CBDB:149909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:51.426Z
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
        id: c_m1vPHPVwYuH6QFTb3i1aTt
        subject_person_id: p_PrWK41ukxCufULdQG38iQM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r944Nj55R6LMbB2CMXdjC7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_7uiXQN9y65iFYmg89yKjnK
          claim_id: c_m1vPHPVwYuH6QFTb3i1aTt
          source_id: s_D2uq9qPZEDYPyXqkZuCFjL
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_D2uq9qPZEDYPyXqkZuCFjL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：薛氏（140005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140005&o=json
            external_identifier: CBDB:140005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:23.644Z
            metadata_json: null
        - id: cs_CNAyMgMNG4aMs3KmC5fg3W
          claim_id: c_m1vPHPVwYuH6QFTb3i1aTt
          source_id: s_qvLiLkfNdCSbh3c65bpEx7
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_qvLiLkfNdCSbh3c65bpEx7
            source_type: api_record
            title: 维基数据：薛氏（Q65802894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65802894
            external_identifier: Q65802894
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:23.482Z
            metadata_json: null
        - id: cs_3eg7rXFQwwJVCmb9JZxN42
          claim_id: c_m1vPHPVwYuH6QFTb3i1aTt
          source_id: s_8q2xSPaM4vbd9mPFhUTiWm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_8q2xSPaM4vbd9mPFhUTiWm
            source_type: api_record
            title: 维基数据：王府君（Q65804745）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65804745
            external_identifier: Q65804745
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json: null
        - id: cs_eKLXKN3Ju92r66KA1MkJJ5
          claim_id: c_m1vPHPVwYuH6QFTb3i1aTt
          source_id: s_ijC2hVHJ61Rf6z4Bdcv8Yn
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_ijC2hVHJ61Rf6z4Bdcv8Yn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王府君（149909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149909&o=json
            external_identifier: CBDB:149909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:51.426Z
            metadata_json: null
      object_person:
        id: p_r944Nj55R6LMbB2CMXdjC7
        status: active
        display_name: 薛氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王府君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王府君，薛氏夫。维基数据以独立条目 Q65804745 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王府君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_r944Nj55R6LMbB2CMXdjC7 | 薛氏 | accepted |

## 外部来源

- [维基数据：王府君（Q65804745）](https://www.wikidata.org/wiki/Q65804745)
- [维基数据：薛氏（Q65802894）](https://www.wikidata.org/wiki/Q65802894)
- [CBDB 中国历代人物传记资料库：王府君（149909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149909&o=json)
- [CBDB 中国历代人物传记资料库：薛氏（140005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140005&o=json)
