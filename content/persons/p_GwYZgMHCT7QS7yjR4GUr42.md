---
schema: wang-person/v1
id: p_GwYZgMHCT7QS7yjR4GUr42
status: active
merged_into: null
display_name: 张氏
cbdb_id: 294865
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GIlmBvAhx8ywGh--USYGgn
        subject_person_id: p_GwYZgMHCT7QS7yjR4GUr42
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，王畿妻。维基数据以独立条目 Q65818542 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gW1mQBVXWeVYXAECnEfI23
          claim_id: c_GIlmBvAhx8ywGh--USYGgn
          source_id: s_rBgrT47bTAon6yPEJoEAFs
          stance: supports
          locator: Q65818542
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_rBgrT47bTAon6yPEJoEAFs
            source_type: api_record
            title: 维基数据：张氏（Q65818542）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65818542
            external_identifier: Q65818542
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4qAEP7a12Ama7PW1BW1Lfi
        subject_person_id: p_GwYZgMHCT7QS7yjR4GUr42
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8ZzqsTXFAgsDzHSVZc9Df3
          claim_id: c_4qAEP7a12Ama7PW1BW1Lfi
          source_id: s_xaG4v7hn4DKGXBy5ZqUmvZ
          stance: supports
          locator: Q65818542
          quotation: null
          interpretation_note: null
          source:
            id: s_xaG4v7hn4DKGXBy5ZqUmvZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（294865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294865&o=json
            external_identifier: CBDB:294865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:19.641Z
            metadata_json: null
        - id: cs_AaCDMWqRoswUMDDw9HDxG5
          claim_id: c_4qAEP7a12Ama7PW1BW1Lfi
          source_id: s_rBgrT47bTAon6yPEJoEAFs
          stance: supports
          locator: Q65818542
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
        id: c_nVNXwWvm9Z39pzXbJMYHTg
        subject_person_id: p_GwYZgMHCT7QS7yjR4GUr42
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ju6ncH7kWpfT9ucbjypzLV
          claim_id: c_nVNXwWvm9Z39pzXbJMYHTg
          source_id: s_2AbfFEGVf6njE9MhrfSvXE
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖十一年進士登科錄:一卷
          source:
            id: s_2AbfFEGVf6njE9MhrfSvXE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王畿（126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:50.309Z
            metadata_json: null
        - id: cs_ZD6ER2FTxM9hA1kAp6pXY5
          claim_id: c_nVNXwWvm9Z39pzXbJMYHTg
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
        - id: cs_ciHmg8692qMtr2HB142YR9
          claim_id: c_nVNXwWvm9Z39pzXbJMYHTg
          source_id: s_rBgrT47bTAon6yPEJoEAFs
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_rBgrT47bTAon6yPEJoEAFs
            source_type: api_record
            title: 维基数据：张氏（Q65818542）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65818542
            external_identifier: Q65818542
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
      object_person:
        id: p_aXikAW5GmUNHUB4Mexh2vK
        status: active
        display_name: 王龙溪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张氏，王畿妻。维基数据以独立条目 Q65818542 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aXikAW5GmUNHUB4Mexh2vK | 王龙溪 | accepted |

## 外部来源

- [维基数据：王龙溪（Q11573179）](https://www.wikidata.org/wiki/Q11573179)
- [维基数据：张氏（Q65818542）](https://www.wikidata.org/wiki/Q65818542)
- [CBDB 中国历代人物传记资料库：王畿（126814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json)
- [CBDB 中国历代人物传记资料库：張氏（294865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294865&o=json)
