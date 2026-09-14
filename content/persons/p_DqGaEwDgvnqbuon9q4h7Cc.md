---
schema: wang-person/v1
id: p_DqGaEwDgvnqbuon9q4h7Cc
status: active
merged_into: null
display_name: 王儼
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QzueR2kKRF693cE2xcKn41
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xGoUEQJHf9eQLuqJZWBrSk
          claim_id: c_QzueR2kKRF693cE2xcKn41
          source_id: s_bMYH97KxZVpwFKb5EXvGnz
          stance: supports
          locator: CBDB:201519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201519）
          source: &a1
            id: s_bMYH97KxZVpwFKb5EXvGnz
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 201519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201519&o=json
            external_identifier: CBDB:201519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V1JemfHY7RjXyh53dtbCHY
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KbedYAkMYze5MG8dikpqnn
          claim_id: c_V1JemfHY7RjXyh53dtbCHY
          source_id: s_bMYH97KxZVpwFKb5EXvGnz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qqYfHSz692ib7fMWrgFH13
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼（生于1467年），明人物。明清進士進士，籍贯江都，入仕進士。（中国历代人物传记资料库 CBDB 201519）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zhbjXEGRNVMdu4ffXD9ele
          claim_id: c_qqYfHSz692ib7fMWrgFH13
          source_id: s_bMYH97KxZVpwFKb5EXvGnz
          stance: supports
          locator: CBDB:201519
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BpwzEkJPrPsBAf2gFkd-Qu
        subject_person_id: p_8abpLSQKLVJUBSTYHH9VUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GoKhl-L-_ixMehjH7QtTWl
          claim_id: c_BpwzEkJPrPsBAf2gFkd-Qu
          source_id: s_1b3ifn62TbyUquTMTEK1Ww
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1b3ifn62TbyUquTMTEK1Ww
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 273730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273730&o=json
            external_identifier: CBDB:273730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8abpLSQKLVJUBSTYHH9VUf
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TRQyYVeNGjuAQcuc1J2MTi
        subject_person_id: p_wzA4zPM3ZWj9bkTiPdre5c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0SbNwPBJEOXrnSZD9veZ6v
          claim_id: c_TRQyYVeNGjuAQcuc1J2MTi
          source_id: s_H5jMymBzMCLXj47T9PjpGA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H5jMymBzMCLXj47T9PjpGA
            source_type: api_record
            title: 中国历代人物传记资料库：王福興（CBDB 273727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273727&o=json
            external_identifier: CBDB:273727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wzA4zPM3ZWj9bkTiPdre5c
        status: active
        display_name: 王福興
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_hajLxIMV9xdibmd-4CCJgQ
        subject_person_id: p_4H8Fe3cJ2A5cBhxKmm5BM7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vy9VoZdbf-dcNP6QH6wSwi
          claim_id: c_hajLxIMV9xdibmd-4CCJgQ
          source_id: s_yv1tGn3W_E2Eu-gRu4_Jez
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201519 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yv1tGn3W_E2Eu-gRu4_Jez
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 273734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273734&o=json
            external_identifier: CBDB:273734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4H8Fe3cJ2A5cBhxKmm5BM7
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c__q8wwj4KES3Aqzwh6Cinfh
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dfCM4kwSyorNXc48WPB2qZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OJj-p9N0Ef0M6z4p8RO2ps
          claim_id: c__q8wwj4KES3Aqzwh6Cinfh
          source_id: s_Rn4hmLIJqKlA3nqdxUD09K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201519 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Rn4hmLIJqKlA3nqdxUD09K
            source_type: api_record
            title: 中国历代人物传记资料库：王促（CBDB 273736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273736&o=json
            external_identifier: CBDB:273736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dfCM4kwSyorNXc48WPB2qZ
        status: active
        display_name: 王促
        merged_into_person_id: null
    - claim:
        id: c_qSQBZBcPobv4AfXENYIdqx
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rwp2N5N6JTsZgrDhxe13MQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dLCVqty4W9KIGybSej3GX3
          claim_id: c_qSQBZBcPobv4AfXENYIdqx
          source_id: s_yg96s9wt0uc4Ui8isEvDTV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201519 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yg96s9wt0uc4Ui8isEvDTV
            source_type: api_record
            title: 中国历代人物传记资料库：王傽（CBDB 273735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273735&o=json
            external_identifier: CBDB:273735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rwp2N5N6JTsZgrDhxe13MQ
        status: active
        display_name: 王傽
        merged_into_person_id: null
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| birth.date | 1467年 | accepted |
| bio.summary | 王儼（生于1467年），明人物。明清進士進士，籍贯江都，入仕進士。（中国历代人物传记资料库 CBDB 201519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8abpLSQKLVJUBSTYHH9VUf | 王成 | accepted |
| ancestors | p_wzA4zPM3ZWj9bkTiPdre5c | 王福興 | accepted |
| other | p_4H8Fe3cJ2A5cBhxKmm5BM7 | 王儒 | accepted |
| other | p_dfCM4kwSyorNXc48WPB2qZ | 王促 | accepted |
| other | p_rwp2N5N6JTsZgrDhxe13MQ | 王傽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 273730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273730&o=json)
- [中国历代人物传记资料库：王促（CBDB 273736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273736&o=json)
- [中国历代人物传记资料库：王福興（CBDB 273727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273727&o=json)
- [中国历代人物传记资料库：王儒（CBDB 273734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273734&o=json)
- [中国历代人物传记资料库：王儼（CBDB 201519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201519&o=json)
- [中国历代人物传记资料库：王傽（CBDB 273735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273735&o=json)
