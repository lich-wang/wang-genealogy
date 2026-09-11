---
schema: wang-person/v1
id: p_JnkpTWbJcvJCtHDJoXUsKb
status: active
merged_into: null
display_name: 吴安持
cbdb_id: 1957
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8WqywOLXCDXcJi1uBFlkob
        subject_person_id: p_JnkpTWbJcvJCtHDJoXUsKb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴安持，宋人物。CBDB 记录其籍贯记录为浦城，身份包括入元祐黨籍者，入仕记录为恩蔭、蔭補(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1957 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7FS1KvnbeaeqRQUlCjRRy
          claim_id: c_8WqywOLXCDXcJi1uBFlkob
          source_id: s_BJA22onh7nirYc7M79ayWe
          stance: supports
          locator: CBDB:1957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BJA22onh7nirYc7M79ayWe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳安持（1957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1957&o=json
            external_identifier: CBDB:1957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:14.056Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cuYfHF83ZCDZBsznNBc4D4
        subject_person_id: p_JnkpTWbJcvJCtHDJoXUsKb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴安持
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8dEsCQdRvgU9FK8G9NX388
          claim_id: c_cuYfHF83ZCDZBsznNBc4D4
          source_id: s_UUeTk286Aur6M6x9XTkUWi
          stance: supports
          locator: Q45359877
          quotation: null
          interpretation_note: null
          source:
            id: s_UUeTk286Aur6M6x9XTkUWi
            source_type: api_record
            title: 维基数据：吴安持（Q45359877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359877
            external_identifier: Q45359877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:13.923Z
            metadata_json: null
        - id: cs_uuC3itkghqvfhkBtCNWW43
          claim_id: c_cuYfHF83ZCDZBsznNBc4D4
          source_id: s_BJA22onh7nirYc7M79ayWe
          stance: supports
          locator: Q45359877
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
        id: c_xhSt8SXtsfKKHjM7wzeYo7
        subject_person_id: p_JnkpTWbJcvJCtHDJoXUsKb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_svNoVTBbnvNZLtqQbge32p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_DNn6N5rGkHFWWjaLrxyFhH
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_czbWs8rYCWzm9QACSGdwAF
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_czbWs8rYCWzm9QACSGdwAF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（41576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json
            external_identifier: CBDB:41576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:22.452Z
            metadata_json: null
        - id: cs_dsA6hANRqSz3s7K4JxiCVD
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_HtRLK1op2Q3spRP4xb2XJ5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_HtRLK1op2Q3spRP4xb2XJ5
            source_type: api_record
            title: 維基數據：王氏（Q45431126）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431126
            external_identifier: Q45431126
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:00.890Z
            metadata_json: null
        - id: cs_f2FwEcpzc1YSPC3wGjm5hS
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_UUeTk286Aur6M6x9XTkUWi
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UUeTk286Aur6M6x9XTkUWi
            source_type: api_record
            title: 维基数据：吴安持（Q45359877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359877
            external_identifier: Q45359877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:13.923Z
            metadata_json: null
        - id: cs_BAj22YHNCPsKeqk46p1Yut
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_BJA22onh7nirYc7M79ayWe
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_BJA22onh7nirYc7M79ayWe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳安持（1957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1957&o=json
            external_identifier: CBDB:1957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:14.056Z
            metadata_json: null
      object_person:
        id: p_svNoVTBbnvNZLtqQbge32p
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_r3SLTE5u7hTngNETYqif3o
        subject_person_id: p_JnkpTWbJcvJCtHDJoXUsKb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CaVYKLLpfHuYuj3viD825K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzSj5xWR3MfSJdPqHSRFTf
          claim_id: c_r3SLTE5u7hTngNETYqif3o
          source_id: s_fI2YwpIxtnTgeUKCKwlXiM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，6317;6318：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fI2YwpIxtnTgeUKCKwlXiM
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(吳安持妻)（CBDB 41576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json
            external_identifier: CBDB:41576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CaVYKLLpfHuYuj3viD825K
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴安持

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴安持，宋人物。CBDB 记录其籍贯记录为浦城，身份包括入元祐黨籍者，入仕记录为恩蔭、蔭補(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1957 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 吴安持 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_svNoVTBbnvNZLtqQbge32p | 王氏 | accepted |
| spouses | p_CaVYKLLpfHuYuj3viD825K | 王氏 | accepted |

## 外部来源

- [维基数据：吴安持（Q45359877）](https://www.wikidata.org/wiki/Q45359877)
- [維基數據：王氏（Q45431126）](https://www.wikidata.org/wiki/Q45431126)
- [中国历代人物传记资料库：王氏(吳安持妻)（CBDB 41576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json)
- [CBDB 中国历代人物传记资料库：吳安持（1957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1957&o=json)
