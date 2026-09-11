---
schema: wang-person/v1
id: p_xJ2AEUyPMTTohuC4wiNdBg
status: active
merged_into: null
display_name: 王桐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WfxGjAjDrYr2G8rs412NvP
        subject_person_id: p_xJ2AEUyPMTTohuC4wiNdBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A5yQGDvALvDYZLyXfDZYQE
          claim_id: c_WfxGjAjDrYr2G8rs412NvP
          source_id: s_CBr6jGgRDVLyTMRQ3gQg1u
          stance: supports
          locator: CBDB:10707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10707）
          source: &a1
            id: s_CBr6jGgRDVLyTMRQ3gQg1u
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 10707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10707&o=json
            external_identifier: CBDB:10707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PxmjsLCfGdnTYKBiPxzwxM
        subject_person_id: p_xJ2AEUyPMTTohuC4wiNdBg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐，宋人物。籍贯金華，身份为士人。（中国历代人物传记资料库 CBDB 10707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mY9bk6L8ZKWXfoLG0iC9JW
          claim_id: c_PxmjsLCfGdnTYKBiPxzwxM
          source_id: s_CBr6jGgRDVLyTMRQ3gQg1u
          stance: supports
          locator: CBDB:10707
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

# 王桐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桐 | accepted |
| bio.summary | 王桐，宋人物。籍贯金華，身份为士人。（中国历代人物传记资料库 CBDB 10707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桐（CBDB 10707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10707&o=json)
