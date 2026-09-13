---
schema: wang-person/v1
id: p_cGRfNcadJhvW1K3GcfaQqB
status: active
merged_into: null
display_name: 鍾琰
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cOnX4nRwmBbSoxjtS-JZhJ
        subject_person_id: p_cGRfNcadJhvW1K3GcfaQqB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鍾琰，史料所见人物。本项目依据《鍾琰》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_fzE5bc1ZViC9QoYzcmaEf4
          claim_id: c_cOnX4nRwmBbSoxjtS-JZhJ
          source_id: s_aATSYDiMU2p3ZMg8qByj6f
          stance: supports
          locator: Q18668855
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_aATSYDiMU2p3ZMg8qByj6f
            source_type: api_record
            title: 维基数据：鍾琰（Q18668855）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18668855
            external_identifier: Q18668855
            license_code: CC0-1.0
            accessed_at: 2026-08-31T10:37:43.179Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DgnFsXCpXGNsjSuU9d4RhR
        subject_person_id: p_cGRfNcadJhvW1K3GcfaQqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鍾琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_R3PARGX9oRM6nA5yeDF88N
          claim_id: c_DgnFsXCpXGNsjSuU9d4RhR
          source_id: s_jRo6owqu14KKFsiDVeyL4j
          stance: supports
          locator: Q18668855
          quotation: null
          interpretation_note: null
          source:
            id: s_jRo6owqu14KKFsiDVeyL4j
            source_type: book
            title: 中文维基文库：世說新語/排調
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E4%B8%96%E8%AA%AA%E6%96%B0%E8%AA%9E/%E6%8E%92%E8%AA%BF
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:43.509Z
            metadata_json: null
        - id: cs_xV99eiRopiHdAyFv1crjPC
          claim_id: c_DgnFsXCpXGNsjSuU9d4RhR
          source_id: s_aATSYDiMU2p3ZMg8qByj6f
          stance: supports
          locator: Q18668855
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
        id: c_3HAMSBwPfcAuPChTc4PBvz
        subject_person_id: p_NceErMkCXYTF8u4M4CJQAD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cGRfNcadJhvW1K3GcfaQqB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ktm7v4TMaReo8bE4zAUTZy
          claim_id: c_3HAMSBwPfcAuPChTc4PBvz
          source_id: s_jRo6owqu14KKFsiDVeyL4j
          stance: supports
          locator: 排调第二十五·第八则
          quotation: 王渾與婦鍾氏共坐，見武子從庭過。
          interpretation_note: null
          source:
            id: s_jRo6owqu14KKFsiDVeyL4j
            source_type: book
            title: 中文维基文库：世說新語/排調
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E4%B8%96%E8%AA%AA%E6%96%B0%E8%AA%9E/%E6%8E%92%E8%AA%BF
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:43.509Z
            metadata_json: null
        - id: cs_fwG7wtg3hPpaFiFuCPrwHj
          claim_id: c_3HAMSBwPfcAuPChTc4PBvz
          source_id: s_Yj9263HYCWhNCR7Te64vGB
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Yj9263HYCWhNCR7Te64vGB
            source_type: api_record
            title: 维基数据：王渾（Q1306871）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1306871
            external_identifier: Q1306871
            license_code: CC0-1.0
            accessed_at: 2026-08-31T10:37:43.178Z
            metadata_json: null
        - id: cs_Zm8BPUij5G6HZ1AGxERyzk
          claim_id: c_3HAMSBwPfcAuPChTc4PBvz
          source_id: s_aATSYDiMU2p3ZMg8qByj6f
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_aATSYDiMU2p3ZMg8qByj6f
            source_type: api_record
            title: 维基数据：鍾琰（Q18668855）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18668855
            external_identifier: Q18668855
            license_code: CC0-1.0
            accessed_at: 2026-08-31T10:37:43.179Z
            metadata_json: null
        - id: cs_dM1JAJoe5Sfq2sDMhL7HN1
          claim_id: c_3HAMSBwPfcAuPChTc4PBvz
          source_id: s_3ALFSPeZaD7Fyg2ka22rjW
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_3ALFSPeZaD7Fyg2ka22rjW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渾（134966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134966&o=json
            external_identifier: CBDB:134966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:44:56.100Z
            metadata_json: null
      object_person:
        id: p_NceErMkCXYTF8u4M4CJQAD
        status: active
        display_name: 王渾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鍾琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鍾琰，史料所见人物。本项目依据《鍾琰》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 鍾琰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NceErMkCXYTF8u4M4CJQAD | 王渾 | accepted |

## 外部来源

- [维基数据：王渾（Q1306871）](https://www.wikidata.org/wiki/Q1306871)
- [维基数据：鍾琰（Q18668855）](https://www.wikidata.org/wiki/Q18668855)
- [中文维基文库：世說新語/排調](https://zh.wikisource.org/wiki/%E4%B8%96%E8%AA%AA%E6%96%B0%E8%AA%9E/%E6%8E%92%E8%AA%BF)
- [CBDB 中国历代人物传记资料库：王渾（134966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134966&o=json)
