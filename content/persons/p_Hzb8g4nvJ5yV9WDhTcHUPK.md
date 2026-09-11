---
schema: wang-person/v1
id: p_Hzb8g4nvJ5yV9WDhTcHUPK
status: active
merged_into: null
display_name: 王堪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SbF4MgyTLdzyU6ZC11F957
        subject_person_id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4abbmtgzJ7EASzxJviistu
          claim_id: c_SbF4MgyTLdzyU6ZC11F957
          source_id: s_so7jBSnBgU8mhMw3Co7NXT
          stance: supports
          locator: CBDB:225733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225733）
          source: &a1
            id: s_so7jBSnBgU8mhMw3Co7NXT
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 225733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json
            external_identifier: CBDB:225733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RwGLDXvw9wZBPSPw2EDYua
        subject_person_id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堪，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225733）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mol61wTdhqSTEU4_MRWjLi
          claim_id: c_RwGLDXvw9wZBPSPw2EDYua
          source_id: s_so7jBSnBgU8mhMw3Co7NXT
          stance: supports
          locator: CBDB:225733
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

# 王堪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堪 | accepted |
| bio.summary | 王堪，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堪（CBDB 225733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json)
