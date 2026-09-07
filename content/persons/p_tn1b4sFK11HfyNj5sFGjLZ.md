---
schema: wang-person/v1
id: p_tn1b4sFK11HfyNj5sFGjLZ
status: active
merged_into: null
display_name: 王炎泽
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RAHwa1i5w7LfNByYUgAU-T
        subject_person_id: p_tn1b4sFK11HfyNj5sFGjLZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎泽（1253年—1332年），史料所见人物。本项目依据《王炎泽》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d7JpDLZ02iau_WWNTddtWP
          claim_id: c_RAHwa1i5w7LfNByYUgAU-T
          source_id: s_zSP5nbDQtXAAFX6T5t7ZBA
          stance: supports
          locator: Q45369204
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zSP5nbDQtXAAFX6T5t7ZBA
            source_type: api_record
            title: 维基数据：王炎泽（Q45369204）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369204
            external_identifier: Q45369204
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.819Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WEQF6XuEaT64PFSCif5E4V
        subject_person_id: p_tn1b4sFK11HfyNj5sFGjLZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1253年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1253-01-01
            latest: 1253-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9dBdg4d5yKGfP6iYeojQs3
          claim_id: c_WEQF6XuEaT64PFSCif5E4V
          source_id: s_zSP5nbDQtXAAFX6T5t7ZBA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zSP5nbDQtXAAFX6T5t7ZBA
            source_type: api_record
            title: 维基数据：王炎泽（Q45369204）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369204
            external_identifier: Q45369204
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.819Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VgRCc2V7KMTk8XeHjDgQXE
        subject_person_id: p_tn1b4sFK11HfyNj5sFGjLZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1332年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1332-01-01
            latest: 1332-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GmNFL76rv8K1t4sKMArFXQ
          claim_id: c_VgRCc2V7KMTk8XeHjDgQXE
          source_id: s_zSP5nbDQtXAAFX6T5t7ZBA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zSP5nbDQtXAAFX6T5t7ZBA
            source_type: api_record
            title: 维基数据：王炎泽（Q45369204）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369204
            external_identifier: Q45369204
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.819Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_soMQvFbX1AGnaYbsBvYkEA
        subject_person_id: p_tn1b4sFK11HfyNj5sFGjLZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎泽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2XoLwkSjTg46qNNDuMKGNV
          claim_id: c_soMQvFbX1AGnaYbsBvYkEA
          source_id: s_zSP5nbDQtXAAFX6T5t7ZBA
          stance: supports
          locator: Q45369204
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5K32NdQRcLC45pc6DatQyf
        subject_person_id: p_tn1b4sFK11HfyNj5sFGjLZ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NUMEEieJMa2uhPFskB3sYY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GCtF1KRtH1VQpeWniz73qd
          claim_id: c_5K32NdQRcLC45pc6DatQyf
          source_id: s_GLSPCze4bY1dXYmpHGndhU
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_GLSPCze4bY1dXYmpHGndhU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王炎澤（10724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json
            external_identifier: CBDB:10724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:22.725Z
            metadata_json: null
        - id: cs_mQUVi2Fy43C2768WgNcMhe
          claim_id: c_5K32NdQRcLC45pc6DatQyf
          source_id: s_5P6ynLyeizyxJDYY5q99kV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5P6ynLyeizyxJDYY5q99kV
            source_type: api_record
            title: 维基数据：王良玉（Q45369207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369207
            external_identifier: Q45369207
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.820Z
            metadata_json: null
        - id: cs_xtG5ERNiu22Rto4hRE2tek
          claim_id: c_5K32NdQRcLC45pc6DatQyf
          source_id: s_zSP5nbDQtXAAFX6T5t7ZBA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zSP5nbDQtXAAFX6T5t7ZBA
            source_type: api_record
            title: 维基数据：王炎泽（Q45369204）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369204
            external_identifier: Q45369204
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.819Z
            metadata_json: null
      object_person:
        id: p_NUMEEieJMa2uhPFskB3sYY
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炎泽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炎泽（1253年—1332年），史料所见人物。本项目依据《王炎泽》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1253年 | accepted |
| death.date | 1332年 | accepted |
| name.primary | 王炎泽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NUMEEieJMa2uhPFskB3sYY | 王良玉 | accepted |

## 外部来源

- [维基数据：王良玉（Q45369207）](https://www.wikidata.org/wiki/Q45369207)
- [维基数据：王炎泽（Q45369204）](https://www.wikidata.org/wiki/Q45369204)
- [CBDB 中国历代人物传记资料库：王炎澤（10724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json)
