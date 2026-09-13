---
schema: wang-person/v1
id: p_YFXpD1H4mYzD71g98dxSNt
status: active
merged_into: null
display_name: 王爌
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rOQNfemRUGNES3b_Dpdqyl
        subject_person_id: p_YFXpD1H4mYzD71g98dxSNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爌（1472年—1554年），字存約，號南渠，浙江承宣布政使司台州府黃巖縣（今浙江省黃岩市）人，明朝政治人物。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RWaOEmSpDJjXFaf15S2CnL
          claim_id: c_rOQNfemRUGNES3b_Dpdqyl
          source_id: s_YjsYsxof8_rZnKL40PbHWB
          stance: supports
          locator: 导言
          quotation: 王爌（1472年—1554年），字存約，號南渠，浙江承宣布政使司
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_YjsYsxof8_rZnKL40PbHWB
            source_type: website
            title: 中文维基百科：王爌
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%88%8C
            external_identifier: Q15926463
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SCxQ47TsNkodYHGeUkFtXn
        subject_person_id: p_YFXpD1H4mYzD71g98dxSNt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1554-01-01
            latest: 1554-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cUz9X4CNSe9eMN7MP2ZdQx
          claim_id: c_SCxQ47TsNkodYHGeUkFtXn
          source_id: s_nMm7HFiky9P7HNhESGnnNx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_nMm7HFiky9P7HNhESGnnNx
            source_type: api_record
            title: 维基数据：王爌（Q15926463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926463
            external_identifier: Q15926463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TrGj4AqqzhpXCTR1o2MNMe
        subject_person_id: p_YFXpD1H4mYzD71g98dxSNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f7wFhc4kY1JZ9CP6QxbRfN
          claim_id: c_TrGj4AqqzhpXCTR1o2MNMe
          source_id: s_nMm7HFiky9P7HNhESGnnNx
          stance: supports
          locator: Q15926463
          quotation: null
          interpretation_note: null
          source:
            id: s_nMm7HFiky9P7HNhESGnnNx
            source_type: api_record
            title: 维基数据：王爌（Q15926463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926463
            external_identifier: Q15926463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nqzvHmtDf2HMLtn45QDxE9
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_YFXpD1H4mYzD71g98dxSNt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EqpEoUx4AkoHUipNUNmWeq
          claim_id: c_nqzvHmtDf2HMLtn45QDxE9
          source_id: s_nMm7HFiky9P7HNhESGnnNx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nMm7HFiky9P7HNhESGnnNx
            source_type: api_record
            title: 维基数据：王爌（Q15926463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926463
            external_identifier: Q15926463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
        - id: cs_T5uKDMC8mfB6wvizrJ9J5m
          claim_id: c_nqzvHmtDf2HMLtn45QDxE9
          source_id: s_YXrnRLtd5RNpZ3VXKj43wz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YXrnRLtd5RNpZ3VXKj43wz
            source_type: api_record
            title: 维基数据：王玼（Q45436592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436592
            external_identifier: Q45436592
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
      object_person:
        id: p_Zc7mv2e4ZRM13rfjpkZkya
        status: active
        display_name: 王玼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CvDHo7vG3R2J4BtHMpfip5
        subject_person_id: p_YFXpD1H4mYzD71g98dxSNt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wx8pV5FXm9qYnA5ZT1tswN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XreamqfkEE5ErRg6vRsMPY
          claim_id: c_CvDHo7vG3R2J4BtHMpfip5
          source_id: s_8ffxLtmpx4Et5dN5xD2CQC
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_8ffxLtmpx4Et5dN5xD2CQC
            source_type: api_record
            title: 维基数据：葛氏（Q65880296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65880296
            external_identifier: Q65880296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.366Z
            metadata_json: null
        - id: cs_kJBPm69id1MXeoJSw2spSb
          claim_id: c_CvDHo7vG3R2J4BtHMpfip5
          source_id: s_7hdvw8f5c7MGNRVN14ZCfA
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治十五年進士登科錄:一卷
          source:
            id: s_7hdvw8f5c7MGNRVN14ZCfA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王爌（68280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json
            external_identifier: CBDB:68280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:40.894Z
            metadata_json: null
        - id: cs_w4XxDRzMH2ewMU1LePiTh4
          claim_id: c_CvDHo7vG3R2J4BtHMpfip5
          source_id: s_nMm7HFiky9P7HNhESGnnNx
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_nMm7HFiky9P7HNhESGnnNx
            source_type: api_record
            title: 维基数据：王爌（Q15926463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926463
            external_identifier: Q15926463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
      object_person:
        id: p_wx8pV5FXm9qYnA5ZT1tswN
        status: active
        display_name: 葛氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_8ZbBl87L0x1rhqVfPt74LQ
        subject_person_id: p_N27zaVAVE31vavnkwj7Dft
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YFXpD1H4mYzD71g98dxSNt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_MQq7AFr6haiC_L6HKAnJ
          claim_id: c_8ZbBl87L0x1rhqVfPt74LQ
          source_id: s_Xu4hHeWSyLA3aEvJiaoiG8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xu4hHeWSyLA3aEvJiaoiG8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯永（272142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272142&o=json
            external_identifier: CBDB:272142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_N27zaVAVE31vavnkwj7Dft
        status: active
        display_name: 王伯永
        merged_into_person_id: null
    - claim:
        id: c_nJOH_US3r_8RAvghJsFtCR
        subject_person_id: p_255t2nDMrWzFXS93NLqNE3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YFXpD1H4mYzD71g98dxSNt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQtg2n3ZUUUMkqOjPXAlEk
          claim_id: c_nJOH_US3r_8RAvghJsFtCR
          source_id: s_6XS5Co8u91VCyFVu7gyaLx
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6XS5Co8u91VCyFVu7gyaLx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗（272143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272143&o=json
            external_identifier: CBDB:272143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:56.181Z
            metadata_json: null
      object_person:
        id: p_255t2nDMrWzFXS93NLqNE3
        status: active
        display_name: 王宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王爌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王爌（1472年—1554年），字存約，號南渠，浙江承宣布政使司台州府黃巖縣（今浙江省黃岩市）人，明朝政治人物。 | accepted |
| death.date | 1554年 | accepted |
| name.primary | 王爌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zc7mv2e4ZRM13rfjpkZkya | 王玼 | accepted |
| spouses | p_wx8pV5FXm9qYnA5ZT1tswN | 葛氏 | accepted |
| ancestors | p_N27zaVAVE31vavnkwj7Dft | 王伯永 | accepted |
| ancestors | p_255t2nDMrWzFXS93NLqNE3 | 王宗 | accepted |

## 外部来源

- [维基数据：葛氏（Q65880296）](https://www.wikidata.org/wiki/Q65880296)
- [维基数据：王玼（Q45436592）](https://www.wikidata.org/wiki/Q45436592)
- [维基数据：王爌（Q15926463）](https://www.wikidata.org/wiki/Q15926463)
- [中文维基百科：王爌](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%88%8C)
- [CBDB 中国历代人物传记资料库：王伯永（272142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272142&o=json)
- [CBDB 中国历代人物传记资料库：王爌（68280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json)
- [CBDB 中国历代人物传记资料库：王宗（272143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272143&o=json)
