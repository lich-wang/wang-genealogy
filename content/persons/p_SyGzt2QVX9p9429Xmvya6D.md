---
schema: wang-person/v1
id: p_SyGzt2QVX9p9429Xmvya6D
status: active
merged_into: null
display_name: 赵氏
cbdb_id: 217871
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LVkp7wXxhg1n05V2G9T3zM
        subject_person_id: p_SyGzt2QVX9p9429Xmvya6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 赵氏，王士性妻。维基数据以独立条目 Q65820612 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_abEGoCFrfQuCND1BpASt5_
          claim_id: c_LVkp7wXxhg1n05V2G9T3zM
          source_id: s_KjoN6LFpAuwkH4Wr9CaUZg
          stance: supports
          locator: Q65820612
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_KjoN6LFpAuwkH4Wr9CaUZg
            source_type: api_record
            title: 维基数据：赵氏（Q65820612）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65820612
            external_identifier: Q65820612
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.984Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_L86be3hVkECrevStp3Mf4o
        subject_person_id: p_SyGzt2QVX9p9429Xmvya6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 赵氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QMzhJU1xjJNMZ8p71QMQs3
          claim_id: c_L86be3hVkECrevStp3Mf4o
          source_id: s_KjoN6LFpAuwkH4Wr9CaUZg
          stance: supports
          locator: Q65820612
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_kdWr6RFx578yh5gPfWQadd
          claim_id: c_L86be3hVkECrevStp3Mf4o
          source_id: s_kbnye63zTpxMvNcdscZoJi
          stance: supports
          locator: Q65820612
          quotation: null
          interpretation_note: null
          source:
            id: s_kbnye63zTpxMvNcdscZoJi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：趙氏（217871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217871&o=json
            external_identifier: CBDB:217871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:35.134Z
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
        id: c_tiVjybJP1Qvfw7zzt8rJNF
        subject_person_id: p_SyGzt2QVX9p9429Xmvya6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3SacaKrwJtPd597mac4rQ
          claim_id: c_tiVjybJP1Qvfw7zzt8rJNF
          source_id: s_sYZ3oy79MdJvZVrt5WUmki
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆五年進士登科錄:一卷
          source:
            id: s_sYZ3oy79MdJvZVrt5WUmki
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士性（35066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json
            external_identifier: CBDB:35066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:14.030Z
            metadata_json: null
        - id: cs_XrwU77ECFKhg62VzpKbxoy
          claim_id: c_tiVjybJP1Qvfw7zzt8rJNF
          source_id: s_J42Tsy6ZSB9mSGJrACGUgt
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_J42Tsy6ZSB9mSGJrACGUgt
            source_type: api_record
            title: 维基数据：王士性（Q15711200）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15711200
            external_identifier: Q15711200
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:23.438Z
            metadata_json: null
        - id: cs_xuv9pUKhm2EmxyDrLs5kii
          claim_id: c_tiVjybJP1Qvfw7zzt8rJNF
          source_id: s_KjoN6LFpAuwkH4Wr9CaUZg
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_KjoN6LFpAuwkH4Wr9CaUZg
            source_type: api_record
            title: 维基数据：赵氏（Q65820612）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65820612
            external_identifier: Q65820612
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.984Z
            metadata_json: null
      object_person:
        id: p_ZHWKRzPsbezhFJuM1r6DbE
        status: active
        display_name: 王士性
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 赵氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 赵氏，王士性妻。维基数据以独立条目 Q65820612 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 赵氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ZHWKRzPsbezhFJuM1r6DbE | 王士性 | accepted |

## 外部来源

- [维基数据：王士性（Q15711200）](https://www.wikidata.org/wiki/Q15711200)
- [维基数据：赵氏（Q65820612）](https://www.wikidata.org/wiki/Q65820612)
- [CBDB 中国历代人物传记资料库：王士性（35066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json)
- [CBDB 中国历代人物传记资料库：趙氏（217871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217871&o=json)
