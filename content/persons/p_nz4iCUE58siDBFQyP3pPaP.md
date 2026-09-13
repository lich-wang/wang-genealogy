---
schema: wang-person/v1
id: p_nz4iCUE58siDBFQyP3pPaP
status: active
merged_into: null
display_name: 王慶遜
cbdb_id: 22074
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zp2otyEAFamjJ6vcDxNKBf
        subject_person_id: p_nz4iCUE58siDBFQyP3pPaP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶遜，宋人物。籍贯麗水。（中国历代人物传记资料库 CBDB 22074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_de79I8ZEd_H7LENs6a_Qr2
          claim_id: c_zp2otyEAFamjJ6vcDxNKBf
          source_id: s_aH4BGXD5GrKfYd2GTfqtto
          stance: supports
          locator: CBDB:22074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aH4BGXD5GrKfYd2GTfqtto
            source_type: api_record
            title: 中国历代人物传记资料库：王慶遜（CBDB 22074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22074&o=json
            external_identifier: CBDB:22074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMQYvX45iQDRmA4ELEFa8E
        subject_person_id: p_nz4iCUE58siDBFQyP3pPaP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oujG9nemgtsfrj1R17fcBn
          claim_id: c_eMQYvX45iQDRmA4ELEFa8E
          source_id: s_aH4BGXD5GrKfYd2GTfqtto
          stance: supports
          locator: CBDB:22074
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tRHI-pUvgZN_bWQrglQC-5
        subject_person_id: p_CvSXV7mWQsMrHVkkTv9Y9f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nz4iCUE58siDBFQyP3pPaP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nq5DVIbjFCWqTa_s_XsBvw
          claim_id: c_tRHI-pUvgZN_bWQrglQC-5
          source_id: s_YotcJ8HDN3BLJ2m2pPiCQk
          stance: supports
          locator: CBDB 双向互证（子 王慶遜 ⇄ 父 王象賢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_YotcJ8HDN3BLJ2m2pPiCQk
            source_type: api_record
            title: 中国历代人物传记资料库：王象賢（CBDB 23855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23855&o=json
            external_identifier: CBDB:23855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CvSXV7mWQsMrHVkkTv9Y9f
        status: active
        display_name: 王象賢
        merged_into_person_id: null
  children:
    - claim:
        id: c_HeC_Dgts4kA2I2kHBIfSG_
        subject_person_id: p_nz4iCUE58siDBFQyP3pPaP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GJ9SRZsWG54UstgKZuLq2G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QxEVUiGBgc7xkAsx_Mwnmx
          claim_id: c_HeC_Dgts4kA2I2kHBIfSG_
          source_id: s_oKEjKvqvAhjDu9meNCUBTa
          stance: supports
          locator: CBDB 双向互证（父 王慶遜 ⇄ 子 王涇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oKEjKvqvAhjDu9meNCUBTa
            source_type: api_record
            title: 中国历代人物传记资料库：王涇（CBDB 23856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23856&o=json
            external_identifier: CBDB:23856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GJ9SRZsWG54UstgKZuLq2G
        status: active
        display_name: 王涇
        merged_into_person_id: null
    - claim:
        id: c_svlJTywVoWQsY4tCG61pGl
        subject_person_id: p_nz4iCUE58siDBFQyP3pPaP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_je6XLUqjL8A6Hb4DKdZMAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CreCqGfYLAt4euqr1If6MA
          claim_id: c_svlJTywVoWQsY4tCG61pGl
          source_id: s_rnG3iT2YiMLpKGPp8gzxqs
          stance: supports
          locator: CBDB 双向互证（父 王慶遜 ⇄ 子 王汴）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_rnG3iT2YiMLpKGPp8gzxqs
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 22075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22075&o=json
            external_identifier: CBDB:22075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_je6XLUqjL8A6Hb4DKdZMAg
        status: active
        display_name: 王汴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慶遜，宋人物。籍贯麗水。（中国历代人物传记资料库 CBDB 22074） | accepted |
| name.primary | 王慶遜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvSXV7mWQsMrHVkkTv9Y9f | 王象賢 | accepted |
| children | p_GJ9SRZsWG54UstgKZuLq2G | 王涇 | accepted |
| children | p_je6XLUqjL8A6Hb4DKdZMAg | 王汴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汴（CBDB 22075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22075&o=json)
- [中国历代人物传记资料库：王涇（CBDB 23856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23856&o=json)
- [中国历代人物传记资料库：王慶遜（CBDB 22074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22074&o=json)
- [中国历代人物传记资料库：王象賢（CBDB 23855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23855&o=json)
