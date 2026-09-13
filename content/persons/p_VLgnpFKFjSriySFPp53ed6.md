---
schema: wang-person/v1
id: p_VLgnpFKFjSriySFPp53ed6
status: active
merged_into: null
display_name: 王越石
cbdb_id: 22202
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P7w9odjPjz6paaF61KDGVC
        subject_person_id: p_VLgnpFKFjSriySFPp53ed6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王越石，宋人物。籍贯元城，入仕進士，曾任觀察推官、尚書省刑部都官司員外郎。（中国历代人物传记资料库 CBDB 22202）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_77suZGHcFTFnDb7c93n5LF
          claim_id: c_P7w9odjPjz6paaF61KDGVC
          source_id: s_9kdmBw713Ej4vj6n5HWU8e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9kdmBw713Ej4vj6n5HWU8e
            source_type: api_record
            title: 维基数据：王越石（Q45402030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402030
            external_identifier: Q45402030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_IpZWIVMa0r3nvMvuPfkypE
          claim_id: c_P7w9odjPjz6paaF61KDGVC
          source_id: s_NNPDxAQ9Xw8pZ2NYsmRXCk
          stance: supports
          locator: CBDB:22202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NNPDxAQ9Xw8pZ2NYsmRXCk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王越石（22202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22202&o=json
            external_identifier: CBDB:22202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.340Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R1Q9snNyp8B89HHH2kxLHY
        subject_person_id: p_VLgnpFKFjSriySFPp53ed6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王越石
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Snj2TPJJ8WGGCY5tTsxN3B
          claim_id: c_R1Q9snNyp8B89HHH2kxLHY
          source_id: s_NNPDxAQ9Xw8pZ2NYsmRXCk
          stance: supports
          locator: Q45402030
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gfYokKxyjvoxHpPs28rUBM
          claim_id: c_R1Q9snNyp8B89HHH2kxLHY
          source_id: s_9kdmBw713Ej4vj6n5HWU8e
          stance: supports
          locator: Q45402030
          quotation: null
          interpretation_note: null
          source:
            id: s_9kdmBw713Ej4vj6n5HWU8e
            source_type: api_record
            title: 维基数据：王越石（Q45402030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402030
            external_identifier: Q45402030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pjb2TX3dmkB7NFEw5VJ97n
        subject_person_id: p_K6bLFVt8Asek8FkfEuXRF2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VLgnpFKFjSriySFPp53ed6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XUQp4xRTzUjG14ThvmDdRu
          claim_id: c_Pjb2TX3dmkB7NFEw5VJ97n
          source_id: s_sG11N16iwwoL262dQodHHf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_sG11N16iwwoL262dQodHHf
            source_type: api_record
            title: 维基数据：王乙（Q45402026）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402026
            external_identifier: Q45402026
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.423Z
            metadata_json: null
        - id: cs_eUpqZE7HGWs4Z58kneR9X3
          claim_id: c_Pjb2TX3dmkB7NFEw5VJ97n
          source_id: s_dKEktPoXRHEtGtrCHnMBE7
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dKEktPoXRHEtGtrCHnMBE7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王乙（22199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22199&o=json
            external_identifier: CBDB:22199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.749Z
            metadata_json: null
        - id: cs_b5A5m14AhWaZdMfhWKcLrs
          claim_id: c_Pjb2TX3dmkB7NFEw5VJ97n
          source_id: s_9kdmBw713Ej4vj6n5HWU8e
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9kdmBw713Ej4vj6n5HWU8e
            source_type: api_record
            title: 维基数据：王越石（Q45402030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402030
            external_identifier: Q45402030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_FLAGaTLZf2HFQJeByuKyKo
          claim_id: c_Pjb2TX3dmkB7NFEw5VJ97n
          source_id: s_NNPDxAQ9Xw8pZ2NYsmRXCk
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_NNPDxAQ9Xw8pZ2NYsmRXCk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王越石（22202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22202&o=json
            external_identifier: CBDB:22202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.340Z
            metadata_json: null
      object_person:
        id: p_K6bLFVt8Asek8FkfEuXRF2
        status: active
        display_name: 王乙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王越石

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王越石，宋人物。籍贯元城，入仕進士，曾任觀察推官、尚書省刑部都官司員外郎。（中国历代人物传记资料库 CBDB 22202） | accepted |
| name.primary | 王越石 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K6bLFVt8Asek8FkfEuXRF2 | 王乙 | accepted |

## 外部来源

- [维基数据：王乙（Q45402026）](https://www.wikidata.org/wiki/Q45402026)
- [维基数据：王越石（Q45402030）](https://www.wikidata.org/wiki/Q45402030)
- [CBDB 中国历代人物传记资料库：王乙（22199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22199&o=json)
- [CBDB 中国历代人物传记资料库：王越石（22202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22202&o=json)
