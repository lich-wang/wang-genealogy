---
schema: wang-person/v1
id: p_uZ4EYk3nbtN3b8LJWgU9Ni
status: active
merged_into: null
display_name: 王令之
cbdb_id: 167724
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRe4sou7JTbuJWiDmsgdGJ
        subject_person_id: p_uZ4EYk3nbtN3b8LJWgU9Ni
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令之，史料所见人物。本项目依据《中国历代人物传记资料库：王令之（CBDB 167724）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_o3fCLwwvZ4s3ODXC6i-jwC
          claim_id: c_HRe4sou7JTbuJWiDmsgdGJ
          source_id: s_xmGdE63iwHCGp5XnyXQPc7
          stance: supports
          locator: CBDB:167724
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xmGdE63iwHCGp5XnyXQPc7
            source_type: api_record
            title: 中国历代人物传记资料库：王令之（CBDB 167724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167724&o=json
            external_identifier: CBDB:167724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MMcaEYK9gWSKuBsqVfwDy
        subject_person_id: p_uZ4EYk3nbtN3b8LJWgU9Ni
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GmpQriuMH5EqYdCyb69eQ5
          claim_id: c_2MMcaEYK9gWSKuBsqVfwDy
          source_id: s_xmGdE63iwHCGp5XnyXQPc7
          stance: supports
          locator: CBDB:167724
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0uWvt7bT4Q1mmK-tR1nViH
        subject_person_id: p_qDnNVa92BoXYz45t67oCmJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uZ4EYk3nbtN3b8LJWgU9Ni
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JLn5qJK80XuuU3yxfysM3D
          claim_id: c_0uWvt7bT4Q1mmK-tR1nViH
          source_id: s_2K97TkDNwj2oahHxgrHyK2
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2K97TkDNwj2oahHxgrHyK2
            source_type: api_record
            title: 中国历代人物传记资料库：王隥（CBDB 167723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167723&o=json
            external_identifier: CBDB:167723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qDnNVa92BoXYz45t67oCmJ
        status: active
        display_name: 王隥
        merged_into_person_id: null
  children:
    - claim:
        id: c_8WApAcMxtoGvW6FHPS_vCv
        subject_person_id: p_uZ4EYk3nbtN3b8LJWgU9Ni
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CD6hjvKdncuX_oQLd5AxcE
          claim_id: c_8WApAcMxtoGvW6FHPS_vCv
          source_id: s_joJfne8WrwXj7mxUQppnHm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_joJfne8WrwXj7mxUQppnHm
            source_type: api_record
            title: 中国历代人物传记资料库：王玉銳（CBDB 143519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json
            external_identifier: CBDB:143519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_H4SeMJgEG3cnaAjWBmtY62
        status: active
        display_name: 王玉銳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王令之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令之，史料所见人物。本项目依据《中国历代人物传记资料库：王令之（CBDB 167724）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王令之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qDnNVa92BoXYz45t67oCmJ | 王隥 | accepted |
| children | p_H4SeMJgEG3cnaAjWBmtY62 | 王玉銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隥（CBDB 167723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167723&o=json)
- [中国历代人物传记资料库：王令之（CBDB 167724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167724&o=json)
- [中国历代人物传记资料库：王玉銳（CBDB 143519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json)
