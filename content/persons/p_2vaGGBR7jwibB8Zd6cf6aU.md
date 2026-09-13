---
schema: wang-person/v1
id: p_2vaGGBR7jwibB8Zd6cf6aU
status: active
merged_into: null
display_name: 王猛略
cbdb_id: 147772
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5jXo5pjBCLXeJaLLBN7QrB
        subject_person_id: p_2vaGGBR7jwibB8Zd6cf6aU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猛略，唐人物。籍贯芒山，曾任州司倉參軍。（中国历代人物传记资料库 CBDB 147772）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LeEcWXib8O5buNs7XGaSPb
          claim_id: c_5jXo5pjBCLXeJaLLBN7QrB
          source_id: s_ZfWupB8aweFitXY4cU91p5
          stance: supports
          locator: CBDB:147772
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZfWupB8aweFitXY4cU91p5
            source_type: api_record
            title: 中国历代人物传记资料库：王猛略（CBDB 147772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147772&o=json
            external_identifier: CBDB:147772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RFxwcX9Dh8bzp4V9xYrPHB
        subject_person_id: p_2vaGGBR7jwibB8Zd6cf6aU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猛略
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yPy6xD8Br3M7UJrNzot8nA
          claim_id: c_RFxwcX9Dh8bzp4V9xYrPHB
          source_id: s_ZfWupB8aweFitXY4cU91p5
          stance: supports
          locator: CBDB:147772
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_I-GuU5BcoK8lyaRn8EjT-T
        subject_person_id: p_2vaGGBR7jwibB8Zd6cf6aU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpiL8y2kkeQYQD6WASebN9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IZCneId4aqjwMAgLTj3pIW
          claim_id: c_I-GuU5BcoK8lyaRn8EjT-T
          source_id: s_PhGHS3pzAP8vADnJA54wAX
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 31：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PhGHS3pzAP8vADnJA54wAX
            source_type: api_record
            title: 中国历代人物传记资料库：王積善（CBDB 139268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139268&o=json
            external_identifier: CBDB:139268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hpiL8y2kkeQYQD6WASebN9
        status: active
        display_name: 王積善
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王猛略

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王猛略，唐人物。籍贯芒山，曾任州司倉參軍。（中国历代人物传记资料库 CBDB 147772） | accepted |
| name.primary | 王猛略 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hpiL8y2kkeQYQD6WASebN9 | 王積善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王積善（CBDB 139268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139268&o=json)
- [中国历代人物传记资料库：王猛略（CBDB 147772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147772&o=json)
