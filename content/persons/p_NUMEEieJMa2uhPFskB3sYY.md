---
schema: wang-person/v1
id: p_NUMEEieJMa2uhPFskB3sYY
status: active
merged_into: null
display_name: 王良玉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFpUqMUUQHnEvgBsfUJEcj
        subject_person_id: p_NUMEEieJMa2uhPFskB3sYY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良玉（1290年—1364年），史料所见人物。本项目依据《王良玉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XLdKZ89S1u3Qt5LYegYCFB
          claim_id: c_UFpUqMUUQHnEvgBsfUJEcj
          source_id: s_5P6ynLyeizyxJDYY5q99kV
          stance: supports
          locator: Q45369207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UmXzxn45Q5rwVyyRBV8bLy
        subject_person_id: p_NUMEEieJMa2uhPFskB3sYY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1290年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1290-01-01
            latest: 1290-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JgJCvspcnBmivfLshMA7fM
          claim_id: c_UmXzxn45Q5rwVyyRBV8bLy
          source_id: s_5P6ynLyeizyxJDYY5q99kV
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SAzABuu94xh6nm3kEJ7gfq
        subject_person_id: p_NUMEEieJMa2uhPFskB3sYY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1364年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1364-01-01
            latest: 1364-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y7Z7wJfpFUqT1hXV6YC81N
          claim_id: c_SAzABuu94xh6nm3kEJ7gfq
          source_id: s_5P6ynLyeizyxJDYY5q99kV
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YyBK8cay5EGQhn7mf8tbPE
        subject_person_id: p_NUMEEieJMa2uhPFskB3sYY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良玉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MKnj7Av5bYexqYEmyVfJWj
          claim_id: c_YyBK8cay5EGQhn7mf8tbPE
          source_id: s_5P6ynLyeizyxJDYY5q99kV
          stance: supports
          locator: Q45369207
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_tn1b4sFK11HfyNj5sFGjLZ
        status: active
        display_name: 王炎泽
        merged_into_person_id: null
  children:
    - claim:
        id: c_1beP87PDVV1UfJHcj6yTZy
        subject_person_id: p_NUMEEieJMa2uhPFskB3sYY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_65BL4qqum2CB9PkTfcY2JS
          claim_id: c_1beP87PDVV1UfJHcj6yTZy
          source_id: s_4oTeuBceGTsno3LaaghZqj
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：元人傳記資料索引
          source:
            id: s_4oTeuBceGTsno3LaaghZqj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王良玉（10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:46.146Z
            metadata_json: null
        - id: cs_CWGzLwp1ED7QE2pbBh4j1V
          claim_id: c_1beP87PDVV1UfJHcj6yTZy
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
        - id: cs_D8MXZ4Sm8UKGKkHLE67QC3
          claim_id: c_1beP87PDVV1UfJHcj6yTZy
          source_id: s_5P6ynLyeizyxJDYY5q99kV
          stance: supports
          locator: P40（子女）
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
      object_person:
        id: p_DNgcd12SMQT8sYhCTYL1PG
        status: active
        display_name: 王祎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良玉（1290年—1364年），史料所见人物。本项目依据《王良玉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1290年 | accepted |
| death.date | 1364年 | accepted |
| name.primary | 王良玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tn1b4sFK11HfyNj5sFGjLZ | 王炎泽 | accepted |
| children | p_DNgcd12SMQT8sYhCTYL1PG | 王祎 | accepted |

## 外部来源

- [维基数据：王良玉（Q45369207）](https://www.wikidata.org/wiki/Q45369207)
- [维基数据：王炎泽（Q45369204）](https://www.wikidata.org/wiki/Q45369204)
- [维基数据：王祎（Q15934970）](https://www.wikidata.org/wiki/Q15934970)
- [CBDB 中国历代人物传记资料库：王良玉（10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
- [CBDB 中国历代人物传记资料库：王炎澤（10724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json)
