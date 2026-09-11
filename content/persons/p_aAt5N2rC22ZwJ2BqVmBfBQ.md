---
schema: wang-person/v1
id: p_aAt5N2rC22ZwJ2BqVmBfBQ
status: active
merged_into: null
display_name: 王世瑢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Z43NNo1AM1f4thykxSshB
        subject_person_id: p_aAt5N2rC22ZwJ2BqVmBfBQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世瑢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z9VsL28KKL9i9YbBmAHE3x
          claim_id: c_7Z43NNo1AM1f4thykxSshB
          source_id: s_cazceQ9RevUHi3ZDvMKS27
          stance: supports
          locator: CBDB:635701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635701）
          source: &a1
            id: s_cazceQ9RevUHi3ZDvMKS27
            source_type: api_record
            title: 中国历代人物传记资料库：王世瑢（CBDB 635701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635701&o=json
            external_identifier: CBDB:635701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M3ghpNMHh41UcwMDKPif8i
        subject_person_id: p_aAt5N2rC22ZwJ2BqVmBfBQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世瑢，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 635701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LQnJEhKMQuHtw01UOcvCYb
          claim_id: c_M3ghpNMHh41UcwMDKPif8i
          source_id: s_cazceQ9RevUHi3ZDvMKS27
          stance: supports
          locator: CBDB:635701
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

# 王世瑢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世瑢 | accepted |
| bio.summary | 王世瑢，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 635701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世瑢（CBDB 635701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635701&o=json)
