---
schema: wang-person/v1
id: p_mzAmbQTugu5pmmDD7y9jbw
status: active
merged_into: null
display_name: 王汝礦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uVGL37qjCLuKzjNEdXeXKX
        subject_person_id: p_mzAmbQTugu5pmmDD7y9jbw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝礦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LmpDzswuBCj6xWpAA6bV7n
          claim_id: c_uVGL37qjCLuKzjNEdXeXKX
          source_id: s_beNWDR26Ji5qZxqgGDZ2V4
          stance: supports
          locator: CBDB:639026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639026）
          source: &a1
            id: s_beNWDR26Ji5qZxqgGDZ2V4
            source_type: api_record
            title: 中国历代人物传记资料库：王汝礦（CBDB 639026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639026&o=json
            external_identifier: CBDB:639026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UGwkdRQA27Ky2EQd71ThwN
        subject_person_id: p_mzAmbQTugu5pmmDD7y9jbw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝礦，清人物。籍贯雲南，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 639026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6_BTHDdt88MqKV4ug5sVBD
          claim_id: c_UGwkdRQA27Ky2EQd71ThwN
          source_id: s_beNWDR26Ji5qZxqgGDZ2V4
          stance: supports
          locator: CBDB:639026
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

# 王汝礦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝礦 | accepted |
| bio.summary | 王汝礦，清人物。籍贯雲南，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 639026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝礦（CBDB 639026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639026&o=json)
