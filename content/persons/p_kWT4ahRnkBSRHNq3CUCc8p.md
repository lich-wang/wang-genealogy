---
schema: wang-person/v1
id: p_kWT4ahRnkBSRHNq3CUCc8p
status: active
merged_into: null
display_name: 王國白
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1AgMzpw8AZTLPNM2xWPMkE
        subject_person_id: p_kWT4ahRnkBSRHNq3CUCc8p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國白
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oMhToGF83eMnQjnYpmNYKG
          claim_id: c_1AgMzpw8AZTLPNM2xWPMkE
          source_id: s_PNoYUU77LwFhErzh3FpqS5
          stance: supports
          locator: CBDB:557672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557672）
          source: &a1
            id: s_PNoYUU77LwFhErzh3FpqS5
            source_type: api_record
            title: 中国历代人物传记资料库：王國白（CBDB 557672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557672&o=json
            external_identifier: CBDB:557672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MAjo9nHGZMwQ4LGL8CTyjX
        subject_person_id: p_kWT4ahRnkBSRHNq3CUCc8p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國白，清人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557672）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lzAwBIH1GDgRCLTiCgDW9o
          claim_id: c_MAjo9nHGZMwQ4LGL8CTyjX
          source_id: s_PNoYUU77LwFhErzh3FpqS5
          stance: supports
          locator: CBDB:557672
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
  spouses:
    - claim:
        id: c_0hJFPqLMwlR0rCndAukU83
        subject_person_id: p_kWT4ahRnkBSRHNq3CUCc8p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gnWtUJFNbS7rZiUrdzFxVM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-thNGhqUAufAB1FYcF3Atv
          claim_id: c_0hJFPqLMwlR0rCndAukU83
          source_id: s_VPyASDI9VsPJ0wuGAQCHFi
          stance: supports
          locator: 南陽府志，lgid=878789：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VPyASDI9VsPJ0wuGAQCHFi
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王國白妻)（CBDB 557673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557673&o=json
            external_identifier: CBDB:557673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gnWtUJFNbS7rZiUrdzFxVM
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王國白

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國白 | accepted |
| bio.summary | 王國白，清人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557672） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gnWtUJFNbS7rZiUrdzFxVM | 陳氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王國白妻)（CBDB 557673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557673&o=json)
- [中国历代人物传记资料库：王國白（CBDB 557672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557672&o=json)
