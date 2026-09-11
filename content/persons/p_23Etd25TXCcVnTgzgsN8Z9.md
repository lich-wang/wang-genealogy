---
schema: wang-person/v1
id: p_23Etd25TXCcVnTgzgsN8Z9
status: active
merged_into: null
display_name: 石氏
cbdb_id: 311231
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CI3Pw8H6dTUTFxdzrXFsop
        subject_person_id: p_23Etd25TXCcVnTgzgsN8Z9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 石氏，王宗茂妻。维基数据以独立条目 Q65835783 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6mWwiWYNmh1UnOJ2XvMXhy
          claim_id: c_CI3Pw8H6dTUTFxdzrXFsop
          source_id: s_izzoLwZqcvFjC4yguuMdxn
          stance: supports
          locator: Q65835783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_izzoLwZqcvFjC4yguuMdxn
            source_type: api_record
            title: 维基数据：石氏（Q65835783）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65835783
            external_identifier: Q65835783
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:43.084Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mA8xbchL6WYyvga9BQ6LnN
        subject_person_id: p_23Etd25TXCcVnTgzgsN8Z9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 石氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DDDR9APyhTt1AKLyzdgJR9
          claim_id: c_mA8xbchL6WYyvga9BQ6LnN
          source_id: s_izzoLwZqcvFjC4yguuMdxn
          stance: supports
          locator: Q65835783
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_VvcKr9Xyb2zsVk9XmmE5Lo
          claim_id: c_mA8xbchL6WYyvga9BQ6LnN
          source_id: s_A7AdSTvuk8Yo6JW9QTS3s6
          stance: supports
          locator: Q65835783
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_A7AdSTvuk8Yo6JW9QTS3s6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：石氏（311231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311231&o=json
            external_identifier: CBDB:311231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:43.267Z
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
        id: c_cFtJpspxbc31jkytrckG5R
        subject_person_id: p_23Etd25TXCcVnTgzgsN8Z9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5MNkBJnN6bmTG5ZPZ7LvWS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9SGes3yLGhehBf1aKfE5aK
          claim_id: c_cFtJpspxbc31jkytrckG5R
          source_id: s_p3uK4K4Upz4SCa2tk7EqLK
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十六年進士登科錄:一卷
          source:
            id: s_p3uK4K4Upz4SCa2tk7EqLK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗茂（68496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68496&o=json
            external_identifier: CBDB:68496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:24.104Z
            metadata_json: null
        - id: cs_niBk3T7cgjbL6WvHtPAH9H
          claim_id: c_cFtJpspxbc31jkytrckG5R
          source_id: s_NLsGNVpk4Ruefbr7KaeHNT
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_NLsGNVpk4Ruefbr7KaeHNT
            source_type: api_record
            title: 维基数据：王宗茂（Q15915784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15915784
            external_identifier: Q15915784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
        - id: cs_uZLpD9aWh7KL1JfZNCdTK3
          claim_id: c_cFtJpspxbc31jkytrckG5R
          source_id: s_izzoLwZqcvFjC4yguuMdxn
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_izzoLwZqcvFjC4yguuMdxn
            source_type: api_record
            title: 维基数据：石氏（Q65835783）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65835783
            external_identifier: Q65835783
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:43.084Z
            metadata_json: null
      object_person:
        id: p_5MNkBJnN6bmTG5ZPZ7LvWS
        status: active
        display_name: 王宗茂
        merged_into_person_id: null
    - claim:
        id: c_uwdjwufMVL6UnSuYb7aM4Y
        subject_person_id: p_23Etd25TXCcVnTgzgsN8Z9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UZa7SsGRtxBt58y2K3aT16
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YqezNeHhp8omKP2nUyiEf5
          claim_id: c_uwdjwufMVL6UnSuYb7aM4Y
          source_id: s_A7AdSTvuk8Yo6JW9QTS3s6
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_UZa7SsGRtxBt58y2K3aT16
        status: active
        display_name: 王宗茂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 石氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 石氏，王宗茂妻。维基数据以独立条目 Q65835783 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 石氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5MNkBJnN6bmTG5ZPZ7LvWS | 王宗茂 | accepted |
| spouses | p_UZa7SsGRtxBt58y2K3aT16 | 王宗茂 | accepted |

## 外部来源

- [维基数据：石氏（Q65835783）](https://www.wikidata.org/wiki/Q65835783)
- [维基数据：王宗茂（Q15915784）](https://www.wikidata.org/wiki/Q15915784)
- [CBDB 中国历代人物传记资料库：石氏（311231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311231&o=json)
- [CBDB 中国历代人物传记资料库：王宗茂（68496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68496&o=json)
