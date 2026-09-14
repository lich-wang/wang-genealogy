---
schema: wang-person/v1
id: p_7pMsHaktzQtYSfbM8CxDyd
status: active
merged_into: null
display_name: 王陟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zHBRGSVaFYhg9FpoFidvXL
        subject_person_id: p_7pMsHaktzQtYSfbM8CxDyd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KicxokguP6fti1zFRXznxN
          claim_id: c_zHBRGSVaFYhg9FpoFidvXL
          source_id: s_usAdyY4JLnbufEF52ffGTy
          stance: supports
          locator: CBDB:2132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（2132）
          source: &a1
            id: s_usAdyY4JLnbufEF52ffGTy
            source_type: api_record
            title: 中国历代人物传记资料库：王陟（CBDB 2132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2132&o=json
            external_identifier: CBDB:2132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jgBgC23PDkogC92BdL6RFA
        subject_person_id: p_7pMsHaktzQtYSfbM8CxDyd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1003年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JEv2eisQJkrKTXrEuMes6a
          claim_id: c_jgBgC23PDkogC92BdL6RFA
          source_id: s_usAdyY4JLnbufEF52ffGTy
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
        id: c_YPzR52DES3mW7k57oEJEeE
        subject_person_id: p_7pMsHaktzQtYSfbM8CxDyd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟（卒于1003年），宋人物。籍贯上黨，入仕進士，曾任三司鹽鐵勾院。（中国历代人物传记资料库 CBDB 2132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YjkD14FHCI8qYxx3V7zJQj
          claim_id: c_YPzR52DES3mW7k57oEJEeE
          source_id: s_usAdyY4JLnbufEF52ffGTy
          stance: supports
          locator: CBDB:2132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4AKyZK9YsjRFnZlU0DXtR5
        subject_person_id: p_7pMsHaktzQtYSfbM8CxDyd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_68LHNKcuxf1uwMJ525gZiC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cwikSZCSG5Q6tpW6rLpRfJ
          claim_id: c_4AKyZK9YsjRFnZlU0DXtR5
          source_id: s_BM6bXujVvlSd7PmzYVjOyN
          stance: supports
          locator: CBDB 亲属：父（KinPerson 2132）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_BM6bXujVvlSd7PmzYVjOyN
            source_type: api_record
            title: 中国历代人物传记资料库：王若谷（CBDB 22185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22185&o=json
            external_identifier: CBDB:22185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_68LHNKcuxf1uwMJ525gZiC
        status: active
        display_name: 王若谷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陟 | accepted |
| death.date | 1003年 | accepted |
| bio.summary | 王陟（卒于1003年），宋人物。籍贯上黨，入仕進士，曾任三司鹽鐵勾院。（中国历代人物传记资料库 CBDB 2132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_68LHNKcuxf1uwMJ525gZiC | 王若谷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王若谷（CBDB 22185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22185&o=json)
- [中国历代人物传记资料库：王陟（CBDB 2132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2132&o=json)
