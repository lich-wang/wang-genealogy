---
schema: wang-person/v1
id: p_5FN37eWYpdAomEQ19a7ZWx
status: active
merged_into: null
display_name: 王承恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zsbBvHub6g1YA4NgfoN1Sc
        subject_person_id: p_5FN37eWYpdAomEQ19a7ZWx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VY6nwFV6zptMzKd2YQCA6s
          claim_id: c_zsbBvHub6g1YA4NgfoN1Sc
          source_id: s_pK5wPECpWD56rPKiaSC1rw
          stance: supports
          locator: CBDB:126568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126568）
          source: &a1
            id: s_pK5wPECpWD56rPKiaSC1rw
            source_type: api_record
            title: 中国历代人物传记资料库：王承恩（CBDB 126568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126568&o=json
            external_identifier: CBDB:126568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NT2kW9JSp9DE3b6Wg95ExE
        subject_person_id: p_5FN37eWYpdAomEQ19a7ZWx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承恩，明人物。身份为宦官。（中国历代人物传记资料库 CBDB 126568）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g3RedjDOPfXiKYnwVmMGh6
          claim_id: c_NT2kW9JSp9DE3b6Wg95ExE
          source_id: s_pK5wPECpWD56rPKiaSC1rw
          stance: supports
          locator: CBDB:126568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承恩 | accepted |
| bio.summary | 王承恩，明人物。身份为宦官。（中国历代人物传记资料库 CBDB 126568） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承恩（CBDB 126568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126568&o=json)
