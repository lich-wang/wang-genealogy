---
schema: wang-person/v1
id: p_r5ixJSx2Nt48B3ZRUPdtvP
status: active
merged_into: null
display_name: 王開基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nMJR9b6eEotSSswgATd9pv
        subject_person_id: p_r5ixJSx2Nt48B3ZRUPdtvP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G95E4LZ2w3gmUUgWM9Gfio
          claim_id: c_nMJR9b6eEotSSswgATd9pv
          source_id: s_yfWSaSvAM3c4vqMoWcm1YN
          stance: supports
          locator: CBDB:470812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470812）
          source: &a1
            id: s_yfWSaSvAM3c4vqMoWcm1YN
            source_type: api_record
            title: 中国历代人物传记资料库：王開基（CBDB 470812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470812&o=json
            external_identifier: CBDB:470812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ouLUZEyx88inGEKsy9sxhV
        subject_person_id: p_r5ixJSx2Nt48B3ZRUPdtvP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開基，清人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 470812）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_adrsGqFMHzoZ4GlyoLD8UD
          claim_id: c_ouLUZEyx88inGEKsy9sxhV
          source_id: s_yfWSaSvAM3c4vqMoWcm1YN
          stance: supports
          locator: CBDB:470812
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

# 王開基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開基 | accepted |
| bio.summary | 王開基，清人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 470812） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開基（CBDB 470812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470812&o=json)
