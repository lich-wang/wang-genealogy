---
schema: wang-person/v1
id: p_QMTKbJsRVM8NaMMZSFq1jF
status: active
merged_into: null
display_name: 王稱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UfmR4xHKFrLpW3tnNBWAnk
        subject_person_id: p_QMTKbJsRVM8NaMMZSFq1jF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UPFG7xrjonAkmwgGUREdWZ
          claim_id: c_UfmR4xHKFrLpW3tnNBWAnk
          source_id: s_58R9yJGc1cB3Kg67Jj1WvX
          stance: supports
          locator: CBDB:10212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10212）
          source: &a1
            id: s_58R9yJGc1cB3Kg67Jj1WvX
            source_type: api_record
            title: 中国历代人物传记资料库：王稱（CBDB 10212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10212&o=json
            external_identifier: CBDB:10212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cSY3vug7QStsawGkSQmPJ8
        subject_person_id: p_QMTKbJsRVM8NaMMZSFq1jF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稱，宋人物。籍贯眉山，身份为史學家，入仕上書獻頌，曾任承議郎、直秘閣。（中国历代人物传记资料库 CBDB 10212）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RA4SmCaN6sP5g-pc7AvmDw
          claim_id: c_cSY3vug7QStsawGkSQmPJ8
          source_id: s_58R9yJGc1cB3Kg67Jj1WvX
          stance: supports
          locator: CBDB:10212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ho1Ff-LdFgM6qWE3t7ny7p
        subject_person_id: p_QsqU52N7W4Y4axXS3YwPEw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QMTKbJsRVM8NaMMZSFq1jF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ypb6ibKgSmPzGD3tjOkkyv
          claim_id: c_ho1Ff-LdFgM6qWE3t7ny7p
          source_id: s_eXfWwjhbAHy3yTCY4k4xQW
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1130：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eXfWwjhbAHy3yTCY4k4xQW
            source_type: api_record
            title: 中国历代人物传记资料库：王賞（CBDB 1863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1863&o=json
            external_identifier: CBDB:1863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QsqU52N7W4Y4axXS3YwPEw
        status: active
        display_name: 王賞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稱 | accepted |
| bio.summary | 王稱，宋人物。籍贯眉山，身份为史學家，入仕上書獻頌，曾任承議郎、直秘閣。（中国历代人物传记资料库 CBDB 10212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QsqU52N7W4Y4axXS3YwPEw | 王賞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稱（CBDB 10212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10212&o=json)
- [中国历代人物传记资料库：王賞（CBDB 1863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1863&o=json)
