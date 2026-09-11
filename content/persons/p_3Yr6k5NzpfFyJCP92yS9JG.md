---
schema: wang-person/v1
id: p_3Yr6k5NzpfFyJCP92yS9JG
status: active
merged_into: null
display_name: 王秩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Myc1PE3KiJYukm4uoaPYZ
        subject_person_id: p_3Yr6k5NzpfFyJCP92yS9JG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yDfjtsYdifBcKZTF68HFnb
          claim_id: c_3Myc1PE3KiJYukm4uoaPYZ
          source_id: s_TrAtpm6FbMMuu2d8Sv8FQw
          stance: supports
          locator: CBDB:330519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330519）
          source: &a1
            id: s_TrAtpm6FbMMuu2d8Sv8FQw
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 330519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330519&o=json
            external_identifier: CBDB:330519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nr1wjQ5b9TgRo72oTpHr8n
        subject_person_id: p_3Yr6k5NzpfFyJCP92yS9JG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩，明人物。嘉靖四十四年進士，曾任布政使司布政使。（中国历代人物传记资料库 CBDB 330519）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hUGynXSI-jHcr9NIWY1dIQ
          claim_id: c_nr1wjQ5b9TgRo72oTpHr8n
          source_id: s_TrAtpm6FbMMuu2d8Sv8FQw
          stance: supports
          locator: CBDB:330519
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
  descendants:
    - claim:
        id: c_YS1i_NgSEq-jw3V2DWPkvB
        subject_person_id: p_3Yr6k5NzpfFyJCP92yS9JG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-4Ho4a5fFd31UAldmLPMy1
          claim_id: c_YS1i_NgSEq-jw3V2DWPkvB
          source_id: s_TrAtpm6FbMMuu2d8Sv8FQw
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hwqZhRmhj6vWvdBxFiX9dy
        status: active
        display_name: 王執禮
        merged_into_person_id: null
  other: []
---

# 王秩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秩 | accepted |
| bio.summary | 王秩，明人物。嘉靖四十四年進士，曾任布政使司布政使。（中国历代人物传记资料库 CBDB 330519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hwqZhRmhj6vWvdBxFiX9dy | 王執禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秩（CBDB 330519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330519&o=json)
