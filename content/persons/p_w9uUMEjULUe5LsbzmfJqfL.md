---
schema: wang-person/v1
id: p_w9uUMEjULUe5LsbzmfJqfL
status: active
merged_into: null
display_name: 王峻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mu51jMryi6HWLJa42DLdG9
        subject_person_id: p_w9uUMEjULUe5LsbzmfJqfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_apPQGu733vwhPnBT43Db8L
          claim_id: c_mu51jMryi6HWLJa42DLdG9
          source_id: s_RzPNxaWw8wdN9bKyQMi3S6
          stance: supports
          locator: CBDB:69294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69294）
          source: &a1
            id: s_RzPNxaWw8wdN9bKyQMi3S6
            source_type: api_record
            title: 中国历代人物传记资料库：王峻（CBDB 69294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69294&o=json
            external_identifier: CBDB:69294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4jJfadTUnGBDz3hCVmNm7W
        subject_person_id: p_w9uUMEjULUe5LsbzmfJqfL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3FnMYbTCyVXraBgWHHwme
          claim_id: c_4jJfadTUnGBDz3hCVmNm7W
          source_id: s_RzPNxaWw8wdN9bKyQMi3S6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_neg4Sm849UPyJuQiw79uq1
        subject_person_id: p_w9uUMEjULUe5LsbzmfJqfL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1751年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_194xFGwBdbXPA3qRGCbUrr
          claim_id: c_neg4Sm849UPyJuQiw79uq1
          source_id: s_RzPNxaWw8wdN9bKyQMi3S6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nczQQ8n28GMLM1X2qoafFv
        subject_person_id: p_w9uUMEjULUe5LsbzmfJqfL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻（1694年—1751年），清人物。明清進士進士，籍贯常熟，身份为地理學家，入仕進士。（中国历代人物传记资料库 CBDB 69294）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RcoVLAjYBf8dGSZ2Jl98WL
          claim_id: c_nczQQ8n28GMLM1X2qoafFv
          source_id: s_RzPNxaWw8wdN9bKyQMi3S6
          stance: supports
          locator: CBDB:69294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rJVxsmLMGG9U58hKkV6sIL
        subject_person_id: p_w9uUMEjULUe5LsbzmfJqfL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1BaSBK7gF5dcr6xcNbsgNv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCnm5a_RZfTcNmPY0kIqHC
          claim_id: c_rJVxsmLMGG9U58hKkV6sIL
          source_id: s_RzPNxaWw8wdN9bKyQMi3S6
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12997：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1BaSBK7gF5dcr6xcNbsgNv
        status: active
        display_name: 王本智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王峻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王峻 | accepted |
| birth.date | 1694年 | accepted |
| death.date | 1751年 | accepted |
| bio.summary | 王峻（1694年—1751年），清人物。明清進士進士，籍贯常熟，身份为地理學家，入仕進士。（中国历代人物传记资料库 CBDB 69294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1BaSBK7gF5dcr6xcNbsgNv | 王本智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峻（CBDB 69294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69294&o=json)
