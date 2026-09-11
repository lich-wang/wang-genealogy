---
schema: wang-person/v1
id: p_tTebWhX7pJS4f79mmJ94Dn
status: active
merged_into: null
display_name: 王敦倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E6D2dyiYUaBQrgPqBLGbSs
        subject_person_id: p_tTebWhX7pJS4f79mmJ94Dn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WMY8ptqU1roCU3J39fT2M8
          claim_id: c_E6D2dyiYUaBQrgPqBLGbSs
          source_id: s_ad7MRi57icZhMDfSeZv5pZ
          stance: supports
          locator: CBDB:638177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638177）
          source: &a1
            id: s_ad7MRi57icZhMDfSeZv5pZ
            source_type: api_record
            title: 中国历代人物传记资料库：王敦倫（CBDB 638177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638177&o=json
            external_identifier: CBDB:638177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G69w4tNZvkFuUcJHeMNrLX
        subject_person_id: p_tTebWhX7pJS4f79mmJ94Dn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王敦倫，清人物。籍贯山西省，入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 638177）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_52Jqc7HAsfIsSyKdD2W1xm
          claim_id: c_G69w4tNZvkFuUcJHeMNrLX
          source_id: s_ad7MRi57icZhMDfSeZv5pZ
          stance: supports
          locator: CBDB:638177
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

# 王敦倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦倫 | accepted |
| bio.summary | 王敦倫，清人物。籍贯山西省，入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 638177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敦倫（CBDB 638177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638177&o=json)
