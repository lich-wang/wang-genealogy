---
schema: wang-person/v1
id: p_4goTpo5iS7ZGxNr8h4JZfQ
status: active
merged_into: null
display_name: 王誠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gs7bwt7d3xkRsDP1u8Qnd6
        subject_person_id: p_4goTpo5iS7ZGxNr8h4JZfQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5otPMww3DrQKJzK6ZfAhoX
          claim_id: c_gs7bwt7d3xkRsDP1u8Qnd6
          source_id: s_e5TBiCM6Uy1a2ZpsoSAEgP
          stance: supports
          locator: CBDB:332114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332114）
          source: &a1
            id: s_e5TBiCM6Uy1a2ZpsoSAEgP
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 332114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json
            external_identifier: CBDB:332114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zzkPYVcyNi7RPFLomX5JPn
        subject_person_id: p_4goTpo5iS7ZGxNr8h4JZfQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G_fw5gqGdTN_5aV4Yrcy0Y
          claim_id: c_zzkPYVcyNi7RPFLomX5JPn
          source_id: s_e5TBiCM6Uy1a2ZpsoSAEgP
          stance: supports
          locator: CBDB:332114
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2e8Vo3oi3Nlv9mHpmEXnLz
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4goTpo5iS7ZGxNr8h4JZfQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kyq7JaBkt746AAhtbT6uNZ
          claim_id: c_2e8Vo3oi3Nlv9mHpmEXnLz
          source_id: s_X3fBMkWtPnbBKOjcmxZYHu
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王誠 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王誠 之父／母。
          source:
            id: s_X3fBMkWtPnbBKOjcmxZYHu
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 332114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json
            external_identifier: CBDB:332114
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
        id: c_QWqe8cmaK9KlWIILfioH4V
        subject_person_id: p_4goTpo5iS7ZGxNr8h4JZfQ
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
        - id: cs_kUrcz1Hr7GU26xKf2KSNXy
          claim_id: c_QWqe8cmaK9KlWIILfioH4V
          source_id: s_X3fBMkWtPnbBKOjcmxZYHu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X3fBMkWtPnbBKOjcmxZYHu
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 332114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json
            external_identifier: CBDB:332114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UMUkjo8ahM3AKur1S9jMgA
        status: active
        display_name: 王謠
        merged_into_person_id: null
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | 王誠，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332114） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qqsY6t9Q8faV4F4CdLeZ5T | 王本堅 | accepted |
| other | p_UMUkjo8ahM3AKur1S9jMgA | 王謠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 332114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json)
