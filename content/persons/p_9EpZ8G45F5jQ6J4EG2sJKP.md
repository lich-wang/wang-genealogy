---
schema: wang-person/v1
id: p_9EpZ8G45F5jQ6J4EG2sJKP
status: active
merged_into: null
display_name: 王宗義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ULN7FAGoPcdNtcxhXR99e
        subject_person_id: p_9EpZ8G45F5jQ6J4EG2sJKP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nAVM9gCa3HyA4NYj4ckrfv
          claim_id: c_7ULN7FAGoPcdNtcxhXR99e
          source_id: s_oNCGbkRG2vKFPvtDMTchk5
          stance: supports
          locator: CBDB:231785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231785）
          source: &a1
            id: s_oNCGbkRG2vKFPvtDMTchk5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗義（CBDB 231785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231785&o=json
            external_identifier: CBDB:231785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c2rxPaDGgqDo2VwuGc5DnU
        subject_person_id: p_9EpZ8G45F5jQ6J4EG2sJKP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義，史料所见人物。本项目依据《中国历代人物传记资料库：王宗義（CBDB 231785）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KBqtMIJUdfWfZIpx214Mm-
          claim_id: c_c2rxPaDGgqDo2VwuGc5DnU
          source_id: s_oNCGbkRG2vKFPvtDMTchk5
          stance: supports
          locator: CBDB:231785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_HYpEdrs1Fl40AGv_djy8Up
        subject_person_id: p_9EpZ8G45F5jQ6J4EG2sJKP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AE4b51U9z9cpW2aYdtPM5T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A5BjCm2crcf6mc7U_V8ft_
          claim_id: c_HYpEdrs1Fl40AGv_djy8Up
          source_id: s_oNCGbkRG2vKFPvtDMTchk5
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AE4b51U9z9cpW2aYdtPM5T
        status: active
        display_name: 王樂善
        merged_into_person_id: null
  other: []
---

# 王宗義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗義 | accepted |
| bio.summary | 王宗義，史料所见人物。本项目依据《中国历代人物传记资料库：王宗義（CBDB 231785）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AE4b51U9z9cpW2aYdtPM5T | 王樂善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗義（CBDB 231785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231785&o=json)
