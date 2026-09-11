---
schema: wang-person/v1
id: p_J2YJG4dKdMaVwpUoTA4Qfa
status: active
merged_into: null
display_name: 王讜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GWB3c2FJD2MN5qjtcJx1VY
        subject_person_id: p_J2YJG4dKdMaVwpUoTA4Qfa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_275fuWWVwFAAbR3tETU7X6
          claim_id: c_GWB3c2FJD2MN5qjtcJx1VY
          source_id: s_VsmL2iTSdi9CRY6gzd8GoJ
          stance: supports
          locator: CBDB:233807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233807）
          source: &a1
            id: s_VsmL2iTSdi9CRY6gzd8GoJ
            source_type: api_record
            title: 中国历代人物传记资料库：王讜（CBDB 233807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233807&o=json
            external_identifier: CBDB:233807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_auWGspm7oiaSHhZmVXeqw2
        subject_person_id: p_J2YJG4dKdMaVwpUoTA4Qfa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讜，明人物。籍贯南充，入仕廩生。（中国历代人物传记资料库 CBDB 233807）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qQsnIBMxbQCimiBFEnOUmW
          claim_id: c_auWGspm7oiaSHhZmVXeqw2
          source_id: s_VsmL2iTSdi9CRY6gzd8GoJ
          stance: supports
          locator: CBDB:233807
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eQEOfAehIVtOEKhWYWSaG-
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J2YJG4dKdMaVwpUoTA4Qfa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIZU2M6a7YDCqdcW1NBauC
          claim_id: c_eQEOfAehIVtOEKhWYWSaG-
          source_id: s_VsmL2iTSdi9CRY6gzd8GoJ
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王讜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讜 | accepted |
| bio.summary | 王讜，明人物。籍贯南充，入仕廩生。（中国历代人物传记资料库 CBDB 233807） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讜（CBDB 233807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233807&o=json)
