---
schema: wang-person/v1
id: p_UN3W8erPZ4ARfA1xMTG1Lx
status: active
merged_into: null
display_name: 王甫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tampFp399zj281xNRqm4CH
        subject_person_id: p_UN3W8erPZ4ARfA1xMTG1Lx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZFNr8DHZZKHt9M9fRVo5H8
          claim_id: c_tampFp399zj281xNRqm4CH
          source_id: s_gb2NvKj68y4cnXWGVENDu8
          stance: supports
          locator: CBDB:236516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236516）
          source: &a1
            id: s_gb2NvKj68y4cnXWGVENDu8
            source_type: api_record
            title: 中国历代人物传记资料库：王甫（CBDB 236516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236516&o=json
            external_identifier: CBDB:236516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83py6zXRgfaqWxW2YpVeLn
        subject_person_id: p_UN3W8erPZ4ARfA1xMTG1Lx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫，史料所见人物。本项目依据《中国历代人物传记资料库：王甫（CBDB 236516）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eGNG87VT0nLmSX79uHrJLm
          claim_id: c_83py6zXRgfaqWxW2YpVeLn
          source_id: s_gb2NvKj68y4cnXWGVENDu8
          stance: supports
          locator: CBDB:236516
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
        id: c_JmOh12A619DXHdUzJ1oVY9
        subject_person_id: p_UN3W8erPZ4ARfA1xMTG1Lx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_746ZJghL40lIW5nafoo0Py
          claim_id: c_JmOh12A619DXHdUzJ1oVY9
          source_id: s_gb2NvKj68y4cnXWGVENDu8
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fNnEAvuY1BBmarjaAEXknF
        status: active
        display_name: 王時和
        merged_into_person_id: null
  other: []
---

# 王甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甫 | accepted |
| bio.summary | 王甫，史料所见人物。本项目依据《中国历代人物传记资料库：王甫（CBDB 236516）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fNnEAvuY1BBmarjaAEXknF | 王時和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甫（CBDB 236516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236516&o=json)
