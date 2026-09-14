---
schema: wang-person/v1
id: p_LEBbiyhaB1AiEoiXUd4yqs
status: active
merged_into: null
display_name: 王謀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66NQ5PRKRz4AWmMvEVTjrE
        subject_person_id: p_LEBbiyhaB1AiEoiXUd4yqs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oFvxHzaUtHsFtLeofZyFrg
          claim_id: c_66NQ5PRKRz4AWmMvEVTjrE
          source_id: s_WVhiqeX9DbvX7kCEdKEcij
          stance: supports
          locator: CBDB:332116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332116）
          source: &a1
            id: s_WVhiqeX9DbvX7kCEdKEcij
            source_type: api_record
            title: 中国历代人物传记资料库：王謀（CBDB 332116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json
            external_identifier: CBDB:332116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_23GMP5Ni1EqGAQ64CJbMYp
        subject_person_id: p_LEBbiyhaB1AiEoiXUd4yqs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謀，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332116）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IXTeldkMgd0dEd_HQsDKiZ
          claim_id: c_23GMP5Ni1EqGAQ64CJbMYp
          source_id: s_WVhiqeX9DbvX7kCEdKEcij
          stance: supports
          locator: CBDB:332116
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oCAPt8G0x4ek0I3GH09FBs
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LEBbiyhaB1AiEoiXUd4yqs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8hX22bCzocfrrZCEbfXYn
          claim_id: c_oCAPt8G0x4ek0I3GH09FBs
          source_id: s_6qNh8reZ3wJTZ54O0wZP5J
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王謀 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王謀 之父／母。
          source:
            id: s_6qNh8reZ3wJTZ54O0wZP5J
            source_type: api_record
            title: 中国历代人物传记资料库：王謀（CBDB 332116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json
            external_identifier: CBDB:332116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qqsY6t9Q8faV4F4CdLeZ5T
        status: active
        display_name: 王本堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ihnPlUZjCFGI9si1bcpEBi
        subject_person_id: p_LEBbiyhaB1AiEoiXUd4yqs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-I1nMRQ5RFJjh15yHRTIAA
          claim_id: c_ihnPlUZjCFGI9si1bcpEBi
          source_id: s_6qNh8reZ3wJTZ54O0wZP5J
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6qNh8reZ3wJTZ54O0wZP5J
            source_type: api_record
            title: 中国历代人物传记资料库：王謀（CBDB 332116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json
            external_identifier: CBDB:332116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UMUkjo8ahM3AKur1S9jMgA
        status: active
        display_name: 王謠
        merged_into_person_id: null
---

# 王謀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謀 | accepted |
| bio.summary | 王謀，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332116） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qqsY6t9Q8faV4F4CdLeZ5T | 王本堅 | accepted |
| other | p_UMUkjo8ahM3AKur1S9jMgA | 王謠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謀（CBDB 332116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json)
