---
schema: wang-person/v1
id: p_6MnY3rni893GUaTgWTLLLP
status: active
merged_into: null
display_name: 王嚴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gxuuEk6mfjWGCUecw4qtA6
        subject_person_id: p_6MnY3rni893GUaTgWTLLLP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2DKwEWrmCtS1oSeVAxfJDW
          claim_id: c_gxuuEk6mfjWGCUecw4qtA6
          source_id: s_v7UGHLW38tALiWBjnoj88p
          stance: supports
          locator: CBDB:92005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92005）
          source: &a1
            id: s_v7UGHLW38tALiWBjnoj88p
            source_type: api_record
            title: 中国历代人物传记资料库：王嚴（CBDB 92005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92005&o=json
            external_identifier: CBDB:92005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nCbs5c6baJCoDUT2VR5fVf
        subject_person_id: p_6MnY3rni893GUaTgWTLLLP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚴，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 92005）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yKWA-jSRE8cy_PydTND2to
          claim_id: c_nCbs5c6baJCoDUT2VR5fVf
          source_id: s_v7UGHLW38tALiWBjnoj88p
          stance: supports
          locator: CBDB:92005
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

# 王嚴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嚴 | accepted |
| bio.summary | 王嚴，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 92005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嚴（CBDB 92005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92005&o=json)
